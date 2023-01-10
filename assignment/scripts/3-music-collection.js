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
//original code:
// function addToCollection(title, artist, yearPublished) {
//   const album = { title, artist, yearPublished };
//   collection.push(album);
//   return album;
// }

//updated addToCollection(): allow track to be pass in parameter
function addToCollection(title, artist, yearPublished, tracks) {
  const album = { title, artist, yearPublished, tracks };
  collection.push(album);
  return album;
}
//original tests for addToCollection()
// addToCollection('Roll the dough', 'JillyJam', 2023);
// addToCollection('Pancakes is square', 'Fly Cake', 1988);
// addToCollection('Fire cracker', 'Chowmein', 1999);
// addToCollection('Minty fresh', 'CoolDawg', 2001);

//updated addToCollection() with track info:

// let title = 'Roll the dough';
// let artist = 'JillyJam';
// let yearPublished = 'JillyJam';
// let tracks = [{name: '1', duration: 0}, {name: '2', duration: 0}];

// addToCollection(title, artist, yearPublished, tracks);
addToCollection('Roll the dough', 'JillyJam', 2023, [
  { name: 'Kneel it', duration: '4:31' },
  { name: 'Shifty-shifty', duration: '5:10' },
]);
addToCollection('Pancakes is square', 'Fly Cake', 1988, [
  { name: 'Cookies', duration: '4:33' },
  { name: 'Icy nice', duration: '5:33' },
]);
addToCollection('Fire cracker', 'Chowmein', 1999, [
  { name: 'Crispy Noodles', duration: '4:15' },
]);
addToCollection('Minty fresh', 'CoolDawg', 2001, [
  { name: 'Apple Jack', duration: '5:59' },
]);
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
console.log(
  'Added to albums collection:',
  addToCollection('Bow-WOW', 'CoolDawg', 2001, [
    { name: 'Meow-Naw', duration: '4:23' },
  ])
);
console.log(
  'Added to albums collection:',
  addToCollection('Pop and Soda', 'JillyJam', 2023, [
    { name: 'Raw sugar', duration: '5:10' },
  ])
);
console.log(
  'Added to albums collection:',
  addToCollection('Froth the coffee', 'Triple Beans', 1988, [
    { name: 'Latte plz!', duration: '5:34' },
  ])
);
console.log(
  'Added to albums collection:',
  addToCollection('Running on Mars', 'Chowmein', 2000, [
    { name: 'Moon cake', duration: '3:12' },
    { name: 'Sun shiitake', duration: '5:18' },
  ])
);
console.log(
  'Added to albums collection:',
  addToCollection('Purple veins', 'SillyDolls', 2013, [
    { name: 'PinkDye', duration: '4:55' },
  ])
);
console.log(
  'Added to albums collection:',
  addToCollection('Beyond', 'SillyDolls', 2015, [
    { name: 'Infinity', duration: '6:02' },
    { name: 'Never-more', duration: '4:16' },
  ])
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
//***COMMENTS for original code:
//  declared showCollection function with collectionArray as placeholder (parameter)
//  looping through each of the items inside the collection
//  we created a new variable currentAlbum to hold the current elements of collection album (deconstruction for readability)
//  console.log the album as formatted: `TITLE by ARTIST, published in YEAR`
//    +++STRETCH GOAL ADD ON COMMENTS:
//          we created a new variable 'tracks' to hold the current album tracks for easier use/read
//          looping through the current track and console.log as formatted:  [index + 1]. NAME: DURATION
//
function showCollection(collectionArray) {
  //     TITLE by ARTIST, published in YEAR:
  //     1. NAME: DURATION
  //     2. NAME: DURATION
  //     3. NAME: DURATION
  //     TITLE by ARTIST, published in YEAR:
  //     1. NAME: DURATION
  //     2. NAME: DURATION
  // console.log(collection.length); // currently have 10 items
  for (i = 0; i < collectionArray.length; i++) {
    let currentAlbum = collectionArray[i];
    console.log(
      `${currentAlbum.title} by ${currentAlbum.artist}, published in ${currentAlbum.yearPublished}:`
    );

    let tracks = currentAlbum.tracks;

    for (j = 0; j < tracks.length; j++) {
      let currentTrack = tracks[j];
      console.log(`${j + 1}. ${currentTrack.name}: ${currentTrack.duration}`);
    }
  }
}

console.log('--- 5. TEST: showCollection function ---');
// - Test the `showCollection` function.
//
//***COMMENTS:
// console.log collection.length to see how many item is currently in array = 10 items
// console.log showCollection(collection) ==> use 'collection' as the argument to invoked the showCollection()
console.log('Collection length:', collection.length); // 10 items in 'collection' array
console.log('Show collection:'), showCollection(collection);

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
console.log('Search by artist CoolAid:', findByArtist('CoolAid')); // empty string - not in database
console.log('Search by artist Shortcakes:', findByArtist('Shortcakes')); // empty string - not in database
console.log('Search by artist Butterfly:', findByArtist('Butterfly')); // empty string - not in database

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
// Object.entries(object) METHOD: returns an array of [key, value] pairs.
//     is used to return an array consisting of enumerable property [key, value] pairs
//     of the object which are passed as the parameter. The ordering of the properties is the same as that given
//     by looping over the property values of the object manually
//
//     declared a search function with 'searchCriteria' parameter
//      we created a searchResults variable with empty array list
//      looping through the collection album to determine if searchCriteria is valid/good? 
//      if yes, then add the current album to the searchResults
//      
function search(searchCriteria) {
  const searchResults = [];
  for (i = 0; i < collection.length; i++) {
    // flag that all the conditions is valid/good
    let isAllConditionMatch = true;

    for (const [key, value] of Object.entries(searchCriteria)) {
      // if current searchCriteria key is 'trackName'
      //   console.log('search key: ', key);
      //   console.log('search value: ', value);
      if (key === 'trackName') {
        // grab tracks from current album
        const tracks = collection[i].tracks;

        // console.log('search collection[i].tracks: ', collection[i].tracks);
        // setting a flag to check if we found the track of the searchCriteria
        let foundTrack = false;
        // then we loop through the tracks
        // console.log('search value: ', value);
        // console.log(tracks);
        for (let j = 0; j < tracks.length; j++) {
          //   console.log('search value: ', value);
          //   console.log('tracks[j].name: ', tracks[j].name);
          // if the current track name is equal in type/value of the searchCriteria trackName value
          if (tracks[j].name === value) {
            // then we found the track = true; flag that we found the track
            foundTrack = true;
            // and exit of this current loop
            break;
          }
        }
        // here we verified if track has not been found
        if (!foundTrack) {
          // set isAllConditionMatch flag to false - so then we do not add album to searchResults
          isAllConditionMatch = false;
          // exit searchCriteria loop
          break;
        }
      }

      // else if criteria doesn't met
      else if (collection[i][key] !== value) {
        // set isAllConditionMatch flag to false
        isAllConditionMatch = false;
        // exit searchCriteria loop
        break;
      }
    }

    if (isAllConditionMatch) {
      // if criteria is met then push album to the searchResults array
      searchResults.push(collection[i]);
    }
  }
  return searchResults;
}

//  testing search(artist, yearPublished):
console.log(
  'Searching for artist Chowmein & year 2000:',
  search({ artist: 'Chowmein', yearPublished: 2000 })
);
console.log(
  'Searching for artist SillyDolls & year 2013:',
  search({ artist: 'SillyDolls', yearPublished: 2013 })
);
//  testing search(artist):
console.log(
  'Searching for all artist Triple Beans',
  search({ artist: 'Triple Beans' })
);
console.log(
  'Searching for all artist JillyJam:',
  search({ artist: 'JillyJam' })
);
//  testing search(yearPublished):
console.log('Searching for all year 1988:', search({ yearPublished: 1988 }));
console.log('Searching for all year 2001:', search({ yearPublished: 2001 }));
//  testing search(trackName) --- part of stretch goal #B-2:
console.log(
  'Searching for track name "Latte plz!":',
  search({ trackName: 'Latte plz!' })
);
console.log(
  'Searching for track name "Sun shiitake":',
  search({ trackName: 'Sun shiitake' })
);

console.log('--- B. STRETCH GOAL: add tracks to album ');
// *B-1: Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`.
//     You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
// *B-2: Update `search` to allow a `trackName` search criteria.
// *B-3: Update the `showCollection` function to display the list of tracks for each album with its name and duration.
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
//  B-1: SCROLL UP TO QUESTION NUMBER #2 to see addToCollection() updates
//  B-2: SEE QUESTION STRETCH GOAL # A to see 'search' function with 'trackName' search criteria
//  B-3: SEE QUESTION 4 to see 'showCollection' function display per formatted inquiries
