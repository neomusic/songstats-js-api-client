export interface SongstatsConfig {
  apiKey: string;
  baseURL: string;
  requestOptions: Object
}

export const DEFAULT_CONFIG: Partial<SongstatsConfig> = {
  baseURL: 'https://api.songstats.com/enterprise/v1'
};