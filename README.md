# Universal-SHA256-js

An ultra lightweight universal JavaScript SHA256 cryptographic hash function for Node.js and Browsers.

- <400 bytes _(minifeied + gzipped) to bundle_

# Setup

```shell
npm i universal-sha256-js
```

Ways to require.

```js
const sha256 = require('universal-sha256-js')
```

Ways to import.

```js
import sha256 from 'universal-sha256-js'
```

# Support

- Node.js `>16`
- Browser `defaults, no IE 11`

# API

## function sha256

Universal sha256 message digest helper function.

| Parameter | Type       | Description          |
| :-------- | :--------- | :------------------- |
| `data`    | Uint8Array | Binary data to hash. |

**Returns:** Uint8Array — Message digest.

### Examples

_Ways to `import`._

> ```js
> import sha256 from 'sha256-js'
> ```

_Ways to `require`._

> ```js
> const sha256 = require('sha256-js')
> ```

_Usage `sha256` in node._

> ```js
> const array = Uint8Array.from(
>   Buffer.from('The quick brown fox jumped over the lazy dog')
> )
>
> sha256(array).then(console.log)
> ```
>
> > The logged output is \[215, …, 146 ]
