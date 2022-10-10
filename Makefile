ifneq (,$(wildcard ./.env))
    include .env
    export
endif

# VARIABLES
TAG=dev
ENVIRONMENT=prod
DOCKER_IMAGE=madalinpopa

# -------------------------------------------------------
# Utilities commands
#--------------------------------------------------------

# Scripts
bootstrap:
	./scripts/bootstrap.sh

# Docker utility commands
kill:
	@docker kill $$(docker ps -q)

rmc:
	@docker rm $$(docker ps -a -q)

rmi:
	@docker rmi $$(docker images -q)

# -------------------------------------------------------
# Container Build and push to Docker
#--------------------------------------------------------
build-dev:
	docker build -t ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:dev \
	--target development \
	--network host \
	--build-arg ENVIRONMENT=local \
	--build-arg SECRET_KEY=${SECRET_KEY} \
	--build-arg DJANGO_SETTINGS_MODULE=madalinpopa.settings.dev \
	--build-arg DB_NAME=${DB_NAME} \
	--build-arg DB_HOST=localhost \
	--build-arg DB_PASS=${DB_PASS} \
	--build-arg DB_USER=${DB_USER} .

build:
	docker build -t ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${TAG} \
	--build-arg ENVIRONMENT=${ENVIRONMENT} .

push:
	docker push ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${TAG}

# -------------------------------------------------------
# Pre-production database setup
#--------------------------------------------------------
makemigrations:
	docker run --rm --network host \
	${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:dev \
	/bin/bash -c "python manage.py makemigrations && python manage.py migrate"

syncdb:
	docker run --rm --network host \
	-e STRIPE_PUB_KEY=${STRIPE_PUB_KEY} \
	-e STRIPE_PRIVATE_KEY=${STRIPE_PRIVATE_KEY} \
	${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:dev \
	/bin/bash -c "python manage.py syncprod && python manage.py syncprice"

# -------------------------------------------------------
# Test unit commands
#--------------------------------------------------------
test-unit:
	docker run --rm --network host \
    ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:dev \
    /bin/bash -c "python manage.py test tests.unit"

# -------------------------------------------------------
# Run commands with docker compose
#--------------------------------------------------------
