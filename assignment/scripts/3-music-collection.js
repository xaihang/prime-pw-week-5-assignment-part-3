console.log('***** Music Collection *****');

// REMINDERS:
// > When testing your functions, write all tests in the JavaScript file!
// > Make sure to test all your code!

console.log('--- 1. collection variable with empty array ---');
// ✅ Create a variable `collection` that starts as an empty array.
const collection = [];
console.log('Collection array:', collection); // empty

console.log('--- 2. addToCollection function ---');
// - Add a function named `addToCollection`. This function should:
//   ✅ Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   ✅ Create a new object having the above properties
//   ✅ Add the new object to the end of the `collection` array
//   ✅ Return the newly created object
//
//***COMMENTS:
//  declared addToCollection function with parameters above
//  inside block we created a new object with properties: title, artist, yearPublished
//  each time we add a new album we are going to push it to the collection array
//  and return the new added album
//
function addToCollection(title, artist, yearPublished) {
  const album = { title, artist, yearPublished };
  collection.push(album);
  return album;
}
addToCollection('Roll the dough', 'JillyJam', 2023);
addToCollection('Pancakes is square', 'Fly Cake', 1988);
addToCollection('Fire cracker', 'Chowmein', 1999);
addToCollection('Minty fresh', 'CoolDawg', 2001);
console.log('My collection albums:', collection);

console.log('--- 3. Add 6 albums to your collection ---');
// - Test the `addToCollection` function:
//   ✅ Add 6 albums to your collection. Aim to have a mix of both
//      same and different artists and published years.
//      (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   ✅ Console.log each album as added using the returned value.
//   ✅ After all are added, console.log the `collection` array.
//
//***COMMENTS:
//  to add new album(s) we can invoked the addToCollection() and pass the appropriate arguments we will like pass/test
//  console.log the 'collection' array to see what's in the array
//
// addToCollection('Bow-WOW', 'CoolDawg', 2001);
console.log(
  'Added to albums collection:',
  addToCollection('Bow-WOW', 'CoolDawg', 2001)
);

// addToCollection('Pop and Soda', 'JillyJam', 2023);
console.log(
  'Added to albums collection:',
  addToCollection('Pop and Soda', 'JillyJam', 2023)
);

// addToCollection('Froth the coffee', 'Triple Beans', 1988);
console.log(
  'Added to albums collection:',
  addToCollection('Froth the coffee', 'Triple Beans', 1988)
);

// addToCollection('Running on Mars', 'Chowmein', 2000);
console.log(
  'Added to albums collection:',
  addToCollection('Running on Mars', 'Chowmein', 2000)
);

// addToCollection('Purple veins', 'Stein', 2013);
console.log(
  'Added to albums collection:',
  addToCollection('Purple veins', 'Stein', 2013)
);

// addToCollection('Beyond', 'Stein', 2015);
console.log(
  'Added to albums collection:',
  addToCollection('Beyond', 'Stein', 2015)
);

console.log('Final albums Collection:', collection); // see the final collection array

console.log('--- 4. showCollection function ---');
// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection,
//     like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like:
//   `TITLE by ARTIST, published in YEAR`.
//
//***COMMENTS:
//  declared showCollection function with array as placeholder (parameter)
//  looping through each of the items inside the collection
//  console.log each of the collection's album
//  and return collection's property (key-value) items in 'title, artist, yearPublished' order
function showCollection(array) {
  // console.log(collection.length); // currently have 10 items
  for (i = 0; i < collection.length; i++) {
    console.log(collection[i]);
  }
  return collection;
}

console.log('--- 5. TEST: showCollection function ---');
// - Test the `showCollection` function.
//
//***COMMENTS:
// console.log collection.length to see how many item is currently in array = 10 items
// console.log showCollection(collection) ==> use 'collection' as the argument to invoked the showCollection()
console.log(collection.length); // 10 items in 'collection' array
console.log('Show collection:', showCollection(collection));

console.log('--- 6. findByArtist function ---');
// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add *any objects* with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
//
//***COMMENTS:
// declared a findByArtist function with artist as parameter
//  inside my function block code created a variable 'searchResult' with empty array
//  then looping through my 'collection' array 
//  if album artist is equal to type/value of argument (artist) 
//  then add the album object to 'searchResults' array
//  and return the searchResults regardless if artist is in database or not
//
function findByArtist(artist) {
  const searchResults = [];
  for (i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      searchResults.push(collection[i]);
    }
  }
  return searchResults;
}

console.log('--- 7. TEST: findByArtist function ---');
// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection,
//    as well as an artist you know is not in your collection.
//    Check that for artists with multiple matches, all are found.
//
//***COMMENTS:
// invoked the findByArtist() with artist (argument)
//  and return the searchResults regardless if artist is in database or not
//
// artists found in database:
console.log('Search by artist JillyJam:', findByArtist('JillyJam'));
console.log('Search by artist Chowmein:', findByArtist('Chowmein'));
console.log('Search by artist Triple Beans:', findByArtist('Triple Beans'));

// artists NOT found in database:
console.log('Search by artist CoolAid:', findByArtist('CoolAid')); // should return null / empty string
console.log('Search by artist Shortcakes:', findByArtist('Shortcakes')); // should return null / empty string
console.log('Search by artist Butterfly:', findByArtist('Butterfly')); // should return null / empty string

// ****************************************************** //
// ******************* STRETCH GOALS ******************** //
// ****************************************************** //

console.log('--- A. STRETCH GOAL: search function');
// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object.
//     Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input,
//         then return all albums in the `collection`.
//
//***COMMENTS:
//
//

console.log('--- B. STRETCH GOAL: add tracks to album ');
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
