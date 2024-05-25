import { education } from '../data/education-cards.js'

function educationCards() {
  const educationWrapper = document.getElementById('ul-education-card-wrapper')
  if (!educationWrapper) {
    alert('card container element not found!')
    return
  }
  try {
    console.log(educationWrapper)
    education.forEach((item) => {
      educationWrapper.innerHTML += `<li class="li-experience-card">
          <div class="d-date d-start-date">
            ${item.startDate}
          </div>
          <h2>${item.title}</h2>
          <h4>${item.subTitle}</h4>
          <p>${item.desc}</p>
          <span class="d-date d-end-date">
          ${item.endDate}
          </span>
      </li>`
    })
  } catch (error) {
    alert(error)
  }
}
educationCards()
