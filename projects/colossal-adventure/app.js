var ask = require('readline-sync');

// Player info
    // name, hp, inventory

//Other variables
    // inventory items, greeting, death message

// Monsters
    // cthulu, a dementor, Area X
    // give hp and attack power to each

// Actions
    // walk
        // trigger willMonsterAppear?
            // if yes
                //trigger willMonsterAttack?
                    //if yes
                        // decrease player hp by attack power of monster
                        // if player is still alive
                            // ask player for to attack or run
                            // if player attacks and monster is not dead or player doesn't escape
                                // decrease player hp by attack power of monster
    // attack
        // who is attacking?
            // if player is attacking
                // trigger whatWillTheAttackPowerBe?
                // decrease monster hp by attack power
                // if monster hp drops below zero
                    // add item and health, so trigger giveReward()
            // if monster attacks
                // if player dies
                    // trigger endgame function
    // run
        // trigger willTheyEscape?
    // giveReward
        // give item and some health
    // endgame
        // end game with a message depending on dying or winning
    // check reality
        // print player's name, hp, and inventory

// Algorithms
    // willMonsterAppear?
        // 1/3 chance of appearing
    // whatWillTheAttackPowerBe?
        // just a math thing between a min and max
    // willTheyEscape?
        // just math 50% chance of escaping
    // willMonsterAttack?
        // 1/3 chance of being attacked
        // will trigger attack
        // randomized monster (just a simple math thing)