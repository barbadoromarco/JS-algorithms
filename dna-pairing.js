//Takes each character, gets its pair, and returns the results as a 2d array.
function pairElement(str) {
  return str.split('').map(base => base === 'G' ? [base, 'C'] : base === 'C' ? [base, 'G'] : base === 'A' ? [base, 'T'] : base === 'T' ? [base, 'A'] : null);
}
