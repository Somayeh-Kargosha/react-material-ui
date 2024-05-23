import axios from "axios";

const BASE_URL = "http://localhost:8000";

export async function getVacuumProducts() {
  try {
    const res = await axios.get(`${BASE_URL}/products?categoryId=1`);

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("failed getting data");
  }
}

export async function vacuumProductsLoader() {
  const vacuumProducts = await getVacuumProducts();
  return vacuumProducts;
}

export async function getWashingMachineProducts() {
  try {
    const res = await axios.get(`${BASE_URL}/products?categoryId=2`);

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("failed getting data");
  }
}

export async function washingMachineProductsLoader() {
  const washingMachineProducts = await getWashingMachineProducts();
  return washingMachineProducts;
}

export async function getAirTreatmentProducts() {
  try {
    const res = await axios.get(`${BASE_URL}/products?categoryId=3`);

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("failed getting data");
  }
}

export async function airTreatmentProductsLoader() {
  const airTreatmentProducts = await getAirTreatmentProducts();
  return airTreatmentProducts;
}

export async function getProducts(id) {
  try {
    const res = await axios.get(`${BASE_URL}/products/${id}`);

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("failed getting data");
  }
}

export async function productsLoader({ params }) {
  const products = await getProducts(params.productId);
  return products;
}
