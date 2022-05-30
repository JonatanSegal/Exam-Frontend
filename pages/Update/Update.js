import{makeOptions} from "../../fetchUtils.js"
const URL = "http://localhost:8080/api/tour"

export async function riderSelectOptions(){
    await fetch(URL)
        .then(res => res.json())
        .then(fetchedRiders => {
            const ridersOptions = document.getElementById("RiderSelect")
            fetchedRiders.forEach(rider =>{
                ridersOptions.innerHTML += '<option value="'+rider.id+'">'+rider.name+'</option>'
            })
        })
}

async function teamsOption(){
    await fetch(URL+"/teams")
        .then(res => res.json())
        .then(fetchedTeams =>{
            const options = document.getElementById("Update-team")
            fetchedTeams.forEach(team =>{
                options.innerHTML +='<option value="'+team.id+'">'+team.name+'</option>'
            })
        })
}