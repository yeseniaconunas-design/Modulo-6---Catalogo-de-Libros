<template>

<div class="container">

<h1 class="titulo">
📖 Agregar nuevo libro
</h1>

<form class="form-card" @submit.prevent="agregarLibro">

<label>
Titulo del libro
<input
v-model="titulo"
placeholder="Titulo del libro"
required
/>
</label>

<label>
Autor
<input
v-model="autor"
placeholder="Autor principal"
required
/>
</label>

<label>
Categoria
<select v-model="categoria" required>
<option disabled value="">
Selecciona categoria
</option>
<option>Romance</option>
<option>Clasico</option>
<option>Drama</option>
<option>Fantasia</option>
</select>
</label>

<label>
Descripcion
<textarea
v-model="descripcion"
placeholder="Una pequena sinopsis"
rows="4"
@keyup.enter="agregarLibro"
/>
</label>

<button class="btn-agregar" type="submit">
Agregar libro
</button>

<p class="mensaje-error" v-if="error">
{{ error }}
</p>

<p class="mensaje-exito" v-if="mensaje">
{{ mensaje }}
</p>

</form>

<div v-if="mostrarPreview" class="preview-card">

<h3>Vista previa</h3>

<p><strong>Titulo:</strong> {{ titulo || "Titulo pendiente" }}</p>
<p><strong>Autor:</strong> {{ autor || "Autor pendiente" }}</p>
<p><strong>Categoria:</strong> {{ categoria || "Categoria pendiente" }}</p>
<p><strong>Descripcion:</strong> {{ descripcion || "Agrega una descripcion para visualizarla aqui." }}</p>

</div>

</div>

</template>

<script>
import bookService from "../services/bookService"

export default{
name:"AgregarLibroView",
data(){
return{
titulo:"",
autor:"",
categoria:"",
descripcion:"",
mensaje:"",
error:""
}
},
computed:{
mostrarPreview(){
return (
this.titulo ||
this.autor ||
this.categoria ||
this.descripcion
)
}
},
methods:{
agregarLibro(){
if(
!this.titulo.trim() ||
!this.autor.trim() ||
!this.categoria
){
this.error =
"Completa los campos obligatorios antes de guardar."
this.mensaje = ""
return
}

bookService.agregarLibro({
titulo:this.titulo.trim(),
autor:this.autor.trim(),
categoria:this.categoria,
descripcion:this.descripcion.trim() || "Sin descripcion."
})

this.mensaje = "Libro agregado correctamente."
this.error = ""
this.titulo = ""
this.autor = ""
this.categoria = ""
this.descripcion = ""
}
}
}
</script>
