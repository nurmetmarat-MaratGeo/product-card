const productsCards = document.querySelectorAll('.products-card');
const changeColorCarsdBtn = document.querySelector('#change-Color-cards-Btn')
const colorChengeAllHash = '#c8c694'
const colorChengeFirstHash = '#94b2c8'

changeColorCarsdBtn.addEventListener('click', () => {
  productsCards.forEach((card) => card.style.background = colorChengeAllHash)
})

const productsCard = document.querySelector('.products-card');
const changeColorCardBtn = document.querySelector('#change-Color-card-Btn')
const colorChengeHash = '#c8c694'

changeColorCardBtn.addEventListener('click', () => {
  productsCard.style.background = colorChengeFirstHash
})

const openPageGoogleBtn = document.querySelector('#open-page-Google-Btn')

openPageGoogleBtn.addEventListener('click', openGoogle)

function openGoogle() {
  const question = confirm ('Вы действительно хотите перейти по этой ссылке? Это может быть небезопасно!');
  if (question === true) {
      const GoogleURL = 'https://www.google.com'
      window.open(GoogleURL)
  } else {
    return;
  }
}

const takeoutLogBtn = document.querySelector('#takeout-console-log-Btn')

takeoutLogBtn.addEventListener('click', () => takeoutConsoleLog ('ДЗ №6 выполненно'))

function takeoutConsoleLog(massage) {
  alert(massage)
  console.log(massage)
}

const header = document.querySelector('.title-head');

header.addEventListener('mouseover', outputOnHover)

function outputOnHover() {
  console.log(event.target.textContent || event.target.innerText)
}

const chngColorBtn = document.querySelector('#change-color-Btn')

chngColorBtn.addEventListener('click', handleToggleClick)

function handleToggleClick() {
  const button = event.target;
  button.classList.toggle('clrBtn');
}
