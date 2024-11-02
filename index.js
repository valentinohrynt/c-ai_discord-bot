const { Client, GatewayIntentBits, ActivityType } = require("discord.js")
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

const config = require("./config.json")
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

client.once("ready", async () => {
    console.log(`${client.user.username} is online.`);
    client.user.setPresence({ activities: [{ name: `with my beloved, Inoo`, type: ActivityType.Playing }], status: 'online' })
});

client.on("messageCreate", async message => {
    if (message.author.bot) return;

    // This one is for stricting the bot, so it will only can send message inside a text channel that have been set inside config.json
    if (!message.channel.id == config.chatID) return

    // You can un-comment codes below to make the bot only respond if you tag/mention it.
    // if (!message.mentions.users.first()) return
    // if (message.mentions.users.first().id !== client.user.id) return 

    var msgText = message.content.split(" ").slice(1).join(" ");
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