const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param { Client } client
     * @param { CommandInteraction } interaction
     */
    async execute (interaction, client) {

        // Slash (chat) command
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return await interaction.reply({ content: `This command is outdated.`, ephemeral: true });
            command.execute(interaction, client);
        }

        // User context menu
        if (interaction.isUserContextMenuCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return await interaction.reply({ content: `This command is outdated.`, ephemeral: true });
            command.execute(interaction, client);
        }

    }
}