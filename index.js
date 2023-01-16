const fs = require('node:fs');
const path = require('node:path');
const config = require('./config.json');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { GoogleSpreadsheet } = require('google-spreadsheets');
const { JWT } = require('google-auth-library');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith('.js'));

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs
	.readdirSync(eventsPath)
	.filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(
			`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
		);
	}
}

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Set up the JWT client
const jwtClient = new JWT(config.clientEmail, null, config.privateKey, [
	'https://www.googleapis.com/auth/spreadsheets.readonly',
]);

// // ID of the Google Sheets document
// const spreadsheetId = '';

// // ID of the channel where the data will be posted
// const channelId = '';

// client.on('ready', async () => {
//     console.log(`Logged in as ${client.user.tag}!`);

//     // Get the channel where the data will be posted
//     const channel = client.channels.cache.get(channelId);

//     // Authenticate with the JWT client
//     await jwtClient.authorize();

//     // Get the spreadsheet
//     const spreadsheet = new GoogleSpreadsheet(spreadsheetId);

//     // Load the spreadsheet
//     await spreadsheet.loadInfo();

//     // Get the first sheet
//     const sheet = spreadsheet.sheetsByIndex[0];

//     // Get the rows from the sheet
//     const rows = await sheet.getRows();

//     // Iterate through the rows and post the data to the channel
//     rows.forEach(row => {
//         let message = "";
//         //iterate over the object and build message
//         for (let key in row) {
//             message += `${key}: ${row[key]}\n`;
//         }
//         channel.send(message);
//     });
// });

client.login(config.token);
