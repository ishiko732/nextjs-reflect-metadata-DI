import { Injectable } from "../common";

@Injectable()
export class TestService1 {
  constructor() {
    console.log("init-test1");
  }

  testMethod() {
    console.log("test1");
    return "Hello World";
  }
}

@Injectable()
export class TestService2 {
  constructor() {
    console.log("init-test2");
  }

  testMethod() {
    console.log("test2");
    return "Hello World";
  }
}
