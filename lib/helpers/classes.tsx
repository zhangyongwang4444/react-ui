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
    return function (name: string | ClassToggles, options?: Options) {
        let name2;
        let result;
        if (typeof name === 'string' || name === undefined) {
            name2 = {[name]: name}
        } else {
            name2 = name
        }
        const name3 = Object.entries(name2).filter(kv => kv[1] !== false).map(kv => kv[0]);
        result = name3.map(name =>
            [prefix, name].filter(Boolean).join('-')
        ).join(' ');

        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    };
}

export {scopedClassMaker}

