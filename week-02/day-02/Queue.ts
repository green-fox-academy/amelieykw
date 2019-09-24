'use strict';

interface Queue {
    empty(): boolean;
    peek(): string;
    add(value: string): void;
    remove(): string;
}

class myQueue implements Queue {
    private _queue: string[] = [];
    private _head: number = 0;
    private _tail: number = 0;

    public empty(): boolean {
        if (this._head == this._tail) {
            return true;
        }
        return false;
    }

    public peek() : string {
        if (this.empty()) {
            return undefined;
        }
        return this._queue[this._head];
    }

    public add(value: string) : void {
        this._queue.push(value);
        this._tail++;
    }

    public remove(): string {
        if (this.empty()) {
            return undefined;
        }
        return this._queue[this._head++];
    }
}