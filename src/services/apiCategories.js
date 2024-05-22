import axios from "axios";

const BASE_URL = "http://localhost:8000";

export async function getCategories() {
  try {
    const res = await axios.get(`${BASE_URL}/categories`);

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("failed getting data");
  }
}

export async function loader() {
  const categories = await getCategories();
  return categories;
}
