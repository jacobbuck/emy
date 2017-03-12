'use strict';

module.exports = function emitter() {
  var listeners = {};

  return {
    on: function(type, callback) {
      listeners[type] = (listeners[type] || []).concat([callback]);
      return this;
    },

    once: function(type, callback) {
      var off = this.off;
      return this.on(type, function wrappedCallback() {
        off(type, wrappedCallback);
        callback.apply(null, arguments);
      });
    },

    off: function(type, callback) {
      var newListeners;
      if (listeners[type] && listeners[type].length) {
        newListeners = listeners[type].filter(function(cb) {
          return callback !== cb;
        });
        if (newListeners.length) {
          listeners[type] = newListeners;
        } else {
          delete listeners[type];
        }
      }
      return this;
    },

    emit: function(type) {
      var args = [].splice.call(arguments, 1);
      listeners[type].forEach(function(callback) {
        callback.apply(null, args);
      });
      return this;
    }
  };
};
