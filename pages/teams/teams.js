const URL = "http://localhost:8080/api/tour"
//const URL = "https://sem3-24hexam.azurewebsites.net/api/tour"

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
        .then(Riders =>{
            const body = document.getElementById("teams-table")
            Riders.forEach( riders =>{
                body.innerHTML +='<tr>\n' +
                    '                <td>'+riders.name+'</td>\n' +
                    '                <td>'+riders.age+'</td>\n' +
                    '                <td>'+riders.country+'</td>\n' +
                    '                <td>'+riders.team+'</td>\n'+
                    '                <td>'+riders.mountainPoints+'</td>\n' +
                    '                <td>'+riders.sprintPoints+'</td>\n' +
                    '                <td>'+riders.totalTime+'</td>\n' +
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