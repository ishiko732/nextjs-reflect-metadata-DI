import { Constructor } from "./decorators";

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

  // maybe use loadable-components?
  static init<T>(mod: Constructor<T>) {
    console.debug("init factory");
    const modules: Function[] | undefined = Reflect.getMetadata("module", mod);
    if (!modules) {
      throw new Error("Target is not module");
    }
    console.log(modules);
    // console.log(Factory.cache_L1);
    console.debug("end init factory");
  }
}
