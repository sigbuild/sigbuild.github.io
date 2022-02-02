# SigBuild - Email Signature Builder
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/signature-builder/production?color=g&label=production%20version&style=flat)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/signature-builder/development?color=orange&label=development%20version&style=flat)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/zachneill/signature-builder/react?color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/signature-builder?color=purple&style=flat) 

An application that takes user inputs and builds an email signature. 

## Scripts

This is a React application built via create-react-app. There are 3 major dependencies: 

- [Node.js](https://nodejs.org/en/download/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- [yarn](https://yarnpkg.com/getting-started/install)
  - If Node is installed, yarn can also be added via npm install yarn -g

### `yarn watch`

Concurrently watches for SASS and runs the app in the development mode on port 3000. 
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page and console reload when you make changes. You may also see any errors in the console.

### `yarn deploy-development` 

Deploys to the development website [sigbuild.herokuapp.com](https://sigbuild.herokuapp.com). 

Make sure the current branch is *development*!  
As opposed to *production*, *development* includes `"homepage": "https://sigbuild.herokuapp.com"`

Checkout *development* and git pull all necessary changes in. Then run `yarn deploy-development`. This runs the script 
`heroku git:remote -a sigbuild && git push heroku development:main`, which adds a remote for heroku to read, then uses it to 
deploy to the main/production branch of [SigBuild](https://sigbuild.herokuapp.com).

For first-time setup, you may need to run `heroku login` before attempting to deploy. This affords heroku deployment access. 
Additionally, only Heroku collaborators can deploy to production. In Heroku, collaborators are currently zacharyneill@gmail.com and dev-sigbuild@gmail.com. 

### `yarn deploy-production` 

Deploys to the production site [sigbuild.github.io](https://sigbuild.github.io). 

Make sure the current branch is *production*! 

*production* includes `"homepage": "https://sigbuild.github.io"` in the package.json.

Through the package.json, it just eventually runs the predeploy and deploy scripts: 
```
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
```
`yarn build` bundles React in production mode and optimizes the code. 
The build is minified and the filenames include the hashes. `gh-pages -d build` is the command that 
actually deploys the app to GitHub Pages.

## Dev Checklist

The following considerations have arisen while developing the application. 

### Bugs/Improvements

- Fix Whitespace text nodes error 

### Features/Enhancements

- Add choices among fonts
- Add color picker 
- Add image upload functionality
- Add additional detail functionality
- Sizes lock aspect ratio checkbox
- Add useStyles

## Changelog 

### Build 1.0.4 -> 1/21/2022

This is the current build for *production* and *development*. Development is now [sigbuild.herokuapp.com](https://sigbuild.herokuapp.com) instead of zachneill.github.io/signature-builder. Production is now [sigbuild.github.io](https://sigbuild.github.io) instead of sigbuild.herokuapp.com. More SASS classes were added via the _helpers partials. 

### Build 1.0.3 -> 1/17/2022

CSS is developmentally replaced by SASS, which preprocesses on save via the Live Sass Compiler VSCode extension. The application fully uses yarn instead of npm. MiniCssExtractPlugin errors are fixed via the package.json resolutions workaround. No major frontend changes were made in particular, just the SASS and yarn upgrades. This is the last build using zachneill.github.io/signature-builder before merging to the SigBuild organization. 

### Build 1.0.2 -> 1/15/2022

React Redux is implemented over unnecessary prop traversals. Signatures update realtime and on autofill. App uses yarn run build instead of npm run build, although the yarn.lock file and its implementation has yet to work because of MiniCssExtractPlugin errors. 

### Build 1.0.1 -> 1/13/2022

Line height can now be changed via a slider, and the mobile version includes a navigation bar at the bottom. Other cosmetic changes like margins were made. 1.0.1 upgrades from Material-UI 4 to MUI 5. 

### Build 1.0.0 -> 1/12/2022

Version 1.0.0 is the first working production copy of SigBuild. It is currently running fine on [sigbuild.herokuapp.com](https://sigbuild.herokuapp.com). 
The build uses Material-UI instead of custom CSS. 

### Build 0.9.0 -> 1/10/2022

There isn't really a build pre-1.0.0. Version 0.9.0 ultimately marks the pre-development stage. There has yet to be a development build in static form. 

## Issues Encountered

### EPERM: operation not permitted, open 'C:\Program Files\nodejs\pnpm'
Install yarn with `npm install yarn -g`

### Error: spawn cmd.exe ENOENT
Add C:\Windows\System32 to the global PATH environment variable. 

### Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
We need to use this [Mars React Buildpack](https://github.com/mars/create-react-app-buildpack.git) and add it to Heroku. 
