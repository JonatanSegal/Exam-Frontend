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

export async function teamsOption(){
    await fetch(URL+"/teams")
        .then(res => res.json())
        .then(fetchedTeams =>{
            const options = document.getElementById("Update-team")
            fetchedTeams.forEach(team =>{
                options.innerHTML +='<option value="'+team.id+'">'+team.name+'</option>'
            })
        })
}

export async function UpdateFields(){
    document.getElementById("RiderSelect").onchange = UpdateRiderFields;
}

 async function UpdateRiderFields(){
    const d = document.getElementById("RiderSelect").valueOf().selectedIndex;
   await fetch(URL+"/"+d)
       .then(res => res.json())
       .then(fetchedRider => {
           document.getElementById("Update-name").value = fetchedRider.name
           document.getElementById("Update-age").value = fetchedRider.age
           document.getElementById("Update-country").value = fetchedRider.country
           document.getElementById("Update-mountainPoints").value = fetchedRider.mountainPoints
           document.getElementById("Update-sprintPoints").value = fetchedRider.sprintPoints
           document.getElementById("Update-time").value = fetchedRider.totalTime
       })
}
export function setUpButtons(){
    document.getElementById("btn-update-rider").onclick = UpdateRider;
}

 function UpdateRider(){
    const riderUpdate = {}
    riderUpdate.name = document.getElementById("Update-name").value
    riderUpdate.age = document.getElementById("Update-age").value
    riderUpdate.country = document.getElementById("Update-country").value
    riderUpdate.team = document.getElementById("Update-team").valueOf().selectedIndex
    riderUpdate.mountainPoints = document.getElementById("Update-mountainPoints").value
    riderUpdate.springPoints = document.getElementById("Update-sprintPoints").value
    riderUpdate.totalTime = document.getElementById("Update-time").value
     const id = document.getElementById("RiderSelect").valueOf().selectedIndex;

     fetch(URL+"/"+id, makeOptions("PATCH",riderUpdate))
         .then(res =>{
             if(!res.ok){
                 return Promise.reject("Error: " + res.status)
             }
             return res.json()})
         .catch(e => console.error(e))
}
