import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import { renderText, setActiveLink, renderTemplate, loadTemplate} from "./utils.js"
import{makeTable} from "./pages/home/home.js"
import{setUpAddButtonHandler,makeOptionForTeam} from "./pages/RiderADD/AddRider.js"
import{riderSelectOptions} from "./pages/Update/Update.js"

window.addEventListener("load", async () => {

    const templateHome = await loadTemplate("./pages/home/home.html")
    const templateUpdate = await loadTemplate("./pages/Update/Update.html")
    const templateCrud = await  loadTemplate("./pages/RiderADD/AddRider.html")

    const router = new Navigo("/", { hash: true });
    router
        .hooks({
            before(done, match) {
                setActiveLink("menu", match.url)
                done()
            }
        }).on("", () =>{
            renderTemplate(templateHome, "content")
            makeTable()
    }).on("/Update", ()=>{
        renderTemplate(templateUpdate, "content")
        riderSelectOptions()
    }).on("/CRUD",()=>{
        renderTemplate(templateCrud,"content")
        makeOptionForTeam()
        setUpAddButtonHandler()
    })
});

window.onerror = (e) => alert(e)