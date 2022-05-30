import{makeOptions} from "../../fetchUtils.js"
const URL = "http://localhost:8080/api/tour"

export async function optionsForTeams(){
    await fetch(URL+"/teams")
        .then(res => res.json())
        .then(fetchedTeams =>{
            const options = document.getElementById("Rider-Team-Select")
            fetchedTeams.forEach(team =>{
                options.innerHTML +='<option value="'+team.name+'">'+team.name+'</option>'
            })
        })
}

export async function UpdateTable(){
    document.getElementById("Rider-Team-Select").addEventListener('change',makeTable)
}


async function makeTable(){
    const d = document.getElementById("Rider-Team-Select");
    const id = d.value;
    await fetch(URL+"/"+id+"/riders")
        .then(res => res.json())
        .then(fetchedRiders =>{
            const body = document.getElementById("teams-table")
            fetchedRiders.forEach( rider =>{
                body.innerHTML +='<tr">\n' +
                    '                <td>'+rider.name+'</td>\n' +
                    '                <td>'+rider.age+'</td>\n' +
                    '                <td>'+rider.country+'</td>\n' +
                    '                <td>'+rider.team+'</td>\n'+
                    '            </tr>'

            })
        })
}
export function buttonClearTable(){
    document.getElementById("Clear-table").onclick = clearTable;
}

function clearTable(){
    document.getElementById("teams-table").remove()
    location.reload()
}