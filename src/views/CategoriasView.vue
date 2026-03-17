<template>

<div class="container">

<h1 class="titulo">
📚 Categorias de libros
</h1>

<div class="categorias-grid">

<div
class="categoria-card romance"
@click="filtrar('Romance')"
>
💗 Romance
</div>

<div
class="categoria-card clasico"
@click="filtrar('Clasico')"
>
📖 Clasico
</div>

<div
class="categoria-card drama"
@click="filtrar('Drama')"
>
🎭 Drama
</div>

<div
class="categoria-card fantasia"
@click="filtrar('Fantasia')"
>
✨ Fantasia
</div>

</div>

<div v-if="categoriaSeleccionada">

<h2 class="subtitulo">
Libros en <span>{{ categoriaSeleccionada }}</span>
</h2>

<div v-if="librosFiltrados.length" class="libros-grid">

<Libro
v-for="libro in librosFiltrados"
:key="libro.id"
:libro="libro"
/>

</div>

<p v-else class="mensaje-vacio">
No hay libros registrados en esta categoria aun.
</p>

</div>

</div>

</template>

<script>
import bookService from "../services/bookService"
import Libro from "../components/Libro.vue"

export default{
name:"CategoriasView",
components:{Libro},
data(){
return{
categoriaSeleccionada:null,
libros:[]
}
},
created(){
this.libros =
bookService.obtenerLibros()
},
computed:{
librosFiltrados(){
if(!this.categoriaSeleccionada){
return []
}

return this.libros.filter(
libro => libro.categoria === this.categoriaSeleccionada
)
}
},
methods:{
filtrar(categoria){
this.categoriaSeleccionada = categoria
}
}
}
</script>
