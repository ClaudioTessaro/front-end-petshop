import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

import { Container } from "./styles";

export default function Mensagem({ abrirMensagem, mensagem, tipo }) {
  const [open, setOpen] = useState(abrirMensagem);
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
              onClick={() => setOpen(false)}
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
