<template>
  <div id="d4">
    <div id="d5">
      <h3>Datos Del Cliente Solicitado</h3>
      <table id="cliente">
        <tr>
          <th>Documento:</th>
          <td>{{ database_clientes.documento }}</td>
        </tr>
        <tr>
          <th>Razon Social:</th>
          <td>{{ database_clientes.tipo_documento }}</td>
        </tr>
        <tr>
          <th>Contacto:</th>
          <td>{{ database_clientes.razon_social }}</td>
        </tr>
        <tr>
          <th>Telefono:</th>
          <td>{{ database_clientes.telefono }}</td>
        </tr>
        <tr>
          <th>Direccion:</th>
          <td>{{ database_clientes.direccion }}</td>
        </tr>
        <tr>
          <th>Ciudad:</th>
          <td>{{ database_clientes.ciudad }}</td>
        </tr>
        <tr>
          <th>Correo:</th>
          <td>{{ database_clientes.correo }}</td>
        </tr>
        <tr>
          <th>Detalle:</th>
          <td>{{ database_clientes.detalle }}</td>
        </tr>
      </table>
      <button v-if=0>Editar </button>
      <button v-if=0>Guardar </button>

    </div>
  </div>
</template>




<script>
import axios from "axios"

export default {
  name: "Datos_un_cliente",
  data: function () {
    return {
      id: 0,
      database_clientes: 
        {
          documento: 0,
          tipo_documento: "",
          razon_social: "",
          contacto: "",
          telefono: 0,
          direccion: "",
          ciudad: "",
          correo: "",
          detalle: "",
        },
    };
  },
  beforeCreate: function(){
    this.id=localStorage.getItem("idbusqueda")
   
    axios.get("http://localhost:8000/cliente/registroGet/"+this.id)
    .then(respuesta=>{
      this.database_clientes=respuesta.data;
    })
    .catch(error=>{
      console.log(error)
      alert("cliente no existe " + error.response.status)
      this.$router.push({name: "menu"});
    })
  }
};
</script>


<style>
#d4 {
  width: auto;
  height: auto;
  background-color: rgb(238, 238, 238);
}
#d5 {
  /* border: solid 1px #000000; */
  margin: 10px auto;
  width: 400px;
  height: auto;
  background-color: rgb(238, 238, 238);
}

#d5 h3 {
  text-align: center;
}

#cliente {
  text-align: left;
}
#cliente tr td {
  border: solid 1px #000000;
}



#d5 button{
  background: #456C99;
  border: 0;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 20px 25px;
  margin: 20px 10%;
}


</style>