import React, { useState, useEffect } from "react";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

import { Container } from "./styles";

export default function Mensagem({
  abrirMensagem,
  mensagem,
  tipo,
  callbackParent,
}) {
  const [open, setOpen] = useState(false);
  const [fechar] = useState(false);

  useEffect(() => {
    setOpen(abrirMensagem);
  }, [abrirMensagem]);

  function handleClose() {
    callbackParent(fechar);
  }
  return (
    <Container>
      <Collapse in={open}>
        <Alert
          severity={tipo}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => handleClose()}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {mensagem}
        </Alert>
      </Collapse>
    </Container>
  );
}
