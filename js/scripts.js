const controles = document.getElementById('controles');
const css = document.querySelector('.css');
const btn = document.querySelector('.btn');
let myArray = [];

controles.addEventListener('change', handdleChange);

const hanDleStyle = {
    element: btn,
    texto(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'px';
    }
}


function handdleChange(event) {
    const name = event.target.name //nome do elemento q disparou o evento
    const value = event.target.value //Valor do elemento

    //hanDleStyle['backgroundColor']('black') Exemplo.
    hanDleStyle[name](value);
    setLocal(name, value);
    showCss();
}

function showCss() {
    css.innerHTML = `<span>` + btn.style.cssText.split('; ').join(`;</span><span>`);
}


function setLocal(chave, valor) {

    if (localStorage.dadosBtn) {
        var x = JSON.parse(localStorage.dadosBtn);

        x.forEach((item) => {
            if (item[chave]) {
                console.log(item);
                item[chave] = valor;
            }
        });

        const stringToJson = JSON.stringify(x);
        localStorage.dadosBtn = stringToJson;

    } else {
        myArray = [{
            texto: 'click',
        }, {
            color: '#000000',
        }, {
            backgroundColor: '#ffffff',
        }, {
            height: 'auto',
        }, {
            width: 'auto',
        }, {
            border: 'none',
        }, {
            borderRadius: '1px',
        }, {
            fontFamily: 'Arial',
        }, {
            fontSize: '15px',
        }];

        myArray.forEach((item, index, proprio) => {
            if (item[chave]) {
                item[chave] = valor;
            }
        });

        const stringToJson = JSON.stringify(myArray);
        localStorage.dadosBtn = stringToJson;
    }
}


function getJsonLocalStorage() {
    if (localStorage.dadosBtn) {
        const dadosBotao = JSON.parse(localStorage.dadosBtn);
        //console.log(Object.keys(item));
        //console.log(Object.keys(item)[0]);
        dadosBotao.forEach((item) => {
            controles.elements[Object.keys(item)[0]].value = Object.values(item)[0]
            hanDleStyle[Object.keys(item)[0]](Object.values(item)[0])
            //console.log(Object.keys(item)[0]);
            //console.log(Object.values(item)[0]);
        });
        showCss();
    }
}
getJsonLocalStorage();