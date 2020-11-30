// class Emitter {
//   constructor() {
//     this.events = new Map();
//   }
//   // you can call it "on"
//   subscribe(event, callback) {
//     if (!this.events.get(event)) {
//       this.events.set(event, [callback]);
//     } else {
//       this.events.get(event).push(callback);
//     }

//     // return () =>
//     //   this.events.set(
//     //     event,
//     //     this.events.get(event).filter((fn) => fn !== callback)
//     //   );
//     return () => this.unsubscribe(event, callback);
//   }
//   unsubscribe(event, callback) {
//     const allEvents = this.events.get(event);
//     const filteredEvents = allEvents.filter((fn) => fn !== callback);

//     this.events.set(event, filteredEvents);
//   }
//   emit(event, data) {
//     const fns = this.events.get(event);

//     if (fns) {
//       //   fns.forEach(fn => fn.call(null, data));
//       //   fns.forEach(fn => fn(data));
//       const fireCallback = (callback) => callback(data);

//       fns.forEach(fireCallback);
//     } else {
//       throw new Error(
//         `Error: You have to subscribe for ${event} in order to Emit it.`
//       );
//     }
//   }
// }

class Emitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(event, callback) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.push(callback);
      this.events.set(event, callbacks);
    } else {
      this.events.set(event, [callback]);
    }

    return () => this.unsubscribe(event, callback);
  }
  unsubscribe(event, callback) {
    const callbacks = this.events.get(event);
    const filtered = callbacks.filter((fn) => fn !== callback);
    this.events.set(event, filtered);
  }
  emit(event, data) {
    const callbacks = this.events.get(event);
    if (callbacks && callbacks.length > 0) {
      callbacks.forEach((cb) => cb(data));
    } else {
      throw new Error(`There is no subscribed event ${event}`);
    }
  }
}

const emitter = new Emitter();

emitter.subscribe("event", (data) =>
  console.log(`2 - callback in subscribe -> ${data}`)
);

const unsubscribe = emitter.subscribe("event", (data) =>
  console.log(`1 - callback in subscribe -> ${data}`)
);
emitter.emit("event", "data");
unsubscribe("event", (data) =>
  console.log(`1 - callback in subscribe -> ${data}`)
);
emitter.emit("event", "lol");
