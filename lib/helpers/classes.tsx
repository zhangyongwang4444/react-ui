function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
    extra: string | undefined;
}

interface ClassToggles {
    [K: string]: boolean
}

function scopedClassMaker(prefix: string) {
    return function (name?: string | ClassToggles, options?: Options) {
        let name2;
        let result;
        if (typeof name === 'string' || name === undefined) {
            name2 = [name]
            result = name2.map(name =>
                [prefix, name].filter(Boolean).join('-')
            ).join(' ')
        } else {
            name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]);
            result = name2.map(name =>
                [prefix, name].filter(Boolean).join('-')
            ).join(' ');
        }
        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    };
}

export {scopedClassMaker}

