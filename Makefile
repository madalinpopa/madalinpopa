
server:
	hugo server \
	--disableFastRender \
	--buildDrafts \
	--buildFuture \
	--source ./src

new:
	hugo new -c ./src/content/ posts/$(name)

new-page:
	hugo new -c ./src/content/ $(name)

build:
	hugo \
	--source ./src \
	--destination ../dist
