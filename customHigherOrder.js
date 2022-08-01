const nfts = [
    {name: "NFT 1", description: "Best NFT EVER", image: "http://", price: 3, category: "sports"},
    {name: "NFT 2", description: "Coolest NFT EVER", image: "http://", price: 5, category: "art"},
    {name: "NFT 3", description: "Newest NFT EVER", image: "http://", price: 1, category: "design"},
    {name: "NFT 4", description: "Unique NFT EVER", image: "http://", price: 7, category: "fashion"},
    {name: "NFT 5", description: "Sweet NFT EVER", image: "http://", price: 1, category: "sports"},
    {name: "NFT 6", description: "Amazing NFT EVER", image: "http://", price: 4, category: "design"},
    {name: "NFT 7", description: "Expensive NFT EVER", image: "http://", price: 5, category: "art"},
]

// forEach()
// .filter()
// .sort()
// .reduce()
// .map()

nfts.forEach(function(nft) {
    // console.log(nft.name)
})

nfts.forEach(function(nft) {
    // console.log(`${nft.name} ` + nft.description)
})
// Sort nfts that are inside of the art category
const filteredNfts = nfts.filter((nft) => nft.category == "art");
// const canDrink = ages.filter((age) => age >= 21);
 

// console.log(filteredNfts)
// Sort price of 3.00 and above and sort fro lowest price to highest
const sortedPrice = nfts.filter(nftPrice => (nftPrice.price >= 3)).sort((a, b) => a.price - b.price);
// console.log(sortedPrice)


// filter items of design category only and sort into descending order
const filteredCategory = nfts.filter((item) => item.category == 'design').sort((a, b) => b.price - a.price)

// console.log(filteredCategory)
// create new array from array above that maps only name and price 
const mappedNfts = nfts.map((item) =>'name: ' + item.name + ' price: ' + item.price)

// console.log(mappedNfts)

const mappedItems = nfts.map((mapped) => `${mapped.name}` + `${mapped.price}`)
console.log(mappedItems)

const mappedItemsByCategory = nfts.map((item) => item.category === 'design').sort((a, b) => b.price - a.price)