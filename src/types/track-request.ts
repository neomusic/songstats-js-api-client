export interface ArtistTrackRequestResponse {
  result: 'success' | 'error';
  message: string;
}

export interface PostArtistTrackRequestParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  isrc?: string;
  link?: string;
  spotify_track_id?: string;
}

export interface DeleteArtistTrackRequestParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  songstats_track_id?: string;
  spotify_track_id?: string;
}