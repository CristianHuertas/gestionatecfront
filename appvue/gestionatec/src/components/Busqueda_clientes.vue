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
        <tr>
          <td>{{ database_clientes[0].documento }}</td>
          <!--valores de la tabla-->
          <td>{{ database_clientes[0].tipo_documento }}</td>
          <td>{{ database_clientes[0].razon_social }}</td>
          <td>{{ database_clientes[0].contacto }}</td>
          <td>{{ database_clientes[0].telefono }}</td>
          <td>{{ database_clientes[0].direccion }}</td>
          <td>{{ database_clientes[0].ciudad }}</td>
          <td>{{ database_clientes[0].correo }}</td>
          <td>{{ database_clientes[0].detalle }}</td>
        </tr>
        <tr>
          <td>{{ database_clientes[1].documento }}</td>
          <!--valores de la tabla-->
          <td>{{ database_clientes[1].tipo_documento }}</td>
          <td>{{ database_clientes[1].razon_social }}</td>
          <td>{{ database_clientes[1].contacto }}</td>
          <td>{{ database_clientes[1].telefono }}</td>
          <td>{{ database_clientes[1].direccion }}</td>
          <td>{{ database_clientes[1].ciudad }}</td>
          <td>{{ database_clientes[1].correo }}</td>
          <td>{{ database_clientes[1].detalle }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>




<script>
export default {
  name: "Busqueda_clientes",
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
        {
          documento: 199823874,
          tipo_documento: "CC",
          razon_social: "CARLOS SANCHEZ",
          contacto: "CARLOS SANCHEZ",
          telefono: 3054442279,
          direccion: "Carrera 56A No. 51 - 81",
          ciudad: "BOGOTA",
          correo: "CARLOSSANCHEZ@GMAIL.COM",
          detalle: "",
        },
      ],
    };
  },
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
  width: 1200px;
  height: auto;
  background-color: rgb(238, 238, 238);
}
h4{
  text-align: center;
}



</style>