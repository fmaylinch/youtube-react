# React example app

This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).

To try it, execute the following (you'll need [git](https://git-scm.com/) and [node](https://nodejs.org)) on the command line:

    $ git clone https://github.com/fmaylinch/youtube-react.git
    $ cd youtube-react
    $ npm install
    $ npm start

The app should automatically open in the browser on http://localhost:3000. For the search to work you will need to get a Youtube API key (see **step10** below for instructions) and put that key in the file `youtube-api-key.json`.

To stop the application press `Ctrl + C` from the command line. To start again you just need to execute `npm start`.

You may checkout tags to see the project in each step. For example `git checkout step01` to see the app in its first step. List all tags (steps) with `git tag -n`.

## Getting started with create-react-app

If you want to start a project yourself:

1. Install node from [nodejs.org](https://nodejs.org) or using [nvm](https://github.com/creationix/nvm).
2. Install [Create React App](https://github.com/facebookincubator/create-react-app): `npm install --global create-react-app`.
3. You may use [yarn](https://yarnpkg.com) to install local node packages: `npm install --global yarn`.  Then you could do `yarn add PACKAGE` instead of `npm install --save PACKAGE`.
4. Execute `create-react-app PROJECT_NAME`. Then you can enter `cd PROJECT_NAME` and execute `npm start` or `yarn start` to launch the app.
5. Have a look at the [official tutorial](https://reactjs.org/tutorial/tutorial.html) and/or follow the steps in this project.

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

- [language-babel](https://atom.io/packages/language-babel) : syntax highlighting
- [linter-eslint](https://atom.io/packages/linter-eslint) - js syntax check
- [emmet](https://atom.io/packages/emmet) ([enable in JSX](https://gist.github.com/mxstbr/361ddb22057f0a01762240be209321f0)) - html shortcuts
- [js-hyperclick](https://atom.io/packages/js-hyperclick). - navigate through components

Plugins for [VS Code](https://code.visualstudio.com/) I installed:

- [sublime-babel](https://marketplace.visualstudio.com/items?itemName=joshpeng.sublime-babel-vscode) : js enhancements
- [git history (log)](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

## Development steps

**step01**: Project created with `create-react-app`.

**step02**: Remove some code that `create-react-app` created to start with an even simpler example that doesn't use JSX.

**step03**: Use of JSX to simplify code. You may want to install [language-babel](https://atom.io/packages/language-babel).

**step04**: Use one component (`VideoItem`) from another (`App`).

**step05**: Pass properties (props) to `VideoItem`.

**step06**: [Configure ESLint](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor). You may want to install [linter-eslint](https://atom.io/packages/linter-eslint).

**step07**: Display a list of `VideoItem` (from hardcoded array).

**step08**: Load list of videos from sample JSON file.

**step09**: Create `VideoList` component (refactor).

**step10**: Search videos from Youtube API using [axios](https://github.com/axios/axios) (hardcoded query term). The `App` component is turned into a class so it can have state, which is updated when the videos are loaded.

To get a Youtube API key go to [Google APIs](https://console.developers.google.com/apis) and look for Youtube (here's a [direct link](https://console.developers.google.com/apis/library/youtube.googleapis.com) to it). Enable that API; you have to create a project if you don't have one. Then generate an API key in [credentials](https://console.developers.google.com/apis/credentials). You may explore the [Youtube API endpoints ](https://developers.google.com/apis-explorer/?#p/youtube/v3/), in particular the [search](https://developers.google.com/apis-explorer/?#p/youtube/v3/youtube.search.list) (fill `part` with `snippet` and `q` with your query).

**step11**: Add an `<input>` whose value is linked to the state (`searchTerm`) and `<button>` that `onClick` searches the videos using the `searchTerm`.

**step12**: Refactor: create component `SearchForm` and notify `App` (lift state up) through a callback so it can refresh `VideoList` .

**step13**: Improve `SearchForm` (more flexible, send with `ENTER` key).

**step14**: Create a `MenuBar` to organize the layout. `SearchForm` now sends callback to `MenuBar` and `MenuBar` propagates it to `App` .

See see this article about [component communication strategies in React](http://andrewhfarmer.com/component-communication). Popular state management frameworks: [Redux](http://redux.js.org) ([if you really need it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)) and [Mobx](https://github.com/mobxjs/mobx).

**step15**: Add style via CSS files, using some [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) features.

About style, see this article about [styling in React](http://www.react.express/styling). Also learn about [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ([video tutorial](https://flexbox.io/) and [little game](http://flexboxfroggy.com/)) and [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) ([little game](http://cssgridgarden.com/)).
