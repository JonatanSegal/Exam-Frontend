//const URL = "https://sem3-24hexam.azurewebsites.net/api/tour"
const URL = "http://localhost:8080/api/tour"
export async function makeTable(){

    await fetch(URL)
        .then(res => res.json())
        .then(fetchedRiders =>{
            const body = document.getElementById("table-body")
            fetchedRiders.forEach(rider =>{
                body.innerHTML +='<tr>\n' +
                    '                <td>'+rider.name+'</td>\n' +
                    '                <td>'+rider.age+'</td>\n' +
                    '                <td>'+rider.country+'</td>\n' +
                    '                <td>'+rider.team+'</td>\n'+
                    '                <td>'+rider.mountainPoints+'</td>\n' +
                    '                <td>'+rider.sprintPoints+'</td>\n' +
                    '                <td>'+rider.totalTime+'</td>\n' +
                    '            </tr>'

            })
        })

}