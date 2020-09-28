import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";

import { signUpRequest } from "../../store/modules/auth/actions";

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, password }) {
    dispatch(signUpRequest(nome, email, password));
  }

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ height: 500 }}>
        <Input name="nome" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
