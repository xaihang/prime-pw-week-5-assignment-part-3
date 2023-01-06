console.log('***** Music Collection *****')

// REMINDERS:
// > When testing your functions, write all tests in the JavaScript file!
// > Make sure to test all your code!


console.log ('--- 1. collection variable with empty array ---')
//- Create a variable `collection` that starts as an empty array.
const collection = [];
console.log('Collection array', collection); // empty 


console.log('--- 2. addToCollection function ---')
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
//
//***COMMENTS:
//
//

console.log('--- 3. Add 6 albums to your collection ---')
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. 
//      (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
//
//***COMMENTS: 
//
//

console.log('--- 4. showCollection function---')
// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, 
//     like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: 
//   `TITLE by ARTIST, published in YEAR`.
//
//***COMMENTS: 
//
//

console.log('--- 6. TEST: showCollection function ---')
// - Test the `showCollection` function.
//
//***COMMENTS: 
//
//

console.log('--- 7. findByArtist function---')
// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
//
//***COMMENTS: 
//
//

console.log('--- 7. TEST: findByArtist function---')
// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, 
//    as well as an artist you know is not in your collection. 
//    Check that for artists with multiple matches, all are found.
//
//***COMMENTS: 
//
//

// ****************************************************** //
// ******************* STRETCH GOALS ******************** //
// ****************************************************** //

console.log('--- A. STRETCH GOAL: search function')
// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. 
//     Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
// 
//***COMMENTS: 
//
//

console.log('--- B. STRETCH GOAL: add tracks to album ')
// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. 
//     You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```
//***COMMENTS: 
//
//