install:
	npm ci
	npm link

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
