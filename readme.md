# rethink-react CLI

Work easily with rethink struture pattern in react.

## How to install:

#### With YARN

```
"yarn add global rethink-react"
```

#### With NPM

```
"npm install -g rethink-react"
```

## How work with:

After install you can open your rethink react-native app and run:

```
rethink-gen create-component ComponentName
```

or shorthand

```
rethink-gen cc ComponentName
```

this command will generate a `component` like `src/components/ComponentName`

with this following structure:

```
  src
  -- components
  ---- ComponentName
  ------ index.js
  ------ ComponentName.js
  ------ ComponentName.test.js
  ------ styled.js
```

> or

```
rethink-gen create-module MyModule
```

or shorthand

```
rethink-gen cm MyModule
```

this command will generate a `modules` like `src/components/`

with this following structure:

```
  src
  -- modules
  ---- MyModule
  ------ actions
  -------- index.js

  ------ components
  -------- index.js

  ------ reducers
  -------- MyModuleReducer.js
  -------- index.js

  ------ screens
  -------- MyModuleScreen.js
  -------- styled.js

  ------ types
  -------- index.js
```

> and

```
rethink-gen store-redux
```

or shorthand

```
rethink-gen sr
```

this command will generate a `store` folder in `src/`

```
src
-- store
---- reducers.js
---- store.js
```

Help us...
