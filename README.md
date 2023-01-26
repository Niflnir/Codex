# Codex
#### A simple application to create and share coding tips!
## How to use
```bash
# Clone this repository
$ git clone https://github.com/Niflnir/Codex.git

# Switch to dev branch
$ git checkout dev

# Enter env variables in docker-compose file
  JWT_KEY: yourJWTkey
  MONGO_URI: yourMongoUri
  # USER_EMAIL and USER_PASSWORD can be skipped 
  # but forgot password feature will not work
  USER_EMAIL: yourGmail
  USER_PASSWORD: yourGeneratedGoogleAppPassword

# Run docker-compose
$ docker-compose up -f docker-compose.yml up
```
## Features
### Login/Create Account
- Create your account with an email and password
- Login with email and password
### Creation - Create a code spell 
1. Title
2. Tags (optional but recommended)
3. Body (Enter your code)
4. Preview
#### The code provided in the body will be syntax highlighted
