# Tyk Javascript Middleware Development Kit

1. Write your middleware inside `plugins.js`
2. Modify `mocks.js` to simulate a http request
3. Build with webpack

```
# dev mode
yarn run dev

# prod mode
yarn run build-prod
```

## Example
```
$ yarn run dev
yarn run v1.3.2
$ yarn webpack --mode=development && node build/dev.js $*
$ /Users/ahmet/go/src/github.com/TykTechnologies/tyk-js-devenv/node_modules/.bin/webpack --mode=development
env: undefined
argv: {"_":[],"cache":null,"bail":null,"profile":null,"mode":"development","info-verbosity":"info","infoVerbosity":"info","$0":"/Users/ahmet/go/src/github.com/TykTechnologies/tyk-js-devenv/node_modules/.bin/webpack"}
Hash: 37248ad6075893dc33a6
Version: webpack 4.16.5
Time: 177ms
Built at: 2018-08-18 09:36:47
 Asset      Size  Chunks             Chunk Names
dev.js  77.8 KiB   index  [emitted]  index
Entrypoint index = dev.js
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {index} [built]
[./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {index} [built]
[./src/index.js] 605 bytes {index} [built]
[./src/plugins.js] 999 bytes {index} [built]
[./src/shims.js] 2.36 KiB {index} [built]
[0] multi ./src/index.js ./src/plugins.js 40 bytes {index} [built]
    + 2 hidden modules
foobar
process: {"title":"browser","browser":true,"env":{},"argv":[],"version":"","versions":{}}
JSVM Log: Virtual Test running
JSVM Log: Request: {"Method":"POST","Body":"{\"foo\":\"bar\"}","Headers":{},"Domain":"http://foo.com","Resource":"/event/quotas","FormData":{"field":"value"},"Params":{"param1":"foo"}}
JSVM Log: Session: {"meta_data":{}}
JSVM Log: Config: {}
JSVM Log: req.param1: foo
JSVM Log: b64Enc: foo Zm9v
JSVM Log: b64dec: Zm9v foo
JSVM Log: num: 1
JSVM Log: num: 2
JSVM Log: num: 3
JSVM Log: num: 4
JSVM Log: num: 5
TykJsResponse.res: {"Body":"{\"foo\":\"bar\"}","Headers":{"test":"virtual","test-2":"virtual"},"Code":200}
TykJsResponse.sessionMeta: undefined
✨  Done in 1.14s.
```

