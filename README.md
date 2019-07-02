# MyWeather

Check the weather in any city in the world

## Deployment

Clone the project
```
git clone https://github.com/KseniyaT/my-weather.git
```

Go to 'my-weather' directory and run
```
npm install
```

**Important** Add .env to root directory
```
REACT_APP_API_KEY=YOUR_API_KEY
REACT_APP_API_URL=api.openweathermap.org/data/2.5
REACT_APP_FORECAST_5=/forecast
```
To get `YOUR_API_KEY` follow the guide [https://openweathermap.org/guide](https://openweathermap.org/guide)

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://0.0.0.0:8080](http://0.0.0.0:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner.

### `npm run test:watch`

Launches the test in run time.<br>
Watch files for changes and rerun tests related to changed files.

### `npm run test:coverage`

Launches the test runner.<br>
Indicates that test coverage information should be collected and reported in the output.<br>

More details see [here](https://jestjs.io/docs/en/next/cli)

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
