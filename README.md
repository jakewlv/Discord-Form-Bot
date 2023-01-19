## Discord Form Bot

A simple Discord bot written in Node.js that can be used to retrieve data from a Google Form and post it to a specified Discord channel. It uses the Discord.js library to listen for messages in the server and the google-auth-library and google-spreadsheets library to access data from a Google Sheet.

The bot can be configured to collect data from a Google Form, and once the data is collected, it is stored in a Google Sheet. The bot then uses the credentials of a service account to access the data stored in the sheet, and posts it to a specified channel in the Discord server.

It can be useful for situations where you want to collect data from a form and have it automatically posted in a designated Discord channel, for example, a sign-up form for an event or a survey.

It can also be used in various other scenarios where there is a need to collect information and share it in a discord channel.

Users can use this bot by setting up the Google Form and configuring it to store data in a Google Sheet, and then invite the bot to their Discord server and set the channel where they want the data to be posted.

## Requirements
- Node.js
- npm
- A Discord account with permissions to create a bot and invite it to a server
- A Google account with permissions to create a Google Form and a Google Sheet

## Getting Started

1. Clone this repository by running `git clone https://github.com/<your-username>/discord-form-bot.git`
2. Go to the Discord Developer Portal and create a new bot. 
3. Invite the bot to your server by generating an invite link in the "OAuth2" section.
4. Create a new folder on your computer to hold the bot's files, then initialize it as a Node.js project by running `npm init` in the command line.
5. Install the dependencies by running `npm install` in the command line.
6. Copy the `credentials-example.json` file and rename it to `credentials.json` . 
7. Add your bot token and service account credentials to the `credentials.json` file.
8. Add your Spreadsheet ID and the channel ID where you want the form data to be posted in the `index.js` file.
9. Run the bot using `node index.js`

## Usage

1. Create a new Google Form and configure it to collect the data you want.
2. Go to the "Responses" tab and click on the "Google Sheets" icon to create a new spreadsheet to store the form responses.
3. Share the spreadsheet with the email address of a service account that you will use to access the data from the bot.
4. Run the bot, the data from the form will be automatically posted to the specified channel in the server.

## Note
This bot is intended for educational purposes and is not production-ready. Make sure to properly secure your bot and service account credentials.

## Contributions

Contributions are always welcome! Feel free to submit pull requests and issues.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


