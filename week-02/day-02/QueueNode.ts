'use strict';
import { TreeNode } from './TreeNode';

export class QueueNode {
    private _queue: TreeNode[] = [];
    private _head: number = 0;
    private _tail: number = 0;

    public empty(): boolean {
        if (this._head == this._tail) {
            return true;
        }
        return false;
    }

    public peek() : TreeNode {
        if (this.empty()) {
            return null;
        }
        return this._queue[this._head];
    }

    public add(value: TreeNode) : void {
        this._queue.push(value);
        this._tail++;
    }

    public remove(): TreeNode {
        if (this.empty()) {
            return null;
        }
        return this._queue[this._head++];
    }
}