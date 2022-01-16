# Email Signature Builder
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/signature-builder/production?color=g&label=production%20version&style=flat)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/signature-builder/development?color=orange&label=development%20version&style=flat)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/zachneill/signature-builder/react?color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/signature-builder?color=purple&style=flat) 

An application that takes user inputs and builds an email signature. 

## Scripts

This is a React application built via create-react-app. Helpful scripts include: 

### `yarn start`

Runs the app in the development mode on port 3000. 
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page and console reload when you make changes. You may also see any lint errors in the console.

### `yarn run deploy` 

Deploys to the development site [zachneill.github.io/signature-builder](https://zachneill.github.io/signature-builder). 

Make sure the current branch is *development*! 

*development* includes `"homepage": "https://zachneill.github.io/signature-builder"` in the package.json.

Through the package.json, it just runs the predeploy and deploy scripts: 
```
  "scripts": {
    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build"
```
`yarn build` bundles React in production mode and optimizes the code. 
The build is minified and the filenames include the hashes. `gh-pages -d build` is the command that 
actually deploys the app to GitHub Pages.

### `git push heroku production:main` 

Deploys to the production website [sigbuild.herokuapp.com](https://sigbuild.herokuapp.com). 

Make sure the current branch is *production*!  
As opposed to *development*, *production* includes `"homepage": "https://sigbuild.herokuapp.com"`

Checkout *production* and git pull all necessary changes in. Then run `git push heroku production:main`

For first-time setup, run `heroku git:remote -a sigbuild` before attempting to deploy. This adds a git remote for heroku to read. 

## Dev Checklist

The following considerations have arisen while developing the application. 

### Bugs/Improvements

- Fix Whitespace text nodes error 
- Fix forced reflow violation

### Features/Enhancements

- Add image upload functionality
- Sizes lock aspect ratio checkbox
- Add additional detail functionality
- Add useStyles
- Use SASS instead of CSS

## Changelog 

### Build 1.0.2 -> 1/15/2022

This is the current build for *development* and *production*. React Redux is implemented over unnecessary prop traversals. Signatures update realtime and on autofill. App uses yarn run build instead of npm run build, although the yarn.lock file and its implementation has yet to work because of MiniCssExtractPlugin errors. 

### Build 1.0.1 -> 1/13/2022

Line height can now be changed via a slider, and the mobile version includes a navigation bar at the bottom. Other cosmetic changes like margins were made. 1.0.1 upgrades from Material-UI 4 to MUI 5. 

### Build 1.0.0 -> 1/12/2022

Version 1.0.0 is the first working production copy of SigBuild. It is currently running fine on [sigbuild.herokuapp.com](https://sigbuild.herokuapp.com). 
The build uses Material-UI instead of custom CSS. 

### Build 0.9.0 -> 1/10/2022

There isn't really a build pre-1.0.0. Version 0.9.0 ultimately marks the pre-development stage. There has yet to be a development build in static form. 
