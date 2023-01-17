const { Client, SlashCommandBuilder, CommandInteraction } = require("discord.js");

// Requirements
const settings = require("../../models/settings");

module.exports = {
    developer: false,
    data: new SlashCommandBuilder()
    .setName("logs-channel")
    .setDescription("Set the logs channel.")
    .setDefaultMemberPermissions(0) // 0 = Only users with "Administrator" permissions will be able to run this command, unless you edit the command' permissions in Server Settings -> Integrations.
    .addChannelOption(option =>
        option
            .setName("channel")
            .addChannelTypes("text")
            .setRequired(true) 
    ),

    /**
     * @param { Client } client
     * @param { CommandInteraction } interaction
     */
    async execute (interaction, client) {
        await interaction.deferReply({ ephemeral: true });

        const channel = interaction.options.getChannel("channel");
           
        const findSettings = await settings.findOne({ guildId: interaction.guild.id });
        if (!findSettings) await settings.create({ guildId: interaction.guild.id, logsChannelId: channel.id });
        else await findSettings.updateOne({ logsChannelId: channel.id });

        await interaction.editReply({ content: `Logs channel updated to: <@&${channel.id}>.` });
        
    }
}