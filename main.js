import { getAllImgLaunches } from "./storage/v3.js";
import {
  getAllImgRockets,
  getAllImgShips,
  getAllImgCores,
  getAllImgCapsules,
} from "./storage/v4.js";

let res = await getAllImgCapsules();
console.log(res);
