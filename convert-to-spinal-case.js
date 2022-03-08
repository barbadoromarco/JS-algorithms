//Convert a string to spinal case
function spinalCase(str) {
  let re = new RegExp(/\s+|_+/g);
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(re, '-').toLowerCase();
}
