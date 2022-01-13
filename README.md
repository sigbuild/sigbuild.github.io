# College Email Signature Builder

An application that takes user inputs and builds an email signature. 

## Scripts

This is a React application built via create-react-app. Helpful scripts include: 

### `npm start`

Runs the app in the development mode on port 3000. 
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page and console reload when you make changes.\
You may also see any lint errors in the console.

### `npm run deploy` 

Deploys to the development site [zachneill.github.io/signature-builder](https://zachneill.github.io/signature-builder). 

Make sure the current branch is *development*, not *production*! 

*development* includes `homepage": "https://zachneill.github.io/signature-builder"` in the package.json.

Through the package.json, it just runs the predeploy and deploy scripts: 
```
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```
`npm run build` bundles React in production mode and optimizes the code. 
The build is minified and the filenames include the hashes. `gh-pages -d build` is the command that 
actually deploys the app to GitHub Pages.

### `git push heroku production:main` 

Deploys to the production website [sigbuild.herokuapp.com](https://sigbuild.herokuapp.com). 
As opposed to *development*, *production* includes `"homepage": "https://sigbuild.herokuapp.com"`

For first-time setup, run `heroku git:remote -a sigbuild`. This adds a git remote for heroku to read. 

## Dev ToDo List

These following have arisen while developing the application. 

### Bugs/Improvements

- Cards are their own height
- Updates realtime, not 1 character late
- Fix Whitespace text nodes error 
- Updates on autofill

### Features/Enhancements

- Add image upload functionality
- Sizes lock aspect ratio checkbox
- Reset to default button
- Use SASS instead of CSS
- Use yarn instead of npm