function typingEffect(element){
    const arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    arrayText.forEach((Letter, index) => {
        setTimeout(()=>{
                element.innerHTML += Letter;
        }, 75*index);
    });
}

const title = document.querySelector('.typing');
typingEffect(title)
