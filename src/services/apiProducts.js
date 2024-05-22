import axios from "axios";

const BASE_URL = "http://localhost:9000";

export async function getProducts() {
  try {
    const res = await axios.get(`${BASE_URL}/products`);

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("failed getting data");
  }
}

export async function loader() {
  const products = await getProducts();
  return products;
}
