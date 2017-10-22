# React example app

This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).

To try it, execute the following (you'll need [git](https://git-scm.com/) and [node](https://nodejs.org)) on the command line:

    $ git clone https://github.com/fmaylinch/youtube-react.git
    $ cd youtube-react
    $ npm install
    $ npm start

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

**step08**: Load list of videos from sample JSON file.

**step09**: Create `VideoList` component (refactor).

**step10**: Search videos from Youtube API using [axios](https://github.com/axios/axios) (hardcoded query term). The `App` component is turned into a [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) so it can have [state](https://reactjs.org/docs/state-and-lifecycle.html), which is updated when the videos are loaded.

To get a Youtube API key go to [Google APIs](https://console.developers.google.com/apis) and look for Youtube (here's a [direct link](https://console.developers.google.com/apis/library/youtube.googleapis.com) to it). Enable that API; you have to create a project if you don't have one. Then generate an API key in [credentials](https://console.developers.google.com/apis/credentials). You may explore the [Youtube API endpoints ](https://developers.google.com/apis-explorer/?#p/youtube/v3/), in particular the [search](https://developers.google.com/apis-explorer/?#p/youtube/v3/youtube.search.list) (fill `part` with `snippet` and `q` with your query).

**step11**: Add an `<input>` whose value is linked to the state (`searchTerm`) via the `onChange` [event](https://reactjs.org/docs/events.html) and a `<button>` that `onClick` searches the videos using the `searchTerm`.

**step12**: Refactor: create component `SearchForm` and notify `App` ([lift state up](https://reactjs.org/docs/lifting-state-up.html)) through a callback so it can refresh `VideoList` .

**step13**: Improve `SearchForm` (more flexible, send with `ENTER` key).

**step14**: Create a `MenuBar` to organize the layout. `SearchForm` now sends callback to `MenuBar` and `MenuBar` propagates it to `App` .

If you want to go deeper check this article about [component communication strategies in React](http://andrewhfarmer.com/component-communication). Popular state management frameworks: [Redux](http://redux.js.org) ([if you really need it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)) and [Mobx](https://github.com/mobxjs/mobx).

**step15**: Add [style](http://www.react.express/styling) via CSS files, using some [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) features.

I highly recommend learning [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ([video tutorial](https://flexbox.io/) and [little game](http://flexboxfroggy.com/)) and [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) ([little game](http://cssgridgarden.com/)). See the intro note [here](https://wdrl.info/archive/202).

**step16**: Type checking using [propTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) in `VideoItem`.

**step17**:  Type checking using [flow](https://flow.org/) instead of propTypes. See [adding flow](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow) and [flow docs about React](https://flow.org/en/docs/react/).

Note: I had to add [this fix](http://international.github.io/2017/03/24/17-18-fix_vscode_flow_Type_aliases_can_be_used_only_in_a_.ts_file) in VS Code for flow to work.



----

**Pending**:

- Create VideoDetail and display it in another "page" with React Router
- React dev tools
- Tests with Jest and enzyme
- Build and deploy with surge.sh

## Getting started with create-react-app

If you want to create a project from scratch:

1. Install node from [nodejs.org](https://nodejs.org) or using [nvm](https://github.com/creationix/nvm).
2. Install [Create React App](https://github.com/facebookincubator/create-react-app): `npm install --global create-react-app`.
3. You may use [yarn](https://yarnpkg.com) to install local node packages: `npm install --global yarn`.  Then you could do `yarn add PACKAGE` instead of `npm install --save PACKAGE`.
4. Execute `create-react-app PROJECT_NAME`. Then you can enter `cd PROJECT_NAME` and execute `npm start` or `yarn start` to launch the app.
5. Pick your favourite [code editor](#code-editors) and [learn more](#learn-more).

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
- [flow-ide](https://atom.io/packages/flow-ide) - flow integration

Plugins for [VS Code](https://code.visualstudio.com/) I installed:

- [sublime-babel](https://marketplace.visualstudio.com/items?itemName=joshpeng.sublime-babel-vscode) - js/jsx enhancements
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - js linting
- [vscode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide) - flow integration
- [git history (log)](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

## Learn more

Besides following the steps in this project, you may learn more here:

- https://reactjs.org/tutorial/tutorial.html
- https://egghead.io/courses/start-using-react-to-build-web-applications
- http://www.react.express
- https://reactjs.co
- https://medium.freecodecamp.org/reactjs-concepts-c83f9b53eac2
- https://wdrl.info/ - newsletter about web development

