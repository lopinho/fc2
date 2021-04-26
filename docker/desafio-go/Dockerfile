FROM golang:1.16.3-alpine3.13 as builder

WORKDIR /usr/src/app
COPY app /usr/src/app
RUN go build .

FROM scratch

COPY --from=builder /usr/src/app/hello-fs /
CMD ["/hello-fs"]




