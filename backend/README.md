# Setup

* Install `node` version 10
* Install `nodemon` with `npm install -g nodemon`
* Open `backend` in VS Code
* Run `npm i` in console, you should see something like this:
  ```zsh
  added 162 packages from 122 contributors and audited 247 packages in 7.002s
  found 0 vulnerabilities
  ```
* In your VS Code TERMINAL execute `npm run debug`, you should see this:
  ```zsh
   ✘ axelmotyka@MacBook-Pro-2  ~/src/node-react-workshop/backend   master  npm run debug

   > recipesbackend@1.0.0 debug /Users/axelmotyka/src/node-react-workshop/backend
   > nodemon --inspect ./src/server/server.js
   
   [nodemon] 1.18.4
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching: *.*
   [nodemon] starting `node --inspect ./src/server/server.js`
   Debugger listening on ws://127.0.0.1:9229/fcec2db7-443c-4915-a3c7-1796baf44553
   For help, see: https://nodejs.org/en/docs/inspector
   Server listening on routes: /,/error,/api/dev/v1/database/create,/api/dev/v1/database/select,/api/dev/v1/database/insert
   Server listening on port: 8080
  ```

# Postman
Import `postman/node-react-workshop.postman_collection.json` into Postman.
There is an example call for all endpoints!

# Files
* `src/server/server.js` - Start script for the backend
* `src/routes/*` - http endpoints
* `src/db/dao.js` - a very simple database handler
* `example.sqlite3` - the sqlite3 database. There are nice tools in VSCode to open and manage it!
  