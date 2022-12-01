export const helloWorld = () => {
    console.log('inside console--------- changed bahmni to hello world function')
    //   document.body.innerHTML = 'hello world'
    const div = document.createElement('div')
    div.setAttribute('id', 'module')
    div.innerText = 'hello world from anjali'
    document.body.appendChild(div)
  }