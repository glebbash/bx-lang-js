import { readFileSync } from 'fs';

import { Blocks } from '../src/core';

const data = readFileSync("data/test1.bx", { encoding: "utf-8" })
const res = new Blocks().eval(data)
console.log(res)