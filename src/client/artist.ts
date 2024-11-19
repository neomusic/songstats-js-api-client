import { BaseClient } from "./base";
import {
  ArtistInfoResponse,
  ArtistActivitiesResponse,
  GetArtistActivitiesParams,
} from "../types/artist";
import { ArtistStatsResponse } from "../types/stats";
import {
  ArtistHistoricStatsResponse,
  GetArtistHistoricStatsParams,
} from "../types/historic-stats";
import {
  ArtistAudienceResponse,
  GetArtistAudienceParams,
} from "../types/audience";
import {
  ArtistAudienceDetailsResponse,
  GetArtistAudienceDetailsParams,
} from "../types/audience-details";
import {
  ArtistCatalogResponse,
  GetArtistCatalogParams,
} from "../types/catalog";
import {
  ArtistTopTracksResponse,
  GetArtistTopTracksParams,
} from "../types/top-tracks";
import {
  ArtistTopPlaylistsResponse,
  GetArtistTopPlaylistsParams,
} from "../types/top-playlists";
import { ArtistSearchResponse, GetArtistSearchParams } from "../types/search";
import {
  ArtistLinkRequestResponse,
  PostArtistLinkRequestParams,
  DeleteArtistLinkRequestParams,
} from "../types/link-request";
import {
  ArtistTrackRequestResponse,
  PostArtistTrackRequestParams,
  DeleteArtistTrackRequestParams,
} from "../types/track-request";

export class ArtistClient extends BaseClient {
  async getInfo(params: {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
  }): Promise<ArtistInfoResponse> {
    return this.get<ArtistInfoResponse, typeof params>("/artists/info", params);
  }

  async getActivities(
    params: GetArtistActivitiesParams
  ): Promise<ArtistActivitiesResponse> {
    return this.get<ArtistActivitiesResponse, GetArtistActivitiesParams>(
      "/artists/activities",
      params
    );
  }

  async getStats(params: {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    source: string;
  }): Promise<ArtistStatsResponse> {
    return this.get<ArtistStatsResponse, typeof params>(
      "/artists/stats",
      params
    );
  }

  async getHistoricStats(
    params: GetArtistHistoricStatsParams
  ): Promise<ArtistHistoricStatsResponse> {
    return this.get<ArtistHistoricStatsResponse, GetArtistHistoricStatsParams>(
      "/artists/historic_stats",
      params
    );
  }

  async getAudience(
    params: GetArtistAudienceParams
  ): Promise<ArtistAudienceResponse> {
    return this.get<ArtistAudienceResponse, GetArtistAudienceParams>(
      "/artists/audience",
      params
    );
  }

  async getAudienceDetails(
    params: GetArtistAudienceDetailsParams
  ): Promise<ArtistAudienceDetailsResponse> {
    return this.get<
      ArtistAudienceDetailsResponse,
      GetArtistAudienceDetailsParams
    >("/artists/audience/details", params);
  }

  async getCatalog(
    params: GetArtistCatalogParams
  ): Promise<ArtistCatalogResponse> {
    return this.get<ArtistCatalogResponse, GetArtistCatalogParams>(
      "/artists/catalog",
      params
    );
  }

  async getTopTracks(
    params: GetArtistTopTracksParams
  ): Promise<ArtistTopTracksResponse> {
    return this.get<ArtistTopTracksResponse, GetArtistTopTracksParams>(
      "/artists/top_tracks",
      params
    );
  }

  async getTopPlaylists(
    params: GetArtistTopPlaylistsParams
  ): Promise<ArtistTopPlaylistsResponse> {
    return this.get<ArtistTopPlaylistsResponse, GetArtistTopPlaylistsParams>(
      "/artists/top_playlists",
      params
    );
  }

  async search(params: GetArtistSearchParams): Promise<ArtistSearchResponse> {
    return this.get<ArtistSearchResponse, GetArtistSearchParams>(
      "/artists/search",
      params
    );
  }

  async submitLinkRequest(
    params: PostArtistLinkRequestParams
  ): Promise<ArtistLinkRequestResponse> {
    return this.post<ArtistLinkRequestResponse, PostArtistLinkRequestParams>(
      "/artists/link_request",
      params
    );
  }

  async removeLinkRequest(
    params: DeleteArtistLinkRequestParams
  ): Promise<ArtistLinkRequestResponse> {
    return this.delete<
      ArtistLinkRequestResponse,
      DeleteArtistLinkRequestParams
    >("/artists/link_request", params);
  }

  async submitTrackRequest(
    params: PostArtistTrackRequestParams
  ): Promise<ArtistTrackRequestResponse> {
    if (!params.songstats_artist_id && !params.spotify_artist_id) {
      throw new Error(
        "Either songstats_artist_id or spotify_artist_id must be provided"
      );
    }

    if (!params.isrc && !params.link && !params.spotify_track_id) {
      throw new Error(
        "At least one of isrc, link, or spotify_track_id must be provided"
      );
    }

    return this.post<ArtistTrackRequestResponse, PostArtistTrackRequestParams>(
      "/artists/track_request",
      params
    );
  }

  async removeTrackRequest(
    params: DeleteArtistTrackRequestParams
  ): Promise<ArtistTrackRequestResponse> {
    if (!params.songstats_artist_id && !params.spotify_artist_id) {
      throw new Error(
        "Either songstats_artist_id or spotify_artist_id must be provided"
      );
    }

    if (!params.songstats_track_id && !params.spotify_track_id) {
      throw new Error(
        "Either songstats_track_id or spotify_track_id must be provided"
      );
    }

    return this.delete<
      ArtistTrackRequestResponse,
      DeleteArtistTrackRequestParams
    >("/artists/track_request", params);
  }
}
