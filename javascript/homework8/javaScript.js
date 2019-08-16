 const PriceInput = document.createElement('input');


const preview = document.createElement('span');

 // const cancelBtn = document.createElement('button');
 // cancelBtn.innerText = `X`;

PriceInput.addEventListener('focus', () =>{
    PriceInput.style.border = "2px solid green";
});

 PriceInput.addEventListener( 'keyup', () =>{
     preview.innerText = `Текущая цена: ${PriceInput.value}`;


 })



 document.querySelector('script').before(PriceInput);

 document.querySelector('input').before(preview);
 // document.querySelector('button').after(cancelBtn);





// PriceInput.addEventListener('unclick', () =>{
//     PriceInput.style.border = "none";
// });



