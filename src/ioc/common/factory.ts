import { Constructor } from "./decorators";

export class Factory {
  private static cache_L1: Map<string, any> = new Map();

  static create<T>(target: Constructor): T {
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
    const instance = new target(...args);
    this.cache_L1.set(isInjectable, instance);
    return instance;
  }

  // maybe use loadable-components?
  static init<T>(mod: Constructor<T>) {
    console.debug("init factory");
    const modules: Constructor[] | undefined = Reflect.getMetadata(
      "module",
      mod
    );
    if (!modules) {
      throw new Error("Target is not module");
    }
    console.log(modules);
    modules.map((service: Constructor<T>) => Factory.create(service));
    console.log(this.cache_L1);
    console.debug("end init factory");
  }
}
