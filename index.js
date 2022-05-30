import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import { renderText, setActiveLink, renderTemplate, loadTemplate} from "./utils.js"
import{makeTable} from "./pages/home/home.js"

window.addEventListener("load", async () => {

    const templateHome = await loadTemplate("./pages/home/home.html")
    const templateTimer = await loadTemplate("./pages/timers/timers.html")
    const templateCrud = await  loadTemplate("./pages/RiderCrud/CRUD.html")

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
    }).on("/timers", ()=>{
        renderTemplate(templateTimer, "content")
    }).on("/CRUD",()=>{
        renderTemplate(templateCrud,"content")
    })
});

window.onerror = (e) => alert(e)