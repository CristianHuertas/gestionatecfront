<template>
  <div id="general">
    <div id="modulos">
      <div id="clientes" class="modulos">
        <ul>
          <li>
            <button id="clientes" class="boton_principal">Clientes</button>
          </li>
          <li><button id="registro" v-on:click="registro">
            Registro
            </button></li>
          <li><button id="transacciones">Transacciones<p class="construccion">(en construccion)</p></button></li>
        </ul>
      </div>

      <div id="Productos" class="modulos">
        <ul>
          <li>
            <button id="productos" class="boton_principal">Productos <p class="construccion">(en construccion)</p></button>
          </li>
          <li><button id="inventario">Inventario<p class="construccion">(en construccion)</p></button></li>
          <li><button id="puntos_venta">Puntos De Venta<p class="construccion">(en construccion)</p></button></li>
        </ul>
      </div>

      <div id="Analisis_datos" class="modulos">
        <ul>
          <li>
            <button id="analisis_datos" class="boton_principal">
              Análisis De Datos <p class="construccion">(en construccion)</p>
            </button>
          </li>
          <li><button id="analisis_ventas">Análisis De Ventas<p class="construccion">(en construccion)</p></button></li>
          <li>
            <button id="analisis_inventario">Análisis De Inventario<p class="construccion">(en construccion)</p></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Elementos_menu",
  methods:{
    registro: function(){
      if(this.$router.name != "crudClientes"){
        this.$router.push({name: "crudClientes"});
      }
    }
  }
};
</script>



<style>
/* poner bordes para ver cuadricula */
/* div {
  border: solid 1px #000000; 
} */

#general {
  width: auto;
  height: 550px;
  background-color: rgb(238, 238, 238);
}

#modulos {
  margin: 0 auto;
  width: 915px;
  height: 400px;
  background-color: rgb(238, 238, 238);
}

#modulos .modulos {
  margin: 0px auto;
  width: 300px;
  display: inline-block;
  vertical-align: middle;
  height: 400px;
}

ul li {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}

.boton_principal {
  background:rgb(53, 146, 151);
  border: 0;
  border-radius: 0;
  color: white;
  cursor: pointer;
  font-size: 21px;
  width: 270px;
  height: 100px;
  margin: 15px 0;
}

button {
  background:#456C99;
  border: 10;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 12px;
  padding: 20px 25px;
  margin: 0px 20px;
}

.construccion{
  font-size: 14px;
  color: rgb(10, 10, 10);
}
</style>





