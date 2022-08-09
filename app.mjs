// Requisições
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import {fileURLToPath} from 'url';
import bodyParser from "body-parser";
import Category from './models/Categoria.js';
import Item from './models/Item.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Path
app.use(express.static(path.join(__dirname, "public")));

// Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// Rotas
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/categorias', (req, res) => {

    Category.findAll({order: [['id_category']]}).then((categories)=>{
        //console.log(categories);
        res.render('categorias', {categories});
    })
    
});

app.get('/play/:id_category/:name', (req, res) => {
    Item.findAll({
        where: {
            id_categoryF: req.params.id_category,
        },
        order: [['name', 'ASC']]
    }).then((items)=>{
        res.render('play', {items});
    })
    
});

app.listen(8080);