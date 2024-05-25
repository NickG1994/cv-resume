// Select all gallery cards
const galleryCards = document.querySelectorAll('.d-gallery-card')

// Loop through each card and attach mousemove event listener
galleryCards.forEach((card) => {
  card.addEventListener('mousemove', handleMouseMove)
})

// Function to handle mousemove event
function handleMouseMove(event) {
  const card = event.currentTarget
  const cardRect = card.getBoundingClientRect()

  // Calculate cursor position relative to the center of the card
  const mouseX = event.clientX - cardRect.left - cardRect.width / 2
  const mouseY = event.clientY - cardRect.top - cardRect.height / 2

  // Calculate tilt angle based on cursor position
  const tiltAngleX = -mouseY / 20 // Adjust the division value for tilt sensitivity
  const tiltAngleY = mouseX / 20 // Adjust the division value for tilt sensitivity

  // Apply tilt effect using CSS transform property
  card.style.transform = `perspective(1000px) rotateX(${tiltAngleX}deg) rotateY(${tiltAngleY}deg)`
}

// Reset card tilt when mouse leaves the card
galleryCards.forEach((card) => {
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none' // Reset transform to default
  })
})
