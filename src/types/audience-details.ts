import { 
  SpotifyMonthlyListener,
  TikTokFollower,
  YouTubeView,
  SoundCloudFollower
} from './audience';

export interface ChartTrack {
  title: string;
  songstats_track_id: string;
  top_position: number;
}

export interface ChartAlbum {
  title: string;
  songstats_track_id: string;
  top_position: number;
}

export interface Chart {
  chart: string;
  tracks?: ChartTrack[];
  albums?: ChartAlbum[];
}

export interface ChartData {
  country_code: string;
  charted_tracks_total: number;
  charted_tracks_current: number;
  charted_tracks_previous: number;
  charts: Chart[];
}

export interface AlbumChartData {
  country_code: string;
  charted_albums_total: number;
  charted_albums_current: number;
  charted_albums_previous: number;
  charts: Chart[];
}

export interface TrackCreatorData {
  title: string;
  songstats_track_id: string;
  creators_total: number;
  creator_reach_total: number;
}

export interface TrackRepostData {
  title: string;
  songstats_track_id: string;
  reposts_total: number;
  repost_reach_total: number;
}

export interface SpotifyAudienceDetailsData {
  monthly_listeners: SpotifyMonthlyListener[];
  city_charts: ChartData[];
  country_charts: ChartData[];
}

export interface AppleMusicAudienceDetailsData {
  track_charts: ChartData[];
  album_charts: AlbumChartData[];
}

export interface AmazonAudienceDetailsData {
  track_charts: ChartData[];
  album_charts: AlbumChartData[];
}

export interface DeezerAudienceDetailsData {
  track_charts: ChartData[];
  album_charts: AlbumChartData[];
}

export interface TikTokAudienceDetailsData {
  followers: TikTokFollower[];
  creators: {
    country_code: string;
    creators_total: number;
    creator_reach_total: number;
    tracks: TrackCreatorData[];
  }[];
}

export interface YouTubeAudienceDetailsData {
  views: YouTubeView[];
  creators: {
    country_code: string;
    creators_total: number;
    creator_reach_total: number;
    tracks: TrackCreatorData[];
  }[];
}

export interface ShazamAudienceDetailsData {
  city_charts: ChartData[];
  country_charts: ChartData[];
}

export interface ITunesAudienceDetailsData {
  track_charts: ChartData[];
  album_charts: AlbumChartData[];
}

export interface SoundCloudAudienceDetailsData {
  followers: SoundCloudFollower[];
  reposts: {
    country_code: string;
    reposts_total: number;
    repost_reach_total: number;
    tracks: TrackRepostData[];
  }[];
}

export interface PlatformAudienceDetails {
  source: string;
  data: SpotifyAudienceDetailsData | AppleMusicAudienceDetailsData | AmazonAudienceDetailsData |
        DeezerAudienceDetailsData | TikTokAudienceDetailsData | YouTubeAudienceDetailsData |
        ShazamAudienceDetailsData | ITunesAudienceDetailsData | SoundCloudAudienceDetailsData;
}

export interface ArtistAudienceDetailsResponse {
  result: 'success' | 'error';
  message: string;
  audience: PlatformAudienceDetails[];
  artist_info: {
    songstats_artist_id: string;
    avatar: string;
    name: string;
    site_url: string;
  };
  source_ids: string[];
}

export interface GetArtistAudienceDetailsParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  country_code: string;
  source: string;
}