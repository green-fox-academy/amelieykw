'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');


// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
class FleetOfThings {
    main(things) {
        this.fleet = new Fleet();
        things.forEach(element => {
            let newThing = new Thing(element);
            if (element == 'Stand up' || element == 'Eat lunch') {
                newThing.complete();
            }
            this.fleet.add(newThing);
        });
    }

    print() {
        this.fleet.getThings().forEach(element => {
            if (element.getCompleted()) {
                console.log('[X] ' + element.getName());
            } else {
                console.log('[ ] ' + element.getName());
            }
        });
    }
}
const fleetOfThings = new FleetOfThings();
const things = ['Get milk', 'Remove the obstacles', 'Stand up', 'Eat lunch'];
fleetOfThings.main(things);
fleetOfThings.print();