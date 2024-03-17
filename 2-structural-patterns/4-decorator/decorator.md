The Decorator pattern allows _behavior to be added_ to individual objects, either statically or dynamically, _without affecting the behavior of other_ objects from the same class.

Coffee is the original class that can be decorated with additional features (CoffeeWithMilk, CoffeeWithSugar).
_Each decorator class wraps the original Coffee object_ and _adds its own behavior_ to the cost method.
This pattern allows for _flexible addition of responsibilities_ to objects _without modifying the objects themselves_ or the classes they belong to.
