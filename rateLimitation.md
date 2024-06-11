### Endpoint rate limitation
To implement rate limiting for the api service, the `express-rate-limit` are used. This middleware allows to set up rate limiting rules easily.

```shell
# Install package
npm install express-rate-limit
```

The source code to deal with the issue can be found [here](https://github.com/helloitsurdvq/VDT2024-api).

```javascript
const rateLimit = require('express-rate-limit');

const rateLimitMiddleware = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 10, 
  handler: (req, res) => {
    res.status(409).send({ message: 'Too many requests, please try again later.' });
  },
});

module.exports = rateLimitMiddleware;
```
Explain:
- `windowMs` specifies the duration of the time window.
- `max` specifies the maximum number of requests allowed within the time window.
- `handler` is a custom response when the rate limit is exceeded.
- Usage: The configured middleware is exported and can be applied to the application or specific routes to enforce rate limiting.

```javascript
const rateLimitMiddleware = require('../middlewares/rateLimitMiddleware');
const router = express.Router();

router.use(rateLimitMiddleware);

module.exports = router;
```

If the limit is exceeded, the client will receive a `409 Conflict` response. This helps in preventing abuse and managing traffic effectively.

The outcome when testing on Postman:

![img](https://raw.githubusercontent.com/helloitsurdvq/VDT2024project/main/assets/9.3_security_manyreqs.jpg)