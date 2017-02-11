# Mapsenger
Mapsenger is a map-based instant messaging application that allows users to discuss, search, and share information about places to meet and activities to do. This app eliminates the pain point of having to alternate between apps by having everything you need to arrange a hang out built right into it. 


## npm scripts

Install the npm packages using:

```bash
$ npm install
```

### Dev
```bash
$ npm run dev
```

This runs a development mode server with live reload etc.

Open `http://localhost:8080` in your browser.

### Production

```bash using these two command to access to the localhost
$ change ip address by running ifconfig en0 -> inet [] copy and paste it in noder-server.js
$ npm run build
$ npm run start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.

### Tests

#### Single Run
```bash
$ npm run test
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Coverage
```bash
$ npm run cover
```

