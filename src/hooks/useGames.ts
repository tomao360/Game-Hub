import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // Array of objects, where each object has a property called platform of type Platform
  metacritic: number;
}

// The useGames hook passes the selectedGenre as a query string parameter to the useData hook
// We also pass an array of dependencies, so if any of the dependencies changes, our effect will rerun and refresh the data from the server
const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]); // The params is one of the properties of AxiosRequestConfig object

export default useGames;
