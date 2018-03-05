# docker image with node v6.13.0 installed
FROM node:6.13.0

LABEL authors="syuraj@gmail.com"

# read DATABASE_URL variable from either .env file or heroku config
ENV DATABASE_URL=$DATABASE_URL

RUN mkdir /etc/graphql-hello

WORKDIR /etc/graphql-hello

COPY package.json package.json
RUN npm install

# Expose port for local development, HEROKU Ignores EXPOSE command
EXPOSE 3000

# Add your source files
COPY . .

CMD ["npm","start"]
