The _Iterator pattern_ provides a _way_ to _access the elements_ of an aggregate object sequentially _without exposing its underlying representation_ (so end user can use it without knowing how it's working inside ? - Yes, it is).
The Iterator pattern is particularly _useful_ when you have a _complex data structure_ and want to provide a _simple way to traverse it_.

It's commonly used in JavaScript to iterate over collections such as _arrays and maps_.

Collection is a simple class that holds items.

By implementing the _[Symbol.iterator]()_ method, we make Collection iterable, allowing the use of the for...of loop to traverse its items.

## The iterator created in _[Symbol.iterator]()_ method returns an _object with a next() method_, which conforms to the iterator protocol ( returning object with {value: (current value), done: (when to stop?)}).

## Pluses of the Iterator Pattern

1. _Abstraction of Traversal Mechanism_: The Iterator pattern abstracts the process of iterating over a collection. This means that the client code can traverse various collections (arrays, trees, graphs, etc.) using a single interface, without needing to understand the internal structure of the collections.

2. _Simplification of the Client Code_: By using iterators, client code can focus on what to do with each element in the collection rather than how to access them. This leads to cleaner, more understandable code.

3. _Flexibility and Reusability_: The pattern allows for different types of iterators to be defined for the same collection, each possibly iterating over the elements in different orders or based on different criteria. This makes the pattern highly flexible and reusable for different needs.

4. _Decoupling Collection from Traversal_: Since the collection's internal structure is not exposed, changes to the collection's internal structure (like changing from an array to a linked list) do not affect the client code. This decoupling enhances modifiability and robustness.

5. _Support for Multiple Simultaneous Traversals_: Unlike direct traversal mechanisms, the Iterator pattern allows for _multiple traversals_ of a collection to take place _simultaneously_!!, each managed by _its own iterator_ instance.

---

## Use Cases and Benefits

- _Complex Data Structures_: In cases where data structures are complex (such as trees or graphs), iterators can provide a simple interface for traversal, hiding the complexity from the user.
- _Unified Interface for Different Collections_: For systems that operate on various types of collections, iterators offer a uniform way to access their elements, making the system more modular and easier to understand.
- _Dynamic Data Collections_ (like stable access point to data ?): For collections that may change during the program's lifetime, iterators can provide a safe way to navigate the collection without risking errors due to modifications.
