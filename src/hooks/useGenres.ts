import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    // When we provide initialData, this data inserted into the cache, because we gave our data a stale time of 24h,
    // for 24h our data is going to be fresh (no request will be made to the backend to fetch the genres)
    initialData: genres,
  });

export default useGenres;
