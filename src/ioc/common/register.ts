export class Register {
  private static cache: Map<string, Function> = new Map<string, Function>();

  static addCache(fn: Function) {
    Register.cache.set(fn.name, fn);
  }

  static getCache() {
    return Register.cache;
  }
}
