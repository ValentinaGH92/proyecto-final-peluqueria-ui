import axios from "axios";
import { urlGetProducts } from "../../config/apiConfig";

const getProducts = async () => {
  try {
    const response = await axios.get(urlGetProducts);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getProducts;
