import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('icon', () => {
    it('render success', () => {
        const json = renderer.create(<Icon name="wechat"/>).toJSON();
        expect(json).toMatchSnapshot()
    });

    it('', () => {

    })

});

