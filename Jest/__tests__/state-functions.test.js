/*
* @Author: zhanghuiming
* @Date:   2018-01-09 10:20:24
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2018-01-09 11:38:29
*/
import { toggleDone, deleteTodo } from '../state-functions';

test('tooggleDone completes an incomplete todo', () => {
  const startState = {
    todos: [{ id: 1, done: false, text: 'Buy Milk' },{ id: 2, done: false, text: 'New Milk' }]
  };

  const finState = toggleDone(startState, 1);
  console.log(finState);
  expect(finState.todos).toEqual([
    { id: 1, done: true, text: 'Buy Milk' },
    { id: 2, done: false, text: 'New Milk' }
  ]);
});

test('deleteTodo deletes the todo it is given', () => {
  const startState = {
    todos: [{ id: 1, done: false, text: 'Buy Milk' }]
  };

  const finState = deleteTodo(startState, 1);

  expect(finState.todos).toEqual([]);
});