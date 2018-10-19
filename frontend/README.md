# Frontend

## Setup & run
Run the frontend from the projects root in the console with `yarn dev`.

```zsh
 ✘ axelmotyka@MacBook-Pro-2  ~/src/node-react-workshop   master  yarn dev
yarn run v1.10.1
$ concurrently --kill-others-on-fail "yarn server" "yarn client"
$ cd frontend && npm start
$ nodemon --inspect ./backend/src/server/server.js
[1]
[1] > frontend2@0.1.0 start /Users/axelmotyka/src/node-react-workshop/frontend
[1] > react-scripts start
[1]
[0] [nodemon] 1.18.4
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching: *.*
[0] [nodemon] starting `node --inspect ./backend/src/server/server.js`
[0] Debugger listening on ws://127.0.0.1:9229/de9d0458-7353-4957-b821-c7adcb0b0c73
[0] For help, see: https://nodejs.org/en/docs/inspector
[0] Server listening on routes: /,/error,/api/dev/v1/database/create,/api/dev/v1/database/select,/api/dev/v1/database/insert
[0] Server listening on port: 8080
[1] Starting the development server...
[1]
[1] Compiled successfully!
[1]
[1] You can now view frontend in the browser.
[1]
[1]   Local:            http://localhost:3000/
[1]   On Your Network:  http://192.168.2.111:3000/
[1]
[1] Note that the development build is not optimized.
[1] To create a production build, use yarn build.
```

## Debug
Inside VS Code the debugger must be connected to Chrome. 
So first install the VS Code extension `Debugger for Chrome`, then on the debug tab start `Frontend Debug against Chrome`.
![](../doc/FrontendDebug1.png)
![](../doc/FrontendDebug2.png)