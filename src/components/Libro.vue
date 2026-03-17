<template>
  <div class="libro-card">
    <div class="icono">📚</div>
    <h2>{{ libro.titulo }}</h2>
    <p class="autor">✍️ {{ libro.autor }}</p>
    <p class="categoria">{{ libro.categoria }}</p>
    <p class="descripcion-corta">{{ libro.descripcion }}</p>
    <div class="acciones">
      <router-link :to="detalleLink">
        <button class="btn-ver">Ver detalle</button>
      </router-link>
      <button
        v-if="mostrarEliminar"
        class="btn-eliminar"
        @click="solicitarEliminacion"
      >
        🗑️ Eliminar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LibroCard",
  props: {
    libro: {
      type: Object,
      required: true
    },
    mostrarEliminar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    detalleLink() {
      return `/libros/${this.libro.id}`;
    }
  },
  methods: {
    solicitarEliminacion() {
      this.$emit("eliminar", this.libro.id);
    }
  }
};
</script>

<style scoped>
.descripcion-corta {
  color: #575757;
  font-size: 14px;
  min-height: 38px;
  margin-top: 8px;
}
.acciones {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
}
</style>
