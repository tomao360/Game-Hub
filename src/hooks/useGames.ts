import { GameQuery } from "../App";
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

// The useGames hook passes the gameQuuery as a query string parameter to the useData hook - params object we sending to the server
// We also pass an array of dependencies, so if any of the dependencies changes, our effect will rerun and refresh the data from the server
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  ); // The params is one of the properties of AxiosRequestConfig object

export default useGames;
