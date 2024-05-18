import { InitService } from "./init.service";
import { Constructor } from "./decorated";

export class Factory {
  static create<T>(target: Constructor<T>): T {
    const isInjectable = Reflect.getMetadata("injectable", target);
    if (!isInjectable) {
      throw new Error("Target is not injectable");
    }
    const providers = Reflect.getMetadata("design:paramtypes", target) || [];
    console.debug(`init service[${isInjectable}](params:${providers})`);
    const args = providers.map((provider: Constructor) => {
      const r = new provider();
      return r;
    });
    return new target(...args);
  }



  static init() {
    console.debug("init factory");
    Factory.create(InitService).init();
    // console.log(Factory.cache_L1);
    console.debug("end init factory");
  }
}
