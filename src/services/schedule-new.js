import { apiConfig } from "./api-config.js"

export async function scheduleNew({id, name, when}){
    try {
        //faz a requisição para enviar os dados do agendamento
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id, name, when}),

        })
        alert("Agendamento realizado com sucesso!")
        
    } catch (error) {
        console.log(error)
        alert("não foi possível agendar, tente novamente!")
    }
}