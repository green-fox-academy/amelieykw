'use strict';

import { TreeNode } from './TreeNode';
import { StackNode } from './StackNode';
import { QueueNode } from './QueueNode';

interface Tree {
    empty(): boolean;
    add(value: string): void;
    remove(value: string): void;
    search(value: string): boolean;
}

class BinaryTree implements Tree {
    private _root: TreeNode;
    private _lheight: number;
    private _rheight: number;

    public empty(): boolean {
        if (this._root == undefined) {
            return true;
        }
        return false;
    }

    public add(value: string): void {
        // rule: make a balance BT
        // corner case
        // if (this._root == null) {
        //     this._root = new TreeNode(value, null, null);
        //     return;
        // } 
        // if (this._lheight == undefined) {
        //     this._lheight = this.height(this._root)
        // }
    }

    public remove(value: string): void {

    }

    public search(value: string): boolean {
        // corner case
        if (this._root == null || this._root.value == value) {
            return true;
        }
        let stack:TreeNode[] = [];
        // in-order traversal
        let treeNode = this._root;
        while(treeNode != null) {
            stack.push(treeNode);
            treeNode = treeNode.lchild;
        }
        while(stack.length > 0) {
            let current = stack.pop();
            if (current.value == value) {
                return true;
            } 
            current = current.rchild;
            while(current != null) {
                stack.push(current);
                current = current.lchild;
            }
        }
        return false;
    }

    public depthFirstSearch(value: string) : TreeNode {
        // corner case
        if (this._root == null || this._root.value == value) {
            return this._root;
        }
        // in-order traversal
        let stack = new StackNode();
        let current = this._root;
        while (current != null || !stack.empty()) {
            // try to go left first till the leaf, and add all the left child to stack
            // all the left childs added to stack haven't been traversed
            if (current != null) {
                stack.push(current);
                current = current.lchild;
            } else { // arrive down to the next level of the leaf
                current = stack.pop(); // return the previous level - the leaf
                if (current.value == value) {
                    return current;
                }
                current = current.rchild;
            }
        }
        return null;
    }


    // Iterative method: by using stack
    // Time: O(3n) = O(n) - traverse each node
    // Space: O(n) worst time
    public breathFirstSearch(value: string) : TreeNode {
        // corner case
        if (this._root == null || this._root.value == value) {
            return this._root;
        }
        // pre-order traversal
        let queue = new QueueNode();
        queue.add(this._root);
        while (!queue.empty()) {
            // For each node: Time: O(3)
            // 1. poll from stack - O(1)
            // 2. offer into stack - O(1)
            // 3. add to preorder list - O(1)
            let head = queue.remove();
            if (head.value == value) {
                return head;
            }
            if (head.lchild != null) {
                queue.add(head.lchild);
            } 
            if (head.rchild != null) {
                queue.add(head.rchild);
            }
        }
        return null;
    }
}