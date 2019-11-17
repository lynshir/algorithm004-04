/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * N叉树的后续遍历 https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) return []
  function helper(node, res) {
    if (!node) return
    for (let i = 0, l = node.children.length; i < l; i++) {
      helper(node.children[i], res)
    }
    res.push(node.val)
  }
  const res = []
  helper(root, res)
  return res
};

//迭代法
var postorder = function (root) {
  if (!root) return []
  const res = [], stack = [root]
  while (stack.length) {
    const cur = stack.pop()
    for (let i = 0, l = cur.children.length; i < l; i++) {
      stack.push(cur.children[i])
    }
    res.unshift(cur.val) //此处需注意
  }
  return res
}
