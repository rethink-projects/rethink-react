# Rethink React CLI

Work easily with rethink struture pattern in react.

## How to install:

#### With YARN

```
$ yarn add global rethink-react
```

#### With NPM

```
$ npm install -g rethink-react
```

### GOTCHAS

if need create a component like UserList or CardUser or MenuItem
is recommended to use `(-)` to separate words.
ex: `User-List = UserList` at the end.

## How work with:

After install you can open your rethink react-native app and run:

> Creating a Component

```
$ rethink-gen create-component ComponentName
```

or shorthand

```
$ rethink-gen cc ComponentName
```

can specify type of component

```
$ rethink-gen create-component ComponentName [options]

Options:
  -pure        create a PureComponent
  -stateless   create a Stateless Component
  -web         create a Web Component (can be used with previous)
```

this command will generate a `component` like `src/components/ComponentName`

with this following structure:

![Create Component](https://github.com/filiperethink/rethink-react/blob/master/images/ss-create-component.png?raw=true)

> Creating a Module

```
$ rethink-gen create-module MyModule
```

or shorthand

```
$ rethink-gen cm MyModule
```

this command will generate a `modules` like `src/modules/MyModule`

with this following structure:

![Create Module](https://github.com/filiperethink/rethink-react/blob/master/images/ss-create-module.png?raw=true)

> Creating a Redux Store

```
$ rethink-gen store-redux
```

or shorthand

```
$ rethink-gen sr
```

this command will generate a `store` folder in `src/`

![Create Store](https://github.com/filiperethink/rethink-react/blob/master/images/ss-store-redux.png?raw=true)

### Show Help with Commands Information

```
$ rethink-gen help
```

### What you can do:

- [ ] Be possible to create a component inside `src/module/components/NewComponent`
- [ ] Be possible to create a screen inside `src/module/screens/NewScreen.js`
- [x] Be possible to create stateless component. ex: `rethink-gen cc ComponentName -stateless`
- [x] Be possible to create pure component. ex: `rethink-gen cc ComponentName -pure`
- [ ] Be possible to work with web too \*now work's onl with react-native. ex: `rethink-gen cc ComponentName -web`

Help rethink dev's to improve this cli.
