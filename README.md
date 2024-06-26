# SIMPLE GUIDE

## Run project

1. Create **.env** file from **.env.example**
2. Install **BunJs** [(Show more)](https://bun.sh/docs/installation)
3. Install packages: ``bun install``
4. Move to **swagger** folder: ``cd swagger``
5. Build **build.yaml**
   file: ``../node_modules/swagger-cli/swagger-cli.js bundle dev.yaml --outfile build.yaml --type yaml``
6. Run your project: ``bun start``

## Environment

- **PORT**: Number port app will run on 