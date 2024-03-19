The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

It's commonly used in JavaScript to iterate over collections such as arrays and maps.

Collection is a simple class that holds items.

By implementing the [Symbol.iterator]() method, we make Collection iterable, allowing the use of the for...of loop to traverse its items.

The iterator created in [Symbol.iterator]() method returns an object with a next() method, which conforms to the iterator protocol.
