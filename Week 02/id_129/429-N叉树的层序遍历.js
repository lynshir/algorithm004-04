/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**429-N叉树的层序遍历 https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const res = []
  function helper(node, res, k) {
    if (!node) return
    if (!res[k]) res[k] = []
    res[k].push(node.val)
    for (let i = 0, l = node.children.length; i < l; i++) {
      helper(node.children[i], res, k + 1)
    }
  }
  helper(root, res, 0)
  return res
};