export interface CityData {
  city_name: string;
  city_region: string | null;
  country_code: string;
  city_lat: string;
  city_lng: string;
}

export interface SpotifyMonthlyListener extends CityData {
  current_listeners: number;
  peak_listeners: number;
}

export interface CityChart extends CityData {
  charted_tracks_current: number;
  charted_tracks_total: number;
}

export interface CountryChart {
  country_code: string;
  charted_tracks_current: number;
  charted_tracks_total: number;
}

export interface TrackChart {
  country_code: string;
  charted_tracks_total: number;
  charted_tracks_current: number;
  charted_tracks_previous: number;
}

export interface AlbumChart {
  country_code: string;
  charted_albums_total: number;
  charted_albums_current: number;
  charted_albums_previous: number;
}

export interface TikTokFollower {
  country_code: string;
  followers_total: number;
  follower_reach_total: number;
}

export interface Creator {
  country_code: string;
  creators_total: number;
  creator_reach_total: number;
}

export interface YouTubeView extends CityData {
  current_views: number;
  peak_views: number;
}

export interface SoundCloudFollower {
  country_code: string;
  followers_total: number;
  follower_reach_total: number;
}

export interface SoundCloudRepost {
  country_code: string;
  reposts_total: number;
  repost_reach_total: number;
}

export interface SpotifyAudienceData {
  monthly_listeners: SpotifyMonthlyListener[];
  city_charts: CityChart[];
  country_charts: CountryChart[];
}

export interface AppleMusicAudienceData {
  track_charts: TrackChart[];
  album_charts: AlbumChart[];
}

export interface AmazonAudienceData {
  track_charts: TrackChart[];
  album_charts: AlbumChart[];
}

export interface DeezerAudienceData {
  track_charts: TrackChart[];
  album_charts: AlbumChart[];
}

export interface TikTokAudienceData {
  followers: TikTokFollower[];
  creators: Creator[];
}

export interface YouTubeAudienceData {
  views: YouTubeView[];
  creators: Creator[];
}

export interface ShazamAudienceData {
  city_charts: CityChart[];
  country_charts: CountryChart[];
}

export interface ITunesAudienceData {
  track_charts: TrackChart[];
  album_charts: AlbumChart[];
}

export interface SoundCloudAudienceData {
  followers: SoundCloudFollower[];
  reposts: SoundCloudRepost[];
}

export interface PlatformAudience {
  source: string;
  data: SpotifyAudienceData | AppleMusicAudienceData | AmazonAudienceData |
        DeezerAudienceData | TikTokAudienceData | YouTubeAudienceData |
        ShazamAudienceData | ITunesAudienceData | SoundCloudAudienceData;
}

export interface ArtistAudienceResponse {
  result: 'success' | 'error';
  message: string;
  audience: PlatformAudience[];
  artist_info: {
    songstats_artist_id: string;
    avatar: string;
    name: string;
    site_url: string;
  };
  source_ids: string[];
}

export interface GetArtistAudienceParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  source: string;
}