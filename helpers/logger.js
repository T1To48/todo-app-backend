import { pino } from "pino";
import fs from "fs";

const stream=fs.createWriteStream("./todo.log",{flags:"a"})
export const logger =pino({level:"info"},stream)

