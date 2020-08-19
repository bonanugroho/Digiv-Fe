FROM nginx:1.18-alpine

# Set working directory
WORKDIR /usr/app

RUN apk update && \
    apk add --no-cache git \
                       python3 \
                       curl \
                       autoconf \
                       automake \
                       build-base \
                       zlib \
                       zlib-dev \
                       jpeg-dev \
                       libpng-dev \
                       nasm \
                       libtool \
                       yarn --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community" \
                       nodejs --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community" \
                       tzdata

COPY apps/ ./

RUN pip3 install git+https://github.com/Supervisor/supervisor && \
    yarn install && \
    yarn cache clean && \
    yarn build

COPY supervisord.conf ./

RUN mkdir -p /var/log/supervisor

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in "conf.d/" dir get included in main config
COPY ./default.conf /etc/nginx/conf.d/

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "supervisord", "-c", "supervisord.conf" ]
