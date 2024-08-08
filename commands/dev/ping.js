const { Client, SlashCommandBuilder, CommandInteraction } = require("discord.js");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!")
    .setDefaultMemberPermissions(0) // 0 = Only users with "Administrator" permissions will be able to run this command, unless you edit the command' permissions in Server Settings -> Integrations.
    ,

    /**
     * @param { Client } client
     * @param { CommandInteraction } interaction
     */
    async execute (interaction, client) {
        await interaction.reply({
            ephemeral: true,
            content: 'Pong!'
        });
    }
}