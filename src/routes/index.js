import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import VisualizarClientes from "../pages/Cliente/VisualizarClientes";
import CadastrarEditar from "../pages/Cliente/CadastrarEditar";

export default function Routes() {
  return (
    <Switch>
      <Route path="/clientes" component={VisualizarClientes} />
      <Route path="/adicionarClientes" component={CadastrarEditar} />
    </Switch>
  );
}
