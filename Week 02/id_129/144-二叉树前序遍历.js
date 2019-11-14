/**
 * 二叉树前序遍历 https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 方法1：递归
 */
var preorderTraversal = function (root) {
  if (!root) return []
  const res = []
  function helper(node, res) {
    res.push(node.val)
    if (node.left) helper(node.left, res)
    if (node.right) helper(node.right, res)
  }
  helper(root, res)
  return res
};

//方法二：迭代
var preorderTraversal = function (root) {
  if (!root) return []
  const res = []
  const stack = [root]
  while (stack.length) {
    const cur = stack.pop()
    res.push(cur.val)
    if (cur.right) stack.push(cur.right)
    if (cur.left) stack.push(cur.left)
  }
  return res
};