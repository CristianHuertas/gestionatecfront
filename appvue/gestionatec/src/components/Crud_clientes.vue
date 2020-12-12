<template>
  <div id="d1">
    <div id="crud">
      
      <form>
        <label for="nit"><b>NIT Cliente:</b></label>
        <!-- <input/> -->
        <input type="number" id="nit" placeholder="Solo datos numericos" minlength="8" maxlength="10" required/>        
      </form>
      
      <button id="buscar" @click="cambiar_estado">Buscar </button>      
      <button class="crud" @click="ocultar_components">Crear Cliente</button>
      <button class="crud">Eliminar Cliente</button>
      
      
    </div>
    <div id="interruptor2" v-if="estado1">
      <Base_clientes />
    </div>
    <div id="interruptor1"  v-if="estado2">
      <Datos_un_cliente />
    </div>
    <div id="interruptor3" v-if="estado3">
      <Crear_cliente/>
    </div>
    <Pie_pagina/>
  </div>
</template>

<script>
import Crear_cliente from '../Crear_cliente.vue';
import Base_clientes from "./Base_clientes.vue";
import Datos_un_cliente from "./Datos_un_cliente.vue";
import Pie_pagina from './Pie_pagina.vue';

export default {
  name: "Crud_clientes",
  components: { Base_clientes, Datos_un_cliente, Pie_pagina, Crear_cliente },
  data() {
    return {
    estado1: true,
    estado2: false,
    estado3: false,
    }
  },
  methods: {
    cambiar_estado(){
      this.estado1 = false;
      this.estado2 = true;
      this.estado3 = false;
    },
    ocultar_components(){
      this.estado1 = false;
      this.estado2 = false;
      this.estado3 = true;
    }
  }
};
</script>

<style>
/* poner bordes para ver cuadricula */
/* #crud {
  border: solid 1px #000000;
} */
#d1 {
  /* border: solid 1px #000000; */

  width: auto;
  height: 95px;
  background-color: rgb(238, 238, 238);
  
}

#crud {
  margin: 0 auto;
  width: 80%;
  height: 90px;
  background-color: rgb(238, 238, 238);
}

#crud form {
  margin: 30px 30px;
  display: inline-block;
  vertical-align: middle;
  font-size: 21px;
}

#buscar {
  background: #133264;
  border: 10;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 10px;
  padding: 8px 25px;
  margin: 0px;
  margin-right: 10%;
}
.crud{
  background: #133264;
  border: 10;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 12px;
  padding: 20px 25px;
  margin: 0px 20px;
}
</style>

