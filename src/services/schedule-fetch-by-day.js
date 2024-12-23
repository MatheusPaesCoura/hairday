import { apiConfig } from "../services/api-config"
import dayjs from "dayjs"

export async function scheduleFetchByDay({date}){
    try {
        //fazendo a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //converte para json
        const data = await response.json()

        //filtra os agendamentos pelo dia
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules


        
    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos do dia")
    }
}