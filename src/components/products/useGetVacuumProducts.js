import { useQuery } from "@tanstack/react-query";
import { getVacuumProducts } from "../../services/apiProducts";

export function useGetVacuumProducts() {
  const { isLoading, data: products } = useQuery({
    queryKey: ["vacuumProducts"],
    queryFn: getVacuumProducts,
  });

  return { isLoading, products };
}
