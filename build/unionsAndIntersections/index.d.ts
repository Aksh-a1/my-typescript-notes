declare type greet = 'enter' | 'exit';
declare const greeting: (task: greet) => any;
declare type Param = string | number;
declare const unionFunc: (prop: Param) => void;
declare type Params = string | boolean | number;
declare const unionFunc2: (prop: Params) => number;
interface PresonalInfo {
    name: string;
    age: number;
    sport: string;
}
interface Cricketer {
    runsScored?: number;
    team: string;
}
interface Footballer {
    goalsScored?: number;
    club: string;
}
declare type CricketerInfo = Cricketer & PresonalInfo;
declare type FootballerInfo = Footballer & PresonalInfo;
declare const printCricketInfo: (response: CricketerInfo) => void;
declare const response1: CricketerInfo;
