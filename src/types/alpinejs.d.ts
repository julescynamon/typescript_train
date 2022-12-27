declare module "alpinejs" {
    type AlpineInstance = {
        readonly $el: HTMLElement;
    };

    type WithAlpineInstance<T> = {
        [K in keyof T]: T[K] extends (...args: infer Args) => infer Return
            ? (this: T & AlpineInstance, ...args: Args) => Return
            : T[K];
    };

    const Alpine: {
        start: void;
        data<T>(
            componentName: string,
            callback: (params: any) => WithAlpineInstance<T>
        ): void;
    };

    export default Alpine;
}
