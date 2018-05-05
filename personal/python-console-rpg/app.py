 ask = require('readline-sync')

# ALGORITHMS
def randomChance(odds):
    return Math.floor(Math.random() * odds) === 0 ? true : false


def random(length):
    return Math.floor(Math.random() * length)


def willMonsterAppear():
    return randomChance(3)


def randomMonster():
     liveMonsters = monsters.filter(monster => monster.isAlive === true)
    return liveMonsters[random(liveMonsters.length)]


def willMonsterAttack():
    return randomChance(2)


def willTheyEscape():
    return randomChance(2)


def getAttackPower(attacker):
    return random(30) + attacker.baseAttack



# GAME STEPS
def beginGame():
    print('Hello. This is a game.')
    player.name = input('What is your name? ')
    print("\nHello $player.name. You can walk or you can check your inventory [w/i]")


def endGame(how):
    if (how === 'won')
        print('You won')
        endSession = true
     else if (how === 'death')
        print('You died')
        player.isAlive = false
     else if (how === 'quit')
        print('Are you sure you want to quit? [y/N]')
        if (input('\n\n> ').toUpperCase() === 'Y')
            endSession = true
         else
            print('Let\'s continue then.')





# IABLES
 player =
        name: '',
        hp: 100,
        baseAttack: 30,
        inventory: [

                type: 'weapon',
                name: 'A wooden sword',
                description: 'The most basic sword you could possibly have'
        ,

                type: 'sheild',
                name: 'Tacky clothes',
                description: 'Please change your outfit. It looks horrible and it has no effect'

    ],
        isAlive: true
    ,
    monsters = [

            name: 'Cthulu',
            hp: 50,
            baseAttack: 10,
            isAlive: true
        ,

            name: 'Dementor #12',
            hp: 25,
            baseAttack: 5,
            isAlive: true
        ,

            name: 'Area X',
            hp: 100,
            baseAttack: 15,
            isAlive: true

    ],
    specialItems = [

            weapon: 'unique',
            name: 'A coin',
            description: 'An extra life'
        ,

            type: 'weapon',
            name: 'Devil May Cry Guns',
            description: 'Increases your attack power by 25%'
        ,

            type: 'shield',
            name: 'Link\'s new outfit',
            description: 'Decreases damage taken by 12%'
        ,

            type: 'weapon',
            name: 'Mario\'s Cap',
            description: 'Increases your attack power by 25%'

    ],
    endSession = false

# GOD ACTIONS
def giveHPAndItem():
    # Give health
    player.hp += 25
    # Give random item and remove it from specialItems
    specialItem = specialItems[random(specialItems.length)]
    specialItems = specialItems.filter(item => item != specialItem)
    player.inventory.push(specialItem)


def createMonster():
    monsterAppeared = true
    monster = randomMonster()



# ABSTRACTED ACTIONS
def attack(victim, attacker):
    attacker.attackPower = getAttackPower(attacker)
    victim.hp -= attacker.attackPower
    if (victim.name === player.name)
        print(`Oh no, $monster.name attacked you for $attacker.attackPower points`)
     else
        print(`You damaged $victim.name for $attacker.attackPower points`)

     survived = victim.hp > 0
    if (!survived)
        victim.hp = 0
        if (victim.name === player.name)
            print(`$attacker.name seems to have killed you.`)
            endGame('death')
         else
            print(`You killed $victim.name`)
            die(victim)

     else if (survived)
        if (victim.name === player.name)
            print(`Your HP is now $player.hp`)
         else
            print(`Its HP is now $monster.hp`)




def die(who):
    if (who.name != player.name)
        previousHP = player.hp
        giveHPAndItem()
        print(`Oh look, your hp went up from $previousHP to $player.hp`)

    who.isAlive = false



# PLAYER ACTIONS
def walk():
    if (monsters.some(monster => monster.isAlive === true))
         monsterAppeared = willMonsterAppear()
        if (monsterAppeared)
            createMonster()
            if (willMonsterAttack())
                attack(player, monster)
             else
                print(`Oh no, $monster.name has appeared.`)

         else if (!monsterAppeared)
            print('Just walk. Nothing else is happening.')

     else
        print('Looks like all monsters are dead')
        endGame('won')



def run():
     escaped = randomChance(2) ? true : false
    if (escaped)
        print('You escaped. You can continue to walk now.')
     else
        print(`You attempt to escape, but not before $monster.name has a chance to attack you.`)
        attack(player, monster)
        if (player.isAlive)
            print('Luckily, you survived')




def checkInventory():
     inventory = 0
    print('Name: $player.name\nHP: $player.hp')
    print('Inventory:')
    player.inventory.forEach(item => print(`- $item.name`))


 indecisionCount = 0

def confrontation():
    print('Run or attack? [r/a]')
    choice = input('\n\n> ')
    switch (choice.toUpperCase())
        case 'R':
            indecisionCount = 0
            run()
            break
        case 'A':
            indecisionCount = 0
            print(`You decided to attack $monster.name.`)
            attack(monster, player)
            if (monster.isAlive):
                print(`But $monster.name decided to attack you back.`)
                attack(player, monster)

            break
        default:
            indecisionCount++
            if (indecisionCount === 2)
                endGame('death')
             else
                print('If you don\'t choose one of the options I\'m gonna kill you')





beginGame()
while (player.isAlive && !endSession)
    choice = input('\n\n> ')
    switch (choice.toUpperCase())
        case 'W':
             monsterAppeared = false
            walk()
            if (monsterAppeared && player.isAlive):
                confrontation()
                if (indecisionCount != 0):
                    confrontation()
                else if (player.isAlive):
                    print('\nKeep walking.')
            break
        case 'I':
            checkInventory()
            break
        case 'Q':
            endGame('quit')
            break
        default:
            print('Pardon?')
            break
