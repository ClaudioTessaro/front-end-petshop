import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import VisualizarClientes from "../pages/Cliente/VisualizarClientes";
import CadastrarEditar from "../pages/Cliente/CadastrarEditar";
import CadastrarEditarServicos from "../pages/Servicos/CadastrarEditar";
import VisualizarServicos from "../pages/Servicos/VisualizarServicos";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registrar" component={SignUp} />
      <Route path="/clientes" component={VisualizarClientes} isPrivate />
      <Route path="/adicionarClientes" component={CadastrarEditar} isPrivate />
      <Route
        path="/cadastrarServico/:id"
        component={CadastrarEditarServicos}
        isPrivate
      />
      <Route
        path="/visualizarServico/:id"
        component={VisualizarServicos}
        isPrivate
      />
    </Switch>
  );
}
