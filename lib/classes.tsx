interface Options {
    extra: string | undefined;
}

interface ClassToggles {
    [K: string]: boolean
}

function scopedClassMaker(prefix: string) {

    return function (name?: string | ClassToggles, options?: Options) {
        const result = [prefix, name].filter(Boolean).join('-');
        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    };


}

export {scopedClassMaker}

