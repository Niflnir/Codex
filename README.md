# Codex

#### A simple application to create and share coding tips with other developers!
#### www.codex-app.codes
## How to use

```bash
# Clone this repository
$ git clone https://github.com/Niflnir/Codex.git

# Switch to dev branch
$ git checkout dev

# Enter env variables in docker-compose file
  JWT_KEY: yourJWTkey
  MONGO_URI: yourMongoUri
  # USER_EMAIL and USER_PASSWORD can be empty
  # but forgot password feature will not work
  USER_EMAIL: yourGmail
  USER_PASSWORD: yourGeneratedGoogleAppPassword # Need to enable 2FA on google account and generate an app password

# Run docker-compose
$ docker-compose up -f docker-compose.yml up
```

## Features

### *Login / Create Account*

- Create account with email and password
- Login with email and password

![Login Screen](./screenshots/LoginScreen.jpg)
<p align="center"><em>Login Screen with email and password</em></p>

### *Creation - Creating a Code Spell*

A Code Spell consists of three sections:
- Title
- Tags (optional but recommended)
- Body 

![Creation Screen](./screenshots/CreationScreen.jpg)
<p align="center"><em>Code Spell form with title, tag and code in body</em></p>

<p align="justify">After filling in the details, click on Preview. A preview of the Code Spell will be displayed. The code in the body will be syntax highlighted based on Tags provided. Click on Create after you are done reviewing the code spell.</p>

![Creation Preview Screen](./screenshots/CreationPreview.jpg)
<p align="center"><em>Preview of Code Spell with python code and python tag</em></p>


