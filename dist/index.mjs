// src/config.ts
var DEFAULT_CONFIG = {
  baseURL: "https://api.songstats.com/enterprise/v1"
};

// src/client/base.ts
var BaseClient = class {
  constructor(config) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    if (!this.config.apiKey) {
      throw new Error("API key is required");
    }
  }
  async request(path, options = {}) {
    const url = `${this.config.baseURL}${path}`;
    const headers = {
      Accept: "application/json",
      apikey: this.config.apiKey,
      ...options.headers
    };
    const response = await fetch(url, {
      ...options,
      headers
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
  async get(path, params) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== void 0) {
          queryParams.append(key, String(value));
        }
      });
    }
    const queryString = queryParams.toString();
    return this.request(`${path}${queryString ? `?${queryString}` : ""}`);
  }
  async post(path, data) {
    return this.request(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data ? JSON.stringify(data) : void 0
    });
  }
  async delete(path, params) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== void 0) {
          queryParams.append(key, String(value));
        }
      });
    }
    const queryString = queryParams.toString();
    return this.request(`${path}${queryString ? `?${queryString}` : ""}`, {
      method: "DELETE"
    });
  }
};

// src/client/artist.ts
var ArtistClient = class extends BaseClient {
  async getInfo(params) {
    return this.get("/artists/info", params);
  }
  async getActivities(params) {
    return this.get(
      "/artists/activities",
      params
    );
  }
  async getStats(params) {
    return this.get(
      "/artists/stats",
      params
    );
  }
  async getHistoricStats(params) {
    return this.get(
      "/artists/historic_stats",
      params
    );
  }
  async getAudience(params) {
    return this.get(
      "/artists/audience",
      params
    );
  }
  async getAudienceDetails(params) {
    return this.get("/artists/audience/details", params);
  }
  async getCatalog(params) {
    return this.get(
      "/artists/catalog",
      params
    );
  }
  async getTopTracks(params) {
    return this.get(
      "/artists/top_tracks",
      params
    );
  }
  async getTopPlaylists(params) {
    return this.get(
      "/artists/top_playlists",
      params
    );
  }
  async search(params) {
    return this.get(
      "/artists/search",
      params
    );
  }
  async submitLinkRequest(params) {
    return this.post(
      "/artists/link_request",
      params
    );
  }
  async removeLinkRequest(params) {
    return this.delete("/artists/link_request", params);
  }
  async submitTrackRequest(params) {
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
    return this.post(
      "/artists/track_request",
      params
    );
  }
  async removeTrackRequest(params) {
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
    return this.delete("/artists/track_request", params);
  }
};

// src/index.ts
var SongstatsClient = class {
  constructor(config) {
    this.artists = new ArtistClient(config);
  }
};
export {
  DEFAULT_CONFIG,
  SongstatsClient
};
