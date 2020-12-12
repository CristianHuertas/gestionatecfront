<template>
  <div id="d4">
    <div id="d5">
      <h3>Datos Del Cliente Solicitado</h3>
      <table id="cliente">
        <tr>
          <th>Documento:</th>
          <td>{{ database_clientes[0].documento }}</td>
        </tr>
        <tr>
          <th>Razon Social:</th>
          <td>{{ database_clientes[0].tipo_documento }}</td>
        </tr>
        <tr>
          <th>Contacto:</th>
          <td>{{ database_clientes[0].razon_social }}</td>
        </tr>
        <tr>
          <th>Telefono:</th>
          <td>{{ database_clientes[0].telefono }}</td>
        </tr>
        <tr>
          <th>Direccion:</th>
          <td>{{ database_clientes[0].direccion }}</td>
        </tr>
        <tr>
          <th>Ciudad:</th>
          <td>{{ database_clientes[0].ciudad }}</td>
        </tr>
        <tr>
          <th>Correo:</th>
          <td>{{ database_clientes[0].correo }}</td>
        </tr>
        <tr>
          <th>Detalle:</th>
          <td>{{ database_clientes[0].detalle }}</td>
        </tr>
      </table>
      <button>Editar </button>
      <button>Guardar </button>

    </div>
  </div>
</template>




<script>
export default {
  name: "Datos_un_cliente",
  data: function () {
    return {
      database_clientes: [
        {
          documento: 800433422,
          tipo_documento: "NIT",
          razon_social: "ÉXITO MEDELLIN",
          contacto: "SANTIAGO MARTINEZ",
          telefono: 3169161138,
          direccion: "Calle 10 No. 9 - 78 ",
          ciudad: "BOGOTA",
          correo: "SANTIAGOMARTINEZ@GMAIL.COM",
          detalle: "",
        },
      ],
    };
  },
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
  background: #133264;
  border: 0;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 20px 25px;
  margin: 20px 10%;
}


</style>