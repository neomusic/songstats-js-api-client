export interface ArtistLink {
  source: string;
  external_id: string;
  url: string;
}

export interface ArtistInfo {
  songstats_artist_id: string;
  avatar: string;
  name: string;
  site_url: string;
}

export interface ArtistInfoResponse {
  result: 'success' | 'error';
  message: string;
  artist_info: ArtistInfo;
  links: ArtistLink[];
  genres: string[];
}

export interface TrackArtist {
  name: string;
  songstats_artist_id: string;
}

export interface TrackInfo {
  songstats_track_id: string;
  avatar: string;
  title: string;
  release_date: string;
  site_url: string;
  artists: TrackArtist[];
}

export interface ArtistActivity {
  source: string;
  activity_text: string;
  activity_type: string;
  activity_date: string;
  activity_url: string | null;
  activity_avatar: string | null;
  activity_tier: number;
  track_info: TrackInfo;
}

export interface ArtistActivitiesResponse {
  result: 'success' | 'error';
  message: string;
  data: ArtistActivity[];
}

export interface GetArtistActivitiesParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  source: string;
  limit?: number;
  offset?: number;
  albums?: boolean;
  editorial?: boolean;
  milestones?: boolean;
  recent?: boolean;
  tier?: 1 | 2 | 3 | 4;
}