import { getAllImgLaunches } from "./storage/v3.js";
import { getAllImgRockets, getAllImgShips } from "./storage/v4.js";


let res = await getAllImgShips();
console.log(res);

