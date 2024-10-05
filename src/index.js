import express from 'express'
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import {join, dirname} from 'path'
import { fileURLToPath } from "url"


import clientesRoutes from './routes/clientes.routes.js';
import farmaciaRoutes from './routes/farmacia.routes.js';


//Initializacion
const app=express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Settings
app.set('port',process.env.PORT || 3000);
                            //configurando carpeta para las vistas
app.set('views', join(__dirname, 'views'));

                            //configurar motor de plantilla
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
                            //Utilizaremos express para trabajar con interfaces y formularios
                            //Utilizaremos express para trabajar con archivos tipo Json
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Routes
app.get('/', async (req, res) => {
    try {
        
        // Renderizar la vista, puedes pasar las filas si es necesario
        res.render('index', ); // Aquí pasas los datos a la vista si deseas
    } catch (error) {
        console.error('Error en la consulta a la base de datos:', error);
        res.status(500).send('Error en la consulta');
    }
});



app.use(clientesRoutes)
app.use(farmaciaRoutes)

//Publics Files
                    //funcion Join, public los usuarios pueden utilizar lo q hay en la carpeta public
app.use(express.static(join(__dirname, 'public')));

//Run Server
app.listen(app.get('port'), ()=>
console.log('cargando el puerto',app.get('port'))
);
