/**
 * @file The starting point of Bastion
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

/**
 * @function LOAD_EVENTS
 * @param {string} event Name of the event
 * @returns {function} The event's function
 */
const LOAD_EVENTS = event => require(`../events/${event}`);

/**
 * Handles/Loads all the events.
 * @module eventHandler
 * @param {object} Bastion The Bastion Object
 * @returns {void}
 */
module.exports = Bastion => {
  /**
   * Emitted whenever a channel is created.
   * @listens channelCreate
   */
  Bastion.on('channelCreate', LOAD_EVENTS('channelCreate'));
  /**
   * Emitted whenever a channel is deleted.
   * @listens channelDelete
   */
  Bastion.on('channelDelete', LOAD_EVENTS('channelDelete'));
  /**
   * Emitted whenever a channel is updated - e.g. name change, topic change.
   * @listens channelUpdate
   */
  Bastion.on('channelUpdate', LOAD_EVENTS('channelUpdate'));
  /**
   * Emitted whenever Bastion's WebSocket encounters a connection error.
   * @listens error
   */
  Bastion.on('error', LOAD_EVENTS('error'));
  /**
   * Emitted whenever a member is banned from a guild.
   * @listens guildBanAdd
   */
  Bastion.on('guildBanAdd', LOAD_EVENTS('guildBanAdd'));
  /**
   * Emitted whenever a member is unbanned from a guild.
   * @listens guildBanRemove
   */
  Bastion.on('guildBanRemove', LOAD_EVENTS('guildBanRemove'));
  /**
   * Emitted whenever Bastion joins a guild.
   * @listens guildCreate
   */
  Bastion.on('guildCreate', LOAD_EVENTS('guildCreate'));
  /**
   * Emitted whenever a guild is deleted/left.
   * @listens guildDelete
   */
  Bastion.on('guildDelete', LOAD_EVENTS('guildDelete'));
  /**
   * Emitted whenever a user joins a guild.
   * @listens guildMemberAdd
   */
  Bastion.on('guildMemberAdd', LOAD_EVENTS('guildMemberAdd'));
  /**
   * Emitted whenever a member leaves a guild, or is kicked.
   * @listens guildMemberRemove
   */
  Bastion.on('guildMemberRemove', LOAD_EVENTS('guildMemberRemove'));
  /**
   * Emitted whenever a guild is updated - e.g. name change.
   * @listens guildUpdate
   */
  Bastion.on('guildUpdate', LOAD_EVENTS('guildUpdate'));
  /**
   * Emitted whenever a message is created.
   * @listens message
   */
  Bastion.on('message', LOAD_EVENTS('message'));
  /**
   * Emitted whenever a message is updated - e.g. embed or content change.
   * @listens messageUpdate
   */
  Bastion.on('messageUpdate', LOAD_EVENTS('messageUpdate'));
  /**
   * Emitted when Bastion becomes ready to start working.
   * @listens ready
   */
  Bastion.on('ready', () => LOAD_EVENTS('ready')(Bastion));
  /**
   * Emitted whenever a role is created.
   * @listens roleCreate
   */
  Bastion.on('roleCreate', LOAD_EVENTS('roleCreate'));
  /**
   * Emitted whenever a guild role is deleted.
   * @listens roleDelete
   */
  Bastion.on('roleDelete', LOAD_EVENTS('roleDelete'));
  /**
   * Emitted whenever a guild role is updated.
   * @listens roleUpdate
   */
  Bastion.on('roleUpdate', LOAD_EVENTS('roleUpdate'));
  /**
   * Emitted for general warnings.
   * @listens warn
   */
  Bastion.on('warn', LOAD_EVENTS('warn'));
};
