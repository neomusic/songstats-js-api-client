export interface TopTrack {
  track_name: string;
  artist_name: string;
  image_url: string;
  songstats_url: string;
  rank_value: number;
  songstats_track_id: string;
}

export interface PlatformTopTracks {
  source: string;
  available_rank_types: string[];
  rank_type: string;
  top_tracks: TopTrack[];
}

export interface ArtistTopTracksResponse {
  result: 'success' | 'error';
  message: string;
  data: PlatformTopTracks[];
}

export interface GetArtistTopTracksParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  source: string;
  limit?: number;
  rank_type?: string;
}