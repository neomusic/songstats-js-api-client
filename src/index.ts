import { SongstatsConfig } from './config';
import { ArtistClient } from './client/artist';

export class SongstatsClient {
  public readonly artists: ArtistClient;

  constructor(config: Partial<SongstatsConfig>) {
    this.artists = new ArtistClient(config);
  }
}

export * from './types/artist';
export * from './types/stats';
export * from './types/historic-stats';
export * from './types/audience';
export * from './types/audience-details';
export * from './types/catalog';
export * from './types/top-tracks';
export * from './types/top-playlists';
export * from './types/search';
export * from './types/link-request';
export * from './types/track-request';
export * from './config';