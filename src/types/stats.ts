export interface SpotifyStats {
  streams_total: number;
  monthly_listeners_current: number;
  popularity_current: number;
  followers_total: number;
  playlists_current: number;
  playlists_total: number;
  playlists_editorial_current: number;
  playlists_editorial_total: number;
  playlist_reach_current: number;
  playlist_reach_total: number;
  charts_current: number;
  charts_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
}

export interface AppleMusicStats {
  playlists_current: number;
  playlists_total: number;
  playlists_editorial_current: number;
  playlists_editorial_total: number;
  charts_current: number;
  charts_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
  charted_countries_total: number;
}

export interface AmazonStats {
  followers_total: number;
  playlists_current: number;
  playlists_total: number;
  playlists_editorial_current: number;
  playlists_editorial_total: number;
  charts_current: number;
  charts_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
}

export interface DeezerStats {
  followers_total: number;
  playlists_current: number;
  playlists_total: number;
  playlists_editorial_current: number;
  playlists_editorial_total: number;
  playlist_reach_current: number;
  playlist_reach_total: number;
  charts_current: number;
  charts_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
}

export interface YouTubeStats {
  videos_total: number;
  video_views_total: number;
  video_likes_total: number;
  video_comments_total: number;
  shorts_total: number;
  video_reach_total: number;
  subscribers_total: number;
  channel_views_total: number;
  short_views_total: number;
  short_likes_total: number;
  short_comments_total: number;
  playlists_current: number;
  playlists_total: number;
  playlists_editorial_current: number;
  playlists_editorial_total: number;
  charts_current: number;
  charts_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
  engagement_rate_total: number;
}

export interface InstagramStats {
  videos_total: number;
  views_total: number;
  likes_total: number;
  comments_total: number;
  followers_total: number;
  video_reach_total: number;
  engagement_rate_total: number;
}

export interface TikTokStats {
  videos_total: number;
  views_total: number;
  likes_total: number;
  shares_total: number;
  comments_total: number;
  followers_total: number;
  profile_likes_total: number;
  video_reach_total: number;
  engagement_rate_total: number;
}

export interface ShazamStats {
  shazams_total: number;
  charts_current: number;
  charts_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
  charted_cities_total: number;
  charted_countries_total: number;
}

export interface TracklistStats {
  total_support_total: number;
  unique_support_total: number;
  tracklist_views_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
}

export interface BeatportStats {
  followers_total: number;
  dj_charts_total: number;
  charted_tracks_total: number;
  charted_tracks_current: number;
  overall_top_100_charted_tracks_total: number;
}

export interface TraxsourceStats {
  dj_charts_total: number;
  charted_tracks_total: number;
  charted_tracks_current: number;
  overall_top_100_charted_tracks_total: number;
}

export interface ITunesStats {
  charts_current: number;
  charts_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
  charted_countries_total: number;
}

export interface TidalStats {
  playlists_current: number;
  playlists_total: number;
  playlists_editorial_current: number;
  playlists_editorial_total: number;
  charts_current: number;
  charts_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
}

export interface SoundCloudStats {
  streams_total: number;
  favorites_total: number;
  reposts_total: number;
  followers_total: number;
  charts_current: number;
  charts_total: number;
  charted_tracks_current: number;
  charted_tracks_total: number;
  engagement_rate_total: number;
}

export interface FacebookStats {
  followers_total: number;
  talking_about_current: number;
}

export interface TwitterStats {
  followers_total: number;
}

export interface SongkickStats {
  followers_total: number;
}

export interface BandsInTownStats {
  followers_total: number;
}

export interface PlatformStats {
  source: string;
  data: SpotifyStats | AppleMusicStats | AmazonStats | DeezerStats | YouTubeStats |
        InstagramStats | TikTokStats | ShazamStats | TracklistStats | BeatportStats |
        TraxsourceStats | ITunesStats | TidalStats | SoundCloudStats | FacebookStats |
        TwitterStats | SongkickStats | BandsInTownStats;
}

export interface ArtistStatsResponse {
  result: 'success' | 'error';
  message: string;
  stats: PlatformStats[];
  artist_info: {
    songstats_artist_id: string;
    avatar: string;
    name: string;
    site_url: string;
  };
  source_ids: null | Record<string, string>;
}