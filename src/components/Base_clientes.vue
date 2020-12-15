<template>
  <div id="d2">
    <div id="d3">
      <h4>Lista De Clientes</h4>
      <table>
        <tr id="tabla">
          <!--fila de tabla-->
          <th>Documento</th>
          <!--titulos de columna-->
          <th>Tipo_Doc</th>
          <th>Razon_social</th>
          <th>Contacto</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Ciudad</th>
          <th>Correo</th>
          <th>Detalle</th>
        </tr>
        <tr v-for="cliente in database_clientes" v-bind:key="cliente.id">
          <td>{{ cliente.documento }}</td>
          <td>{{ cliente.tipo_documento }}</td>
          <td>{{ cliente.razon_social }}</td>
          <td>{{ cliente.contacto }}</td>
          <td>{{ cliente.telefono }}</td>
          <td>{{ cliente.direccion }}</td>
          <td>{{ cliente.ciudad }}</td>
          <td>{{ cliente.correo }}</td>
          <td>{{ cliente.detalle }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>




<script>
import axios from "axios"
export default {
  name: "Base_clientes",
  data: function () {
    return {
      database_clientes: [
/*         {
          documento: 0,
          tipo_documento: "",
          razon_social: "",
          contacto: "",
          telefono: 0,
          direccion: "",
          ciudad: "",
          correo: "",
          detalle: "",
        }, */
      ],
    };
  },
  beforeCreate: function(){
    axios.get("https://gestionatec.herokuapp.com/cliente/registroGetAll")
    .then(respuesta=>{
      this.database_clientes=respuesta.data;
    })
    .catch(error=>{
      console.log(error)
      alert("no hay clientes en la base" + error.response.status)
    })
  }  
};
</script>



<style>
/* div {
  border: solid 1px #000000;
} */

div table #tabla th {
  border: solid 1px #000000;
}

div table td {
  border: solid 1px #000000;
}

#d2 {
  /* border: solid 1px #000000; */

  width: auto;
  height: auto;
  background-color: rgb(238, 238, 238);
  
}

#d3 {
  margin: 5px auto;
  width: 80%;
  height: auto;
  background-color: rgb(238, 238, 238);
}
h4{
  text-align: center;
}



</style>