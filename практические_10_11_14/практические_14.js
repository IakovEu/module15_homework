// Задание 1
const xmlString1 = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();

const parsDom1 = parser.parseFromString(xmlString1, 'text/xml')

const first = parsDom1.querySelectorAll('first')
const second = parsDom1.querySelectorAll('second')
const age = parsDom1.querySelectorAll('age')
const prof = parsDom1.querySelectorAll('prof')
const name = parsDom1.querySelectorAll('name')

const result1 = {
    list: [
        {
            name: `${first[0].textContent} ${second[0].textContent}`, age: +age[0].textContent,
            prof: prof[0].textContent, lang: name[0].getAttribute('lang'),
        },
        {
            name: `${first[1].textContent} ${second[1].textContent}`, age: +age[1].textContent,
            prof: prof[1].textContent, lang: name[1].getAttribute('lang'),
        },
    ]
}

console.log(result1);

//Задание 2
const jsonString1 = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const dataJson1 = JSON.parse(jsonString1)
dataJson1.list[0].age = +dataJson1.list[0].age
dataJson1.list[1].age = +dataJson1.list[1].age

console.log(dataJson1);

//Задание 3
const btn = document.querySelector('.btn');
const input = document.querySelector('#input');
const photos = document.querySelector('.photos');

function getImages(cb) {
    if (input.value < 1 || input.value > 10 || isNaN(input.value)) {
        console.log('число вне диапазона от 1 до 10 или не число');
    } else {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${input.value}`)
        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                const result = JSON.parse(xhr.response);
                cb(result);
            }
        }
        xhr.onerror = function () {
            console.log('error', xhr.status)
        }
        xhr.send();
    }
}

function cbf(res) {
    res.forEach(el =>
        photos.insertAdjacentHTML('afterbegin', `<img src="${el.thumbnailUrl}">`))
}

btn.addEventListener('click', function () {
    getImages(cbf)
})

//Задание 4

const btn1 = document.querySelector('.btn1');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const photos1 = document.querySelector('.photos1');

function oneImage() {
    if (input1.value < 100 || input1.value > 300 || isNaN(input1.value) || input2.value < 100 || input2.value > 300 || isNaN(input2.value)) {
        return photos1.insertAdjacentHTML('afterend', '<p>одно из чисел вне диапазона от 100 до 300</p>')
    } else {
        fetch(`https://dummyimage.com/${input1.value}x${input2.value}/`)
            .then((response) => {
                photos1.insertAdjacentHTML('afterend', `<img src="${response.url}">`)
            })  // Он же должен был в первом then вернуть промис, а нормальный результат уже во втором, а тут даже парсить не нужно, почему?!
    }
}

btn1.addEventListener('click', oneImage);

//Задание 5    // подскажите пожалуйста более короткое условие 

const btn2 = document.querySelector('.btn2');
const input3 = document.querySelector('#input3');
const input4 = document.querySelector('#input4');
const photos2 = document.querySelector('.photos2');
const storage = localStorage;

function manyImages() {
    if (input4.value < 1 && input3.value < 1 || input4.value > 10 && input3.value > 10 || isNaN(input3.value) && isNaN(input4.value)
        || input4.value > 10 && input3.value < 1 || input3.value > 10 && input4.value < 1 || isNaN(input3.value) && input4.value > 10
        || isNaN(input4.value) && input3.value > 10 || isNaN(input3.value) && input4.value < 1 || isNaN(input4.value) && input3.value < 1) {
        return photos2.insertAdjacentHTML('afterend', '<p>Номер страницы и лимит вне диапазона от 1 до 10</p>')
    } else if (input3.value < 1 || input3.value > 10 || isNaN(input3.value)) {
        return photos2.insertAdjacentHTML('afterend', '<p>Номер страницы вне диапазона от 1 до 10</p>')
    } else if (input4.value < 1 || input4.value > 10 || isNaN(input4.value)) {
        return photos2.insertAdjacentHTML('afterend', '<p>Лимит вне диапазона от 1 до 10</p>')
    } else {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${input3.value}&_limit=${input4.value}`)
            .then((response) => {
                return response.json()
                // photos2.insertAdjacentHTML('afterend', `<img src="${response.thumbnailUrl}">`) 
            })
            .then((data) => {
                storage.clear();
                data.forEach((el) => {
                    photos2.insertAdjacentHTML('afterend', `<img src="${el.thumbnailUrl}">`)
                })
                const y = data.map((el) => {
                    return el.thumbnailUrl
                })
                storage.setItem('key', y);
            })
    }
}

if (storage.length !== 0) {
    storage.getItem('key').split(',').forEach((el) => {
        photos2.insertAdjacentHTML('afterend', `<img src="${el}">`)
    })
}

btn2.addEventListener('click', manyImages);