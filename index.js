/**
 * Converts an array of objects into a Map of objects grouped by a specified key.
 * @param {Array} arr - The array of objects to convert.
 * @param {string} key - The name of the key to group the objects by.
 * @returns {Map} - A Map object containing the grouped objects.
 */
function objectArrayToMap(arr, key) {
    return arr.reduce((acc, cur) => {
        // extract the value of the given key
        const val = cur[key];
        // check if the key already exists in the map
        const existingVal = acc.get(val);
        if (existingVal) {
            // if it does, append the current value to the existing array
            existingVal.push(cur);
        } else {
            // if it doesn't, add the key with an array containing the current value
            acc.set(val, [cur]);
        }
        // return the updated map
        return acc;
    }, new Map());
}

module.exports = objectArrayToMap;