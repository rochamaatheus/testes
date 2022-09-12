const picture = document.querySelector('.picture')
const inputFile = document.querySelector('.picture-input')
const pictureImg = document.querySelector('.picture-image')
const pictureImgTxt = 'Choose an image'
pictureImg.innerHTML = pictureImgTxt

inputFile.addEventListener('change', function(e) {
  const inputTarget = e.target
  const file = inputTarget.files[0]

  if(file) {
    const reader = new FileReader()

    reader.addEventListener('load', function(e) {
      const readerTarget = e.target
      const img = document.createElement('img')

      img.src = readerTarget.result
      img.classList.add('picture-image')

      img.onload = function() {
        if(this.height > 400) {
         img.style.height = '400px'
        }else{
          picture.style.height = 'fit-content'
        }
      }

      pictureImg.innerHTML = ''
      pictureImg.appendChild(img)
    })
    reader.readAsDataURL(file)
  }
})
function limpar() {
  pictureImg.innerHTML = pictureImgTxt
}