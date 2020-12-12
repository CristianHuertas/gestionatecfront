<template>
  <div id="d6">
    <div id="d7">
      <h3>Ingrese Los Datos Del Nuevo Cliente</h3>
      <form action="" id="nuevo_cliente">
        <label for="" id="n_documento">Numero De Documento: </label>
        <input type="number"  class="etiqueta" minlength="8" maxlength="10" required>
        <br>
        <label for="" id="t_documento">Tipo de Documento: </label>
        <select >
            <option value="" selected>NIT</option>
            <option value="">CEDULA</option>
        </select>
        <br>
        <label for="" id="contacto">Contacto: </label>
        <input type="text" id="" required>
        <br>
        <label for="" id="telefono">Telefono: </label>
        <input type="tel" id="" minlength="7" maxlength="10" required>
        <br>
        <label for="" id="direccion">Direccion: </label>
        <input type="text" id="" required>
        <br>
        <label for="" id="ciudad">Ciudad: </label>
        <input type="text" id="" required>
        <br>
        <label for="" id="correo">Correo: </label>
        <input type="email" id="" required>
        <br>
        <label for="" id="detalle">Detalle: </label>
        <input type="text" id="" >
        <br>

      </form>
      <button>Guardar </button>

    </div>
  </div>
</template>


<script>
export default {
    name: "Crear_cliente",
}
</script>


<style>
#d6 {
  width: auto;
  height: auto;
  background-color: rgb(238, 238, 238);
}
#d7 {
  /* border: solid 1px #000000; */
  margin: 10px auto;
  width: 400px;
  height: auto;
  background-color: rgb(238, 238, 238);
  
}

#d7 h3 {
  text-align: center;
  margin: 10px 10px;
  font-size: 20px;
}
#d7 label {
  text-align: left;
  margin: 10px 10px;
  font-size: 18px;
}

#nuevo_cliente {
    font-size: 18px;
}

#d7 button{
  background: #133264;
  border: 0;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 20px 25px;
  margin: 10% 25%;
}


</style>