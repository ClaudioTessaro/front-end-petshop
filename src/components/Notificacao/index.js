/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { format, isBefore } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import ModalDetalhado from "../../components/Modal/ModalDetalhado";
import "react-calendar/dist/Calendar.css";

import api from "../../services/api";

import { Content, Time, Container, ContainerColor } from "./styles";

export default function Notificacao({ date }) {
  const [agendamentos, setAgendamentos] = useState([]);
  const [open, setOpen] = useState(false);
  const [agendamentoDetalhado, setAgendamentoDetalhado] = useState([]);

  async function handleClick(id) {
    handleOpen();
    const response = await api.get(`/agendamento/${id}`);
    setAgendamentoDetalhado(response.data);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose(bool) {
    setOpen(bool);
  }

  useEffect(() => {
    const dataAgendamento = format(date, "yyyy-MM-dd HH:mm:ss");
    async function loadAgendamentos() {
      const response = await api.get(`agendamentos?data=${dataAgendamento}`);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = response.data.map((agendamento) => {
        const horario = utcToZonedTime(agendamento.data_agendamento, timezone)
          .toString()
          .split(" ");
        const hora = horario[4];

        return {
          id: agendamento.id,
          nome: agendamento.paciente.nome,
          tipo: agendamento.tipo_agendamento,
          hora,
          past: isBefore(
            utcToZonedTime(agendamento.data_agendamento, timezone),
            new Date()
          ),
        };
      });
      setAgendamentos(data);
    }
    loadAgendamentos();
  }, [date, open]);

  return (
    <>
      <Container>
        {agendamentos.map((agendamento) => (
          <Content key={agendamento.id} past={agendamento.past}>
            <ContainerColor />
            <ul>
              <button type="button" onClick={() => handleClick(agendamento.id)}>
                <Time key={agendamento.id}>
                  <h3>{agendamento.nome}</h3>
                  <br />
                  <h4>Tipo de Agendamento: {agendamento.tipo}</h4>
                  <br />
                  <h4>Horario: {agendamento.hora} </h4>
                </Time>
              </button>
            </ul>
            <ModalDetalhado
              open={open}
              callbackParent={(bool) => handleClose(bool)}
              data={agendamentoDetalhado}
            />
          </Content>
        ))}
      </Container>
    </>
  );
}
