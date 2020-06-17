/**
 * arrayExtension module.
 *
 * @module src/arrayExtension
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns a copy of an array where a number has been added to the end of the copy.
 *
 * @param {number[]} source - The array to create a copy of.
 * @param {number} number - The number to add to the end of the copy of the array.
 * @throws {TypeError} The source parameter must be an Array; number parameter must be a Number.
 * @returns {number[]} A copy of the source array with an additional number.
 */
export function immutablePushNumber (source, number) {
  // Validate the parameter values.
  if (!Array.isArray(source)) {
    throw new TypeError('The first argument passed must be an Array.')
  }

  if (typeof number !== 'number') {
    throw new TypeError('The second argument passed must be a Number.')
  }

  // Make a copy of the source array and add the number to the end of the copy.
  const copy = Array.from(source)

  // // ALTERNATIVE SOLUTION I
  // const copy = source.slice(0)

  // // ALTERNATIVE SOLUTION II
  // const copy = [...source]

  copy.push(number)

  return copy
}
