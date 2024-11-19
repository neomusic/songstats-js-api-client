export interface SearchResult {
  songstats_artist_id: string;
  avatar: string;
  name: string;
  site_url: string;
}

export interface ArtistSearchResponse {
  result: 'success' | 'error';
  message: string;
  results: SearchResult[];
}

export interface GetArtistSearchParams {
  q: string;
  limit?: number;
  offset?: number;
}