import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Calendar from "react-calendar";
import Layout from "../../components/Layout";
import Notificacao from "../../components/Notificacao";
import Modal from "../../components/Modal";
import { MdAddCircleOutline } from "react-icons/md";
import Grid from "@material-ui/core/Grid";
import { ButtonPosition, ContentCalendar } from "./styles";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(new Date());

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose(bool) {
    setOpen(bool);
    window.location.reload(true);
  }
  return (
    <Layout>
      <ButtonPosition>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          startIcon={<MdAddCircleOutline />}
        >
          Novo agendamento
        </Button>
      </ButtonPosition>
      <Modal open={open} callbackParent={(bool) => handleClose(bool)} />
      <Grid container spacing={3}>
        <Notificacao date={data} />
        <ContentCalendar>
          <Calendar onChange={setData} value={data} />
        </ContentCalendar>
      </Grid>
    </Layout>
  );
}
