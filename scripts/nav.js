// Select the navigation container by ID
const nav = document.getElementById('side-nav')
// Function to toggle the mobile menu
function toggleMenu(event) {
  event.preventDefault() // Prevent default button behavior

  // Toggle the 'open' class on the navigation container
  nav.classList.toggle('open')

  // Update menu toggle state in localStorage
  const menuToggle = nav.classList.contains('open')
  localStorage.setItem('menuToggle', JSON.stringify(menuToggle))
}

// Function to initialize menu state based on localStorage
function initializeMenuState() {
  // Retrieve menu toggle state from localStorage
  const storedMenuToggle = localStorage.getItem('menuToggle')

  if (storedMenuToggle !== null) {
    // Convert stored value back to boolean
    const menuToggle = JSON.parse(storedMenuToggle)

    // Update navigation container based on stored menu toggle state
    const nav = document.getElementById('side-nav')
    if (menuToggle) {
      nav.classList.add('open')
    } else {
      nav.classList.remove('open')
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeMenuState()
  localStorage.setItem('menuToggle', JSON.stringify(false))
  const mobileMenuButton = document.getElementById('mobile-menu')
  console.log(localStorage.getItem('menuToggle'))
  nav.classList.remove('open')
  if (
    mobileMenuButton &&
    !mobileMenuButton.hasEventListener('click', toggleMenu)
  ) {
    mobileMenuButton.addEventListener('click', toggleMenu)
  }
})
