# React example app

This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).

To try it, execute the following (you'll need [git](https://git-scm.com/) and [node](https://nodejs.org)) on the command line:

```
$ git clone https://github.com/fmaylinch/youtube-react.git
$ cd youtube-react
$ npm install
$ npm start
```

The app should automatically open in the browser on http://localhost:3000. For the search to work you will need to get a Youtube API key (see **step10** below for instructions) and put that key in the file `youtube-api-key.json`.

To stop the application press `Ctrl+C` from the command line. To start again you just need to execute `npm start`.

You may checkout tags to see the project in each step. For example `git checkout step01` to see the app in its first step. List all tags (steps) with `git tag -n`. See more information about the [development steps](#development-steps) below.

I recommend you to [create your own application](#getting-started-with-create-react-app) while learning.

## Development steps

**step01**: Project created with `create-react-app`.

**step02**: Remove some code that `create-react-app` created to start with an even simpler example that [doesn't use JSX](https://reactjs.org/docs/react-without-jsx.html).

**step03**: Use of [JSX](https://reactjs.org/docs/jsx-in-depth.html) to simplify code.

**step04**: Use one component (`VideoItem`) from another (`App`).

**step05**: Pass properties ([props](https://reactjs.org/docs/components-and-props.html)) to `VideoItem`.

**step06**: [Configure ESLint](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor). You may want to install [linter-eslint](https://atom.io/packages/linter-eslint).

**step07**: Display a list of `VideoItem` (from hardcoded array) using the [key](https://reactjs.org/tutorial/tutorial.html#keys) property.

**step08**: Load list of videos from sample [JSON](https://raw.githubusercontent.com/fmaylinch/youtube-react/e3404ae9a2dc6c2e91c0becb7ec62b6d42c1ac2e/src/youtube-api-sample.json) file.

**step09**: Create `VideoList` component (refactor).

**step10**: Search videos from Youtube API using [axios](https://github.com/axios/axios) (hardcoded query term). The `App` component is turned into a [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) so it can have [state](https://reactjs.org/docs/state-and-lifecycle.html), which is updated when the videos are loaded.

To get a Youtube API key go to [Google APIs](https://console.developers.google.com/apis) and look for Youtube (here's a [direct link](https://console.developers.google.com/apis/library/youtube.googleapis.com) to it). Enable that API; you will be asked to create a project before, if you don't have one. Then generate an API key in [credentials](https://console.developers.google.com/apis/credentials). Click on *Create credentials*, then on *Help me choose*, select *Youtube API*, to be called from *Web browser (Javascript)*, accessing *public data*. Once you have the API key you may explore the [Youtube API endpoints ](https://developers.google.com/apis-explorer/?#p/youtube/v3/), in particular the [search](https://developers.google.com/apis-explorer/?#p/youtube/v3/youtube.search.list) (fill `part` with `snippet` and `q` with your query).

**step11**: Add an `<input>` whose value is linked to the state (`searchTerm`) via the `onChange` [event](https://reactjs.org/docs/events.html) and a `<button>` that `onClick` searches the videos using the `searchTerm`.

**step12**: Refactor: create component `SearchForm` and notify `App` ([lift state up](https://reactjs.org/docs/lifting-state-up.html)) through a callback so it can refresh `VideoList` .

**step13**: Improve `SearchForm` (more flexible, send with `ENTER` key).

**step14**: Create a `MenuBar` to organise the layout. `SearchForm` now sends callback to `MenuBar` and `MenuBar` propagates it to `App` .

If you want to go deeper check this article about [component communication strategies in React](http://andrewhfarmer.com/component-communication). Popular state management frameworks: [Redux](http://redux.js.org) ([if you really need it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)) and [Mobx](https://github.com/mobxjs/mobx).

**step15**: Add [style](http://www.react.express/styling) via CSS files, using some [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) features.

I highly recommend learning [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ([video tutorial](https://flexbox.io/) and [little game](http://flexboxfroggy.com/)) and [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) ([little game](http://cssgridgarden.com/)). See the intro note [here](https://wdrl.info/archive/202).

**step16**: Type checking using [propTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) in `VideoItem`.

**step17**:  Type checking using [Flow](https://flow.org/) instead of propTypes. See [adding Flow](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow) ([fix for VS Code](http://international.github.io/2017/03/24/17-18-fix_vscode_flow_Type_aliases_can_be_used_only_in_a_.ts_file)) and [Flow docs about React](https://flow.org/en/docs/react/).

See this article about [Flow and TypeScript](https://engineering.tumblr.com/post/165261504692/flow-and-typescript).

**step18**: Use React Router to display `VideoList` when searching and `VideoDetail` when clicking one video in the list.

You need to install [react-router-dom](https://www.npmjs.com/package/react-router-dom).

You may want to check this [React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf). About [navigating programmatically](https://stackoverflow.com/a/42121109/1121497), I used the Route approach from that answer. About Flow types, I just could find this [type definition file](https://github.com/flowtype/flow-typed/blob/master/definitions/npm/react-router-dom_v4.x.x/flow_v0.53.x-/react-router-dom_v4.x.x.js), although it's a bit hard to read.

**step19**: Use if/else [conditional rendering](http://www.react.express/conditional_rendering) for displaying a "loading..." message while loading the videos in `VideoList`.

**step20**: Load video data from `VideoDetail` so url is bookmarkable.

**step21**: Use [refs](https://reactjs.org/docs/refs-and-the-dom.html) to get `HTMLFormElement` in `SearchFormRef` (alternative version to `SearchForm`). In this case, it's useful if a form has many fields and we don't need to synchronise them with state.

**step22**: Add [tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests). 

If you want to use [Flow](https://flow.org/) in tests you may install [flow-typed](https://www.npmjs.com/package/flow-typed) (`yarn add flow-typed`) and then install the appropriate jest type definitions. To do so, I found out the jest version with `yarn list | grep " jest@"`, which in my case was `jest@20.0.4` and then installed them with `node_modules/.bin/flow-typed install jest@20.0.4`.

**step23**: Add [component tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components). It is recommended to use [Enzyme](http://airbnb.io/enzyme/) so execute `yarn add enzyme react-test-renderer jest-enzyme enzyme-adapter-react-16`. I found the need for the last package [here](https://stackoverflow.com/a/46628165/1121497). You also need to create a `src/setupTests.js` with the code indicated there.

## Getting started with create-react-app

If you want to create a project from scratch:

1. Install node from [nodejs.org](https://nodejs.org) or using [nvm](https://github.com/creationix/nvm).
2. Install [Create React App](https://github.com/facebookincubator/create-react-app): `npm install --global create-react-app`.
3. You may use [yarn](https://yarnpkg.com) to install local node packages: `npm install --global yarn`.  Then you could do `yarn add PACKAGE` instead of `npm install --save PACKAGE`.
4. Execute `create-react-app PROJECT_NAME`. Then you can enter `cd PROJECT_NAME` and execute `npm start` or `yarn start` to launch the app.
5. You can stop the app pressing `Ctrl+C`.
6. Pick your favourite [code editor](#code-editors) and [learn more](#learn-more).

## Code editors

Some popular code editors and IDEs:

- [Atom](atom.io)
- [Sublime Text](https://www.sublimetext.com/)
- [Brackets](http://brackets.io/) has live editing
- [VS Code](https://code.visualstudio.com/)
- [Eclipse](https://www.eclipse.org/)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) is very powerful, but free version doesn't include js support

[Atom](atom.io) is quite popular among frontend developers, but [VS Code](https://code.visualstudio.com/) is [gaining popularity](https://syntax.fm/show/012/why-is-everyone-switching-to-vs-code).

Here's a list of useful [Atom](atom.io) plugins I installed:

- [language-babel](https://atom.io/packages/language-babel) - js/jsx enhancements
- [linter-eslint](https://atom.io/packages/linter-eslint) - js linting
- [emmet](https://atom.io/packages/emmet) ([enable in JSX](https://gist.github.com/mxstbr/361ddb22057f0a01762240be209321f0)) - html shortcuts
- [js-hyperclick](https://atom.io/packages/js-hyperclick). - navigate through components
- [flow-ide](https://atom.io/packages/flow-ide) - Flow integration

Plugins for [VS Code](https://code.visualstudio.com/) I installed:

- [sublime-babel](https://marketplace.visualstudio.com/items?itemName=joshpeng.sublime-babel-vscode) - js/jsx enhancements
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - js linting
- [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) or [vscode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide) - Flow integration
- [git history (log)](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

## Learn more

#### Tutorials and more   

Besides following the steps in this project, you may learn more here:

- https://reactjs.org/tutorial/tutorial.html
- https://egghead.io/courses/start-using-react-to-build-web-applications
- http://learn.humanjavascript.com/react-ampersand
- http://www.react.express
- https://reactjs.co
- https://medium.freecodecamp.org/reactjs-concepts-c83f9b53eac2
- https://wdrl.info/ - newsletter about web development

#### Tools

At any point, you may quickly [deploy your React app with Surge](https://daveceddia.com/deploy-create-react-app-surge/). 

Check the [complementary tools](https://github.com/facebook/react/wiki/Complementary-Tools) for React. For example, the [React dev tools](https://github.com/facebook/react-devtools), which you can use to:

- See your page structure like in Elements but more React-friendly.
- Select an element and in the Console refer to it as `$r`.
- Inspect an element on the page (goes to Elements) and then go to React tab to locate the component.

## Notes

This file was edited using [classeur](https://app.classeur.io) and [bear](http://www.bear-writer.com/).
