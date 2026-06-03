let calculation = '';
function updateCalculation(value){
calculation += value;
}
function resultRender(){
document.querySelector('.js-score').innerHTML = `${calculation}`;
}