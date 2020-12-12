<template>
  <div id="encabezado" class="encabezado">
    <ul>
      <li><img src="./img/logo_size_invert.jpg" id="logo"/></li>
      <li>
        <button id="regresar_menu" v-on:click="regresar_menu">
          Regresar Al Menú
        </button>
      </li>
      <li>
        <h1>{{ nombre_principal }}</h1>
      </li>
      <li>
        <button id="cerrar_sesion" v-on:click="cerrar_sesion">
          Cerrar Sesión
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Encabezado",
  methods: {
    regresar_menu: function () {
      alert("regresó al menú");
    },
    cerrar_sesion: function () {
      alert("Cerró sesión");
    },
  },
  data: function () {
    return {
      nombre_principal: "Menú De Inicio",
    };
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  padding: 0;
  margin: 0;
  /* border: solid 1px #000000; */ /* poner bordes para ver cuadricula */
}

#regresar_menu {
  /* ocultar boton de regresar al menu */
  display: none;
}



#encabezado{
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 18px;
  background-color:rgb(53, 146, 151);
  
}

/* #encabezado {
  padding: 5px 50px;
} */

#encabezado ul {
  text-align: center;
  margin: 10px;
  padding: 0;
}

#encabezado ul li {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}

#encabezado ul li a {
  display: inline-block;
}

#encabezado ul li a {
  color: rgb(255, 255, 255);
  margin-left: 100px;
  margin-right: 100px;
}

#encabezado ul li a:hover {
  text-decoration: underline;
}

#encabezado ul li h1 {
  margin-left: auto;
  margin-right: auto;
  color: black;
  font-size: 50px;
}

#encabezado ul button {
  background: #133264;
  border: 0;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 20px 25px;
  margin: 40px 0;
}

#encabezado ul button:hover {
  background: #14929b;
}
</style>
