/*
* @Author: zhanghuiming
* @Date:   2017-12-24 22:24:06
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-24 22:40:17
*/
// Browser version
// function addClass(el, newClass) {
//   if(el.className.indexOf(newClass) !== -1) {
//     return;
//   }

//   if(el.className !== '') {
//     //ensure class names are separated by a space
//     newClass = ' ' + newClass;
//   }

//   el.className += newClass;
// }


// Node Version
module.exports = {
  addClass: function(el, newClass) {
    if(el.className.indexOf(newClass) !== -1) {
      return;
    }

    if(el.className !== '') {
      //ensure class names are separated by a space
      newClass = ' ' + newClass;
    }

    el.className += newClass;
  }
}