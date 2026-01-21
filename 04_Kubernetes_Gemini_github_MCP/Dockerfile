FROM ghcr.io/github/github-mcp-server:latest

# Install git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

CMD ["github-mcp-server"]
