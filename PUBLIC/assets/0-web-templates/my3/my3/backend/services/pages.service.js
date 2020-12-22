"use strict";
const DBMixin = require("../mixins/db.mixin");

module.exports = {
  name: "pages",

  /**
   * Service settings
   * More info: https://moleculer.services/docs/0.14/services.html#Settings
   */
  settings: {
    rest: "/"
  },
  /**
   * Service Mixin
   * More info: https://moleculer.services/docs/0.14/services.html#Mixins
   */
  mixins: [DBMixin()],
  /**
   * Service dependencies
   * More info: https://moleculer.services/docs/0.14/services.html#Dependencies
   */
  dependencies: [],

  /**
   * Service Actions
   * More info: https://moleculer.services/docs/0.14/actions.html
   */
  actions: {
    // Action handlers
    listGet: {
      rest: "GET /list",
      handler(ctx) {
        // Call find method that was loaded with `db.mixin.js`
        return this._find(ctx, ctx.params);
      }
    },
    listPost: {
      rest: "POST /list",
      /**
       * Param validation.
       * More info: https://moleculer.services/docs/0.14/validating.html
       */
      params: {
        text: { type: "string" }, // required field
        $$strict: true // no additional properties allowed
      },
      async handler(ctx) {
        try {
          // Call create method that was loaded with `db.mixin.js`
          const item = await this._create(ctx, ctx.params);
          return { id: item.id, text: item.text };
        } catch (error) {
          throw error;
        }
      }
    },
    listDelete: {
      rest: "DELETE /list/:id",
      /**
       * Param validation.
       * More info: https://moleculer.services/docs/0.14/validating.html
       */
      params: {
        id: { type: "string" }, // required filed
        $$strict: true // no additional properties allowed
      },
      async handler(ctx) {
        try {
          // Call remove method that was loaded with `db.mixin.js`
          const item = await this._remove(ctx, { id: ctx.params.id });
          return { id: item.id };
        } catch (error) {
          throw error;
        }
      }
    },
  },

  /**
   * Service Events
   * More info: https://moleculer.services/docs/0.14/events.html
   */
  events: {},

  /**
   * Service Methods
   * More info: https://moleculer.services/docs/0.14/services.html#Methods
   */
  methods: {},

  /**
   * Service created lifecycle event handler
   * More info: https://moleculer.services/docs/0.14/lifecycle.html#created-event-handler
   */
  created() {},

  /**
   * Service started lifecycle event handler
   * More info: https://moleculer.services/docs/0.14/lifecycle.html#started-event-handler
   */
  async started() {},

  /**
   * Service stopped lifecycle event handler
   * More info: https://moleculer.services/docs/0.14/lifecycle.html#stopped-event-handler
   */
  async stopped() {}
};
