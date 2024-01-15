import { useQuery } from "@tanstack/react-query";
import { getAllCars } from "../../services/apiCars";

export function useCars() {
  const {
    isPending,
    data: cars,
    error,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: getAllCars,
  });

  return { isPending, error, cars };
}
