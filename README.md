# Coding Test: Red Badger (Martian Robots)

Takes a sample text input (currently read from `input.txt`) and returns a string output per the spec.

## How to run

You can run the simulation with the sample data by installing dependencies:

```
npm install
```

And then running:

```
node index
```

Tests can be run with:

```
npm run test
```

Built using node `v10.15.1`.

## Notes
- Unstructured text input wigs me out, so I’ve separated out the parse and ‘stringify’ bits out into utility functions. Arguably these should be extracted out further, away from `simulation` and into a separate consumer that renders output.
- I’ve tried to avoid classes for simplicity. Instances don’t make any use of prototypal inheritance, but in the spirit of Crockford this is unlikely to be an issue given the scale.
- I regret not using TypeScript - it would have been far easier than trying to type with JSDoc, especially when sharing types across files.

## Next steps
- There are some spaces where tests are lacking, particularly on `createLevel`. There should be tests that ensure early exist happens when a scent is found, that a scent is correctly added, that `withinBound` works as desired etc.
- There’s duplication in testing code that could be cleaned up and extracted (e.g. in `commandHandler`).
- It would be great to have a simple UI that allow for input entry directly, since the text file is pretty lame. On top of this, a minor refactor or `simulation` would make it very easy to get the data out for rendering a grid-style UI with React or similar.