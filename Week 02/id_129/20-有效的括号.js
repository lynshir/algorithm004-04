/** https://leetcode-cn.com/problems/valid-parentheses/ 有效的括号
 * @param {string} s
 * @return {boolean}
 */

/**
 * 方法1：暴力法，依次遍历替换掉(),[],{}为空字符串，最终是空字符串则true,否则为false
 * @param {*} s 
 */
var isValid = function (s) {
  while (s.length) {
    let t = s
    s = s.replace(/({})|(\(\))|(\[\])/g, '')
    if (s === t) return false
  }
  // s = s.replace(/(\(\))/g, '')
  // s = s.replace(/(\[\])/g, '')
  return true
};

/** 
 * 方法2：栈，每次碰到左括号入栈，第一个右括号一定与栈尾的元素匹配，否则直接false,
 * 最终栈不空，false,字符串长度是奇数，直接false,栈最终为空，true
 */

var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  const stack = []
  const map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  for (let i = 0; i < s.length; i++) {
    const el = s[i]
    if (el === '{' || el === '(' || el === '[') {
      stack.push(el)
    } else {
      if (el !== map[stack.pop()]) {
        return false
      }
    }
  }
  return !stack.length
};