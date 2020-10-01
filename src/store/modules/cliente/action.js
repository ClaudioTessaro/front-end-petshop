export function postRequest(id) {
  return {
    type: "@servico/POST_REQUEST",
    id,
  };
}
