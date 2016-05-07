# `req.param()`
```
npm install req-param
```

![https://nodei.co/npm/req-param.png?downloads=true](https://nodei.co/npm/req-param.png?downloads=true)

The familiar `req.param()` for express, as it is implemented in express 3 and 4.
This got deprecated in express 4, so in case you don't agree with the deprecation rationale, and want to lose the deprecation warnings, this is for you.

### Usage
```javascript
app.use( require('req-param') )
```

### Functionality
Returns the value of param name when present.
`req.param(name [, defaultValue])`

```javascript
// ?name=tobi
req.param('name')
// => "tobi"

// POST name=tobi
req.param('name')
// => "tobi"

// /user/tobi for /user/:name
req.param('name')
// => "tobi"
```

Lookup is performed in the following order:
- req.params
- req.body
- req.query

Optionally, you can specify defaultValue to set a default value if the parameter is not found in any of the request objects.