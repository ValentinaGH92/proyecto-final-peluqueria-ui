import axios from "axios";
import { urlCreateUser } from "../../config/apiConfig";

const createNewUser = async (userData) => {
  try {
    const data = await axios.post(urlCreateUser, userData);

    return data;
  } catch (error) {
    throw error;
  }
};

export default createNewUser;
