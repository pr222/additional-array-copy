/**
 * arrayExtension module.
 *
 * @module src/arrayExtension
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns a copy of an array where a number has been added to the end of the copy.
 *
 * @param {Array} source - The array to create a copy of.
 * @param {number} number - The number to add to the end of the copy of the array.
 * @throws {TypeError} The source parameter must be an Array; number parameter must be a Number.
 * @returns {Array} A copy of the source array with an additional number.
 */
export function immutablePushNumber (source, number) {
  // Validate the input.
  if (!Array.isArray(source)) {
    throw new TypeError('Is not an array.')
  }

  if (typeof number !== 'number') {
    throw new TypeError('Is not a number.')
  }

  // Copy array from original array.
  const source2 = Array.from(source)
  // Add a number to end of copied array.
  source2.push(number)

  return source2
}
