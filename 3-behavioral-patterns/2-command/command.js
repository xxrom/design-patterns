// Simple base/empty Command class, that will be superclass for others
class Command {
  constructor() {
    console.log("Command constructor");
  }
  execute() {
    //... to be overridden by concrete command
  }
  undo() {
    // add this methods later in *Commands*
  }
}

// Controlled object
class Light {
  constructor() {
    console.log("Light Constructor");
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    console.log("Light turned on");
  }

  turnOff() {
    this.isOn = false;
    console.log("Light turned off");
  }
}

// New command for Turning On light, with supporting undo
class TurnOnCommand extends Command {
  constructor(light) {
    super();
    console.log("TurnOnCommand Constructor");
    this.light = light;
  }

  execute() {
    this.prevState = this.light.isOn;
    this.light.turnOn();
  }

  undo() {
    this.light.isOn = this.prevState;
    console.log("Undo Turn ON command => ", this.light.isOn);
  }
}

// New command for Turning Off light, with supporting undo
class TurnOffCommand extends Command {
  constructor(light) {
    super();
    console.log("TurnOffCommand Constructor");
    this.light = light;
  }

  execute() {
    this.prevState = this.light.isOn;
    this.light.turnOff();
  }

  undo() {
    this.light.isOn = this.prevState;
    console.log("Undo Turn OFF command => ", this.light.isOn);
  }
}

// Invoker
class RemoteControl {
  submit(command) {
    command.execute();
  }

  undo(command) {
    command.undo();
  }
}

// Usage
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remote = new RemoteControl();
remote.submit(turnOnCommand);
remote.submit(turnOffCommand);

// Undo all commands
remote.undo(turnOffCommand);
remote.undo(turnOnCommand);
