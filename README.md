## <img src="https://ieee-ihu-thess.netlify.app/assets/img/sb-logo-min.dcb64279.png" width="30"/> IEEE Student Branch - IHU Thessaloniki Website

Our new, [JAMstack](https://jamstack.org/) powered website using the Vue based [Gridsome](https://gridsome.org/) static site generator.
### Development environment instructions

1. `npm install --global @gridsome/cli` to install Gridsome CLI.
2. Clone the project.
3. `npm install` inside the project directory to install dependencies.
4. `gridsome develop` to spin up a local dev environment.


### Development with docker

1. Clone the project
2. `docker build -t my-gridsome-app .` to create the docker image
3. `docker run -p 8080:8080 my-gridsome-app` to run the container
