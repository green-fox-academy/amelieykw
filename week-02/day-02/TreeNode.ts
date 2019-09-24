'use strict';

export class TreeNode {
    private _value: string;
    private _lchild: TreeNode;
    private _rchild: TreeNode;

    constructor(value: string, lchild: TreeNode, rchild: TreeNode) {
        this._value = value;
        this._lchild = lchild;
        this._rchild = rchild;
    }

    get value(): string {
        return this._value;
    }

    get lchild(): TreeNode {
        return this._lchild;
    }

    get rchild(): TreeNode {
        return this._rchild;
    }

    set value(value: string) {
        this._value = value;
    }

    set lchild(lchild: TreeNode) {
        this._lchild = lchild;
    }

    set rchild(rchild: TreeNode) {
        this._rchild = rchild;
    }
}