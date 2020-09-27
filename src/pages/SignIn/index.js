import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signInRequest } from "../../store/modules/auth/actions";

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Acessar</button>
        <Link to="/registrar">Criar conta gratuíta</Link>
      </Form>
    </>
  );
}
