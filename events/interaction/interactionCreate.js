const { Client, CommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param { Client } client
     * @param { CommandInteraction } interaction
     */
    async execute (interaction, client) {

        // Slash (chat) command
        if (interaction.isChatInputCommand()) {
            try {
                const command = client.commands.get(interaction.commandName);
                if (!command) return await interaction.reply({ content: `This command is outdated.`, ephemeral: true });
                command.execute(interaction, client);
            }
            catch (err) {
                console.log(err);
                const { guild, member, channel } = interaction;
                const errorTime = `<t:${Math.floor(Date.now() / 1000)}:R>`;
                const errorChannel = await client.channels.fetch(client.config.developerLogsId);
                const errorEmbed = new EmbedBuilder()
                    .setColor('Red')
                    .setTitle('⚠️ Flagged Error')
                    .setDescription(`Triggered by: <@${member.user.id}> in ${guild.name} (${guild.id}).`)
                    .addFields(
                        { name: 'Error Command', value: `\`${interaction.commandName}\`` },
                        { name: 'Error Stack', value: `\`${err.stack}\`` },
                        { name: 'Error Message', value: `\`${err.message}\`` },
                        { name: 'Error Timestamp', value: `\`${errorTime}\`` },
                    )
                    .setTimestamp();
                
                await errorChannel.send({ embeds: [errorEmbed] });
                client.log.error(`Command: ${interaction.commandName} \nTriggered by: <@${member.user.id}>  \nGuild: ${guild.name} (${guild.id})\n`)
            }
        }

        // User context menu
        if (interaction.isUserContextMenuCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return await interaction.reply({ content: `This command is outdated.`, ephemeral: true });
            command.execute(interaction, client);
        }

        // Message context menu
        if (interaction.isMessageContextMenuCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return await interaction.reply({ content: `This command is outdated.`, ephemeral: true });
            command.execute(interaction, client);
        }

        // Autocomplete
        if (interaction.isAutocomplete()) {
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) return await interaction.reply({ content: `This command is outdated.`, ephemeral: true });
            await command.autocomplete(interaction);
        }

        // Buttons
        if (interaction.isButton()) {

        }

        // Dropdowns list
        if (interaction.isStringSelectMenu()) {
            
        }

    }
}