import { apiConfig } from "./api-config.js"

export async function scheduleCancel({id}){
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        })
        alert("AGENDAMENTO CANCELADO COM SUCESSO!")
        
    } catch (error) {
        alert("Não foi possível cancelar")
        console.log(error);
        
    }
}