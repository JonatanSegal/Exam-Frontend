import{makeOptions} from "../../fetchUtils.js"
const URL = "http://localhost:8080/api/tour"

export async function makeOptionForTeam(){
    await fetch(URL+"/teams")
        .then(res => res.json())
        .then(fetchedTeams =>{
            const options = document.getElementById("RiderTeam")
            fetchedTeams.forEach(team =>{
                options.innerHTML +='<option value="'+team.id+'">'+team.name+'</option>'
            })
        })
}


export function setUpAddButtonHandler(){
    document.getElementById("btn-add-rider").onclick = addRider;
}

function addRider() {
    const rider = {}
    rider.name = document.getElementById("RiderName").value
    rider.age = document.getElementById("RiderAge").value
    rider.country = document.getElementById("RiderCountry").value
    rider.team = document.getElementById("RiderTeam").valueOf().selectedIndex
    fetch(URL,makeOptions("POST",rider))
        .then(res =>{
            if(!res.ok){
                return Promise.reject("Error: " + res.status)
            }
            return res.json()
        })
        .catch(e => console.error(e))
}