import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Bot is ready')
})

client.on('messageCreate', (message) =>{
    if (message.author.id == ('398408519998636043') || message.author.id ==('344636967394476033')){
        message.reply({
            content: 'Ratio :middle_finger: :joy: :middle_finger: ',
        })
        
    }
    if (message.author.id != ('932804131666665493')){
        if (message.content == 'ratio' && (message.author.id != ('143157635871408128'))){
            message.reply({
                content:'+ L'
            })
        }
    }
    
})

client.login(process.env.TOKEN)