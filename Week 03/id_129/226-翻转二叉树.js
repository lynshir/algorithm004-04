/** https://leetcode-cn.com/problems/invert-binary-tree/description/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root !== null) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  }
  return root
};