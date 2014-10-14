test:
	./node_modules/.bin/mocha --timeout 10000

test-cov:
	./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- -R spec

.PHONY: test test-cov
