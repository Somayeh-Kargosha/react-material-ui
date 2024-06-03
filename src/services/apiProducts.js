import { httpService } from "./axios.config";

export async function getVacuumProducts() {
  try {
    const res = await httpService.get("/products?categoryId=1");

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("صفحه ای که در جستجوی آن هستید وجود ندارد");
  }
}

export async function vacuumProductsLoader() {
  const vacuumProducts = await getVacuumProducts();
  return vacuumProducts;
}

export async function getWashingMachineProducts() {
  try {
    const res = await httpService.get("/products?categoryId=2");

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("صفحه ای که در جستجوی آن هستید وجود ندارد");
  }
}

export async function washingMachineProductsLoader() {
  const washingMachineProducts = await getWashingMachineProducts();
  return washingMachineProducts;
}

export async function getAirTreatmentProducts() {
  try {
    const res = await httpService.get("/products?categoryId=3");

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("صفحه ای که در جستجوی آن هستید وجود ندارد");
  }
}

export async function airTreatmentProductsLoader() {
  const airTreatmentProducts = await getAirTreatmentProducts();
  return airTreatmentProducts;
}

export async function getProducts(id) {
  try {
    const res = await httpService.get(`/products/${id}`);

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("صفحه ای که در جستجوی آن هستید وجود ندارد");
  }
}

export async function productsLoader({ params }) {
  const products = await getProducts(params.productId);
  return products;
}
