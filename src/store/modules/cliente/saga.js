import { takeLatest, all } from "redux-saga/effects";

import history from "../../../services/history";

// eslint-disable-next-line require-yield
export function* servico({ id }) {
  console.log(id);
  history.push(`/cadastrarServico/${id}`);
}

export default all([takeLatest("@servico/POST_REQUEST", servico)]);
