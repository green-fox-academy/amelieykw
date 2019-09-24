'use strict';

export interface Stack {
    empty(): boolean;
    peek(): string;
    push(value: string): void;
    pop(): string;
}

export class myStack implements Stack {
    private _array: string[] = [];

    public empty() : boolean {
        if (this._array.length == 0) {
            return true;
        }
        return false;
    }

    public peek() : string {
        // check if is empty
        if (this.empty()) {
            return undefined;
        }
        return this._array[this._array.length - 1];
    }

    public push(value: string) : void {
        this._array.push(value);
    }

    public pop() : string {
        // check if is empty
        if (this.empty()) {
            return undefined;
        }
        return this._array.pop();
    }
}