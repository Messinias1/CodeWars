class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    if (index < 0 || index >= this.size) return false;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.size--;
    return true;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    let values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.val);
      current = current.next;
    }
    return values;
  }
}
