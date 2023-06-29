
server:
	hugo server \
	--disableFastRender \
	--buildDrafts \
	--buildFuture \
	--source ./src

new:
	hugo new -c ./src/content/ posts/$(name)

build:
	hugo \
	--source ./src \
	--destination ../dist
