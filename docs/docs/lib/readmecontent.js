"use strict";

module.exports = "# [wasm-opencc](https://github.com/oyyd/wasm-opencc)\n\n[![npm-version](https://img.shields.io/npm/v/wasm-opencc.svg?style=flat-square)](https://www.npmjs.com/package/wasm-opencc)\n[![travis-ribbon](https://travis-ci.com/oyyd/wasm-opencc.svg?branch=master)](https://travis-ci.com/oyyd/wasm-opencc#)\n\nwasm-opencc\u5F00\u653E\u4E2D\u6587\u8F6C\u6362[OpenCC](https://github.com/BYVoid/OpenCC)\u7684wasm\u7248\u672C\u3002\n\n\u8FD9\u4E2A\u9879\u76EE\u5BF9OpenCC\u8FDB\u884C\u4E86\u6DFB\u52A0\u4FEE\u6539\u4FEE\u6539\uFF0C\u5E76\u5229\u7528[Emscripten](https://github.com/kripken/emscripten)\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5728OpenCC\u8FDB\u884C\u4E2D\u6587\u7B80\u7E41\u4F53\u8F6C\u6362\u7684\u80FD\u529B\u4E0A\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A\n\n- \u53EF\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u76F4\u63A5\u8FD0\u884C\u3002\uFF08wasm\uFF09\n- \u5728node\uFF0Celetron\u4E2D\u8FD0\u884C\u4E0D\u9700\u8981\u518D\u8FDB\u884Caddon\u7F16\u8BD1\uFF0C\u907F\u514D\u590D\u6742\u7684addon\u90E8\u7F72\u5DE5\u4F5C\u3002\u7406\u8BBA\u4E0A\u5E94\u8BE5\u4E5F\u53EF\u4EE5\u5728React Native\u548CWeb Worker\u4E2D\u8FD0\u884C(\u672A\u7ECF\u6D4B\u8BD5)\u3002\uFF08wasm\uFF09\n- \u5206\u79BB\u4E86\u5B57\u5178\u6570\u636E\u7684\u52A0\u8F7D\u548C\u6587\u672C\u8F6C\u6362\u529F\u80FD\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u53EA\u52A0\u8F7D\u5FC5\u8981\u7684\u5B57\u5178\u6570\u636E\uFF0C\u5E76\u5141\u8BB8\u81EA\u5B9A\u4E49\u6570\u636E\u52A0\u8F7D\u65B9\u5F0F\uFF0C\u65B9\u4FBF\u4ECECDN\u4E0A\u52A0\u8F7D\u6570\u636E\u3002\n\n## \u5B89\u88C5\n\n\u5BF9\u4E8E\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u8BF7\u76F4\u63A5\u62F7\u8D1Ddist\u6587\u4EF6\u5939\u4E2D\u7684\u6587\u4EF6\u5E76\u5728\u6D4F\u89C8\u5668\u4E2D\u52A0\u8F7D\uFF0C**\u6CE8\u610F\u8BF7\u4E00\u5E76\u62F7\u8D1Ddist\u6587\u4EF6\u5939\u4E0B\u7684.mem\u6587\u4EF6**\uFF0C\u8BE5.mem\u6587\u4EF6\u4E3A\u4EE3\u7801\u8FD0\u884C\u7684\u5FC5\u8981\u6587\u4EF6\u3002\n\n```html\n<!DOCTYPE html>\n<html>\n  <head></head>\n  <body>\n    <script src=\"./opencc-asm.js\"></script>\n    <script>\n      const { DictSource, Converter } = OpenCCWasm_\n      OpenCCWasm_.ready().then(() => {\n        // \u83B7\u53D6s2t.json\u5B57\u5178\u6570\u636E\n        const dictSource = new DictSource('s2t.json');\n        return dictSource.get();\n      }).then((args) => {\n        const converter = new Converter(...args)\n        console.log(converter.convert('\u7E41\u4F53'))\n        // \u6CE8\u610F\u5F53\u4E0D\u518D\u9700\u8981\u4F7F\u7528converter\u65F6\uFF0C\u8BF7\u8C03\u7528delete\u65B9\u6CD5\u4EE5\u91CA\u653E\u5185\u5B58\n        converter.delete()\n      })\n    </script>\n  </body>\n</html>\n```\n\n\u76F8\u5173\u6587\u4EF6\u5927\u5C0F\uFF08\u4E0D\u5305\u542B\u5B57\u5178\u6587\u4EF6\uFF09\uFF1A\n\n- opencc-asm.js (655kB, gzip\u540E164kB)\n- opencc-asm.js.mem (25kB, gzip\u540E8kB)\n\n\u5F53\u524D\u9879\u76EE\u4E2D\u7684wasm\u4EE3\u7801\uFF0C\u5B9E\u9645\u4E0A\u662Fasmjs\u7248\u672C\uFF0C\u5E76\u975E\u7528\u4E8E\u6D4F\u89C8\u5668\u539F\u751FWebAssembly\u7684\u7248\u672C\u3002asmjs\u7684\u7248\u672C\u517C\u5BB9\u6027\u66F4\u597D\uFF0CWebAssembly\u7248\u672C\u4F53\u79EF\u66F4\u5C0F\uFF08\u7EA6\u5728\u5728250kB\u5DE6\u53F3\uFF09\u3002\n\n\u5BF9\u4E8Enode\u73AF\u5883\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5229\u7528npm\u5B89\u88C5:\n\n```\n$ npm i -d wasm-opencc\n```\n\n\u5B89\u88C5\u540E\u52A0\u8F7D\u4F7F\u7528\uFF1A\n\n```js\nconst { DictSource, Converter } = require('wasm-opencc')\nconst dictSource = new DictSource('s2t.json');\n\ndictSource.get().then((args) => {\n  const converter = new Converter(...args)\n  console.log(converter.convert('\u7E41\u4F53'))\n  // \u6CE8\u610F\u7576\u4E0D\u518D\u9700\u8981\u4F7F\u7528converter\u6642\uFF0C\u8ACB\u8ABF\u7528delete\u65B9\u6CD5\u4EE5\u91CB\u653E\u5167\u5B58\n  converter.delete()\n})\n```\n\n\u6CE8\u610FOpenCC\u672C\u8EAB\u5177\u6709[Node Addon\u7248\u672C](https://www.npmjs.com/package/opencc)\uFF0C\u8BF7\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\u9009\u62E9\u3002\n\n## API\n\n### ready()\n\n\u5728\u6D4F\u89C8\u5668\u4E0A\uFF0C\u8BF7\u5148\u8C03\u7528ready\u51FD\u6570\uFF0C\u5E76\u5728\u7ED3\u675F\u540E\u518D\u8FDB\u884C`Converter`\u7684\u76F8\u5173\u64CD\u4F5C\u3002\u5728Node\u4E0A\u4E0D\u9700\u8981\u7B49\u5F85ready\u51FD\u6570\u7ED3\u675F\uFF0C\u76F4\u63A5\u4F7F\u7528\u5373\u53EF\u3002\n\n### class DictSource\n\n#### new DictSource(string dictName)\n\n`DictSource`\u7528\u4E8E\u83B7\u53D6\u5B57\u5178\u6570\u636E\uFF0C\u4EE5\u521D\u59CB\u5316`Converter`\u3002\u5982\u679C\u4F60\u719F\u6089OpenCC\u4E2DConverter\u6240\u9700\u8981\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u548C\u6570\u636E\u6784\u6210\u7ED3\u6784\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5B8C\u5168\u907F\u5F00`DictSource`\uFF0C\u76F4\u63A5\u628A\u5B57\u5178\u6570\u636E\u7684\u5B57\u7B26\u4E32\u4F20\u9012\u7ED9Converter\u3002\n\n`dictName`\u6240\u63A5\u53D7\u7684\u53C2\u6570\u8BF7\u53C2\u7167\uFF1A[\u9810\u8A2D\u914D\u7F6E\u6587\u4EF6](https://github.com/BYVoid/OpenCC#configurations-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)\n\n#### DictSource.get()\n\n`DictSource.get()`\u9ED8\u8BA4\u4F1A\u6839\u636E\u8FD0\u884C\u73AF\u5883\u4E0D\u540C\uFF0C\u91C7\u7528\u4E0D\u540C\u7684\u65B9\u5F0F\u83B7\u53D6\u6570\u636E\u3002\n\n`DictSource.get()`\u8FD4\u56DE\u4E00\u4E2APromise\uFF0C\u8FD9\u4E2APromise\u5728resolve\u65F6\u4F1A\u8FD4\u56DE\u6784\u5EFA`Converter`\u6240\u9700\u8981\u7684\u53C2\u6570\u7684\u6570\u7EC4\uFF0C\u5F53\u83B7\u53D6\u5B57\u5178\u6570\u636E\u5931\u8D25\u65F6\u4F1Areject\u3002\u8FD4\u56DE\u53C2\u6570\u7684\u610F\u4E49\u8BF7\u53C2\u7167`new Converter()`\u3002\n\n#### DictSource.setDictProxy(function proxy)\n\n\u81EA\u5B9A\u4E49\u83B7\u53D6\u6570\u636E\u7684\u51FD\u6570:\n\n```js\nconst dictSource = new DictSource('s2t.json')\n\ndictSource.setDictProxy((dictName) => {\n  // proxy\u9700\u8981\u8FD4\u56DE\u4E00\u4E2Apromise\n  return Promise.resolve('\u50DE\\t\u507D\\n')\n})\n\ndictSource.get() // \u4F1A\u8C03\u7528proxy\u51FD\u6570\n```\n\nDictSource\u4F1A\u7ED9`proxy`\u51FD\u6570\u4F20\u5165\u6240\u9700\u8981\u7684\u5B57\u5178\u540D\u79F0\uFF0C\u800C`proxy`\u51FD\u6570\u9700\u8981\u8FD4\u56DE\u4E00\u4E2Apromise\u4EE5\u544A\u77E5DictSource\u8BF7\u6C42\u7ED3\u675F\u6216\u8BF7\u6C42\u5931\u8D25\u3002\u6210\u529F\u7684\u8BDD\u9700\u8981resolve\u5BF9\u5E94\u7684\u5B57\u5178\u6570\u636E\u5185\u5BB9\uFF0C\u5931\u8D25\u7684\u8BDD\u8BF7reject\u4E00\u4E2A`Error`\u5BF9\u8C61\u3002\n\n### class Conveter\n\n#### new Converter(string semgentation, Array<Array<string>|string> convertionChain)\n\n`Converter`\u7528\u6765\u8FDB\u884C\u6587\u672C\u8F6C\u6362\u3002\n\n\u5176\u4E2Dsemgentation\u4E3A\u5206\u8BCD\u7528\u7684\u6570\u636E\uFF1BconvertionChain\u6309\u987A\u5E8F\u5B9A\u4E49\u4E86\u8F6C\u6362\u65F6\u6240\u4F7F\u7528\u7684\u4E00\u7CFB\u5217\u6570\u636E\u5B57\u5178\u3002\n\n#### Converter.convert(string text)\n\n`Converter.convert`\u8FDB\u884C\u6587\u672C\u8F6C\u6362\u64CD\u4F5C\uFF0C\u540C\u6B65\u64CD\u4F5C\u3002\n\n#### Converter.delete()\n\n\u9500\u6BC1\u8BE5\u5B9E\u4F8B\u5728wasm\u4E2D\u5BF9\u5E94\u5BF9\u8C61\u7684\u5B9E\u4F8B\u3002**\u8BF7\u6CE8\u610F\uFF1A\u5728\u4E0D\u9700\u8981\u4F7F\u7528converter\u4EE5\u540E\uFF0C\u4E00\u5B9A\u8981\u624B\u52A8\u8C03\u7528delete\u65B9\u6CD5\u9500\u6BC1\u5185\u5B58\u3002**\n\n\u76EE\u524D\u8981\u6C42\u7528\u6237\u624B\u52A8\u8C03\u7528delete\u8FD9\u70B9\u4E0D\u53EF\u907F\u514D\uFF0C\u8FD9\u662FEmbind\u548C\u76EE\u524Dwasm\u673A\u5236\u6240\u51B3\u5B9A\u7684\uFF0C\u53EF\u53C2\u7167[Embind -- Memory Management](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/embind.html#memory-management)\u3002\n\n## \u5DF2\u77E5\u95EE\u9898\n  - \u6682\u4E0D\u63A5\u53D7`.ocd`\u7C7B\u578B\u7684\u5B57\u5178\u6570\u636E\n  - uglifyjs\u76F8\u5173\u95EE\u9898\uFF1A\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53D1\u73B0\uFF0C\u7528uglifyjs\u5904\u7406wasm\u7F16\u8BD1\u7684\u4EE3\u7801\u540E\uFF0C\u4F1A\u5BFC\u81F4\u5176\u5728Chrome\u4E0A\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\uFF08\u4F46\u5728safari\u4E0A\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\uFF09\u3002\u4E2A\u4EBA\u731C\u6D4B\u662FChrome\u5F15\u53D1\u7684\u95EE\u9898\u3002\n  - \u56E0\u4E3A\u4E0A\u8FF0\u539F\u56E0\uFF0C\u52A0\u4E4B\u7F16\u8BD1\u540E\u4EE3\u7801\u672C\u8EAB\u7684\u4E00\u4E9B\u95EE\u9898\uFF0C\u4F5C\u8005\u5BF9\u4E8E\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\u6587\u4EF6\u8FDB\u884C\u4E86\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u5904\u7406\u5E76\u8FDB\u884C\u4E86bundle\u3002\u5982\u679C\u4F60\u7684\u9879\u76EE\u8981\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0A\u7684\u8BDD\uFF0C\u4E0D\u5EFA\u8BAE\u4F60\u5BF9wasm-opencc\u81EA\u5DF1\u8FDB\u884Cbundle\u3002\n\n## \u5176\u4ED6\u53EF\u80FD\u4F1A\u5B9E\u884C\u7684\u8BA1\u5212\n  - \u8FDB\u884CBenchmark\uFF0C\u63A2\u7A76Cpp\u7248\u672C\uFF0CNode Addon\u7248\u672C\u548Cwasm\u7248\u672C\u4E4B\u95F4\u7684\u6027\u80FD\u5DEE\u8DDD\u3002\n  - \u63D0\u4F9BWebAssembly\u7248\u672C\u3002\n  - \u7528closure\u8FDB\u884C\u7F16\u8BD1\u63D0\u9AD8\u6548\u7387\u3002\n\n## Contribute\n\n\u8BF7\u5148\u5B89\u88C5Emscripten\u548COpenCC\u6240\u9700\u4F9D\u8D56\uFF0C\u7136\u540E\uFF1A\n\n\u8FDB\u884CEmscripten\u7F16\u8BD1\u4EE3\u7801\uFF1A\n\n```\nmake -f WasmMakefile\n```\n\n\u6784\u5EFAjs\u76F8\u5173\u4EE3\u7801\uFF1A\n\n```\ncd wasm && npm run build\n```\n\n\u6784\u5EFA\u6587\u6863\uFF1A\n\n```\ncd wasm && npm run docs\n```\n\n\u8FD0\u884C\u6D4B\u8BD5\uFF1A\n\n```\ncd wasm && npm run test\n```\n\n## License\n\n\u8FD9\u4E2A\u9879\u76EE\u5728OpenCC\u7684\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E86`/src/wasm`\u6587\u4EF6\u5939\u4E0B\u7684\u4EE3\u7801\u3002\u539F\u9879\u76EE\u4E2D\u591A\u4E2A\u6587\u4EF6\u5939\u4E0B\u7684CMakeLists.txt\u90FD\u88AB\u8FDB\u884C\u4E86\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7684\u4FEE\u6539\u3002wasm\u76F8\u5173\u7684js\u4EE3\u7801\u4E3B\u8981\u653E\u5728`/wasm`\u6587\u4EF6\u5939\u4E0B\uFF0C\u4E3A\u65B0\u589E\u4EE3\u7801\u3002`/docs`\u4E2D\u7684\u4EE3\u7801\u7528\u4E8Egh-pages\u5C55\u73B0\u6587\u6863\u3002\n\n[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)\n";