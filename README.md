# College Email Signature Builder

An application that takes user inputs and builds an email signature. 

## Scripts

This is a React application built via create-react-app. Helpful scripts include: 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm deploy` 

Deploys to the development site [https://zachneill.github.io/signature-builder](zachneill.github.io/signature-builder). 

Make sure the current branch is *development*, not *main*! 
*development* includes `homepage": "https://zachneill.github.io/signature-builder"` in the package.json.

Through the package.json, it just runs the predeploy and deploy scripts: 
```
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```
`npm run build` bundles React in production mode and optimizes the build for the best performance. 
The build is minified and the filenames include the hashes. `gh-pages -d build` is the command that 
actually deploys the app to GitHub Pages.

### `git push heroku main` 

Deploys to the production website [https://sigbuild.herokuapp.com](sigbuild.herokuapp.com). 
As opposed to *development*, *main* includes `"homepage": "https://sigbuild.herokuapp.com"`

## Dev TODO 
- Add image upload functionality
- Cards are their own height
- Move raw content to normal images
- Reset to default button
- Sizes lock aspect ratio checkbox
- Updates realtime, not 1 character late
- Fix Whitespace text nodes error 
- Updates on autofill
- Add SASS instead of CSS
- Add yarn instead of npm