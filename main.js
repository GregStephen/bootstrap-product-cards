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
    for(let i = 0; i < array.length; i++){
        domString += `<div class="card" style="width: 18rem;">`
        domString += `<div class="card-header">${array[i].title}</div>`
        domString +=    `<img src="${array[i].imageUrl}" class="card-img-top" alt="...">`
        domString +=    `<div class="card-body">`
        domString +=    `<p class="card-text">${array[i].description}</p>`
        domString += 
        domString +=    `</div>`
        domString += `</div>`
        domString += `</div>`
    }
    printToDom("titleDiv", domString);
}


const init = () => {
    domStringBuilder(products);
}

init();

