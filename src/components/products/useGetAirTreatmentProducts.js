import { useQuery } from "@tanstack/react-query";
import { getAirTreatmentProducts } from "../../services/apiProducts";

export function useGetAirTreatmentProducts() {
  const { isLoading, data: products } = useQuery({
    queryKey: ["airTreatmentProducts"],
    queryFn: getAirTreatmentProducts,
  });

  return { isLoading, products };
}
