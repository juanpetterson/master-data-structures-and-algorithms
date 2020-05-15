class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    const address = this._hash(key);

    const currentBucket = this.data[address];
    if (currentBucket) {
      const found = currentBucket.find((item) => item[0] === key);

      if (found) {
        return found[1];
      }
    }

    return undefined;
  }

  // get(key) {
  //   const address = this._hash(key);

  //   const currentBucket = this.data[address];
  //   if (currentBucket) {
  //     for (let index = 0; index < currentBucket.length; index++) {
  //       if (currentBucket[index][0] === key) {
  //         return currentBucket[index][1];
  //       }
  //     }
  //   }

  //   return undefined;
  // }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // [[['key', 'value']]]
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
  }

  values() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // [[['key', 'value']]]
        keysArray.push(this.data[i][0][1]);
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
// console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9);
myHashTable.set('oranges', 2);
console.log(myHashTable.keys());
console.log(myHashTable.values());
// console.log(myHashTable.get('apples'));
