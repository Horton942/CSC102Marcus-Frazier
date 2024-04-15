# this is how we define a class in Python, classes should have the first letter capitalized
class Character:
    #  in Python, def means the same thing as function, this function is the constructor - it sets up the class
    def __init__(self, name, description, health, attack_power, defense):
        #  set up the properties/attributes/things that describes our class
        # we can have as many as we need
        self.name = name
        self.description = description
        self.health = health
        self.attack_power = attack_power
        self.defense = defense

    # define the methods so that the Character can do things and the character can experience changes
    #  target is an enemy character
    def attack(self, target):
        # create some formula for damage - this could be a random number
        damage = self.attack_power - target.defense
        print(f"{self.name} attacks {target.name} and deals {damage} damage")
        target.health = target.health - damage

    # create a method to print the character status
    def print_status(self):
        print(f"{self.name}: Health = {self.health}, attack power = {self.attack_power}, Defense = {self.defense}")

    # get and set methods for health
    def get_health(self):
        return self.health

    def set_health(self, new_health):
        # set up whatever rules are needed to help protect the data
        if new_health > 0 and new_health < 1000:
            self.health = new_health

    #  now that the class (blueprint) is set up, let's build some objects (houses)
    player = Character("Marcus", "student", 100, 50, 100)
    enemy = Character("Enemy", "a joker", 80, 5, 5)

    # fight
    player.attack(enemy) # I am fighting the enemy
    enemy.attack(player) # the enemy is fighting me