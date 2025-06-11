# Use Node.js base image
FROM node:22-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
