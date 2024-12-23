import {hoursLoad} from "../form/hours-load.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import{schedulesShow} from "../schedules/show.js"

//seleciona o input de data
const selectedDate = document.getElementById("date")

export async function scheduleDay(){
    //obtem a data do input
    const date = selectedDate.value

    //Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})
    
    schedulesShow({dailySchedules})


    //renderizando as horas disponiveis
    hoursLoad({date, dailySchedules})
}