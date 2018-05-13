/**
 * @file removeRole command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = async (Bastion, message, args) => {
  try {
    if (args.length < 1) {
      /**
      * The command was ran with invalid parameters.
      * @fires commandUsage
      */
      return Bastion.emit('commandUsage', message, this.help);
    }

    let user = message.mentions.users.first();
    let role;
    if (!user) {
      user = message.author;
      role = args.join(' ');
    }
    else {
      role = args.slice(1).join(' ');
    }
    role = message.guild.roles.find('name', role);
    if (role && message.author.id !== message.guild.ownerID && message.member.highestRole.comparePositionTo(role) <= 0) return Bastion.log.info(Bastion.i18n.error(message.guild.language, 'lowerRole'));
    else if (!role) {
      /**
      * Error condition is encountered.
      * @fires error
      */
      return Bastion.emit('error', '', Bastion.i18n.error(message.guild.language, 'roleNotFound'), message.channel);
    }

    let member = await message.guild.fetchMember(user.id);
    await member.removeRole(role);

    message.channel.send({
      embed: {
        color: Bastion.colors.RED,
        description: Bastion.i18n.info(message.guild.language, 'removeRole', message.author.tag, role.name, user.tag)
      }
    }).catch(e => {
      Bastion.log.error(e);
    });

    let reason = 'No reason given';

    /**
    * Logs moderation events if it is enabled
    * @fires moderationLog
    */
    Bastion.emit('moderationLog', message, this.help.name, user, reason, {
      role: role
    });
  }
  catch (e) {
    Bastion.log.error(e);
  }
};

exports.config = {
  aliases: [ 'remover' ],
  enabled: true
};

exports.help = {
  name: 'removeRole',
  botPermission: 'MANAGE_ROLES',
  userTextPermission: 'MANAGE_ROLES',
  userVoicePermission: '',
  usage: 'removeRole [@user-mention] <Role Name>',
  example: [ 'removeRole @user#0001 Role Name', 'removeRole Role Name' ]
};