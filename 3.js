const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

let websocket = new WebSocket("wss://echo.websocket.org/"); // Это пранк? Ссылка из задания не работает, а из видео работает!

function writeMessage(message) {
    let pre = document.createElement('p');
    pre.style.wordWrap = 'break-word';
    pre.innerHTML = message;
    output.append(pre);
};

btnSend.addEventListener('click', () => {
    writeMessage(`мое сообщение: ${input.value}`);

    websocket.onmessage = function (ev) {
        writeMessage(`ответ сервера: ${ev.data}`);
    };

    websocket.send(input.value);
})

let x = {}; 
const suc = (pos) => {
    x.lat = pos.coords.latitude;
    x.lon = pos.coords.longitude;
}
navigator.geolocation.getCurrentPosition(suc);

btnGeo.addEventListener('click', () => {
    writeMessage(`<a href = "https://www.openstreetmap.org/#map=8/${x.lat}/${x.lon}">ссылка</a>`);
    websocket.send(x);
    websocket.close();                                      // чтобы не отвечал сервер
    websocket = new WebSocket("wss://echo.websocket.org/");
})