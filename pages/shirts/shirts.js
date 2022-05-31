const URL = "http://localhost:8080/api/tour"
const URL = "https://sem3-24hexam.azurewebsites.net/api/tour"

export async function shirtRiderFields(){
    document.getElementById("Shirt-Select").onchange = shirtRider;
}

async function shirtRider(){
    var shirt = document.getElementById("Shirt-Select")
    var shirtName = shirt.value
    console.log(shirtName)
    await fetch(URL+"/"+shirtName+"/rider")
        .then(res => res.json())
        .then(fetchedRider => {
            document.getElementById("name").value = fetchedRider.name
            document.getElementById("age").value = fetchedRider.age
            document.getElementById("team").value = fetchedRider.team
            document.getElementById("country").value = fetchedRider.country
            document.getElementById("mountainPoints").value = fetchedRider.mountainPoints
            document.getElementById("sprintPoints").value = fetchedRider.sprintPoints
            document.getElementById("time").value = fetchedRider.totalTime
        })
}