const btnCheck = document.querySelector('.button')
var date = new Date();
var year = date.getFullYear();
const txtYear = document.querySelector('.txt-year');
const result = document.querySelector('.result-container');
const resultTxt = document.querySelector('.result-txt')
const radioSex = document.getElementsByName('radsex')
var gender = ''
var image = document.createElement('img')
image.setAttribute('class', 'photo')

btnCheck.addEventListener('click', function () {
    if (txtYear.value.length === 0 || txtYear.value > year) {
        alert('Verifique os dados e tente novamente.')
        return
    }

    const age = year - Number(txtYear.value)
    if (radioSex[0].checked) {
        gender = 'Homem'
        if (age >= 0 && age < 10) {
            image.setAttribute('src', 'image/foto-bebe-m.png')
        } else if (age < 21) {
            image.setAttribute('src', 'image/foto-jovem-m.png')

        } else if (age < 50) {
            image.setAttribute('src', 'image/foto-adulto-m.png')
        } else {
            image.setAttribute('src', 'image/foto-idoso-m.png')
        }

    }
    if (radioSex[1].checked) {
        gender = 'Mulher'

        if (age >= 0 && age < 10) {
            image.setAttribute('src', 'image/foto-bebe-f.png')
        } else if (age < 21) {
            image.setAttribute('src', 'image/foto-jovem-f.png')

        } else if (age < 50) {
            image.setAttribute('src', 'image/foto-adulto-f.png')
        } else {
            image.setAttribute('src', 'image/foto-idoso-f.png')
        }

    }
    resultTxt.innerHTML = `Detectamos ${gender} com ${age} anos.`

    result.appendChild(image)

})