export interface ArtistLinkRequestResponse {
  result: 'success' | 'error';
  message: string;
}

export interface PostArtistLinkRequestParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  link: string;
}

export interface DeleteArtistLinkRequestParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  link: string;
}