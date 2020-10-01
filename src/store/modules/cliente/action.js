export function postRequest(id) {
  return {
    type: "@servico/POST_REQUEST",
    id,
  };
}

export function getRequest(id) {
  return {
    type: "@servico/GET_REQUEST",
    id,
  };
}
