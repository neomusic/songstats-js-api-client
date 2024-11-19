# Songstats API Client

Community TypeScript API client for the Songstats Enterprise API.

## Installation

```bash
npm install @schrottfabrik/songstats-js-api-client
```

## Usage

```typescript
import { SongstatsClient } from "@schrottfabrik/songstats-js-api-client";

const client = new SongstatsClient({
  apiKey: "your-api-key",
});

// Get artist info
const artistInfo = await client.artists.getInfo({
  songstats_artist_id: "artist-id",
});

// Get artist activities
const activities = await client.artists.getActivities({
  songstats_artist_id: "artist-id",
  source: "spotify,apple_music",
});

// Get artist stats
const stats = await client.artists.getStats({
  songstats_artist_id: "artist-id",
  source: "all",
});
```

## API Documentation

For detailed API documentation, please visit [Songstats API Documentation](https://api.songstats.com/docs).

## License

MIT
