import dayjs from "dayjs"

//Seleciona as sessões manhã, tarde e noite
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({dailySchedules}){
    try {
        //limpa as listas
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //Renderiza os agendamentos por períodos
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            item.setAttribute("data-id", schedule.id)
            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            //Adiciona o tempo, nome e icone no item
            item.append(time, name, cancelIcon)

            //obtém a hora do agendamento
            const hour = dayjs(schedule.when).hour()

            if(hour <= 12){
                periodMorning.appendChild(item)
            }else if(hour >= 12 && hour <= 18){
                periodAfternoon.appendChild(item)
            }else{
                periodNight.appendChild(item)
            }
        })
        
    } catch (error) {
        alert("Não foi possível mostrar os agendamentos")
        console.log(error);
        
    }

}