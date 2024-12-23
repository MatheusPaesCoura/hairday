import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new"
import {scheduleDay} from "../schedules/load"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

//data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//define a data minima
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    
    event.preventDefault()
    
    try {
        //Recuperando o nome do cliente
        const name = clientName.value.trim()
        if(!name){
            return alert("Informe o nome do cliente!")
        }

        //recupera o horario
        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected){
            return alert("Informe o horário desejado!")
        }

        //Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")
        
        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        //Gera ID
        const id = new Date().getTime()

        //Faz o agendamento
        await scheduleNew({
            id,
            name,
            when
        });
        
        //Reccarega os agendamentos.
        await scheduleDay()

        //Limpa o campo de nome
        clientName.value = ""
        
    } catch (error) {
        alert("Não foi possível")
        console.log(error);
        
    }
}