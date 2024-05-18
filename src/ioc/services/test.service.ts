import { Injectable } from "../common";

@Injectable()
export class TestService1 {
  constructor() {}

  testMethod() {
    console.log('test1');
  }
}


@Injectable()
export class TestService2 {
  constructor() {}

  testMethod() {
    console.log("test2");
  }
}
