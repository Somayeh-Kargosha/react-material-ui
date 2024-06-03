import { httpService } from "./axios.config";

export async function getCategories() {
  try {
    const res = await httpService.get("/categories");

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("صفحه مورد نظر یافت نشد");
  }
}

export async function loader() {
  const categories = await getCategories();
  return categories;
}
