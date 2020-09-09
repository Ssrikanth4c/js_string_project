let str= document.querySelector('input');
const output_1= document.getElementById('string-output-1');
const output_2= document.getElementById('string-output-2');
const output_3= document.getElementById('string-output-3');
const output_4= document.getElementById('string-output-4');
const output_5= document.getElementById('string-output-5');
const output_6= document.getElementById('string-output-6');
const output_7= document.getElementById('string-output-7');

const getNumOfChar=value=>value.length;
const getFirstChar=value=>value[0];
const getLastChar= value=>value[value.length-1];
const getLowerCase=value=>value.toLowerCase();
const getUpperCase= value=>value.toUpperCase();
const getCapitalize=value=> `${value[0].toUpperCase()}${value.substring(1).toLowerCase()}`;
const getRemoveSpaces=value=> value.trim();

const getStrVariations=()=>{
    let value=str.value;
    output_1.innerText=getNumOfChar(value);

    output_2.innerText=getFirstChar(value);

    output_3.innerText=getLastChar(value);

    output_4.innerText=getLowerCase(value);

    output_5.innerText=getUpperCase(value);

    output_6.innerText=getCapitalize(value);

    output_7.innerText=getRemoveSpaces(value);
}
str.addEventListener('keyup',getStrVariations)
