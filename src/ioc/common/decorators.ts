import "reflect-metadata";
export type Constructor<T = any> = new (...args: any[]) => T;

export const Injectable = (serviceName?: string): ClassDecorator => {
  return (target: Function) => {
    Reflect.defineMetadata("injectable", serviceName || target.name, target);
  };
};

export const Module = ({
  imports,
}: {
  imports?: Function[];
}): ClassDecorator => {
  return (target: Function) => {
    Reflect.defineMetadata("module", imports ?? [], target);
  };
};
