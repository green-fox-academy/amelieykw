'use strict';

interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}


enum DOW {
    MON, TUE, WED, THU, FRI, SAT, SUN
}

class Reservation implements Reservationy {
    private _reservationCode : string;

    constructor(code: string) {
        this._reservationCode = code;
    }

    public getDowBooking() : string {
        return " for " + DOW[Math.floor(Math.random() * 7)];
    }

    public getCodeBooking() : string {
        return "Booking# " + this._reservationCode;
    }

    public getReservation() : void {
        return console.log(this.getCodeBooking() + this.getDowBooking());
    }
}

const client1 = new Reservation("1WBA3OMU");
client1.getReservation();