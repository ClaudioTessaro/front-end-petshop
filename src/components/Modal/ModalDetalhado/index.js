import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { toast } from "react-toastify";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";

import api from "../../../services/api";
import Util from "../../Util";

export default function ModalDetalhado({ open, callbackParent, data }) {
  const [fechar] = useState(false);

  async function handleDelete(id) {
    try {
      const response = await api.delete(`agendamento/${id}`);
      Util.retornoUtil(response);
      handleClose();
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.error.message);
      }
    }
  }

  function handleClose() {
    callbackParent(fechar);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      {data.map((agendamento) => (
        <DialogContent key={agendamento.id}>
          <DialogTitle id="form-dialog-title">{agendamento.nome}</DialogTitle>
          <DialogContentText>
            O paciente {agendamento.paciente.nome} marcou uma{" "}
            {agendamento.tipo_agendamento} no dia{" "}
            {format(
              parseISO(agendamento.data_agendamento),
              "d 'de' MMMM 'às' HH:mm",
              {
                locale: pt,
              }
            )}
          </DialogContentText>

          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Voltar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<DeleteIcon />}
              onClick={() => handleDelete(agendamento.id)}
            >
              Excluir
            </Button>
          </DialogActions>
        </DialogContent>
      ))}
    </Dialog>
  );
}
