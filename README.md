# emy

An adorably small event emitter/pubsub library.

## Usage

```js
import emy from 'emy';

const [publish, subscribe] = emy();

const unsubscribe = subscribe((event) => {
  console.log(`Hello ${event.value}!`);
});

publish({ value: 'world' });

unsubscribe();
```

## API

### `emy()`

Creates a new event emitter.

```js
const [publish, subscribe] = emy();
```

#### Return value

An array containing 2 functions, `publish` and `subscribe`.

> These can be renamed to whatever you prefer, for example `[emit, on]` or `[publishFoo, subscribeFoo]`.

### `publish(event)`

Invokes all subscribed listeners.

```js
publish({ value: 'world' });
```

#### Parameters

- `event` any value to be passed to each listener.

### `subscribe(listener)`

Register a listener.

```js
const unsubscribe = subscribe((event) => {
  console.log(`Hello ${event.value}!`);
});

unsubscribe();
```

#### Parameters

- `listener` function to call when event is published.

#### Return value

Returns a function which unregisters the listener when called.
