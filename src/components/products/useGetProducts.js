import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

export function useGetProducts(id) {
  const { isLoading, data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: getProducts,
  });
  return { isLoading, product };
}
