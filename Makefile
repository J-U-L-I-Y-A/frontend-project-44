install:
	npm ci
brain-games:
	node bin/brain-games.js
gitpublish:
	npm publish --dry-run
lint:
	npx eslint .