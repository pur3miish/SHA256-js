/**
 * Universal sha256 message digest helper function.
 * @param {Uint8Array} data Binary data to hash.
 * @returns {Prmoise<Uint8Array>} Message digest.
 * @example <caption>Usage `sha256`.</caption>
 * ```js
 * const array = Uint8Array.from(
 *   Buffer.from('The quick brown fox jumped over the lazy dog')
 * )
 *
 * sha256(array).then(console.log)
 * ```
 * > The logged output is [215, …, 146 ]
 */
async function sha256(data) {
  if (!(data instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array input data.");

  if (typeof window == "undefined") {
    const { createHash } = await import("crypto");
    return new Uint8Array(createHash("sha256").update(data).digest());
  } else return new Uint8Array(await crypto.subtle.digest("SHA-256", data));
}

export default sha256;
