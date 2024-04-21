FROM cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1

WORKDIR /e2e

COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress

RUN npm i &&\
    npx cypress info

ENTRYPOINT [ "npx", "cypress", "run" ]