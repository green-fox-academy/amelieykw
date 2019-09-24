'use strict';

import { TreeNode } from './TreeNode';
import { StackNode } from './StackNode';

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

    // private height(root: TreeNode): number {
    //     // corner case
    //     if (this._root == null) {
    //         return 0;
    //     }
    //     return Math.max(this.height(this._root.lchild), this.height(this._root.rchild)) + 1;
    // }

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
        // pre-order traversal
        let stack = new StackNode();
        let current = this._root;
        while (current != null) {
            if (current.value == value) {
                return current;
            }
            stack.push(current);
            current = current.lchild;
        }
        while (!stack.empty()) {
            let top = stack.pop();
            if (top.rchild != null) {
                stack.push(top.rchild);
                top = top.rchild;
                while (top != null) {
                    if (top.value == value) {
                        return top;
                    }
                    stack.push(top);
                    top = top.lchild;    
                }
            }   
        }
        return null;
    }
}