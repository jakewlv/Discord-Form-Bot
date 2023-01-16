# LastTry Discord Bot.

A simple Discord bot written in Node.js that can be used to retrieve data from a Google Form and post it to a specified Discord channel. It uses the Discord.js library to listen for messages in the server and the google-auth-library and google-spreadsheets library to access data from a Google Sheet.

The bot can be configured to collect data from a Google Form, and once the data is collected, it is stored in a Google Sheet. The bot then uses the credentials of a service account to access the data stored in the sheet, and posts it to a specified channel in the Discord server.

It can be useful for situations where you want to collect data from a form and have it automatically posted in a designated Discord channel, for example, a sign-up form for an event or a survey.

It can also be used in various other scenarios where there is a need to collect information and share it in a discord channel.

Users can use this bot by setting up the Google Form and configuring it to store data in a Google Sheet, and then invite the bot to their Discord server and set the channel where they want the data to be posted.
