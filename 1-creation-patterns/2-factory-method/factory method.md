The Factory Method pattern defines an interface for creating an object but lets subclasses change the type of objects that will be created.
This pattern is useful when there is a need to delegate the instantiation logic to child classes.

In this example, EmployeeFactory is used to create different types of employee objects.
By using the Factory Method, we _encapsulate_ the instantiation logic and make the _object creation_ process _adaptable_ to the _given context_.
