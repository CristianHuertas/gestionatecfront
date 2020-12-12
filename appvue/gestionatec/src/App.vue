<template>
  <div id="app">
    <Encabezado />

    <!-- <Elementos_menu /> -->
    <Crud_clientes />
  </div>
</template>

<script>
/* import Base_clientes from "./components/Base_clientes.vue";
import Datos_un_cliente from "./components/Datos_un_cliente.vue";
import Elementos_menu from "./components/Elementos_menu.vue"; */

import Crud_clientes from "./components/Crud_clientes.vue";
import Encabezado from "./components/Encabezado.vue";
import Pie_pagina from "./components/Pie_pagina.vue";

export default {
  name: "App",
  components: {
    Encabezado,
    Crud_clientes,
    Pie_pagina,
    

    /* Base_clientes,
    Elementos_menu,
    Datos_un_cliente, */
  },
};
</script>

<style>

</style>>

