import { Factory } from "@/ioc/common";
import { AbstactTest, AbstactTestService } from "@/ioc/services/abstract.service";
import { AppModule } from "@/ioc/services/module";

export const dynamic = "force-dynamic";

export default function Home() {
  Factory.init(AppModule);
  const testService = Factory.getBean<AbstactTest>("TestService2");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {`${testService.testMethod()}-${testService.getMessage()}`}
    </main>
  );
}
