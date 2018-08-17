# Tyk JSVM Development Environment

1. Write your middleware inside `index.js`
2. Modify `mocks.js` to simulate a http request
3. Build with webpack

```
# dev mode
yarn webpack --config webpack.config.js --mode=development

# prod mode
yarn webpack --config webpack.config.js
```

4. Test your middleware

```
# dev mode
node ./build/dev.js

# prod mode
node ./build/dist.js
```
