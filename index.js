import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import {setActiveLink, renderTemplate, loadTemplate} from "./utils.js"
import{makeTable} from "./pages/home/home.js"
import{setUpAddButtonHandler,makeOptionForTeam} from "./pages/RiderADD/AddRider.js"
import{riderSelectOptions,UpdateFields,teamsOption,setUpButtons} from "./pages/Update/Update.js"
import {optionsForTeams,UpdateTable,buttonClearTable} from "./pages/teams/teams.js"
import {shirtRiderFields} from "./pages/shirts/shirts.js"

window.addEventListener("load", async () => {

    const templateHome = await loadTemplate("./pages/home/home.html")
    const templateUpdate = await loadTemplate("./pages/Update/Update.html")
    const templateAdd = await  loadTemplate("./pages/RiderADD/AddRider.html")
    const templateTeams = await loadTemplate("./pages/teams/teams.html")
    const templateShirt = await  loadTemplate("./pages/shirts/shirts.html")

    const router = new Navigo("/", { hash: true });
    router
        .hooks({
            before(done, match) {
                setActiveLink("menu", match.url)
                done()
            }
        }).on("/", () =>{
            renderTemplate(templateHome, "content")
            makeTable()
    })
        .on("/Update", ()=>{
        renderTemplate(templateUpdate, "content")
        riderSelectOptions()
        teamsOption()
        UpdateFields()
        setUpButtons()
    })
        .on("/Add",()=>{
        renderTemplate(templateAdd,"content")
        makeOptionForTeam()
        setUpAddButtonHandler()
    })
        .on("/teams",()=>{
        renderTemplate(templateTeams,"content")
        optionsForTeams()
        UpdateTable()
        buttonClearTable()
    })
        .on("/shirts", ()=>{
        renderTemplate(templateShirt,"content")
        shirtRiderFields()
    })
});

window.onerror = (e) => alert(e)