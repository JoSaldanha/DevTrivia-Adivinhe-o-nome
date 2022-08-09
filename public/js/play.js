const input = document.querySelector('.input-play');
const item = document.querySelectorAll('.item');
const categoria = document.querySelector('#categoria');

const url = document.URL;
const urlSplit = url.split('/');
const urlCategory = urlSplit[urlSplit.length-1].replace('%20', ' ');

categoria.innerHTML = urlCategory;

const items = []; let points = 0;

window.onload = item.forEach((element)=>{
    let txt = element.textContent; let str = '*';
    items.push({
        name: txt,
        id: element.getAttribute('title'),
    });
    str = str.repeat(txt.length);
    str = str.replace(str[0], txt[0]);

    element.textContent = str;
})

const checkInput =({target})=>{
    for (let i = 0; i < items.length; i += 1) {
        if (target.value.toLowerCase() == items[i].name.toLowerCase()) {
            item.forEach((element)=>{
                if (items[i].id == element.getAttribute('title')) {
                    element.textContent = items[i].name;
                    element.classList.add('checked');
                    points += 1;
                    input.value = '';
                    if (points == 15) {
                        Swal.fire({
                            title: 'Vitória!',
                            text: 'Você venceu a categoria',
                            padding: '3em',
                            color: '#5cb85c',
                            background: '#fff url(/images/trees.png)',
                            backdrop: `rgba(0,0,0,0.4)`,
                            icon: 'success',
                            confirmButtonColor: '#5cb85c',
                        })
                    }
                }
            });
            items.splice(i, 1);
        }
    }
}

input.addEventListener('input', checkInput);