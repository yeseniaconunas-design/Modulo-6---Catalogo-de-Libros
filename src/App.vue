<template>

<div id="app">

<nav class="navbar">

<div class="logo">
📖 BookList
</div>

<div class="nav-links">

<router-link to="/">
✨ Inicio
</router-link>

<router-link to="/libros">
📚 Catálogo
</router-link>

<router-link to="/categorias">
🗂️ Categorías
</router-link>

<router-link to="/agregar">
✍️ Agregar libro
</router-link>

</div>

</nav>

<main class="app-main">
<router-view/>
</main>

</div>

</template>

<script>
export default {
name:"App",
data(){
return{
usuario:"Equipo Nova"
}
},
methods:{}
}
</script>

<style scoped>
.app-main{
padding:0 20px 40px;
display:flex;
flex-direction:column;
gap:20px;
}
</style>
