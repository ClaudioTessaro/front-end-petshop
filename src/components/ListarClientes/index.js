import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import PageviewIcon from "@material-ui/icons/Pageview";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { MdDateRange, MdEmail, MdPhone } from "react-icons/md";

import { green, pink } from "@material-ui/core/colors";

import { Container, CardPosition, TitlePosition } from "./styles";

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function ListarPacientes() {
  return (
    <Container>
      {range.map((item) => (
        <CardPosition>
          <Card style={{ maxWidth: 210, borderRadius: 20, height: 210 }}>
            <CardContent>
              <TitlePosition>
                <Avatar
                  style={{
                    backgroundColor: deepPurple[500],
                  }}
                >
                  GL
                </Avatar>
                <Typography color="textSecondary" style={{ marginTop: -5 }}>
                  Glaucio Miranda
                </Typography>
              </TitlePosition>
              <Typography
                color="textSecondary"
                style={{ fontSize: 15, marginTop: 10 }}
              >
                <MdDateRange style={{ marginRight: 10, marginTop: 5 }} />
                <span>Consulta: 11/01/01</span>
              </Typography>
              <Typography color="textSecondary" style={{ fontSize: 15 }}>
                <MdEmail style={{ marginRight: 10, marginTop: 5 }} />
                <span>claudio0190@hotmail.com</span>
              </Typography>
              <Typography color="textSecondary" style={{ fontSize: 15 }}>
                <MdPhone style={{ marginRight: 10, marginTop: 5 }} />
                <span>33434970</span>
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
