import 'reflect-metadata';
import { AsyncConstructor } from './acon.interfaces';
export function Aconize() {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-types
  return function _aconize<T extends { new (...args: ConstructorParameters<T>): {} }>(constructor: T) {
    Reflect.defineMetadata('isAconClass', true, constructor);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return class extends constructor {
      constructor(...args: ConstructorParameters<T>) {
        super(...(args as never as [ConstructorParameters<T>])[0]);
        const asyncConstructor = (this as never as AsyncConstructor<T>).asyncConstructor;
        return new Promise(async (resolve) => {
          if (asyncConstructor) {
            await asyncConstructor.bind(this)(...(args as never as [ConstructorParameters<T>])[0]);
          } else {
            throw new Error('Async constructor not implemented!!');
          }
          Reflect.defineMetadata('isAconClass', true, this);

          resolve(this);
        });
      }
    };
  };
}
