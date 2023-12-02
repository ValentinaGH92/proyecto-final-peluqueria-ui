import axios from "axios";
import { urlLogin } from "../../config/apiConfig";

const login = async (userData) => {
  try {
    const response = await axios.post(urlLogin, userData);

    const statusCode = response.status;

    const data = await response.json();

    sessionStorage.setItem("utid", data.token);
    sessionStorage.setItem("userName", data.userName);

    return statusCode === 200 && data.token;
  } catch (error) {
    throw error;
  }
};

export default login;
