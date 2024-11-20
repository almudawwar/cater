# Cater README

This is a small React + Rails API app that show data about catering menus and allows search by menu name. It uses `react-query` to implement an infinite scroll thtough the list.


### System dependencies
* ruby 3.0.0
    * You can install it with [RVM](https://rvm.io/) `rvm install 3.0.0`
* bundler
    * `gem install bundler`
* postgresql
    * You can install it with [homebrew](https://brew.sh/) `brew install postgresql@16`
    * Then start the service by running `brew services start postgresql@16`

### Configuration
#### Locally
1. Check out the repository

`git clone git@github.com:almudawwar/cater.git`

`cd cater`

2. Setup and seed the databse

`bundle exec rails db:create db:migrate db:seed`

### How to run
1. Start the Rails API

`bundle exec rails s`

2. Start the React app

On a different terminal window, run the following commands:

`cd frontend`

`npm install`

`npm run dev`

Now on your browser visit http://localhost:5173

### How to run the test suite
    bundle exec rspec .
