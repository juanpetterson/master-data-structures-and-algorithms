const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(1000).fill('nemo');

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo1(large);

// O(n) --> Linear Time

const findNemo2 = (array) => {
  array.forEach((item) => {
    if (i === 'nemo') {
      console.log('Found NEMO!');
    }
  });
};

const findNemo3 = (array) => {
  for (let item of array) {
    if (i === 'nemo') {
      console.log('Found NEMO!');
    }
  }
};
