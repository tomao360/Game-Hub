import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    // When we provide initialData, this data inserted into the cache, because we gave our data a stale time of 24h,
    // for 24h our data is going to be fresh (no request will be made to the backend to fetch the genres)
    initialData: genres,
  });

export default useGenres;
