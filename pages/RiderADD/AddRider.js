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
    var num = document.getElementById("RiderTeam")
    var teamID = num.value
    const rider = {}
    rider.name = document.getElementById("RiderName").value
    rider.age = document.getElementById("RiderAge").value
    rider.country = document.getElementById("RiderCountry").value
    rider.team = teamID
    fetch(URL,makeOptions("POST",rider))
        .then(res =>{
            if(!res.ok){
                return Promise.reject("Error: " + res.status)
            }
            return res.json()
        }).then(newRider =>{
        document.getElementById("Added-rider").innerText = "New Rider added"
        document.getElementById("Added-rider").style.display="block"
        clearFields()
    })
        .catch(e => console.error(e))
}

function clearFields(){
    document.getElementById("RiderName").value = ""
    document.getElementById("RiderAge").value =""
    document.getElementById("RiderCountry").value = ""
}