/*
* @Author: zhanghuiming
* @Date:   2018-01-02 18:45:21
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2018-01-09 11:28:24
*/
import Todo from '../todo';
import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';


test('TodoComponent calls doneChange when todo is clicked', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const doneChange = jest.fn();
  const wrapper = mount(
    <Todo todo={todo} doneChange={doneChange} />
  );

  const p = wrapper.find('.toggle-todo');
  p.simulate('click');
  expect(doneChange).toBeCalledWith(1);
});