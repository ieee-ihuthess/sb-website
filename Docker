# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --global @gridsome/cli


# Copy the rest of your application code to the container
COPY . .

RUN npm install

# Expose the port that Gridsome uses (default is 8080)
EXPOSE 8080

# Start your Gridsome application
CMD ["gridsome", "develop"]
