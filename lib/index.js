module.exports = function(req, res, next) {
    // Extract the `req.param`, exactly as it is in express.
    req.param = function(name, defaultValue) {
          var params = this.params || {};
          var body = this.body || {};
          var query = this.query || {};

          if (null != params[name] && params.hasOwnProperty(name)) return params[name];
          if (null != body[name]) return body[name];
          if (null != query[name]) return query[name];

          return defaultValue;
    }
    next();
}