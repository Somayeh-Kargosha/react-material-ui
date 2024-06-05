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



export async function getProducts({ queryKey }) {
  try {
    const id = queryKey[1];
    const res = await httpService.get(`/products/${id}`);
    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    throw Error("صفحه ای که در جستجوی آن هستید وجود ندارد");
  }
}

