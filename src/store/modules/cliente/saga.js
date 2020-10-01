/* eslint-disable require-yield */
import { takeLatest, all } from "redux-saga/effects";

import history from "../../../services/history";

// eslint-disable-next-line require-yield
export function* servico({ id }) {
  history.push(`/cadastrarServico/${id}`);
}

export function* getServico({ id }) {
  history.push(`/visualizarServico/${id}`);
}

export default all([
  takeLatest("@servico/POST_REQUEST", servico),
  takeLatest("@servico/GET_REQUEST", getServico),
]);
