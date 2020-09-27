import { toast } from "react-toastify";

class Util {
  retornoUtil(response) {
    toast.success(response.data.message);
  }
}

export default new Util();
