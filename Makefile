.PHONY: deploy
deploy: ask_config
deploy: interaction_model
	ask deploy

.PHONY: interaction_model
interaction_model:
	node ./lambda/scripts/gen-interaction-model > models/en-US.json

.PHONY: ask_config
ask_config:
	cat ./.ask/config.tmpl | envsubst > ./.ask/config

.PHONY: clean
clean:
	rm models/en-US.json
