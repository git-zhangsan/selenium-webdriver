/*
* @Author: zhanghuiming
* @Date:   2017-12-26 21:30:02
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-26 21:45:07
*/
import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {

  const component = renderer.create(
    <Link page="http://www.baidu.com">Baidu</Link>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
});