function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return;
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

function reverse2(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return;
  }

  return str.split('').reverse().join('');
}

const reverse3 = (str) => str.split('').reverse().join('');
const reverse4 = (str) => [...str].reverse().join('');

console.log(reverse4('teste'));
