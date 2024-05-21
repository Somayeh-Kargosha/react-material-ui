import axios from "axios";

const BASE_URL = "http://localhost:8000";

export async function getCategories() {
  const res = await axios.get(`${BASE_URL}/categories`);

  const { data } = res;
  return data;
}

export async function loader() {
  const categories = await getCategories();
  return categories;
}
