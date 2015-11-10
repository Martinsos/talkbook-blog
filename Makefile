
.PHONY: install
install:
	bundle install --path vendor

.PHONY: install
serve:
	bundle exec jekyll serve
