class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0
    this.hash = {};
    this.head = null;
    this.tail = null;
  }

  get(key) {
    let resp = hash[key];
    
    let node = this.head;
    while (node.value !== key) {
      node = node.next;
    }

    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = this.tail;
    this.tail = node;

    return resp;
  }

  put(key, val) {
    this.checkCapacityAndDrop();
    let node = new ListNode(key);
    if (this.length === 0) {
      this.head = node;
    } else if (this.length === 1) {
      this.tail = node; 
      this.prev = this.head;
    } else {
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
    hash[key] = val;
  }

  checkCapacityAndDrop() {
    if (this.length >= this.capacity - 1) {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
}