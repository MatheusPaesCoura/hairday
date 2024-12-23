import { scheduleDay } from "../schedules/load.js"
//Seleciona o input de data
const selectedDate = document.getElementById("date")

//recarrega a lista de horarios quando o inpuit de data mudar
selectedDate.onchange = () => scheduleDay()

