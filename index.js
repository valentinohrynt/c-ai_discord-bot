const { Client, GatewayIntentBits, ActivityType } = require("discord.js")
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

const config = require("./config.json")
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

client.once("ready", async () => {
    console.log(`${client.user.username} is online.`);
    client.user.setPresence({ activities: [{ name: `mention or tag me to talk!`, type: ActivityType.Playing }], status: 'online' })
});

client.on("messageCreate", async message => {
    if (message.author.bot) return;

    if (message.channel.id !== config.chatID){
        if(!message.mentions.has(client.user)) return;
    } 

    const msgText = message.mentions.has(client.user) 
        ? message.content.split(" ").slice(1).join(" ")
        : message.content;

    if (!msgText) return

    message.channel.sendTyping();

    async function aiMSG() {
        if (!characterAI.isAuthenticated()) { 
            await characterAI.authenticateWithToken(config.authToken);
        }

        const chat = await characterAI.createOrContinueChat(config.characterID);
        const response = await chat.sendAndAwaitResponse(`${msgText}`, true);

        return response
    }

    try {

        let response = await aiMSG()
        message.reply(`${response.text}`)

    } catch (error) {
        console.log(error);
        await message.reply("There was a problem handling the command.");
    }

});

client.login(config.token)