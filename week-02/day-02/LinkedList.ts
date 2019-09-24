'use strict';

import { Node } from './Node';

interface LinkedList {
    add(value: string, index?: number): void;
    get(index: number): string;
    removeItem(value: string): void;
    remove(index: number): string;
    size(): number;
}

class myLinkedList {
    private _head: Node;
    private _tail: Node;
    private _size: number = 0;

    public add(value: string, index?: number): void {
        let myNode = new Node(value, null);
        // corner case : linkedlist is empty
        if (this._head == this._tail) {
            this._head = myNode;
            this._tail = myNode;
        } 
        if (index == undefined || index >= this._size) {
            // add to tail
            this._tail.next = myNode;
        } else {
            // find the right position first
            let current = this._head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            } // jump out when i == index - 1
            myNode = current.next;
            current.next = myNode;
        }
        this._size++;
    }

    public get(index: number): string {
        // corner case 
        if (index == undefined) {
            return undefined;
        } else if (index == 0) {
            return this._head.value;
        } else  if (index == this._size - 1) {
            return this._tail.value;
        } 
        // find the right position first
        let current = this._head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        } // jump out when i == index
        return current.value;
    }

    public removeItem(value: string): void {
        // corner case
        if (this.size() == 0) {
            return;
        } else if (this._head.value == value) {
            this._head = this._head.next;
        } else {
            // find the right position first
            let current = this._head;
            for (let i = 0; i < this._size; i++) {
                if (current.next.value == value) {
                    current.next = current.next.next;
                    break;
                }
                current = current.next;
            } 
        }
    }

    public remove(index: number): string { // need to verify later
        // corner case
        if (this.size() == 0) {
            return undefined;
        } else if (index == 0) {
            this._head = this._head.next;
        } else {
            // find the right position first
            let current = this._head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next; 
        }
        return;
    }

    public size(): number {
        return this._size;
    }
}
  