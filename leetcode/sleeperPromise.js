/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return await new Promise((resolve) => setTimeout(resolve, millis));
}
