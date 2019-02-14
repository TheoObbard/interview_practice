class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let chr = word[i];
      let node;
      if (current.children[chr]) {
        node = current.children[chr];
      } else {
        node = new TrieNode()
        node.insertVal(chr);
        current.children[chr] = node;
      }
      current = node;
    }
    current.endOfWord = true;
  }

  prefixCheck(str) {
    
  }

  wholeCheck(str) {

  }

  deleteWord(word) {
    // follow the chars down and change the last one to false endOfWord
  }
}

class TrieNode {
  constructor() {
    this.chars = [];
    this.children = {};
    this.endOfWord = false;
  }

  insertVal(val) {
    this.chars.push(val);
  }
}