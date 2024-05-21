import axios from "axios";

const BASE_URL = "http://localhost:9000";

export async function getProducts() {
  const res = await axios.get(`${BASE_URL}/products`);

  const { data } = res;
  return data;
}

export async function loader() {
  const products = await getProducts();
  return products;
}
