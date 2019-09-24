'use strict';

import { TreeNode } from './TreeNode';

export class StackNode {
    private _array: TreeNode[] = [];

    public empty() : boolean {
        if (this._array.length == 0) {
            return true;
        }
        return false;
    }

    public peek() : TreeNode {
        // check if is empty
        if (this.empty()) {
            return null;
        }
        return this._array[this._array.length - 1];
    }

    public push(node: TreeNode) : void {
        this._array.push(node);
    }

    public pop() : TreeNode {
        // check if is empty
        if (this.empty()) {
            return undefined;
        }
        return this._array.pop();
    }
}