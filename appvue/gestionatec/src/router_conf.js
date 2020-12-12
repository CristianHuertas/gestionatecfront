import VueRouter from "vue-router";
import Elementos_menu from "./components/Elementos_menu";
import Crud_clientes from "./components/Crud_clientes";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "menu",
      path: "/menu",
      component: Elementos_menu
    },
    {
      name: "crudClientes",
      path: "/crudClientes",
      component: Crud_clientes
    }
  ]
});

export default router;