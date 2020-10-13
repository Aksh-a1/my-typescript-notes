declare type greet = 'enter' | 'exit';
declare const greeting: (task: greet) => any;
declare type Param = string | number;
declare const unionFunc: (prop: Param) => void;
declare type Params = string | boolean | number;
declare const unionFunc2: (prop: Params) => number;
