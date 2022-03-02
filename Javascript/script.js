let value = document.getElementById('value');
let result = document.getElementById('result');
let convert = document.getElementById('convert');
let formControl = document.getElementById('currency');

convert.addEventListener("click", performConversion);

function performConversion() {
    result.value = (value.value * formControl.value).toFixed(2);
}
