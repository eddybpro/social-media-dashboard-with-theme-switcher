const switchBtn = document.querySelector('.checkbox'),
stateTxt = document.querySelector('.state'),
subTitle = document.querySelector('.sub-title');

let flag =localStorage.getItem('flag');

if(flag == 'true'){
    stateTxt.textContent = 'Light Mode';
}else{
    stateTxt.textContent = 'Dark Mode';
    document.querySelector('body').classList.toggle('switcher');
    switchBtn.style.background ='none';
    switchBtn.style.backgroundColor = 'hsl(230, 22%, 74%)';
    subTitle.style.color = 'hsl(228, 12%, 44%)';
}

switchBtn.addEventListener('click', ()=>{
    switcherFn();
})

function switcherFn(){
    console.log(flag)
    console.log('clicked')
    if(flag == 'true'){
        stateTxt.textContent = 'Dark Mode';
        document.querySelector('body').classList.toggle('switcher');
        switchBtn.style.background = 'none';
        switchBtn.style.backgroundColor = 'hsl(230, 22%, 74%)';
        subTitle.style.color = 'hsl(228, 12%, 44%)';
        flag = 'false';

    }else{
        stateTxt.textContent = 'Light Mode';
        document.querySelector('body').classList.toggle('switcher');
        switchBtn.style.background = `linear-gradient(94deg, hsl(210, 78%, 56%),hsl(146, 68%, 55%)`;
        subTitle.style.color = 'hsl(0, 0%, 100%)';
        flag = 'true';
    }

    localStorage.setItem('flag', `${flag}`);
}