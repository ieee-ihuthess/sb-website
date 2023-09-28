# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Install project dependencies
RUN npm install --global @gridsome/cli

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./


# Copy the rest of your application code to the container
COPY . .

RUN npm install

EXPOSE 8080

# Start your Gridsome application
CMD ["gridsome", "develop"]
