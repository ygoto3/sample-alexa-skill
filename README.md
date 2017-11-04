# sample-alexa-skill

A sample Alexa skill project in the continuous delivery model

## Requirement

- Node.js v6.10
- ASK-CLI v1.0.0-beta.3~
- AWS-CLI v1.11.172~
- CircleCI v2.0

## Development

### AWS-CLI

Install AWS-CLI via pip

```sh
$ pip3 install awscli
```

Set up AWS-CLI configuration 

```sh
$ aws configure
```

### ASK-CLI

Install ASK-CLI

```sh
$ npm i ask-cli -g
```

Initialize ASK-CLI with your Amazon development account

```sh
$ ask init
```

## Set up your project on CircleCI

You need to add the following environment variables to your project on to your CircleCI

- `ALEXA_SKILL_ID`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `ASK_CLI_CONFIG`
- `CODECOV_TOKEN`

### ASK_CLI_CONFIG

Copy your ASK-CLI credential to the clipboard

```
$ base64 ~/.ask/cli_config | pbcopy
```

Set the value to `ASK_CLI_CONFIG` in your CircleCI's project
