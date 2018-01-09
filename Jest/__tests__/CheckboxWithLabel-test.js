/*
* @Author: zhanghuiming
* @Date:   2017-12-26 22:43:16
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-26 22:49:46
*/
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});