// 2 °C to 35.60°F  
let $ = document;
let title = $.querySelector('.title');
let input = $.querySelector('input');
let res = $.querySelector('.res');
let convertBtn = $.querySelector('.convert');
let resetBtn = $.querySelector('.reset');
let changeBtn = $.querySelector('.change');

if(input.placeholder === '°C'){
    title.innerHTML = 'Converter °C to °F';
}else{
    title.innerHTML = 'Converter °F to °C';
}

convertBtn.addEventListener('click', function(){
    if(input.value === '' || isNaN(input.value)){
        res.innerHTML = 'Enter a correct value';
        res.style.color = 'red';
    }else if(input.placeholder === '°C'){
        let inputValue = input.value;
        let resInput = (inputValue * 1.8) + 32;
        res.innerHTML = inputValue + '°C to °F = ' + resInput + '°F';
        res.style.color = 'lime';
    }else{
        let inputValue = input.value;
        let resInput = (inputValue - 32) * 5/9;
        res.innerHTML = inputValue + '°F to °C = ' + resInput.toFixed(2) + '°C';
        res.style.color = 'lime';
    }
});

resetBtn.addEventListener('click' , ()=>{
    input.value = '';
    res.innerHTML = '';
});



let flag = true;
changeBtn.addEventListener('click' , ()=>{
    if(flag){
        input.placeholder = '°F';
        title.innerHTML = 'Converter °F to °C';
        document.title = 'Converter °F to °C';
        flag = false;
    }else{
        input.placeholder = '°C';
        title.innerHTML = 'Converter °C to °F';
        document.title = 'Converter °C to °F';
        flag = true;
    }
});



