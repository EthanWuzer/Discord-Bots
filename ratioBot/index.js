"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var client = new discord_js_1["default"].Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', function () {
    console.log('Bot is ready');
});
client.on('messageCreate', function (message) {
    if (message.author.id == ('398408519998636043') || message.author.id == ('344636967394476033')) {
        message.reply({
            content: 'ratio'
        });
    }
    if (message.author.id != ('932804131666665493')) {
        if (message.content == 'ratio' && (message.author.id != ('143157635871408128'))) {
            message.reply({
                content: '+ L'
            });
        }
    }
});
client.login(process.env.TOKEN);
