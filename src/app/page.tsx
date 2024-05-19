import { Factory } from "@/ioc/common";
import { AppModule } from "@/ioc/services/module";
import { TestService1, TestService2 } from "@/ioc/services/test.service";

export const dynamic = "force-dynamic";

export default function Home() {
  Factory.init(AppModule);
  const testService = Factory.getBean<TestService2>("TestService2");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {`${testService.testMethod()}`}
    </main>
  );
}
