audio = new Audio('Audio/kamehameha.swf.mp3')
document.addEventListener('keydown',function(e)
{
    console.log(e)
    if (e.key == 'k' || e.key == 'K')
    {
        document.getElementById("png").style.display = 'none'
        document.getElementById("gif").style.display = 'inline'
        document.getElementById("head").innerHTML = ""
        setTimeout(function(){
            audio.play()
        },5000)
        setTimeout(function(){
            document.getElementById("gif").style.display = 'none'
            document.getElementById("png").style.display = 'inline'
            img = document.getElementById("gif")
            imgUrl = img.src
            img.src = "#"
            img.src = imgUrl
        },13000)
    }
})