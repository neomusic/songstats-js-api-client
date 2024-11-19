export interface TopPlaylist {
  playlist_id: string;
  playlist_name: string;
  playlist_type: string;
  external_url: string;
  curator_id: string;
  curator_name: string;
  followers_total: number;
  image_url: string;
  top_position: number;
  recorded_at: string;
}

export interface PlatformTopPlaylists {
  source: string;
  top_playlists: TopPlaylist[];
}

export interface ArtistTopPlaylistsResponse {
  result: 'success' | 'error';
  message: string;
  data: PlatformTopPlaylists[];
}

export interface GetArtistTopPlaylistsParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  source: string;
  limit?: number;
  current?: boolean;
}