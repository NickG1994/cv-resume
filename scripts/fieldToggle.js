const fieldToggle = () => {
  // Get all input elements
  const textarea = document.getElementsByTagName('textarea')[0]
  const inputs = document.getElementsByTagName('input')
  console.log(textarea)
  textareaLabel = textarea.nextElementSibling
  const updateTextAreaLabel = () => {
    if (textarea.value.length > 0) {
      textareaLabel.classList.add('lb-text-open')
    } else {
      textareaLabel.classList.remove('lb-text-open')
    }
  }

  // Loop through each input element
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]
    const label = input.nextElementSibling // Get the next sibling (label)

    // Function to update label class based on input value
    const updateLabelClass = () => {
      if (input.value.trim() !== '') {
        label.classList.add('lb-text-open')
        console.log(`Input with id '${input.id}' has a value: '${input.value}'`)
      } else {
        label.classList.remove('lb-text-open')
      }
    }

    // Add event listener for 'input' event
    input.addEventListener('input', () => {
      // Update label class based on input value
      updateLabelClass()
    })
    textarea.addEventListener('input', () => {
      updateTextAreaLabel()
    })

    // Call updateLabelClass initially to set the correct label class
    updateLabelClass()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fieldToggle()
})
