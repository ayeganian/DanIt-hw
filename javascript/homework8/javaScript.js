const PriceInput = document.createElement('input');
PriceInput.classList.add('Price-Input')
const PriceInputName = document.createElement('p');
PriceInputName.innerText = 'Price, $';
PriceInputName.classList.add('Price-Input-Name')

const previewText = document.createElement('span');
const uncorrectPreview = document.createElement('p');
uncorrectPreview.innerText = `Please enter correct price`;
uncorrectPreview.style.color ='red';

const removeBtn = document.createElement('button');
removeBtn.innerText = `X`;
removeBtn.classList.add('remove-btn');

PriceInput.addEventListener('focus', () => {
    PriceInput.style.border = "2px solid green";
});
PriceInput.addEventListener('blur', () => {

    if (PriceInput.value <= 0 || PriceInput.value === undefined || Number(PriceInput.value) === NaN ){
        PriceInput.style.backgroundColor = "";
        PriceInput.style.border = "2px solid red";
        previewText.remove();
        document.querySelector('p').before(uncorrectPreview);
        uncorrectPreview.append(removeBtn);
    } else {
        PriceInput.style.border = "";
        PriceInput.style.backgroundColor = "green";
        uncorrectPreview.remove();
         document.querySelector('p').before(previewText);
         document.querySelector('span').after(removeBtn);
        previewText.innerText = `Текущая цена: ${PriceInput.value}`;
    }
});

removeBtn.addEventListener( 'click', () => {
    removeBtn.remove();
    previewText.remove();
    PriceInput.value='';
    PriceInput.style.backgroundColor = "";
    PriceInput.style.border = "";
    uncorrectPreview.remove();
})

document.querySelector('script').before(PriceInput);
document.querySelector('input').before(PriceInputName);



