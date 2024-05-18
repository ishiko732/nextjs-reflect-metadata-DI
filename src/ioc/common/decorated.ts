import "reflect-metadata";
import { Register } from "./register";
export type Constructor<T = any> = new (...args: any[]) => T;

export const Injectable = (serviceName?: string): ClassDecorator => {
  return (target: Function) => {
    Reflect.defineMetadata("injectable", serviceName || target.name, target);
    Register.addCache(target);
  };
};

const Inject =
  (service: string): ParameterDecorator =>
  (target, propertyKey, parameterIndex) => {
    const existingDependencies =
      Reflect.getMetadata("dependencies", target) || [];
    existingDependencies[parameterIndex] = service;
    Reflect.defineMetadata("dependencies", existingDependencies, target);
  };
