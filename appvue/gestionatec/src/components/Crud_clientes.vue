<template>
  <div id="d1">
    <div id="crud">
      <form>
        <label for="nit"><b>NIT Cliente:</b></label>
        <input
          type="text"
          id="nit"
          placeholder="Solo datos numericos"
          minlength="8"
          maxlength="10"
          required
        />
        <input id="buscar" type="submit" value="Buscar" />
      </form>
      <button>Crear Cliente</button>
      <button>Eliminar Cliente</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Encabezado",
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
  width: 1000px;
  height: 90px;
  background-color: rgb(238, 238, 238);
}

#crud form {
  margin: 30px 84px;
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
  margin: 0px 15px;
}
</style>

