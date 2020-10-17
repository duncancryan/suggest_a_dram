# Suggest a dram whisky score generator
# This file holds the calculation for the whisky score
# which is used to help with matching

def generator(attributes):

    print("Running score system...")

    # Set categories & their tags
    elements = ['smoke','brine','tar','seaweed','salt','iodine','wax','tobacco','coffee','oak','meat','rum','cognac']
    fruit = ['Apple', 'Apricot','Dates','Pear','Prunes','Lemon','Raisins','Orange','Strawberry','Dried Fruit','Plums','Lime','Pineapple','Peach','Stewed Fruit',
    'Blackcurrant','Marmalade','Mango','Blackberry','Cherry','Raspberry','Sherry','Wine','Sultana', 'Melon']
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
    characters = attributes['character']

    # Begin score functions

    def body_score():
        body_tag_count = 0

        for fatty_tag in fatty:
            for whisky_tag in characters:
                if fatty_tag.lower() in whisky_tag.lower():
                    body_tag_count += 1

        return (body_tag_count + int(body_base))

    # ================== #

    def smoke_score():
        smoke_tag_count = 0

        for elements_tag in elements:
            for whisky_tag in characters:
                if elements_tag.lower() in whisky_tag.lower():
                    smoke_tag_count += 1

        return (smoke_tag_count + int(smoke_base))

    # ================== #

    def richness_score():
        richness_tag_count = 0

        for spice_tag in spice:
            for whisky_tag in characters:
                if spice_tag == whisky_tag:
                    richness_tag_count += 1

        for floral_tag in floral:
            for whisky_tag in characters:
                if floral_tag.lower() in whisky_tag.lower():
                    richness_tag_count += 1

        return (richness_tag_count + int(richness_base))

    # ================== #

    def sweetness_score():
        sweetness_tag_count = 0

        for whisky_tag in characters:
            for fruit_tag in fruit:
                if fruit_tag.lower() in whisky_tag.lower():
                    sweetness_tag_count += 1

        for whisky_tag in characters:
            for confection_tag in confectionery:
                if confection_tag.lower() in whisky_tag.lower():
                    sweetness_tag_count += 1

        return (sweetness_tag_count + int(sweetness_base))

    # ================== #

    score = (body_score() + smoke_score() + richness_score() + sweetness_score())
    print("Score done!")

    return score