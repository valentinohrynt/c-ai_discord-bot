# 🤖 Creating a Character.ai Discord Bot

## 🚀 Requirements
- ✅ Node.js environment on your PC or laptop
- ✅ Discord account
- ✅ Character.ai account
- ✅ A Character.ai character to integrate with your Discord bot

---

## 🛠️ Steps

### 1. ⚙️ Enable Developer Mode in Discord
First, enable **Developer Mode** in your Discord settings. [Find the guide here](https://beebom.com/how-enable-disable-developer-mode-discord/).

---

### 2. 🔑 Get the Bot Token and Invite the Bot to Your Server

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications), then click **New Application**.
2. After creating the application, you’ll be directed to another page. Open the sidebar and select **Bot**.
3. Click **Reset Token** and copy the token provided.
4. Paste this token into `config.js` in the `token` field.

---

### 3. 🆔 Obtain the Character ID

1. Open [Character.ai](https://character.ai/).
2. Search for the character you want to add as a Discord bot.
3. Start a new chat with this character.
4. Look at the URL; it should look like this: `https://character.ai/chat/hM_RvwjQNyfjhUnru82iHW73goUKGPsDmBX63y7JfXA`. Copy the string after `chat/` (e.g., `hM_RvwjQNyfjhUnru82iHW73goUKGPsDmBX63y7JfXA`).
5. Paste it into `config.js` in the `characterID` field.

---

### 4. 🔐 Get the Auth Token

1. Open the Character.ai chat URL of the character you want to add as a Discord bot.
2. Right-click on the page and select **Inspect**.
3. Navigate to the **Network** tab. If prompted, press **Ctrl + R** to reload the page.
4. Use the search tool (🔍 magnifying glass icon) to search for **`authorization: Token`**.
5. Click one of the search results and copy the string after **Token**.
6. Paste this into `config.js` in the `authToken` field.

---

### 5. 📋 Obtain the Channel ID

1. Open the Discord server where you want the bot to interact.
2. Go to the text channel where the bot will be active.
3. Right-click on the channel and select **Copy Channel ID**.
4. Paste it into `config.js` in the `chatID` field.

---

## 🚀 Running the Bot

After filling out all fields in `config.js`, open your terminal and run:

```bash
npm init
npm install
npm run
```

🎉 **Congratulations! Your Character.ai Discord bot is ready to use!**

🗒️: The [Character.ai](https://character.ai/) always updating their authorization methods, please adjust it using the newest auth method.
