docker build -t react/context .
docker run --rm -it -v ${PWD}:/home/node/web react/context npm update