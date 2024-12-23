const periods = document.querySelectorAll(".period")
import { scheduleCancel } from "../../services/schedule-cancel.js"
import { scheduleDay } from "./load.js"

periods.forEach((period) => {
    period.addEventListener ("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            const item = event.target.closest("li")
            const  { id } = item.dataset
            console.log({id});
            
            
            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar?")
                if(isConfirm){
                    
                    await scheduleCancel({ id })
                    
                    
                    scheduleDay()
                }
            }
        }
    })
})