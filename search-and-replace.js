// Preserves the case of the first character in the original word when it's replacing it.
function myReplace(str, before, after) {
  return !before.match(/[A-Z]/) ? //It made more sense to use test().
    str.replace(before, after.toLowerCase()) : 
    str.replace(before, after.charAt(0).toUpperCase().concat(after.slice(1))); //Nice ternary operator!
}
