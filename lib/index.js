module.exports = function(req, res, next) {
    // Extract the `req.param`, exactly as it is in express.
    req.param = function(name, defaultValue) {
          var params = req.params || {};
          var body = req.body || {};
          var query = req.query || {};

          var args = arguments.length === 1
              ? 'name'
              : 'name, default';

          if (null != params[name] && params.hasOwnProperty(name)) return params[name];
          if (null != body[name]) return body[name];
          if (null != query[name]) return query[name];

          return defaultValue;
    }
    next();
}