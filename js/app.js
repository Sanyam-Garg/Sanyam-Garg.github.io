const downloadButton = document.querySelector('#downloadCV')

downloadButton.addEventListener('click', (e) => {
    e.preventDefault()
    window.open('https://drive.google.com/file/d/1TfCat5ZvWHa6yadclCsdch3pQ3GyuGl8/view?usp=sharing')
})
