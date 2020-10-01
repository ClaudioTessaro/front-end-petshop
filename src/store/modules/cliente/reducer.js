import produce from "immer";

const INITIAL_STATE = {
  id: null,
};

export default function servico(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, (draft) => {
    switch (action.type) {
      case "@servico/POST_REQUEST": {
        draft.id = action.id;
        break;
      }
      case "@servico/GET_REQUEST": {
        draft.id = action.id;
        break;
      }
      default:
        return state;
    }
  });
}
