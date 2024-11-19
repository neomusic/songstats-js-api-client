import { describe, it, expect } from 'vitest';
import { SongstatsClient } from '../index';

describe('ArtistClient', () => {
  const client = new SongstatsClient({ apiKey: 'test-key' });

  describe('submitTrackRequest', () => {
    it('should throw error if no ID is provided', async () => {
      await expect(client.artists.submitTrackRequest({ isrc: 'UKKGA2000013' }))
        .rejects
        .toThrow('Either songstats_artist_id or spotify_artist_id must be provided');
    });

    it('should throw error if no track identifier is provided', async () => {
      await expect(client.artists.submitTrackRequest({ songstats_artist_id: 'test' }))
        .rejects
        .toThrow('At least one of isrc, link, or spotify_track_id must be provided');
    });
  });

  describe('removeTrackRequest', () => {
    it('should throw error if no ID is provided', async () => {
      await expect(client.artists.removeTrackRequest({ songstats_track_id: 'test-track' }))
        .rejects
        .toThrow('Either songstats_artist_id or spotify_artist_id must be provided');
    });

    it('should throw error if no track ID is provided', async () => {
      await expect(client.artists.removeTrackRequest({ songstats_artist_id: 'test' }))
        .rejects
        .toThrow('Either songstats_track_id or spotify_track_id must be provided');
    });
  });
});