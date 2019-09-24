'use strict';

import { TreeNode } from './TreeNode';
import { Stack2 } from './Stack2';

interface Tree {
    empty(): boolean;
    add(value: string): void;
    remove(value: string): void;
    search(value: string): boolean;
}

class BinarySearchTree implements Tree {
    private _root: TreeNode;
    private _lheight: number;
    private _rheight: number;

    public empty(): boolean {
        if (this._root == null) {
            return true;
        }
        return false;
    }

    public add(value: string): void {
        // corner case
        if (this.empty()) {
            this._root = new TreeNode(value, null, null);
            return;
        }

        let current = this._root;
        let previous = this._root;
        while (current != null) {
            if (+value > +current.value) { // go right
                previous = current;
                current = current.rchild;
            } else { // go left 
                previous = current;
                current = current.lchild;
            }
        }
        if (+value > +previous.value) { // add to right
            previous.lchild = new TreeNode(value, null, null);
        } else {
            previous.rchild = new TreeNode(value, null, null);
        }
    }

    public remove(value: string): void {
        // corner case : node to delete is root and root is the only node in tree
        if (this._root.lchild == null && this._root.rchild == null) {
            if (this._root.value == value) {
                this._root = null;
            } 
            return;
        }
        // pre : find the node to delete
        let current = this._root;
        let parent = null;
        let isLeftChildToDelete = false;
        while (current.value != value) {
            // iteration to add all left children to stack
            parent = current;
            if (+current.lchild.value > +value) { // search left
                current = current.lchild;
                isLeftChildToDelete = true;
            } else { // search right
                current = current.rchild;
                isLeftChildToDelete = false;
            }
            if (current == null) {
                return;
            }
        }  // jump out when current.value == value
        // case 1 : node to delete is a leaf node
        if (current.lchild == null && current.rchild == null) {
            if (isLeftChildToDelete) {
                parent.lchild = null;
            } else {
                parent.rchild = null;
            }
        } else if (current.lchild != null) {
            // case 2 : node to delete has one child
            //      case 2.1 : node to delete has left child
            if (isLeftChildToDelete) {
                parent.lchild = current.lchild;
            } else {
                parent.rchild = current.lchild;
            }
        } else if (current.rchild != null) {
            //      case 2.2 : node to delete has right child
            if (isLeftChildToDelete) {
                parent.lchild = current.rchild;
            } else {
                parent.rchild = current.rchild;
            }
        } else {
            // case 3 : node to delete has two children
            let successor = this.findSuccessor(current); // find successor in current's lchild
            if (isLeftChildToDelete) {
                parent.lchild = successor; // link successor back to the original tree
            } else {
                parent.rchild = successor;
            }
            successor.lchild = current.lchild;
        }
    }

    // find successor in node's left subtree
    private findSuccessor(node: TreeNode) : TreeNode { 
        // corner case
        if (node == null) {
            return node;
        }
        if (node.lchild == null && node.rchild == null) {
            return node;
        }
        // start from the right child of the node to be deleted, 
        // to find the smallest node in this subtree which will be the successor of node
        let current = node.rchild;
        let successor = node;
        let parent = node;
        while (current != null) {
            successor = current;
            parent = successor;
            current = current.lchild;
        }
        if (successor != node.rchild) {
            parent.lchild = successor.rchild; // cut successor out of the subtree
            successor.rchild = node.rchild; // put this successor node to be the root of this subtree
        }
        return successor;
    }

    public search(value: string): boolean {
        // corner case
        if (this._root == null || this._root.value == value) {
            return true;
        }
        let current = this._root;
        while (current != null) {
            if (+current.value > +value) {
                current = current.lchild;
            } else if (+current.value < +value) {
                current = current.rchild;
            } else {
                return true;
            }
        }
        return false;
    }
}