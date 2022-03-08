function translatePigLatin(str) {
  let re = new RegExp(/[b-df-hj-np-tv-z]+/); //Same as /^[aeiou]/!
  if (str.search(re) !== 0) {
    return str + 'way'; //I could have used concat().
  }
  let mtch = str.match(re); //Returns an array and stores the match at index 0.
  str = str + mtch[0];
  return str.slice(mtch[0].length) + 'ay';
 }  
