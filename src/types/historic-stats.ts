export interface SpotifyHistoricData {
  date: string;
  popularity_current: number;
  followers_total: number;
  monthly_listeners_current: number;
  streams_total: number;
  playlists_current: number;
  playlist_reach_current: number;
}

export interface AppleMusicHistoricData {
  date: string;
  playlists_current: number;
  charts_current: number;
}

export interface AmazonHistoricData {
  date: string;
  followers_total: number;
  playlists_current: number;
  charts_current: number;
}

export interface DeezerHistoricData {
  date: string;
  followers_total: number;
  playlists_current: number;
  playlist_reach_current: number;
}

export interface InstagramHistoricData {
  date: string;
  videos_total: number;
  views_total: number;
  likes_total: number;
  comments_total: number;
  followers_total: number;
}

export interface TikTokHistoricData {
  date: string;
  videos_total: number;
  views_total: number;
  likes_total: number;
  shares_total: number;
  comments_total: number;
  followers_total: number;
  profile_likes_total: number;
}

export interface YouTubeHistoricData {
  date: string;
  subscribers_total: number;
  video_views_total: number;
  video_likes_total: number;
  video_comments_total: number;
  playlists_current: number;
}

export interface ShazamHistoricData {
  date: string;
  shazams_total: number;
  charted_tracks_current: number;
}

export interface TracklistHistoricData {
  date: string;
  total_support_total: number;
  unique_support_total: number;
}

export interface BeatportHistoricData {
  date: string;
  dj_charts_total: number;
  charted_tracks_current: number;
}

export interface TraxsourceHistoricData {
  date: string;
  dj_charts_total: number;
  charted_tracks_current?: number;
}

export interface ITunesHistoricData {
  date: string;
  charted_tracks_current: number;
}

export interface TidalHistoricData {
  date: string;
  playlists_current: number;
  charts_current: number;
}

export interface SoundCloudHistoricData {
  date: string;
  followers_total: number;
  streams_total: number;
  favorites_total: number;
  reposts_total: number;
}

export interface FacebookHistoricData {
  date: string;
  followers_total: number;
  talking_about_total: number;
}

export interface TwitterHistoricData {
  date: string;
  followers_total: number;
}

export interface SongkickHistoricData {
  date: string;
  followers_total: number;
}

export interface BandsInTownHistoricData {
  date: string;
  followers_total: number;
}

export interface PlatformHistoricStats {
  source: string;
  data: {
    history: Array<
      SpotifyHistoricData | AppleMusicHistoricData | AmazonHistoricData |
      DeezerHistoricData | InstagramHistoricData | TikTokHistoricData |
      YouTubeHistoricData | ShazamHistoricData | TracklistHistoricData |
      BeatportHistoricData | TraxsourceHistoricData | ITunesHistoricData |
      TidalHistoricData | SoundCloudHistoricData | FacebookHistoricData |
      TwitterHistoricData | SongkickHistoricData | BandsInTownHistoricData
    >;
  };
}

export interface ArtistHistoricStatsResponse {
  result: 'success' | 'error';
  message: string;
  stats: PlatformHistoricStats[];
  artist_info: {
    songstats_artist_id: string;
    avatar: string;
    name: string;
    site_url: string;
  };
  source_ids: string | null;
}

export interface GetArtistHistoricStatsParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  source: string;
  end_date?: string;
  start_date?: string;
  with_aggregates?: boolean;
}