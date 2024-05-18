import { Injectable } from "./decorated";
import { Register } from "./register";

@Injectable()
export class InitService {
  constructor() {}

  init() {
    console.log("init", Register.getCache());
  }
}
