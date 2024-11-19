import { ArtistLink } from './artist';

export interface CatalogArtist {
  name: string;
  songstats_artist_id: string;
}

export interface CatalogTrack {
  songstats_track_id: string;
  avatar: string;
  title: string;
  release_date: string;
  site_url: string;
  isrcs: string[];
  artists: CatalogArtist[];
}

export interface CatalogArtistInfo {
  songstats_artist_id: string;
  avatar: string;
  site_url: string;
  name: string;
  links?: ArtistLink[];
}

export interface ArtistCatalogResponse {
  result: 'success' | 'error';
  message: string;
  catalog: CatalogTrack[];
  artist_info: CatalogArtistInfo;
  tracks_total: number;
  next_url: string | null;
}

export interface GetArtistCatalogParams {
  songstats_artist_id?: string;
  spotify_artist_id?: string;
  limit?: number;
  offset?: number;
  with_links?: boolean;
}