The Builder Pattern is designed to provide a _flexible solution_ to various object creation problems in object-oriented programming.
It _allows constructing complex objects step by step_, thereby allowing the production of different types and representations of an object using the same construction process.

In this Builder pattern example, UserProfileBuilder serves as the builder class with methods for _setting optional attributes_ _step by step_.
The _build() method returns the final userProfile object_. This pattern is particularly useful when an object has many parameters, some of which may be optional, improving code readability and maintainability.
