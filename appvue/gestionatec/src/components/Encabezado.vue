<template>
  <div id="encabezado" class="encabezado">
    <ul>
      <li><img src="./img/logo_size_invert2.jpg" id="logo"/></li>
 
      <li>
        <h1>{{ nombre_principal }}</h1>
      </li>
      <li>
        <button id="regresar_menu" v-on:click="regresar_menu">
          Regresar Al Menú
        </button>
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
      if(this.$router.name != "menu"){
        this.$router.push({name: "menu"});
      }
    },
    cerrar_sesion: function () {
      alert("Cerró sesión");
    },
  },
  data: function () {
    return {
      nombre_principal: "Gestionatec",
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
/*   display: none; */
  margin: 0% 0%;
}



#encabezado{
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 18px;
  background-color:rgb(53, 146, 151);
  height: 10%;
}

/* img{
  height: 100px;
} */

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
  margin: auto 3%;
}

#encabezado ul li a {
  display: inline-block;
}



#encabezado ul li a:hover {
  text-decoration: underline;
}

#encabezado ul li h1 {
  margin-left: 0%;
  margin-right: auto;
  color: white;
  font-size: 50px;
}

#encabezado ul button {
  background: #456C99;
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
