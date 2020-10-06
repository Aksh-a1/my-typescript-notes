## Simple notes and code snippets I made while studying typescript.
You'll notice you can find most of them on the typescript website :stuck_out_tongue:
Then why'd I do this, well just for fun :man_shrugging: :grin:

***

Steps I used to initialise the typescript node project :
1. `npm init -y`
2. `npm install typescript nodemon @types/node --save-dev`
3. `npx tsc --init --rootDir src --outDir build --lib es6,dom --module commonjs --allowJs true --esModuleInterop --resolveJsonModule --noImplicitAny true`

  |Option|Description|      
  |----|-----|      
  |--rootDir|Specifies the root directory of input files. Only use to control the output directory structure with --outDir.|
  |--outDir|Redirect output structure to the directory.|
  |--esModuleInterop|Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility.|
  |--resolveJsonModule|Include modules imported with .json extension.|
  |--lib|List of library files to be included in the compilation.|
  |--allowJs|Allow JavaScript files to be compiled.|
  |--module|Specify module code generation|
  |--noImplicitAny|Raise error on expressions and declarations with an implied any type.|

  _Source: [Typescript Handbook] (https://www.typescriptlang.org/docs/handbook/compiler-options.html)_

<br/><br/>
4. create a `nodemon.json` file as following (So that you don't have to compile again and again after making changes, `nodemon` takes care of that.) :
  ```json
    {
      "watch": ["src"],
      "ext": ".ts,.js",
      "ignore": [],
      "exec": "npx tsc"
    }
  ```

5. change `package.json` as following :
  ```json
    "scripts": {
      "start": "nodemon",
      "test": "echo \"Error: no test specified\" && exit 1"
    }
  ```

6. `npm start`. Your all the `.ts` files get compiled to `.js` in build folder and then you can run them using `node `_./build/<your_compiled_file.js>_
