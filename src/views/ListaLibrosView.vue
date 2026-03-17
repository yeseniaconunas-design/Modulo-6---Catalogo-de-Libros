<template>

<div class="container">

<h1 class="titulo">
📚 Lista de libros
</h1>

<section class="filtros">
<label>
Filtrar por autor
<input
v-model="filtroAutor"
placeholder="Nombre del autor"
/>
</label>

<label>
Filtrar por categoria
<select v-model="filtroCategoria">
<option value="">Todas las categorias</option>
<option
v-for="categoria in categoriasDisponibles"
:key="categoria"
:value="categoria"
>
{{ categoria }}
</option>
</select>
</label>
</section>

<div v-if="librosFiltrados.length">

<transition-group
name="libro"
tag="div"
class="libros-grid"
>

<Libro
v-for="libro in librosFiltrados"
:key="libro.id"
:libro="libro"
:mostrar-eliminar="true"
@eliminar="eliminarLibro"
/>

</transition-group>

</div>

<p class="mensaje-vacio" v-else>
No hay libros que coincidan con los criterios actuales.
</p>

</div>

</template>

<script>
import bookService from "../services/bookService"
import Libro from "../components/Libro.vue"

export default {
name:"ListaLibrosView",
components:{Libro},
data(){
return{
libros:[],
filtroAutor:"",
filtroCategoria:""
}
},
computed:{
librosFiltrados(){
const autorFiltro =
this.filtroAutor.toLowerCase().trim()

return this.libros.filter(libro => {
const autor =
libro.autor.toLowerCase()

const coincideAutor =
autor.includes(autorFiltro) || !autorFiltro
const coincideCategoria =
this.filtroCategoria
? libro.categoria === this.filtroCategoria
: true

return coincideAutor && coincideCategoria
})
},
categoriasDisponibles(){
const categorias =
new Set(this.libros.map(libro => libro.categoria))
return Array.from(categorias)
}
},
created(){
this.cargarLibros()
},
methods:{
cargarLibros(){
this.libros =
bookService.obtenerLibros()
},
eliminarLibro(id){
bookService.eliminarLibro(id)
this.cargarLibros()
}
}
}
</script>
