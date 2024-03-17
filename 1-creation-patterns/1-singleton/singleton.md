The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.
It is used when only one instance of a class is needed to control the action throughout the execution.

In this example, Database class is a singleton. Regardless of how many times you try to create a new instance of Database, you get back the first instance created.
This is particularly useful for connections to a database or when managing a shared resource.
