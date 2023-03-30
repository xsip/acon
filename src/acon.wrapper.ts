type Constructor<T> = { new (): T };
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const a = <T>(c: T, ..._args: ConstructorParameters<T>): Promise<InstanceType<T>> => {
  const getMeta = (key: string) => Reflect.getMetadata(key, c as Record<string, unknown>);
  const isAconClass = getMeta('isAconClass');
  if (!isAconClass) {
    throw new Error('acon can only be used with aconised classes!!');
  }
  // @ts-ignore
  return new ((c as Constructor<T>).bind(c, _args))() as Promise<InstanceType<T>>;
};
export const acon = a;
