<template>

<div class="detalle-container">

<div v-if="libro" class="detalle-card">

<div v-if="!modoEdicion">

<h1>{{ libro.titulo }}</h1>

<p class="autor">
✍️ {{ libro.autor }}
</p>

<p class="categoria">
📂 {{ libro.categoria }}
</p>

<p class="descripcion">
{{ libro.descripcion }}
</p>

<div class="acciones-detalle">

<button class="btn-ver" @click="modoEdicion = true">
Editar libro
</button>

<button class="btn-volver" @click="volver">
◀️ Volver a libros
</button>

</div>

<p class="mensaje-exito" v-if="mensaje">
{{ mensaje }}
</p>

</div>

<form
v-else
class="formulario-detalle"
@submit.prevent="guardarCambios"
>

<input
v-model="form.titulo"
placeholder="Titulo del libro"
required
/>

<input
v-model="form.autor"
placeholder="Autor principal"
required
/>

<select v-model="form.categoria" required>
<option disabled value="">
Selecciona categoria
</option>
<option>Romance</option>
<option>Clasico</option>
<option>Drama</option>
<option>Fantasia</option>
</select>

<textarea
v-model="form.descripcion"
rows="4"
placeholder="Descripcion"
/>

<div class="acciones-detalle">

<button class="btn-agregar" type="submit">
Guardar cambios
</button>

<button
class="btn-volver"
type="button"
@click="cancelarEdicion"
>
Cancelar
</button>

</div>

</form>

</div>

<p class="mensaje-vacio" v-else>
No se encontro el libro solicitado.
</p>

</div>

</template>

<script>
import bookService from "../services/bookService"

export default{
name:"DetalleLibroView",
props:{
id:{
type:[String,Number],
required:true
}
},
data(){
return{
libro:null,
modoEdicion:false,
mensaje:"",
form:{
titulo:"",
autor:"",
categoria:"",
descripcion:""
}
}
},
created(){
this.cargarLibro(this.id)
},
watch:{
id(nuevoId){
this.cargarLibro(nuevoId)
}
},
methods:{
cargarLibro(id){
const libro =
bookService.obtenerLibroPorId(id)
if(libro){
this.libro = libro
this.form = {...libro}
this.mensaje = ""
this.modoEdicion = false
}else{
this.libro = null
}
},
guardarCambios(){
if(
!this.form.titulo.trim() ||
!this.form.autor.trim() ||
!this.form.categoria
){
this.mensaje =
"Completa los campos obligatorios antes de guardar."
return
}

const actualizado =
bookService.actualizarLibro({
id:this.libro.id,
titulo:this.form.titulo.trim(),
autor:this.form.autor.trim(),
categoria:this.form.categoria,
descripcion:
this.form.descripcion.trim() || "Sin descripcion."
})

if(actualizado){
this.libro = actualizado
this.form = {...actualizado}
this.modoEdicion = false
this.mensaje =
"Cambios guardados correctamente."
}
},
cancelarEdicion(){
this.modoEdicion = false
if(this.libro){
this.form = {...this.libro}
}
},
volver(){
this.$router.push("/libros")
}
}
}
</script>
