# abutalha.co.uk

Source for the personal portfolio website at [abutalha.co.uk](https://abutalha.co.uk).

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev -- --host 127.0.0.1 --port 5757
```

Build for production:

```bash
npm run build
```

## Docker

Build and start the website container:

```bash
docker compose up -d --build
```

The Compose service publishes the site at `http://127.0.0.1:5757` by default and uses `restart: unless-stopped` so it starts automatically with Docker. Override the host port with `HOST_PORT=8080 docker compose up -d --build`.
