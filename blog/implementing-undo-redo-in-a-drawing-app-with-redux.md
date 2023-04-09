---
title: Implementing undo/redo in a drawing app with Redux,
description: undo/redo is a cool future to add in your apps and redux makes it easy, but how can I handle it when my state is huge, like in a drawing app for example?
date: 2021-09-26
---

## The Problem

When I wanted to add history to [drawing-pad](https://yosefbeder.github.io/drawing-pad/) I found simple examples about implementing it in [Implementing Undo History | Redux](https://redux.js.org/usage/implementing-undo-history).

Btw, I recommend that you read their docs before seeing this one.

While the way that they recommended is great, but when your app state is something crazy (huge), It will cause lag.

For instance, in this app, I wanted to save some paths which will be saved in some way to allow me to apply history.

A path consists of loads of points, so When I saved them the way mentioned in the Redux docs the app got laggy.

So I decided to invent my own way.

```ts
// the way mentioned in the docs
interface State {
  past: Array<T>;
  present: T;
  future: Array<T>;
}
```

This way assumes that `T` isn't an array.

In my case `T` is of this type

```ts
interface Path {
  // these are the configs of that this paths was drawn with.
  config: {
    size: number;
    blur: number;
    color: number;
  };

  // these are the points that is path consists of.
  points: [number, number][];
}

type T = Path[];
```

Of course saving a complex data structure like this one in the way mentioned in the docs is a disaster.

## The Idea of the solution

So I decided to use a different appraoch which is saving `Path` in `present` and saving `Path[]` in `past` and `future`.

And the state of the app is the result of merging `past` and `present`.

```ts
interface State {
  past: Path[];
  present: Path;
  future: Path[];
}
```

This changes of course results some strange cases and changes the common behavior of history.

But, It also gives us some cool feature like that the history will be saved after refreshing.

## Implementing the solution

As I said the implementation of this startegy will be different so I will tell you here how did Implemented it.

> you should disable the `undo` button if `[...past, present]` is empty, and the `redo` button if `future` is empty.

### Pushes to the history stack

When `present` is `null`:

1. Update `present`.

2. Reset `future`.

```js
return {
	...state,
	paths: {
		...state.paths,
		// 1.
		present: action.payload as Path,
		// 2.
		future: [],
	},
};
```

When `present` isn't `null`:

1. Push the last `present` to `past`.

2. Update the current `present`.

3. Reset `future`.

```js
return {
	...state,
	paths: {
		// 1.
		past: [...state.paths.past, state.paths.present],
		// 2.
		present: action.payload as Path,
		// 3.
		future: [],
	},
};
```

### Undo

When `past` is empty:

1. Insert `present` to `future`.

2. Set `present` to `null`.

```js
return {
	...state,
	paths: {
		// 2.
		present: null,
		// 1.
		future: [state.paths.present!, ...state.paths.future],
	},
};
```

When `past` isn't empty:

1. Remove the last item from `past`.

2. Set `present` to the removed item from `past`.

3. Insert `present` to `future`.

```js
return {
	...state,
	paths: {
		// 1.
		past: state.paths.past.slice(0, -1),
		// 2.
		present: state.paths.past[state.paths.past.length - 1],
		// 3.
		future: [state.paths.present!, ...state.paths.future],
	},
}
```

### Redo

When `present` is `null`:

1. Remove the first item from `future`.

2. Set `present` to the removed item from `future`.

```js
return {
  ...state,
  paths: {
    past: state.paths.past,
    // 2.
    present: state.paths.future[0],
    // 1.
    future: state.paths.future.slice(1),
  },
};
```

When `present` isn't `null`:

1. Remove the first item from `future`.

2. Set `present` to the removed item from `future`.

3. Push `present` to `past`.

```js
return {
	...state,
	paths: {
		// 3.
		past: [...state.paths.past, state.paths.present!],
		// 2.
		present: state.paths.future[0],
		// 1.
		future: state.paths.future.slice(1),
	},
}
```

## Conclusion

I know that the implementation isn't straight forward and is (kind of) complicated, but this is the only way that I managed to find.

If you want to see it in a real-world example you can check the code of [drawing-pad reducer function](https://github.com/yosefbeder/drawing-pad/blob/main/src/store/reducers/app.ts) 👋.
