## ACON.
### ✨ Async Constructors in Typescript ✨


**ACON** gives you the possibility to **instantiate Typescript classes asynchronous** by implementing an interface and **adding a function called asyncConstructor**.


### Usage example



    @Aconize()  
    class SampleClass implements AsyncConstructor<typeof SampleClass> {  
      param3: string | undefined = undefined;  
      
      constructor(public param1: string) {}  
      
      // "asyncConstructor" using the same params as the default constructor  
      async asyncConstructor(param1: string): Promise<void> {  
	      await sleepAsync(2000);  
	      this.param3 = 'sample value';  
     }}



After that you can instantiate the class by using "**a**" or "**acon**".
In this example i will use "**acon**" as the initializer.

    async function example1() {  
      const c = acon(SampleClass, '234');  
      const sampleClass: SampleClass = await c;  
      console.log(sampleClass.param3);  
    } 
