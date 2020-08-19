
SERVICE=digivapp.fe

build:
	docker build --tag="$(SERVICE)" -f Dockerfile .

run:
	docker-compose up