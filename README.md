## Simple code snippets I made while studying typescript.
You'll notice you can find most of them on the typescript website :stuck_out_tongue:
Then why'd I do this? Well just for fun :man_shrugging: :grin:

***

Steps I used to initialise the typescript node project :
1. `npm init -y`
2. `npm install typescript nodemon @types/node --save-dev`
3. `npx tsc --init --rootDir src --outDir build --lib es6,dom --module commonjs --allowJs true --esModuleInterop --resolveJsonModule --noImplicitAny true`

  |Option|Description|
  |----|-----|
  |--rootDir|Folder where we put our Typescript code `/src`. Only use to control the output directory structure with `--outDir`.|
  |--outDir|Typescript to JavaScript compiled code goes here.|
  |--module|Specify module system for JavaScript files used in project.|
  |--esModuleInterop|It instructs TypeScript to allow us to use an import like this `import myModule from '../myModule'` instead of `import myModule = require('../myModule')` even if your module system defines `CommonJS`. _[source <sup>:arrow_upper_right:</sup>](https://medium.com/javascript-in-plain-english/typescript-configuration-options-tsconfig-json-561d4a2ad4b)_|
  |--lib|If your `target` is `es5` but you will be using `es6` or `esnext` features then you can specify it in this option. _[source <sup>:arrow_upper_right:</sup>](https://medium.com/javascript-in-plain-english/typescript-configuration-options-tsconfig-json-561d4a2ad4b)_|
  |--allowJs|If you have JavaScript in your project, should it be compiled with Typescript.|
  |--resolveJsonModule|Include modules imported with .json extension.|
  |--noImplicitAny|Raise error on expressions and declarations with an implied any type.|

  _Sources: [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/compiler-options.html) | [Understanding TypeScript Configuration Options](https://medium.com/javascript-in-plain-english/typescript-configuration-options-tsconfig-json-561d4a2ad4b)_

4. Create a `nodemon.json` file as following (So that you don't have to compile again and again after making changes, `nodemon` takes care of that.) :
  ```json
    {
      "watch": ["src"],
      "ext": ".ts,.js",
      "ignore": [],
      "exec": "npx tsc"
    }
  ```

5. Change `package.json` as following :
  ```json
    "scripts": {
      "start": "nodemon",
      "test": "echo \"Error: no test specified\" && exit 1"
    }
  ```

6. `npm start`. Your all the `.ts` files get compiled to `.js` in build folder and then you can run them using `node `_./build/<your_compiled_file.js>_

### _References:_
1. https://www.typescriptlang.org/docs/handbook/intro.html
2. https://khalilstemmler.com/blogs/typescript/node-starter-project/
3. https://medium.com/javascript-in-plain-english/typescript-configuration-options-tsconfig-json-561d4a2ad4b