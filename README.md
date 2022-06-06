```javascript
const parse = require('legal-versioning-parse')
const assert = require('assert')

assert.deepStrictEqual(
  parse('1.2.3'),
  { edition: 1, update: 2, correction: 3 }
)

assert.deepStrictEqual(
  parse('1.2.3-4'),
  { edition: 1, update: 2, correction: 3, draft: 4 }
)

assert.throws(() => parse('invalid'))
```
