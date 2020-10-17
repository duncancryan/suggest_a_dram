# Suggest a dram whisky score generator
# This file holds the calculation for the whisky score
# which is used to help with matching

def score_gen(attributes):

    # Set categories & their tags
    elements = ['smoke','brine','tar','seaweed','salt','iodine','wax','tobacco','coffee','oak','meat','rum','cognac']
    fruit = ['apple', 'Apricot','Dates','Pear','Prunes','Lemon','Raisins','Orange','Strawberry','Dried Fruit','Plums','Lime','Pineapple','Peach','Stewed Fruit',
    'Blackcurrant','Marmalade','Mango','Blackberry','Cherry','Raspberry','Sherry','Wine','Sultana']
    spice = ['Cinnamon','White Pepper','Aniseed','Nutmeg','Clove','Ginger','Mint','Mixed Herb','Liquorice root','Sage','Black Pepper','Rosemary']
    confectionery = ['Toffee','Honey','Milk Chocolate','Praline','Dark Chocolate','Vanilla','Peardrops','Caramel','Custard','Fruit Cake','Butterscotch','Biscuits'
    ,'Malt','Toast','Brioche']
    floral = ['Grass','Heather','Honeysuckle','Rose','Hay']
    fatty = ['Butter','Cream','Almond','Hazelnut','Coconut']

    # Set all base variables
    score = 0
    rating = attributes['rating']
    body_base = attributes['body']
    smoke_base = attributes['smoke']
    richness_base = attributes['richness']
    sweetness_base = attributes['sweetness']
    characters = attributes['characters']