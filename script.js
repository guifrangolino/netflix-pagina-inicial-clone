const faqBtn = document.querySelectorAll('.section-faq-container-list-question')
const faqResp = document.querySelectorAll('.section-faq-container-list-answer')
const input = document.querySelectorAll('.form-cadastro-email input')

input.forEach( (i) => {
    i.addEventListener('focus', () => {
        if (i.value == '') i.nextElementSibling.classList.toggle('up')
    })
})

input.forEach( (i) => {
    i.addEventListener('focusout', () => {
        if (i.value == '') i.nextElementSibling.classList.toggle('up')
    })
})

faqBtn.forEach((b) => {
    b.addEventListener('click', () => {
        
        if (b.classList.contains('ativo')) {
            b.classList.remove('ativo')
            b.nextElementSibling.classList.remove('ativo')
        } else {
            removeAtivo(faqBtn)
            removeAtivo(faqResp)
            b.classList.add('ativo')
            b.nextElementSibling.classList.add('ativo')
        }

    })
})

function removeAtivo(elementos) {
    elementos.forEach((elem) => {
        elem.classList.remove('ativo')
    })
}