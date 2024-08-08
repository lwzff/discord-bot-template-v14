const { Client, SlashCommandBuilder, CommandInteraction } = require("discord.js");

module.exports = {
    developer: false,
    data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Just wanna say hi!")
    ,

    /**
     * @param { Client } client
     * @param { CommandInteraction } interaction
     */
    async execute (interaction, client) {
        await interaction.reply({
            content: `Hi ${interaction.user} !`
        });
    }
}