import { Factory } from "@/ioc/common";
import { AppModule } from "@/ioc/services/module";

export const dynamic = "force-dynamic";

export default function Home() {
  // Factory.create(TestService1).testMethod();
  Factory.init(AppModule);
  // Factory.create(TestService2).testMethod();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
