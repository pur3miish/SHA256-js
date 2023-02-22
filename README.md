# Universal-SHA256-js

A SHA256 cryptographic hash function that is compatible with Node.js, Deno, and web browsers, and is designed to be extremely lightweight.

## Setup

Node.js

```shell
npm i universal-sha256-js
```

Deno

```js
import sha256 from "https://deno.land/x/sha256js/sha256.mjs";
```

## Support

- Node.js `>16`
- Browser `defaults, no IE 11`
- Deno `^1.30.0`

## Examples

Usage `sha256`

```js
import sha256 from "universal-sha256-js/sha256.mjs";

const array = Uint8Array.from(
  Buffer.from("The quick brown fox jumped over the lazy dog")
);
sha256(array).then(console.log);
```

> The logged output is \[215, …, 146 ]
