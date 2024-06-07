import { useQuery } from "@tanstack/react-query";
import { getWashingMachineProducts } from "../../services/apiProducts";

export function useGetWashingMachineProducts() {
  const { isLoading, data: products } = useQuery({
    queryKey: ["whashingMachineProducts"],
    queryFn: getWashingMachineProducts,
  });

  return { isLoading, products };
}
