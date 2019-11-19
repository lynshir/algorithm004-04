/** https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []
  helper(0, 0, n, '')
  function helper(left, right, n, s) {
    //终止条件
    if (left === n && right === n) {
      return res.push(s)
    }
    //处理流程
    if (left < n) {
      helper(left + 1, right, n, s + '(')
    }
    if (right < left) {
      helper(left, right + 1, n, s + ')')
    }
  }
  return res
};