const routes = [
  {
    name: 'index',
    path: '/index.html',
  },
  {
    name: 'about',
    path: '/pages/about.html',
  },
  {
    name: 'resume',
    path: '/pages/resume.html',
  },
  {
    name: 'project',
    path: '/pages/project.html',
  },
  {
    name: 'blogs',
    path: '/pages/blogs.html',
  },
  {
    name: 'contact',
    path: '/pages/contact.html',
  },
]

function handleRouteChange() {
  const path = window.location.pathname // Get the path component of the URL
  const cleanedPath = path === '/' ? path : path.replace(/\/$/, '') // Remove trailing '/' for non-root paths
  console.log(cleanedPath)
  // Find a route that matches the cleaned path
  const route = routes.find((route) => route.path === cleanedPath)

  if (route) {
    // Route found, perform actions based on the route (e.g., show/hide content)
    console.log(`Navigating to route: ${route.name}`)
    // Implement logic to show/hide content based on the route
  } else {
    // Route not found, handle error or show a default page
    console.log(`Route not found for path: ${path}`)
    // Redirect to a default route or show an error message
  }
}

// Initial call to handleRouteChange to set up initial state based on the current path
handleRouteChange()

// Event listener to handle path changes (e.g., user navigation)
window.addEventListener('popstate', handleRouteChange)
