import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // Array of objects, where each object has a property called platform of type Platform
  metacritic: number;
  rating_top: number;
}
