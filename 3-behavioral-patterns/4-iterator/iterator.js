class Collection {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    console.log("Add new item: ", item);
    this.items.push(item);
  }

  /*
   Created iterator for getting next item without deep 
   understanding the structure for end user
  */
  [Symbol.iterator]() {
    console.log("Symbol.iterator: ");
    let index = 0;

    return {
      next: () => {
        const done = index >= this.items.length;
        const value = !done ? this.items[index] : undefined;
        index += 1;

        return { value, done };
      },
    };
  }
}

// Usage example
const collection = new Collection();
collection.addItem("item 0");
collection.addItem("item 1");
collection.addItem("item 2");
collection.addItem("item 3");

// Iterate collection using [Symbol.iterator] function { done, value}
for (let item of collection) {
  console.log("item: ", item);
}
