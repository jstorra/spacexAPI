import { getAllImgMis } from "./storage/v3.js";
import { getAllImgRoc } from "./storage/v4.js";


let res = await getAllImgRoc();
console.log(res);

