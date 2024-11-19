interface SongstatsConfig {
    apiKey: string;
    baseURL: string;
}
declare const DEFAULT_CONFIG: Partial<SongstatsConfig>;

declare class BaseClient {
    protected readonly config: SongstatsConfig;
    constructor(config: Partial<SongstatsConfig>);
    protected request<T>(path: string, options?: RequestInit): Promise<T>;
    protected get<T, P extends Record<string, any>>(path: string, params?: P): Promise<T>;
    protected post<T, P extends Record<string, any>>(path: string, data?: P): Promise<T>;
    protected delete<T, P extends Record<string, any>>(path: string, params?: P): Promise<T>;
}

interface ArtistLink {
    source: string;
    external_id: string;
    url: string;
}
interface ArtistInfo {
    songstats_artist_id: string;
    avatar: string;
    name: string;
    site_url: string;
}
interface ArtistInfoResponse {
    result: 'success' | 'error';
    message: string;
    artist_info: ArtistInfo;
    links: ArtistLink[];
    genres: string[];
}
interface TrackArtist {
    name: string;
    songstats_artist_id: string;
}
interface TrackInfo {
    songstats_track_id: string;
    avatar: string;
    title: string;
    release_date: string;
    site_url: string;
    artists: TrackArtist[];
}
interface ArtistActivity {
    source: string;
    activity_text: string;
    activity_type: string;
    activity_date: string;
    activity_url: string | null;
    activity_avatar: string | null;
    activity_tier: number;
    track_info: TrackInfo;
}
interface ArtistActivitiesResponse {
    result: 'success' | 'error';
    message: string;
    data: ArtistActivity[];
}
interface GetArtistActivitiesParams {
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

interface SpotifyStats {
    streams_total: number;
    monthly_listeners_current: number;
    popularity_current: number;
    followers_total: number;
    playlists_current: number;
    playlists_total: number;
    playlists_editorial_current: number;
    playlists_editorial_total: number;
    playlist_reach_current: number;
    playlist_reach_total: number;
    charts_current: number;
    charts_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
}
interface AppleMusicStats {
    playlists_current: number;
    playlists_total: number;
    playlists_editorial_current: number;
    playlists_editorial_total: number;
    charts_current: number;
    charts_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
    charted_countries_total: number;
}
interface AmazonStats {
    followers_total: number;
    playlists_current: number;
    playlists_total: number;
    playlists_editorial_current: number;
    playlists_editorial_total: number;
    charts_current: number;
    charts_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
}
interface DeezerStats {
    followers_total: number;
    playlists_current: number;
    playlists_total: number;
    playlists_editorial_current: number;
    playlists_editorial_total: number;
    playlist_reach_current: number;
    playlist_reach_total: number;
    charts_current: number;
    charts_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
}
interface YouTubeStats {
    videos_total: number;
    video_views_total: number;
    video_likes_total: number;
    video_comments_total: number;
    shorts_total: number;
    video_reach_total: number;
    subscribers_total: number;
    channel_views_total: number;
    short_views_total: number;
    short_likes_total: number;
    short_comments_total: number;
    playlists_current: number;
    playlists_total: number;
    playlists_editorial_current: number;
    playlists_editorial_total: number;
    charts_current: number;
    charts_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
    engagement_rate_total: number;
}
interface InstagramStats {
    videos_total: number;
    views_total: number;
    likes_total: number;
    comments_total: number;
    followers_total: number;
    video_reach_total: number;
    engagement_rate_total: number;
}
interface TikTokStats {
    videos_total: number;
    views_total: number;
    likes_total: number;
    shares_total: number;
    comments_total: number;
    followers_total: number;
    profile_likes_total: number;
    video_reach_total: number;
    engagement_rate_total: number;
}
interface ShazamStats {
    shazams_total: number;
    charts_current: number;
    charts_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
    charted_cities_total: number;
    charted_countries_total: number;
}
interface TracklistStats {
    total_support_total: number;
    unique_support_total: number;
    tracklist_views_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
}
interface BeatportStats {
    followers_total: number;
    dj_charts_total: number;
    charted_tracks_total: number;
    charted_tracks_current: number;
    overall_top_100_charted_tracks_total: number;
}
interface TraxsourceStats {
    dj_charts_total: number;
    charted_tracks_total: number;
    charted_tracks_current: number;
    overall_top_100_charted_tracks_total: number;
}
interface ITunesStats {
    charts_current: number;
    charts_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
    charted_countries_total: number;
}
interface TidalStats {
    playlists_current: number;
    playlists_total: number;
    playlists_editorial_current: number;
    playlists_editorial_total: number;
    charts_current: number;
    charts_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
}
interface SoundCloudStats {
    streams_total: number;
    favorites_total: number;
    reposts_total: number;
    followers_total: number;
    charts_current: number;
    charts_total: number;
    charted_tracks_current: number;
    charted_tracks_total: number;
    engagement_rate_total: number;
}
interface FacebookStats {
    followers_total: number;
    talking_about_current: number;
}
interface TwitterStats {
    followers_total: number;
}
interface SongkickStats {
    followers_total: number;
}
interface BandsInTownStats {
    followers_total: number;
}
interface PlatformStats {
    source: string;
    data: SpotifyStats | AppleMusicStats | AmazonStats | DeezerStats | YouTubeStats | InstagramStats | TikTokStats | ShazamStats | TracklistStats | BeatportStats | TraxsourceStats | ITunesStats | TidalStats | SoundCloudStats | FacebookStats | TwitterStats | SongkickStats | BandsInTownStats;
}
interface ArtistStatsResponse {
    result: 'success' | 'error';
    message: string;
    stats: PlatformStats[];
    artist_info: {
        songstats_artist_id: string;
        avatar: string;
        name: string;
        site_url: string;
    };
    source_ids: null | Record<string, string>;
}

interface SpotifyHistoricData {
    date: string;
    popularity_current: number;
    followers_total: number;
    monthly_listeners_current: number;
    streams_total: number;
    playlists_current: number;
    playlist_reach_current: number;
}
interface AppleMusicHistoricData {
    date: string;
    playlists_current: number;
    charts_current: number;
}
interface AmazonHistoricData {
    date: string;
    followers_total: number;
    playlists_current: number;
    charts_current: number;
}
interface DeezerHistoricData {
    date: string;
    followers_total: number;
    playlists_current: number;
    playlist_reach_current: number;
}
interface InstagramHistoricData {
    date: string;
    videos_total: number;
    views_total: number;
    likes_total: number;
    comments_total: number;
    followers_total: number;
}
interface TikTokHistoricData {
    date: string;
    videos_total: number;
    views_total: number;
    likes_total: number;
    shares_total: number;
    comments_total: number;
    followers_total: number;
    profile_likes_total: number;
}
interface YouTubeHistoricData {
    date: string;
    subscribers_total: number;
    video_views_total: number;
    video_likes_total: number;
    video_comments_total: number;
    playlists_current: number;
}
interface ShazamHistoricData {
    date: string;
    shazams_total: number;
    charted_tracks_current: number;
}
interface TracklistHistoricData {
    date: string;
    total_support_total: number;
    unique_support_total: number;
}
interface BeatportHistoricData {
    date: string;
    dj_charts_total: number;
    charted_tracks_current: number;
}
interface TraxsourceHistoricData {
    date: string;
    dj_charts_total: number;
    charted_tracks_current?: number;
}
interface ITunesHistoricData {
    date: string;
    charted_tracks_current: number;
}
interface TidalHistoricData {
    date: string;
    playlists_current: number;
    charts_current: number;
}
interface SoundCloudHistoricData {
    date: string;
    followers_total: number;
    streams_total: number;
    favorites_total: number;
    reposts_total: number;
}
interface FacebookHistoricData {
    date: string;
    followers_total: number;
    talking_about_total: number;
}
interface TwitterHistoricData {
    date: string;
    followers_total: number;
}
interface SongkickHistoricData {
    date: string;
    followers_total: number;
}
interface BandsInTownHistoricData {
    date: string;
    followers_total: number;
}
interface PlatformHistoricStats {
    source: string;
    data: {
        history: Array<SpotifyHistoricData | AppleMusicHistoricData | AmazonHistoricData | DeezerHistoricData | InstagramHistoricData | TikTokHistoricData | YouTubeHistoricData | ShazamHistoricData | TracklistHistoricData | BeatportHistoricData | TraxsourceHistoricData | ITunesHistoricData | TidalHistoricData | SoundCloudHistoricData | FacebookHistoricData | TwitterHistoricData | SongkickHistoricData | BandsInTownHistoricData>;
    };
}
interface ArtistHistoricStatsResponse {
    result: 'success' | 'error';
    message: string;
    stats: PlatformHistoricStats[];
    artist_info: {
        songstats_artist_id: string;
        avatar: string;
        name: string;
        site_url: string;
    };
    source_ids: string | null;
}
interface GetArtistHistoricStatsParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    source: string;
    end_date?: string;
    start_date?: string;
    with_aggregates?: boolean;
}

interface CityData {
    city_name: string;
    city_region: string | null;
    country_code: string;
    city_lat: string;
    city_lng: string;
}
interface SpotifyMonthlyListener extends CityData {
    current_listeners: number;
    peak_listeners: number;
}
interface CityChart extends CityData {
    charted_tracks_current: number;
    charted_tracks_total: number;
}
interface CountryChart {
    country_code: string;
    charted_tracks_current: number;
    charted_tracks_total: number;
}
interface TrackChart {
    country_code: string;
    charted_tracks_total: number;
    charted_tracks_current: number;
    charted_tracks_previous: number;
}
interface AlbumChart {
    country_code: string;
    charted_albums_total: number;
    charted_albums_current: number;
    charted_albums_previous: number;
}
interface TikTokFollower {
    country_code: string;
    followers_total: number;
    follower_reach_total: number;
}
interface Creator {
    country_code: string;
    creators_total: number;
    creator_reach_total: number;
}
interface YouTubeView extends CityData {
    current_views: number;
    peak_views: number;
}
interface SoundCloudFollower {
    country_code: string;
    followers_total: number;
    follower_reach_total: number;
}
interface SoundCloudRepost {
    country_code: string;
    reposts_total: number;
    repost_reach_total: number;
}
interface SpotifyAudienceData {
    monthly_listeners: SpotifyMonthlyListener[];
    city_charts: CityChart[];
    country_charts: CountryChart[];
}
interface AppleMusicAudienceData {
    track_charts: TrackChart[];
    album_charts: AlbumChart[];
}
interface AmazonAudienceData {
    track_charts: TrackChart[];
    album_charts: AlbumChart[];
}
interface DeezerAudienceData {
    track_charts: TrackChart[];
    album_charts: AlbumChart[];
}
interface TikTokAudienceData {
    followers: TikTokFollower[];
    creators: Creator[];
}
interface YouTubeAudienceData {
    views: YouTubeView[];
    creators: Creator[];
}
interface ShazamAudienceData {
    city_charts: CityChart[];
    country_charts: CountryChart[];
}
interface ITunesAudienceData {
    track_charts: TrackChart[];
    album_charts: AlbumChart[];
}
interface SoundCloudAudienceData {
    followers: SoundCloudFollower[];
    reposts: SoundCloudRepost[];
}
interface PlatformAudience {
    source: string;
    data: SpotifyAudienceData | AppleMusicAudienceData | AmazonAudienceData | DeezerAudienceData | TikTokAudienceData | YouTubeAudienceData | ShazamAudienceData | ITunesAudienceData | SoundCloudAudienceData;
}
interface ArtistAudienceResponse {
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
interface GetArtistAudienceParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    source: string;
}

interface ChartTrack {
    title: string;
    songstats_track_id: string;
    top_position: number;
}
interface ChartAlbum {
    title: string;
    songstats_track_id: string;
    top_position: number;
}
interface Chart {
    chart: string;
    tracks?: ChartTrack[];
    albums?: ChartAlbum[];
}
interface ChartData {
    country_code: string;
    charted_tracks_total: number;
    charted_tracks_current: number;
    charted_tracks_previous: number;
    charts: Chart[];
}
interface AlbumChartData {
    country_code: string;
    charted_albums_total: number;
    charted_albums_current: number;
    charted_albums_previous: number;
    charts: Chart[];
}
interface TrackCreatorData {
    title: string;
    songstats_track_id: string;
    creators_total: number;
    creator_reach_total: number;
}
interface TrackRepostData {
    title: string;
    songstats_track_id: string;
    reposts_total: number;
    repost_reach_total: number;
}
interface SpotifyAudienceDetailsData {
    monthly_listeners: SpotifyMonthlyListener[];
    city_charts: ChartData[];
    country_charts: ChartData[];
}
interface AppleMusicAudienceDetailsData {
    track_charts: ChartData[];
    album_charts: AlbumChartData[];
}
interface AmazonAudienceDetailsData {
    track_charts: ChartData[];
    album_charts: AlbumChartData[];
}
interface DeezerAudienceDetailsData {
    track_charts: ChartData[];
    album_charts: AlbumChartData[];
}
interface TikTokAudienceDetailsData {
    followers: TikTokFollower[];
    creators: {
        country_code: string;
        creators_total: number;
        creator_reach_total: number;
        tracks: TrackCreatorData[];
    }[];
}
interface YouTubeAudienceDetailsData {
    views: YouTubeView[];
    creators: {
        country_code: string;
        creators_total: number;
        creator_reach_total: number;
        tracks: TrackCreatorData[];
    }[];
}
interface ShazamAudienceDetailsData {
    city_charts: ChartData[];
    country_charts: ChartData[];
}
interface ITunesAudienceDetailsData {
    track_charts: ChartData[];
    album_charts: AlbumChartData[];
}
interface SoundCloudAudienceDetailsData {
    followers: SoundCloudFollower[];
    reposts: {
        country_code: string;
        reposts_total: number;
        repost_reach_total: number;
        tracks: TrackRepostData[];
    }[];
}
interface PlatformAudienceDetails {
    source: string;
    data: SpotifyAudienceDetailsData | AppleMusicAudienceDetailsData | AmazonAudienceDetailsData | DeezerAudienceDetailsData | TikTokAudienceDetailsData | YouTubeAudienceDetailsData | ShazamAudienceDetailsData | ITunesAudienceDetailsData | SoundCloudAudienceDetailsData;
}
interface ArtistAudienceDetailsResponse {
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
interface GetArtistAudienceDetailsParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    country_code: string;
    source: string;
}

interface CatalogArtist {
    name: string;
    songstats_artist_id: string;
}
interface CatalogTrack {
    songstats_track_id: string;
    avatar: string;
    title: string;
    release_date: string;
    site_url: string;
    isrcs: string[];
    artists: CatalogArtist[];
}
interface CatalogArtistInfo {
    songstats_artist_id: string;
    avatar: string;
    site_url: string;
    name: string;
    links?: ArtistLink[];
}
interface ArtistCatalogResponse {
    result: 'success' | 'error';
    message: string;
    catalog: CatalogTrack[];
    artist_info: CatalogArtistInfo;
    tracks_total: number;
    next_url: string | null;
}
interface GetArtistCatalogParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    limit?: number;
    offset?: number;
    with_links?: boolean;
}

interface TopTrack {
    track_name: string;
    artist_name: string;
    image_url: string;
    songstats_url: string;
    rank_value: number;
    songstats_track_id: string;
}
interface PlatformTopTracks {
    source: string;
    available_rank_types: string[];
    rank_type: string;
    top_tracks: TopTrack[];
}
interface ArtistTopTracksResponse {
    result: 'success' | 'error';
    message: string;
    data: PlatformTopTracks[];
}
interface GetArtistTopTracksParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    source: string;
    limit?: number;
    rank_type?: string;
}

interface TopPlaylist {
    playlist_id: string;
    playlist_name: string;
    playlist_type: string;
    external_url: string;
    curator_id: string;
    curator_name: string;
    followers_total: number;
    image_url: string;
    top_position: number;
    recorded_at: string;
}
interface PlatformTopPlaylists {
    source: string;
    top_playlists: TopPlaylist[];
}
interface ArtistTopPlaylistsResponse {
    result: 'success' | 'error';
    message: string;
    data: PlatformTopPlaylists[];
}
interface GetArtistTopPlaylistsParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    source: string;
    limit?: number;
    current?: boolean;
}

interface SearchResult {
    songstats_artist_id: string;
    avatar: string;
    name: string;
    site_url: string;
}
interface ArtistSearchResponse {
    result: 'success' | 'error';
    message: string;
    results: SearchResult[];
}
interface GetArtistSearchParams {
    q: string;
    limit?: number;
    offset?: number;
}

interface ArtistLinkRequestResponse {
    result: 'success' | 'error';
    message: string;
}
interface PostArtistLinkRequestParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    link: string;
}
interface DeleteArtistLinkRequestParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    link: string;
}

interface ArtistTrackRequestResponse {
    result: 'success' | 'error';
    message: string;
}
interface PostArtistTrackRequestParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    isrc?: string;
    link?: string;
    spotify_track_id?: string;
}
interface DeleteArtistTrackRequestParams {
    songstats_artist_id?: string;
    spotify_artist_id?: string;
    songstats_track_id?: string;
    spotify_track_id?: string;
}

declare class ArtistClient extends BaseClient {
    getInfo(params: {
        songstats_artist_id?: string;
        spotify_artist_id?: string;
    }): Promise<ArtistInfoResponse>;
    getActivities(params: GetArtistActivitiesParams): Promise<ArtistActivitiesResponse>;
    getStats(params: {
        songstats_artist_id?: string;
        spotify_artist_id?: string;
        source: string;
    }): Promise<ArtistStatsResponse>;
    getHistoricStats(params: GetArtistHistoricStatsParams): Promise<ArtistHistoricStatsResponse>;
    getAudience(params: GetArtistAudienceParams): Promise<ArtistAudienceResponse>;
    getAudienceDetails(params: GetArtistAudienceDetailsParams): Promise<ArtistAudienceDetailsResponse>;
    getCatalog(params: GetArtistCatalogParams): Promise<ArtistCatalogResponse>;
    getTopTracks(params: GetArtistTopTracksParams): Promise<ArtistTopTracksResponse>;
    getTopPlaylists(params: GetArtistTopPlaylistsParams): Promise<ArtistTopPlaylistsResponse>;
    search(params: GetArtistSearchParams): Promise<ArtistSearchResponse>;
    submitLinkRequest(params: PostArtistLinkRequestParams): Promise<ArtistLinkRequestResponse>;
    removeLinkRequest(params: DeleteArtistLinkRequestParams): Promise<ArtistLinkRequestResponse>;
    submitTrackRequest(params: PostArtistTrackRequestParams): Promise<ArtistTrackRequestResponse>;
    removeTrackRequest(params: DeleteArtistTrackRequestParams): Promise<ArtistTrackRequestResponse>;
}

declare class SongstatsClient {
    readonly artists: ArtistClient;
    constructor(config: Partial<SongstatsConfig>);
}

export { type AlbumChart, type AlbumChartData, type AmazonAudienceData, type AmazonAudienceDetailsData, type AmazonHistoricData, type AmazonStats, type AppleMusicAudienceData, type AppleMusicAudienceDetailsData, type AppleMusicHistoricData, type AppleMusicStats, type ArtistActivitiesResponse, type ArtistActivity, type ArtistAudienceDetailsResponse, type ArtistAudienceResponse, type ArtistCatalogResponse, type ArtistHistoricStatsResponse, type ArtistInfo, type ArtistInfoResponse, type ArtistLink, type ArtistLinkRequestResponse, type ArtistSearchResponse, type ArtistStatsResponse, type ArtistTopPlaylistsResponse, type ArtistTopTracksResponse, type ArtistTrackRequestResponse, type BandsInTownHistoricData, type BandsInTownStats, type BeatportHistoricData, type BeatportStats, type CatalogArtist, type CatalogArtistInfo, type CatalogTrack, type Chart, type ChartAlbum, type ChartData, type ChartTrack, type CityChart, type CityData, type CountryChart, type Creator, DEFAULT_CONFIG, type DeezerAudienceData, type DeezerAudienceDetailsData, type DeezerHistoricData, type DeezerStats, type DeleteArtistLinkRequestParams, type DeleteArtistTrackRequestParams, type FacebookHistoricData, type FacebookStats, type GetArtistActivitiesParams, type GetArtistAudienceDetailsParams, type GetArtistAudienceParams, type GetArtistCatalogParams, type GetArtistHistoricStatsParams, type GetArtistSearchParams, type GetArtistTopPlaylistsParams, type GetArtistTopTracksParams, type ITunesAudienceData, type ITunesAudienceDetailsData, type ITunesHistoricData, type ITunesStats, type InstagramHistoricData, type InstagramStats, type PlatformAudience, type PlatformAudienceDetails, type PlatformHistoricStats, type PlatformStats, type PlatformTopPlaylists, type PlatformTopTracks, type PostArtistLinkRequestParams, type PostArtistTrackRequestParams, type SearchResult, type ShazamAudienceData, type ShazamAudienceDetailsData, type ShazamHistoricData, type ShazamStats, type SongkickHistoricData, type SongkickStats, SongstatsClient, type SongstatsConfig, type SoundCloudAudienceData, type SoundCloudAudienceDetailsData, type SoundCloudFollower, type SoundCloudHistoricData, type SoundCloudRepost, type SoundCloudStats, type SpotifyAudienceData, type SpotifyAudienceDetailsData, type SpotifyHistoricData, type SpotifyMonthlyListener, type SpotifyStats, type TidalHistoricData, type TidalStats, type TikTokAudienceData, type TikTokAudienceDetailsData, type TikTokFollower, type TikTokHistoricData, type TikTokStats, type TopPlaylist, type TopTrack, type TrackArtist, type TrackChart, type TrackCreatorData, type TrackInfo, type TrackRepostData, type TracklistHistoricData, type TracklistStats, type TraxsourceHistoricData, type TraxsourceStats, type TwitterHistoricData, type TwitterStats, type YouTubeAudienceData, type YouTubeAudienceDetailsData, type YouTubeHistoricData, type YouTubeStats, type YouTubeView };
