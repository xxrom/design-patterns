The _Command pattern_ turns a _request_ into a _stand-alone object_ that contains all information about the request.
This abstraction allows you to parameterize methods with different requests, delay or queue a request's execution, and _support undoable operations_ (we can implement _Undo_ method in each _Command class_ that will reset light state before this command execution).

TurnOnCommand and TurnOffCommand are command objects encapsulating the action to be performed on the Light object.

The RemoteControl class acts as an invoker that executes these commands.

The Command pattern allows for the commands to be _dynamically assigned to the invoker_, making the _system more flexible and extensible_.

---

## Pluses of the Command Pattern

- Decoupling of Invoker and Receiver: By separating the object that invokes the operation from the object that knows how to perform it, your code becomes more modular and easier to extend.
- Extension and Maintenance: Adding new commands is straightforward and doesn't affect existing code, making the system easier to extend and maintain.
- Undo/Redo Capabilities: Supports implementing undoable and redoable actions, which is crucial for applications like editors or GUI-based tools.
- Sequencing and Logging: Enables sequencing of commands, batching, and logging of operations, which can be useful for debugging, transactional systems, or playback features.
- Flexible Execution: Commands can be compiled into a list and executed at a later stage, allowing for flexible execution strategies.

## Minuses of the Command Pattern

- Complexity: For simple applications or scenarios where actions are straightforward and unlikely to change, introducing commands can add unnecessary complexity.
- Overhead: Each command is an object, which can lead to a proliferation of classes and objects, potentially increasing the memory footprint of the application.
- Learning Curve: Understanding and implementing the Command pattern effectively requires a good grasp of OOP concepts, which might be a hurdle for beginners.

---

## When to Use It

- Complex Operations: When your application involves complex operations that might need to be undone, executed on demand, or logged.
- GUI Applications: In applications with complex user interactions where actions might need to be undone or redone.
- Extensible Systems: When building systems that need to be highly extensible, allowing new commands to be added without altering existing code.
- Macro Recording: When you need to implement macro recording functionalities where a series of actions are recorded and replayed.

## When Not to Use It

- Simple Operations: For applications where operations are simple, straightforward, and unlikely to change or need to be undone.
- Small Projects: In small projects or scripts where the overhead of adding a command pattern doesn't justify the benefits.
- Direct Execution Preferred: When the action's execution is simple and can be done directly without the need for undo functionality, logging, or delayed execution.
