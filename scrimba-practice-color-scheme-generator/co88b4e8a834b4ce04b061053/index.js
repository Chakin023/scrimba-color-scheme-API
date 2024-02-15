const optionFormEl = document.getElementById('option-form');
const hexEl = document.getElementById('hex')
const modeEl = document.getElementById('mode')
const colorResultEl = document.getElementById('color-result')
const hexResultEl = document.getElementById('hex-result')


optionFormEl.addEventListener('submit', e => {
    e.preventDefault()
    const hexValue = hexEl.value.replace('#', '');
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeEl.value}`).then(res => res.json()).then(data => {
        const colorHtml = data.colors.map(color => `<div class="color-display" style="background-color:${color.hex.value}"></div>`).join('');
        const hexHtml = data.colors.map(color => `<p class="hex-display">${color.hex.value}</p>`).join('');
        colorResultEl.innerHTML = colorHtml
        hexResultEl.innerHTML = hexHtml
    })
})

