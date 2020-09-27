import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import PageviewIcon from "@material-ui/icons/Pageview";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { MdDateRange, MdEmail, MdPhone } from "react-icons/md";

import api from "../../services/api";

import { green, pink } from "@material-ui/core/colors";

import { Container, CardPosition, TitlePosition } from "./styles";

export default function ListarPacientes() {
  const [client, setClient] = useState([]);

  useEffect(() => {
    async function buscarClientes() {
      const clientes = await api.get("/cliente");
      setClient(clientes.data);
    }
    buscarClientes();
  }, []);

  return (
    <Container>
      {client.map((cliente) => (
        <CardPosition>
          <Card style={{ width: 210, borderRadius: 20, height: 210 }}>
            <CardContent>
              <TitlePosition>
                <Avatar
                  style={{
                    backgroundColor: deepPurple[500],
                  }}
                >
                  {cliente.nome.substring(0, 2).toUpperCase()}
                </Avatar>
                <Typography color="textSecondary" style={{ marginTop: -5 }}>
                  {cliente.nome}
                </Typography>
              </TitlePosition>

              <Typography color="textSecondary" style={{ fontSize: 15 }}>
                <MdEmail style={{ marginRight: 10, marginTop: 5 }} />
                <span>{cliente.email}</span>
              </Typography>
              <Typography color="textSecondary" style={{ fontSize: 15 }}>
                <MdPhone style={{ marginRight: 10, marginTop: 5 }} />
                <span>{cliente.telefone}</span>
              </Typography>
              <div style={{ display: "flex", float: "right", marginTop: 30 }}>
                <Avatar
                  style={{
                    height: 25,
                    width: 25,
                    marginLeft: 10,
                    color: "#fff",
                  }}
                >
                  <MdDateRange />
                </Avatar>

                <Avatar
                  style={{
                    height: 25,
                    width: 25,
                    marginLeft: 10,
                    color: "#fff",
                    backgroundColor: pink[500],
                  }}
                >
                  <AssignmentIcon />
                </Avatar>
                <Avatar
                  style={{
                    height: 25,
                    width: 25,
                    marginLeft: 10,
                    color: "#fff",
                    backgroundColor: green[500],
                  }}
                >
                  <PageviewIcon />
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </CardPosition>
      ))}
    </Container>
  );
}
