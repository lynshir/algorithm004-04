/** https://leetcode-cn.com/problems/valid-parentheses/ 有效的括号
 * @param {string} s
 * @return {boolean}
 */

/**
 * 方法1：暴力法，依次遍历替换掉(),[],{}为空字符串，最终是空字符串则true,否则为false
 * @param {*} s 
 */
var isValid = function (s) {
  s = s.replace(/({})/g, '')
  s = s.replace(/(\(\))/g, '')
  s = s.replace(/(\[\])/g, '')
  return !s
};