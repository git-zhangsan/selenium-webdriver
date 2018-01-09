/*
* @Author: zhanghuiming
* @Date:   2018-01-09 10:22:28
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2018-01-09 11:42:01
*/
import Todo from '../todo';
import renderer from 'react-test-renderer';
import React from 'react';

test('Todo component renders the todo correctly', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const rendered = renderer.create(
    <Todo todo={todo} />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});