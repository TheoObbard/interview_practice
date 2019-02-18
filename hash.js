// implement a hash table using only arrays

class Hash {
  constructor(capacity = 8) {
    this.capacity = capacity;
    this.store = new Array();
    for (let i = 0; i < this.capacity; i++) {
      this.store.push([]);
    }
    this.length = 0;
  }

  insert(key, val) {
    this.length += 1;
    if (this.length > this.capacity / 2) {
      this.resize();
    }

    let hashedKey = key.hash();
    let correctBucked = hashedKey % this.capacity;
    this.store[correctBucked].push(val);
  }

  includes(key) {
    let hashedKey = key.hash();
    let correctBucked = hashedKey % this.capacity;
    return this.store[correctBucked][0];
  }

  resize() {
    this.capacity *= 2;
    // iterate through the store and re-hash every element so that 
    // they are in their new correct buckets 
  }

}

new Hash();