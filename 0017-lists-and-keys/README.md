## STARTING OFF:

Make sure you have npm installed.
Run:
```
cd app
npm install
npm start
```

View at: http://localhost:3000/

## CONCEPTS:

Lists and Keys

Keys help React identify which items have changed, are added, or are removed.
Keys should be given to the elements inside the array to give the elements a stable identity.

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
Most often you would use IDs from your data as keys: {thing.id}

Keys used within arrays should be unique among their siblings.
However they don't need to be globally unique.

Keys only make sense in the context of the surrounding array.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-react/tree/master/0017-lists-and-keys
* https://facebook.github.io/react/docs/lists-and-keys.html
* https://facebook.github.io/react/docs/reconciliation.html#recursing-on-children
