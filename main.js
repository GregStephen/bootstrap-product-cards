const products = [
    {
        title: 'product1',
        description: 'blah blah blah',
        imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/6/0/FN_snapchat_coachella_wingman%20.jpeg.rend.hgtvcom.616.462.suffix/1523633513292.jpeg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/20/2069',
    },
    {
        title: 'product2',
        description: 'blah blah blah',
        imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/6/0/FN_snapchat_coachella_wingman%20.jpeg.rend.hgtvcom.616.462.suffix/1523633513292.jpeg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/20/2069',
    },
    {
        title: 'product3',
        description: 'blah blah blah',
        imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/6/0/FN_snapchat_coachella_wingman%20.jpeg.rend.hgtvcom.616.462.suffix/1523633513292.jpeg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/20/2069',
    },
    {
        title: 'product4',
        description: 'blah blah blah',
        imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/6/0/FN_snapchat_coachella_wingman%20.jpeg.rend.hgtvcom.616.462.suffix/1523633513292.jpeg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/20/2069',
    },
    {
        title: 'product5',
        description: 'blah blah blah',
        imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/6/0/FN_snapchat_coachella_wingman%20.jpeg.rend.hgtvcom.616.462.suffix/1523633513292.jpeg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/20/2069',
    }

];

console.log('products', products);

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (array) => {
    let domString = '';
    array.forEach(product => {
        domString += `<div class="card col-4">`
        domString += `<div class="card-header">${product.title}</div>`
        domString +=    `<img src="${product.imageUrl}" class="card-img-top" alt="...">`
        domString +=    `<div class="card-body">`
        domString +=    `<p class="card-text">${product.description}</p>`
        domString +=    `<h4>Size</h4>`
        domString +=    `<h6>${product.size}</h6>`
        domString +=    `<h6>${product.weight}</h6>`
        domString +=    `<footer>Valid until ${product.validUntil}</footer>`
        domString +=    `<h4>Price</h4>`
        domString +=    `<h6>${product.price1}</h6>`
        domString +=    `<h6>${product.price2}</h6>`
        domString +=    `<h6>${product.price3}</h6>`
        domString +=    `</div>`
        domString += `</div>`
    });
    printToDom("titleDiv", domString);
}


const init = () => {
    domStringBuilder(products);
}

init();

