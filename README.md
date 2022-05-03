# Launches history browser

This is a basic launches history browser. Your task is to get the data from the GraphQL API and display it on the screen.
Cover the features and requirements.

If there is anything unclear, reach out to us through email.

## Features
- [ ] As a user I want to see the list of 20 most recent launches from launchesPast collection from https://api.spacex.land/graphql
- [ ] As a user I want to see the "Loading..." when the list is loading
- [ ] As a user I want to see the "Something went wrong" when there is an error with API connection
- [ ] As a user I want to see details of each Launch:
    - mission name
    - launch date
    - launch site name
    - rocket name
    - launch success/failed
- [ ] As a user I want to be able to find launch (filter the list) by mission name
- [ ] As a user I want to see "No results" message when there are no results of search by mission name
- [ ] As a user I want to see red background in a row if launch was not successful
- [ ] As a user I want to see more info about launch on a separate screen:
    - details
    - links

## Requirements
- [ ] Cover the code with tests.

## Bonus points:
- [ ] As a user I want to load 20 more launches on button click
- [ ] As a user I want to click "Retry" button when fetching the data has failed

## Additional information
- Styling is up to you. Simple, elegant design.
- Feel free to add any package/dependency you want to use (eg. UI Kit) but please keep the solution small, clean and neat.

## API endpoints
- Get the data from https://api.spacex.land/graphql/
- It's GraphQL API

## FAQ
- What's the deadline
 > There is no fixed deadline as we prefer you to focus on quality of your solution. You can let us know when you can start working and send regular
 updates about ongoing progress or any delays.
- Is TypeScript must have?
 > If you don't know TypeScript feel free to switch to regular JS. 
- Do I have to write tests?
> We write tests on a daily basis and we have high ( > 80% ) test coverage of our codebase. That's why tests are important for us.
> However if you don't have any experience with tests and don't want to try to write some basic tests you can still send us your 
> solution and it will be evaluated normally.
## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the webserver

### `npm android`

Starts app on Android device/simulator

### `npm ios`

Starts app on iOS device/simulator

### `npm test`

Runs tests
