# Suggest a dram whisky score generator
# This file holds the calculation for the whisky score
# which is used to help with matching

# Arrays of tags







# Set all base variables
fruit_score = 0
spice_score = 0
confectionery_score = 0
floral_score = 0
fatty_score = 0


def element_generator(attributes):
    print("Creating element score")

    characters = attributes['character']

    element = ['smoke','brine','tar','seaweed','salt','iodine','wax','tobacco','coffee','oak','meat','rum','cognac']

    element_score = 0
    
    for tag in characters:
        if tag.lower() in element:
            element_score += 1
    
    return element_score


def fruit_generator(attributes):
    print("Creating fruit score")

    characters = attributes['character']

    fruit = ['Apple', 'Apricot','Dates','Pear','Prunes','Lemon','Raisins','Orange','Strawberry','Dried Fruit','Plums','Lime','Pineapple','Peach','Stewed Fruit',
    'Blackcurrant','Marmalade','Mango','Blackberry','Cherry','Raspberry','Sherry','Wine','Sultana', 'Melon']
    fruit_lower = []
    for tag in fruit:
        fruit_lower.append(tag.lower())

    fruit_score = 0
    
    for tag in characters:
        if tag.lower() in fruit_lower:
            fruit_score += 1
    
    return fruit_score


def spice_generator(attributes):
    print("Creating spice score")

    characters = attributes['character']

    spice = ['Cinnamon','White Pepper','Aniseed','Nutmeg','Clove','Ginger','Mint','Mixed Herb','Liquorice root','Sage','Black Pepper','Rosemary']
    spice_lower = []
    for tag in spice:
        spice_lower.append(tag.lower())

    spice_score = 0
    
    for tag in characters:
        if tag.lower() in spice_lower:
            spice_score += 1
    
    return spice_score


def confectionery_generator(attributes):
    print("Creating confectioneryscore")

    characters = attributes['character']

    confectionery = ['Toffee','Honey','Milk Chocolate','Praline','Dark Chocolate','Vanilla','Peardrops','Caramel','Custard','Fruit Cake','Butterscotch','Biscuits', 'Malt','Toast','Brioche']
    confectionery_lower = []
    for tag in confectionery:
        confectionery_lower.append(tag.lower())

    confectionery_score = 0
    
    for tag in characters:
        if tag.lower() in confectionery_lower:
            confectionery_score += 1
    
    return confectionery_score


def floral_generator(attributes):
    print("Creating floral score")

    characters = attributes['character']

    floral = ['Grass','Heather','Honeysuckle','Rose','Hay']
    floral_lower = []
    for tag in floral:
        floral_lower.append(tag.lower())

    floral_score = 0
    
    for tag in characters:
        if tag.lower() in floral_lower:
            floral_score += 1
    
    return floral_score


def fatty_generator(attributes):
    print("Creating fatty score")

    characters = attributes['character']

    fatty = ['Butter','Cream','Almond','Hazelnut','Coconut']
    fatty_lower = []
    for tag in fatty:
        fatty_lower.append(tag.lower())

    fatty_score = 0
    
    for tag in characters:
        if tag.lower() in fatty_lower:
            fatty_score += 1
    
    return fatty_score











    # Set categories & their tags


    # Begin score functions

    # def body_score():
    #     body_tag_count = 0

    #     for fatty_tag in fatty:
    #         for whisky_tag in characters:
    #             if fatty_tag.lower() in whisky_tag.lower():
    #                 body_tag_count += 1

    #     return (body_tag_count + int(body_base))

    # # ================== #

    # def smoke_score():
    #     smoke_tag_count = 0

    #     for elements_tag in elements:
    #         for whisky_tag in characters:
    #             if elements_tag.lower() in whisky_tag.lower():
    #                 smoke_tag_count += 1

    #     return (smoke_tag_count + int(smoke_base))

    # # ================== #

    # def richness_score():
    #     richness_tag_count = 0

    #     for spice_tag in spice:
    #         for whisky_tag in characters:
    #             if spice_tag == whisky_tag:
    #                 richness_tag_count += 1

    #     for floral_tag in floral:
    #         for whisky_tag in characters:
    #             if floral_tag.lower() in whisky_tag.lower():
    #                 richness_tag_count += 1

    #     return (richness_tag_count + int(richness_base))

    # # ================== #

    # def sweetness_score():
    #     sweetness_tag_count = 0

    #     for whisky_tag in characters:
    #         for fruit_tag in fruit:
    #             if fruit_tag.lower() in whisky_tag.lower():
    #                 sweetness_tag_count += 1

    #     for whisky_tag in characters:
    #         for confection_tag in confectionery:
    #             if confection_tag.lower() in whisky_tag.lower():
    #                 sweetness_tag_count += 1

    #     return (sweetness_tag_count + int(sweetness_base))

    # # ================== #

    # score = (body_score() + smoke_score() + richness_score() + sweetness_score())
    # print("Score done!")

    # return score