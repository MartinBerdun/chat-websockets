import express  from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js"
import viewsRouetr from "./routes/views.router.js";
import socket from "./socket.js";

const app = express ();



app.use(express.static(`${__dirname}/public`)) //especificamos donde encuentra los archivos estaticos

const httpServer = app.listen(8080, () => {
    console.log("Listening on port 8080");
})

socket.connect(httpServer);

//configuro handlebars
app.engine("handlebars", handlebars.engine()); //especifica el motor de plantillas.. es una funcionalidad de express.. se llama handlebars (le digo yo) y se inicializa con un metodo de handlebars
app.set("views", `${__dirname}/views`); //en donde encunetra el motor de plantillas nuestras vistas
app.set("view engine", "handlebars") // crea un motor de vistas con el handlebars de arriba

app.use("/", viewsRouetr);



