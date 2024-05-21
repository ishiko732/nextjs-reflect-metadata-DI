import { Injectable } from "../common";
import { AbstactTest, AbstactTestService } from "./abstract.service";

@Injectable()
export class TestService1 implements AbstactTest {
  private name: string = "test1";
  constructor() {
    console.log("init-test1");
  }

  testMethod() {
    console.log("test1");
    return "Hello World";
  }

  getMessage() {
    return this.name;
  }
}

@Injectable()
export class TestService2 implements AbstactTest {
  private name: string = "test2";
  constructor() {
    console.log("init-test2");
  }

  testMethod() {
    console.log("test2");
    return "Hello World";
  }
  getMessage() {
    return this.name;
  }
}
