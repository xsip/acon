import { Aconize } from './acon.decorator';
import 'reflect-metadata';
import { acon } from './acon.wrapper';
import { AsyncConstructor } from './acon.interfaces';
import { sleepAsync } from './test-helper/async.functions';

@Aconize()
class SampleClass implements AsyncConstructor<typeof SampleClass> {
  param3: string | undefined = undefined;

  constructor(public param1: string) {}

  // "asyncConstructor" using the same params as the default constructor
  async asyncConstructor(param1: string): Promise<void> {
    await sleepAsync(2000);
    this.param3 = 'sample value';
  }
}

async function example1() {
  const c = acon(SampleClass, '234');
  const sampleClass: SampleClass = await c;
  console.log(sampleClass.param3);
}

(async () => {
  await example1();
})();
