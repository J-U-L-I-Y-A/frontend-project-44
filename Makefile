install:
	npm ci
brain-games:
	node bin/brain-games.js
gitpublish:
	npm publish --dry-run