import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Layout from "../../../components/Layout";

import api from "../../../services/api";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function VisualizarServicos(path) {
  const [servicos, setServicos] = useState([]);
  const classes = useStyles();

  const { id } = path.match.params;

  async function handleServico(id) {
    const serv = await api.get(`/servico/${id}`);
    setServicos(serv.data);
  }

  useEffect(() => {
    handleServico(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout style={{ marginRight: 10 }}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Tipo do Serviço</TableCell>
              <TableCell align="left">Preço do Serviço</TableCell>
              <TableCell align="left">Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {servicos.map((servico) => (
              <TableRow key={servico._id}>
                <TableCell align="left">{servico.tipo}</TableCell>
                <TableCell align="left">{servico.preco}</TableCell>
                <TableCell align="left">{servico.descricao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
