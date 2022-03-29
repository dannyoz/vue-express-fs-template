import axios from "axios";

export default {
  async getData() {
    const res = await axios.get("http://localhost:5000");
    return res.data;
  },
};
