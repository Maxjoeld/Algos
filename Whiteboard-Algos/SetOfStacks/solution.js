class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [
      []
    ];
    this.currentStackIndex = 0;
  }

  get length() {
    return this.currentStackIndex + 1;
  }

  push(item) {
    // check to see if the current stack has room
    if (this.stacks[this.currentStackIndex].length < this.capacity) {
      this.stacks[this.currentStackIndex].push(item);
    } else {
      // current stack has reached the capacity
      // add a new stack to the set of stacks and push onto the new stack
      this.stacks.push([]);
      this.currentStackIndex++;
      this.stacks[this.currentStackIndex].push(item);
    }
  }

  pop() {
    // check to see if the current stack is empty
    if (this.stacks[this.currentStackIndex].length === 0) {
      this.currentStackIndex--;
    }
    return this.stacks[this.currentStackIndex].pop();
  }
  popAt(index) {
    return this.stacks[index].pop();
  }

  // A `popAt` implementation that exhibits the roll over behavior
  popAtWithRollOver(index) {
    return _shiftStacks(index);
  }

  _shiftStacks(index) {
    const rv = this.stacks[index].shift();

    if (this.stacks[index].length === 0) {
      this.stacks.splice(index, 1);
    } else if (this.stacks.length > index + 1) {
      const v = this._shiftStacks(index + 1);
      this.stacks[index].push(v);
    }

    return rv;
  }
}

/* Some console.log tests */
const stacks = new SetOfStacks(3);
stacks.push(6);
stacks.push(8);
stacks.push(3);
// console.log(stacks.length); // should print 1

// stacks.push(4);
// console.log(stacks.length); // should print 2
