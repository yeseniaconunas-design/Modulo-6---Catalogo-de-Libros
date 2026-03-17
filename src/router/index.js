import Vue from "vue"
import Router from "vue-router"

import InicioView from "../views/InicioView.vue"
import ListaLibrosView from "../views/ListaLibrosView.vue"
import CategoriasView from "../views/CategoriasView.vue"
import DetalleLibroView from "../views/DetalleLibroView.vue"
import AgregarLibroView from "../views/AgregarLibroView.vue"

Vue.use(Router)

export default new Router({

mode:"history",

routes:[

{
path:"/",
name:"inicio",
component:InicioView
},

{
path:"/libros",
name:"catalogo",
component:ListaLibrosView
},

{
path:"/categorias",
name:"categorias",
component:CategoriasView
},

{
path:"/agregar",
name:"agregar",
component:AgregarLibroView
},

{
path:"/libros/:id",
name:"detalle",
component:DetalleLibroView,
props:true
}

]

})
