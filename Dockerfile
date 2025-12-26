# build nginx + nginx-rtmp-module on arm64
FROM nginx:mainline-alpine

RUN apk add --no-cache \
    build-base git openssl-dev pcre-dev zlib-dev \
    && \
    git clone https://github.com/arut/nginx-rtmp-module.git /tmp/nginx-rtmp-module && \
    cd /tmp/nginx-rtmp-module && \
    git checkout master && \
    cd / && \
    # rebuild nginx with RTMP
    apk add --no-cache --virtual .build-deps \
        linux-headers \
    && cd /usr/src \
    && wget http://nginx.org/download/nginx-1.24.0.tar.gz \
    && tar zxvf nginx-1.24.0.tar.gz \
    && cd nginx-1.24.0 \
    && ./configure --with-compat --add-module=/tmp/nginx-rtmp-module \
    && make modules \
    && cp objs/ngx_rtmp_module.so /etc/nginx/modules \
    && apk del .build-deps \
    && rm -rf /tmp/nginx-rtmp-module /usr/src/nginx-1.24.0*

# copy your config
COPY nginx/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
