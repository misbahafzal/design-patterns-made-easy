# Design Patterns Made Easy

All 23 classic design patterns, explained with everyday analogies and tiny JavaScript examples you can run with plain Node.js.

This repo goes with my 7 part Medium series, **Software Design Patterns Made Easy**. Each pattern has its own folder with a runnable `index.js` and a diagram. There is also a 2 page cheat sheet: [design-patterns-cheat-sheet.pdf](design-patterns-cheat-sheet.pdf).

## How to run an example

You only need [Node.js](https://nodejs.org). No installs, no dependencies.

```bash
cd patterns/behavioral/observer
node index.js
```

## The 23 patterns

There are three groups:

* **Creational**: how objects get made.
* **Structural**: how objects fit together.
* **Behavioral**: how objects talk and share work.

| Pattern | Category | The idea | Real world analogy | Use it when | Code |
|---|---|---|---|---|---|
| Singleton | Creational | Only one instance, shared everywhere. | See [Part 1](https://medium.com/@misbahafzal.k/software-design-patterns-made-easy-part-1-4eb3cb76137a) | You need exactly one shared thing, like app config or a connection. | [singleton](patterns/creational/singleton) |
| Factory Method | Creational | Ask a factory for an object, and it decides what to hand back. | A restaurant kitchen: you order a burger, the kitchen knows the recipe. | Your code creates several types of the same thing, like email, SMS, and push notifications. | [factory-method](patterns/creational/factory-method) |
| Abstract Factory | Creational | Create whole families of matching objects. | A furniture set: pick "modern" and the table, chairs, and cabinet all match. | Pieces must match each other, like light and dark theme components. | [abstract-factory](patterns/creational/abstract-factory) |
| Builder | Creational | Build a complex object step by step. | Ordering a sandwich: bread, turkey, lettuce, cheese, one step at a time. | An object has lots of optional pieces and a giant constructor would be confusing. | [builder](patterns/creational/builder) |
| Prototype | Creational | Copy an existing object and tweak what's different. | A cookie cutter: same shape every time, different toppings. | You need many almost identical objects, like game enemies with small differences. | [prototype](patterns/creational/prototype) |
| Adapter | Structural | A small piece that lets two mismatched things work together. | A travel plug adapter between your charger and a foreign wall socket. | A library expects one interface and your code speaks another. | [adapter](patterns/structural/adapter) |
| Decorator | Structural | Add abilities in layers, without touching the original. | Plain coffee, then milk, then sugar, then whipped cream. | You want to mix and match extras, like logging or retries, without a class for every combo. | [decorator](patterns/structural/decorator) |
| Facade | Structural | Hide a complicated system behind one simple interface. | Starting a car: one key turn hides the starter, fuel pump, and ignition. | Callers shouldn't need to know about many steps, like a checkout with four systems behind it. | [facade](patterns/structural/facade) |
| Proxy | Structural | A stand-in that controls access to the real thing. | An office receptionist who decides whether you get to see the manager. | You want to delay, cache, or guard expensive work, like loading a big image. | [proxy](patterns/structural/proxy) |
| Composite | Structural | Treat one item and a group of items the same way. | Folders on your computer: folders hold files and other folders. | You have trees of things, like UI components inside components. | [composite](patterns/structural/composite) |
| Bridge | Structural | Split "what it does" from "how it does it." | A TV remote that works with any TV brand. | Two dimensions would multiply into too many classes, like shapes times renderers. | [bridge](patterns/structural/bridge) |
| Flyweight | Structural | Share the heavy, identical parts instead of duplicating them. | A library lends one copy of a book to many readers. | You need thousands of similar objects, like trees in a game forest. | [flyweight](patterns/structural/flyweight) |
| Observer | Behavioral | Subscribe once and get told automatically when something changes. | A YouTube channel: hit Subscribe, get notified about new videos. | Many parts of your app must react to one change, like a cart update. | [observer](patterns/behavioral/observer) |
| Strategy | Behavioral | Put each way of doing a job in its own swappable object. | A maps app: walk, drive, or take transit to the same place. | You have a growing `if / else` that picks behavior by type, like payment methods. | [strategy](patterns/behavioral/strategy) |
| Command | Behavioral | Turn a request into an object you can store, queue, or undo. | A restaurant order slip handed to the kitchen. | You need undo, redo, job queues, or retries. | [command](patterns/behavioral/command) |
| State | Behavioral | Behavior changes as the object moves between states. | A traffic light: red, green, yellow. | You keep writing `if (status === ...)` checks in many methods. | [state](patterns/behavioral/state) |
| Chain of Responsibility | Behavioral | Pass a request along handlers until one deals with it. | A refund request going from support to manager to director. | Several handlers might take a request, like middleware or validators. | [chain-of-responsibility](patterns/behavioral/chain-of-responsibility) |
| Template Method | Behavioral | Fixed steps in a base class, subclasses fill in the blanks. | Making a hot drink: boil, brew, pour, add extras. | Two classes follow the same recipe with small differences. | [template-method](patterns/behavioral/template-method) |
| Iterator | Behavioral | A standard way to walk through a collection one item at a time. | A playlist: press "next" and the next song plays. | You want `for...of` to work on your own collection. | [iterator](patterns/behavioral/iterator) |
| Mediator | Behavioral | Objects talk to one go-between instead of to each other. | An air traffic control tower coordinating planes. | Many objects all know about each other, like users in a chat room. | [mediator](patterns/behavioral/mediator) |
| Memento | Behavioral | Save a snapshot so you can go back later. | A save point in a video game. | You need undo by restoring an earlier state, like in an editor. | [memento](patterns/behavioral/memento) |
| Visitor | Behavioral | Add new jobs to objects without changing them. | A building inspector visiting rooms that stay the same. | Your set of objects is stable but the list of jobs keeps growing. | [visitor](patterns/behavioral/visitor) |
| Interpreter | Behavioral | Each rule of a small language is its own class. | A calculator working out `5 + (10 - 4)`. | You need to evaluate a small set of rules, like a math expression or search filter. | [interpreter](patterns/behavioral/interpreter) |

## Read the series

1. [Part 1: Singleton and an intro to design patterns](https://medium.com/@misbahafzal.k/software-design-patterns-made-easy-part-1-4eb3cb76137a)
2. [Part 2: Factory, Abstract Factory, Builder, Prototype](https://medium.com/@misbahafzal.k/software-design-patterns-made-easy-part-2-18aa9a29f87a)
3. [Part 3: Adapter, Decorator, Facade, Proxy, Composite](https://medium.com/@misbahafzal.k/software-design-patterns-made-easy-part-3-f2e56d61388f)
4. [Part 4: Bridge, Flyweight](https://medium.com/@misbahafzal.k/software-design-patterns-made-easy-part-4-f969ee6c6d77)
5. [Part 5: Observer, Strategy, Command](https://medium.com/@misbahafzal.k/software-design-patterns-made-easy-part-5-3bd53c311ab5)
6. [Part 6: State, Chain of Responsibility, Template Method](https://medium.com/@misbahafzal.k/software-design-patterns-made-easy-part-6-5499b7d85a71)
7. [Part 7: Iterator, Mediator, Memento, Visitor, Interpreter, plus a recap of all 23](https://medium.com/@misbahafzal.k/software-design-patterns-made-easy-part-7-85c176abec85)

## A quick way to pick one

* "Who needs to know about this?" Think **Observer**.
* "Which way should I do this?" Think **Strategy**.
* "Can I delay, repeat, or undo this?" Think **Command** or **Memento**.
* "What should I do right now, given where I am?" Think **State**.
* "Who should handle this?" Think **Chain of Responsibility**.
* "These two things follow the same recipe." Think **Template Method**.

You don't need to memorize all 23. What helps is recognizing the problem each one solves, so next time you see a giant `if` chain or objects that know too much about each other, you know there's a well worn way out.

## License

[MIT](LICENSE). Use it, share it, teach with it.
