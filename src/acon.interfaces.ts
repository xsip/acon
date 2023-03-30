export interface AsyncConstructor<I, R = unknown> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  asyncConstructor: (...args: ConstructorParameters<I>) => Promise<R>;
}
