# Use the official Node.js image as the base, for arm64 architecture
FROM --platform=linux/arm64/v8 node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Install Certbot
RUN apt-get update && apt-get install -y certbot

# Expose the ports for HTTP and HTTPS
EXPOSE 80
EXPOSE 443

# Run the Node.js server
CMD [ "node", "src/server.js" ]
