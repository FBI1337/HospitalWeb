const navBottom = document.querySelector('#navBottom')
const navTop = document.querySelector('#navTop')

const aboutUs = document.querySelector('#aboutUs')

const durations = document.querySelector('#durations')
const doctors = document.querySelector('#doctors')
const more = document.querySelector('#more')


navTop.addEventListener('click', (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

navBottom.addEventListener('click', (e) => {
    window.scrollBy({ top: 1200, behavior: 'smooth' });
})




aboutUs.addEventListener('click', (e) => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
})

durations.addEventListener('click', (e) => {
    window.scrollTo({ top: 1200, behavior: 'smooth' });
})

doctors.addEventListener('click', (e) => {
    window.scrollTo({ top: 1200, behavior: 'smooth' });
})

more.addEventListener('click', (e) => {
    window.scrollTo({ top: 1200, behavior: 'smooth' });
})