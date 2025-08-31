# Base image
FROM node:21-alpine

# Create app directory
WORKDIR /usr/src/app

# Install postgresql-client for wait-for-it script
RUN apk add --no-cache postgresql-client

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Make scripts executable
RUN chmod +x wait-for-it.sh startup.sh

# Build application
RUN npm run build

# Expose the port
EXPOSE 8000

# Wait for database and start application
CMD ["./wait-for-it.sh", "db", "./startup.sh"]