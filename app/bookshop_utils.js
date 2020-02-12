function addVAT(price) {
    return price + (0.2 * price);
}
function getFullName(name, surname){
    return name + ' ' + surname;
}
function makeHalfPrice(price){
        return price *0.5;
}
function countBooks(books){
    books = [1, 2, 3]
    return books.length;


}
module.exports = {
    addVAT, getFullName, makeHalfPrice, countBooks
};

