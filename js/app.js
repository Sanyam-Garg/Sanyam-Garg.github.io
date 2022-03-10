const downloadButton = document.querySelector('#downloadCV')

downloadButton.addEventListener('click', (e) => {
    e.preventDefault()
    window.open('https://drive.google.com/file/d/1m6kWTv1FxOLyPthMHXW2AWn9LVbCxuMc/view?usp=sharing')
})
