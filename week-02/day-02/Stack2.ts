'use strict';

import { Node } from './Node';

export interface Stack {
    empty(): boolean;
    peek(): string;
    push(value: string): void;
    pop(): string;
}

export class Stack2 implements Stack {
    private _head: Node;
    private _tail: Node;

    public empty(): boolean {
        if (this._tail == this._head) {
            return true;
        }
        return false;
    }

    public peek(): string {
        // corner case
        if (this.empty()) {
            return undefined;
        }
        return this._tail.value;
    }

    public push(value: string): void {
        let newNode = new Node(value, null);
        // corner case
        if (this.empty()) {
            this._head = newNode;
        }
        this._tail.next = newNode;
        this._tail = this._tail.next;        
    }

    public pop(): string {
        // corner case
        if (this.empty()) {
            return undefined;
        }
        let top = this._tail;
        this._tail.next = null;
        return top.value;
    }    
}