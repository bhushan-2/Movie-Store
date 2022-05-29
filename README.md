![Movie Store](https://docs.tripetto.com/assets/header.svg)

Movie Store is an application to search movies based on search keywords, availables genres, etc. It also provides detail information about specific movie.

# How to run it locally
1. [Download](https://gitlab.com/tripetto/examples/angular/repository/master/archive.zip) or clone the [repository](https://gitlab.com/tripetto/examples/angular) to your local machine:
```bash
$ git clone https://gitlab.com/tripetto/examples/angular.git
```

2. Run `npm install` inside the downloaded/cloned folder:
```bash
$ npm install
```

3. Start the dev server by running the command below. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
```bash
$ npm start
```

3. Run unit test cases with below command.
```bash
$ npm test
```

# Technology Stack
1. Angular v13.0.0
2. Typescript
3. HTML/SCSS
4. Bootstrap
5. CSS Flexbox

# App Fetures
1. Search movies based on search keywords.
2. Search movies with pre-defined genres.
3. Get detailed movie information of selected movie.

# Code structure
1. App includes feature module, core-features module, pipe module, services etc.
2. Interfaces and Enums have been used.
3. Error handling mechanism has been added.
4. Spinners have been used during API calls.
