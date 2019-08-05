import classes, {scopedClassMaker} from '../classes'

describe('classes', () => {
    it('接受 1个 className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })

    it('接受 2个 className', () => {
        const result = classes('a', 'b')
        expect(result).toEqual('a b')
    })

    it('接受 undefined 结果不会出现 undefined ', () => {
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })

    it('接受 各种奇怪的 参数 ', () => {
        const result = classes('a', undefined, '中文', false, null)
        expect(result).toEqual('a 中文')
    })

    it('接受 0个 参数 ', () => {
        const result = classes()
        expect(result).toEqual('')
    })

});

describe('scopedClassMaker', () => {
    it('接受字符串或对象', () => {
        const sc = scopedClassMaker('react-ui-layout');
        expect(sc('')).toEqual('react-ui-layout');
        expect(sc('x')).toEqual('react-ui-layout-x');
        expect(sc({y: true, z: false})).toEqual('react-ui-layout-y');
        expect(sc({y: true, z: true})).toEqual('react-ui-layout-y react-ui-layout-z');
        expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('react-ui-layout-y react-ui-layout-z red');

    })
})