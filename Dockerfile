# build phase
FROM node:14-buster-slim AS build
COPY . /app
WORKDIR /app
RUN yarn build

# run phase
FROM node:14-stretch-slim

# copy artifacts from build phase
COPY --from=build /app/out/day01/day01.js /app/day01.js

# copy inputs
COPY data /app/data

# setup input selection - this can be randomized in later stages
ENV INPUT_DAY01_01=./data/day01/input.txt

# copy solution runner
COPY run.sh /app
RUN chmod +x /app/run.sh

WORKDIR /app

ENTRYPOINT ["./run.sh"]
