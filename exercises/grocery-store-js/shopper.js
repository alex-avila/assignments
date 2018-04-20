var shopper = {
    name: 'Steve Jobs',
    items: 22,
    isMember: true,
    price: function() {
        var pricePerItem,
            total;
        // In this fictional store every item costs $1.99 or $1.25
        if (this.isMember) {
            pricePerItem = 1.25;
        } else {
            pricePerItem = 1.99;
        }
        total = this.items * pricePerItem;
        return '$' + total;
    },
    groceryCart: [
        'apple',
        'orange',
        'rice',
        'eggs'
    ]
};

console.log(shopper.price());