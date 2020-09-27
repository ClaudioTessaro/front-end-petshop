import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import { format } from "date-fns";
import { TextField } from "unform-material-ui";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { toast } from "react-toastify";

import Util from "../Util";

import api from "../../services/api";

export default function Modal({ open, callbackParent }) {
  const [fechar] = useState(false);
  const [date] = useState(new Date());

  const dataAgendamento = format(date, "yyyy-MM-dd HH:mm").split(" ");
  const data = `${dataAgendamento[0]}T${dataAgendamento[1]}:00`;

  function handleClose() {
    callbackParent(fechar);
  }

  async function handleSubmit(data, { reset }) {
    try {
      const response = await api.post("agendamento", data);
      Util.retornoUtil(response);
      reset();
      handleClose();
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.error.message);
      }
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <Form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Novo agendamento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para um novo agendamento, insire os dados abaixo
          </DialogContentText>
          <TextField
            name="nomePaciente"
            autoFocus
            label="Nome do paciente"
            type="text"
            fullWidth
          />
          <TextField
            name="telefone"
            autoFocus
            margin="dense"
            id="telefone"
            label="Telefone do paciente"
            type="number"
            fullWidth
          />
          <Scope path="agendamentos[0]">
            <TextField
              autoFocus
              name="tipo_agendamento"
              margin="dense"
              id="tipo"
              label="Tipo de Agendamento"
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              name="data_agendamento"
              margin="dense"
              id="datetime-local"
              label="Data do agendamento"
              type="datetime-local"
              defaultValue={data}
              fullWidth
            />
          </Scope>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button color="primary" type="submit">
            Enviar
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
