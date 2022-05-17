const panels = document.querySelectorAll('.panel')
//console.log(panels) // a node list

panels.forEach(panel => {
  //console.log(panel)
  // want event listener on each panel
  panel.addEventListener('click', () => {
    // need to remove active from all classes and then set this particular panel clicked to active
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
