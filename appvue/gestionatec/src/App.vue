<template>
  <div id="app">
    <Encabezado />
    
    <Elementos_menu />
    <Crud_clientes />
    <Busqueda_clientes />
    <Crea_cliente />
    <Pie_pagina />
    
    
  </div>
</template>

<script>
import Busqueda_clientes from './components/Busqueda_clientes.vue';
import Crea_cliente from './components/Crea_cliente.vue';
import Crud_clientes from './components/Crud_clientes.vue';
import Elementos_menu from "./components/Elementos_menu.vue";
import Encabezado from "./components/Encabezado.vue";
import Pie_pagina from "./components/Pie_pagina.vue";

export default {
  name: "App",
  components: {
    Encabezado,
    Pie_pagina,
    Elementos_menu,
    Busqueda_clientes,
    Crud_clientes,
    Crea_cliente
  },
};
</script>

<style>

</s,
    Busqueda_clientestyle>
