import { SongstatsConfig, DEFAULT_CONFIG } from "../config";

export class BaseClient {
  protected readonly config: SongstatsConfig;

  constructor(config: Partial<SongstatsConfig>) {
    this.config = { ...DEFAULT_CONFIG, ...config } as SongstatsConfig;

    if (!this.config.apiKey) {
      throw new Error("API key is required");
    }
  }

  protected async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.config.baseURL}${path}`;
    const headers = {
      Accept: "application/json",
      apikey: this.config.apiKey,
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  protected async get<T, P extends Record<string, any>>(
    path: string,
    params?: P
  ): Promise<T> {
    const queryParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, String(value));
        }
      });
    }

    const queryString = queryParams.toString();
    return this.request<T>(`${path}${queryString ? `?${queryString}` : ""}`);
  }

  protected async post<T, P extends Record<string, any>>(
    path: string,
    data?: P
  ): Promise<T> {
    return this.request<T>(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  protected async delete<T, P extends Record<string, any>>(
    path: string,
    params?: P
  ): Promise<T> {
    const queryParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, String(value));
        }
      });
    }

    const queryString = queryParams.toString();
    return this.request<T>(`${path}${queryString ? `?${queryString}` : ""}`, {
      method: "DELETE",
    });
  }
}
