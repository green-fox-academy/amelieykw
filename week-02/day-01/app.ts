'use strict';

export abstract class Instrument {
    protected _name : String;

    abstract play(): void;
}

export abstract class StringedInstrument extends Instrument {
    protected _numberOfStrings : number;

    abstract sound(): String;

    play() : void {
        console.log(this.sound());
    }
}

export class ElectricGuitar extends StringedInstrument {
    // inherit protected _name : String
    // inherit protected _numberOfStrings : number
    
    constructor(numberOfStrings?: number) {
        super();
        if (numberOfStrings == undefined) {
            this._numberOfStrings = undefined;
        } else {
            this._numberOfStrings = 6;
        }
    }

    // inherit public play()
    
    public sound() : String {
        return "Electric Guitar, a " + this._numberOfStrings + "-stringed instrument that goes " + "Twang";
    }
}

export class BassGuitar extends StringedInstrument {
    // inherit protected _name : String
    // inherit protected _numberOfStrings : number
    
    constructor (numberOfStrings?: number) {
        super();
        if (numberOfStrings == undefined) {
            this._numberOfStrings = undefined;
        } else {
            this._numberOfStrings = 4;
        }
    }

    // inherit public play()
    
    public sound() : String {
        return "Bass Guitar, a " + this._numberOfStrings + "-stringed instrument that goes " + "Duum-duum-duum";
    }
}

export class Violin extends StringedInstrument {
    // inherit protected _name : String
    // inherit protected _numberOfStrings : number
    
    constructor (numberOfStrings?: number) {
        super();
        if (numberOfStrings == undefined) {
            this._numberOfStrings = undefined;
        } else {
            this._numberOfStrings = 4;
        }
    }

    // inherit public play()
    
    public sound() : String {
        return "Violin, a " + this._numberOfStrings + "-stringed instrument that goes " + "Screech";
    }
}