for (let i = 0; i < 256; i++) {
    var div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.width = '6%';
    div.style.height = '100%';
    div.style.background = 'white';
    div.style.border = '1px dashed black';
    div.style.color = 'black';
    div.innerHTML = 'Hello';

    document.getElementById('container').appendChild(div);
}