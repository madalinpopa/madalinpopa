	 
server:
	hugo server \
	--disableFastRender \
	--buildDrafts \
	--buildFuture \
	--source ./src
	

build:
	hugo \
	--source ./src \
	--destination ../dist
