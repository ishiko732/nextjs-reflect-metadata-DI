import { Module } from "../common/decorators";
import { TestService1, TestService2 } from "./test.service";

@Module({
  imports: [TestService1, TestService2],
})
export class AppModule {}
