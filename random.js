const select = document.getElementById('maxNumber');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

// ------------------

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// ------------------

let maxnum = select.value;
len = createLen(maxnum);

select.addEventListener('input', () => {
    maxnum = select.value;
    len = createLen(maxnum);
    console.log(maxnum);
    console.log(len);
})

// ------------------

function createLen(a) {
    if (a === '36') {
        return 5;
    }
    if (a === '49') {
        return 6;
    }
};

// ------------------

let collection = new Set();
function createCollection() {
    do {
        let num = randomInteger(1, Number(maxnum));
        collection.add(num);
    } while (collection.size < len);
}

// ------------------

let arr = [];
btn.addEventListener('click', () => {
    collection.clear();
    list.innerHTML = '';

    createCollection();
    arr = [...collection];

    arr.sort((a, b) => a - b); 
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement('li');
        list.append(item);
        item.innerHTML = arr[i];
    }
})
