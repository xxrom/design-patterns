Observer: Allows one object to notify other objects about changes in its state, without making the observed objects dependent on the classes of the observers.

The Observer pattern is a fundamental pattern that allows an object, known as the subject, to notify other objects, known as observers, about changes in its state.

It is widely used for implementing distributed event handling systems, in a way that the subject doesn't need to know anything about the observers.

Product acts as the subject, and Observer instances are observers. Whenever setPrice is called on a Product, it notifies all its observers about the price change.
