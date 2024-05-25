import { experience } from '../data/experience-cards.js'

function cards() {
  const resumeCardContainer = document.getElementById('resume-card-container')

  experience.forEach((item) => {
    resumeCardContainer.innerHTML += `<li class="li-experience-card">
          <span class="d-date d-start-date">${item.startDate}</span>
          <h2>${item.title}</h2>
          <h4>${item.subTitle}</h4>
          <p>
            ${item.desc}
          </p>
          <span class="d-date d-end-date">${item.endDate}</span>
        </li>`
  })
}
cards()
