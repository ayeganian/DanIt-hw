/*

const mailStorage = [
    {
    subject: "Hello world",
    from: "gogidoe@somemail.nothing",
    to: "lolabola@ui.ux",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},
    {
    subject: "How could you?!",
    from: "ladyboss@somemail.nothing",
    to: "ingeneer@nomail.here",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
    subject: "Acces denied",
    from: "info@cornhub.com",
    to: "gogidoe@somemail.nothing",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
];
const mailList = document.getElementById('mailList');
mailStorage.forEach((mailItem, index) => {
    let mailWrapper = document.createElement('div');
    let subject = document.createElement('h2');
    let from = document.createElement('span');
    let to = document.createElement('span');
    let text = document.createElement('p');

    subject.innerText =  mailItem.subject;
    from.innerText =  mailItem.from;
    to.innerText =  mailItem.to;
    text.innerText =  mailItem.text;
    text.hidden = true;

    mailWrapper.classList.add('single-mail');

    mailWrapper.append(subject, from,to,text);
    mailList.append(mailWrapper);

});

mailList.addEventListener('click' , (e) => {

    if (e.target.id === 'newMail'){
        showModal (e);
    } else if      (e.target.classList. contains('new-mail-bg')){
      e.target.remove();
    }
     else {
        toggleMail(e);
    }

 function toggleMail(e) {
     const activeMail= document.querySelector('.active');

     const clickedElement = e.target;

     if( clickedElement.classList.contains('single-mail')) {
         clickedElement.lastChild.hidden =! clickedElement.lastChild.hidden;
         clickedElement.classList.add('active');
     } else  if (clickedElement.parentElement.classList.contains('single-mail')){
         clickedElement.parentElement.lastChild.hidden =! clickedElement.parentElement.lastChild.hidden;
         clickedElement.parentElement.classList.add('active');
     }
     if (activeMail){

         activeMail.classList.remove('active');
         activeMail.lastChild.hidden= true;
     }
 ;

 }

 function showModal(event) {

     const modalBg = document.createElement('div');
     const newMailForm = document.createElement('div');
     const subject = document.createElement('input');
     const from = document.createElement('input');
     const to = document.createElement('input');
     const text = document.createElement('textarea');
     const send = document.createElement('input');

     send.type='submit';
     send.value='Send';

     subject.placeholder= 'subject';
     from.placeholder= 'from';
     to.placeholder= 'to';
     text.placeholder= 'text';

     modalBg.classList.add('new-mail-bg');
     newMailForm.classList.add('new-mail-form');


     modalBg.appendChild(newMailForm);
     newMailForm.append(subject,from,to,text,send);

     // document.querySelector('script').before(modalBg);
event.target.parentElement.append(modalBg);

 }

// ```
// #### НУЖНО:
// 1) Вывести этот массив на экран. У каждого письма отображаются все поля, кроме `text`. При клике на письмо - отображать текст письма на которое было осуществлено нажатие.
// 2) Реализовать эффект toggleText. Суть в следующем:
//     * Одновременно может быть отображен текст ТОЛЬКО ОДНОГО письма
// * Если происходит клик по письму, текст которого не открыт - нужно закрыть предыдущее открытое письмо и отобразить текст у письма на которое был осуществлен клик.
//
// 3) Создать кнопку "New Mail", по нажатию на которую будет появляться модальное окно с формой, куда нужно ввести данные для создания нового письма:
//     - Тема письма
// - Кому
// - От кого - этого поля для заполнения не должно быть в разметке, оно автоматически имеет значение "gogi@nomail.com"
// - Текст письма
// - Кнопка `Send`
// Модальное окно размером 500 на 300 пикселей отображается оп центру. Область ВНЕ модального окна залита полупрозрачным черным цветом. Закрывается модальное окно кликом по области которая залита полупрозрачным черным цветом.
//
//     Закрытие модального окна происходит по клику на крестик в его правом верхнем углу.
// 4) У каждого письма должна быть кнопка "Удалить". При нажатии на эту кнопку письмо удаляется И из разметки И из хранилища писем.
//     #### ДОПОЛНИТЕЛЬНО:
// 1) Изменить массив `mailStorage` следующим образом:
//     - теперь это объект, внутри которого лежит несколько массивов-папок с письмами, например: `inbox`, `send`, `draft`
// - внутри каждой папки разные письма
// 2) Сделать слева от писем  `sidebar`, по примеру в принципе любого mail-клиента. Пункты сайдбара - референс массивов-папок из mailStorage в верстке должны быть выполнены тегом ссылки с переопределеным браузерным поведением. По умолчанию отображается сожержимое массива-папки indox. При клике на пункт сайдбара - отображаются только письма из соответствующей папки.
// 3) Разширить функционал кнопки удаления следующим образом:
//     - добавить поле `archive` для `mailStorage`, в котором будут храниться 10 последних удаленных писем.
// - кнопка удаляет разметку письма на котором была нажата. В `mailStorage` это письмо переносится из, например `inbox` в `archive`, где хранятся удаленные письма.
// - при переходе на вкладку `archive` на странице (она же тоже отображатеся в сайдбаре т.к. является частью `mailStorage`), отображаются 10 последних удаленных писем.При нажатии кнопки "Удалить" в этой конкретной "вкладке" `archive` письмо безвозвратно удаляется из `mailStorage`. =*/

//
//
//
// const showMsg = (msgText, time ) =>{
//     setTimeout( () => {alert(msgText)} , time )
// }
//
// showMsg('gogi', 2000);
//
//




/*

  function showMsg(msgText, time, counter)  {
    let interval = setInterval( () =>{

        counter--;
        if (counter ===0 ) {
            clearInterval(interval)
        };
        console.log(msgText);


    }, time );
}
showMsg('hi',1000,10)
*/



/*
// task 3

if (localStorage.getItem('userName')){
  const userName = localStorage.getItem('userName');
    alert(`Hello ${userName}`);
} else {
    const Name = prompt('What is your name' , 'Ann');
    localStorage.setItem('userName', Name);
    alert(`Hello ${Name}`);
}

 */


//
// // or
//
// const sayHello = (key) => {
//     alert( `Hey ${ localStorage.getItem(key)}`)
// };
// const key = 'userName'
// if (localStorage.getItem(key)){
//     sayHello(key);
// } else {
//     localStorage.setItem(key, prompt('What is your name' , 'Ann'));
//     sayHello(key)
// }









/* ЗАДАНИЕ - 0
* Получить объектное представление елемента со страницы сначала при помощи DOM, потом при помощи jQuery:
*   - по тэгу
*   - по классу
*   - по идентификатору
*   - по CSS селектору
*   - по атрибуту name
* Вывести в консоль при помощи console.dir() каждый елемент и сарвнить друг с другом DOM и jQuery объекты.
* */
/*
const elementsByTagName = document.getElementsByTagName('li');
const byClassName = document.getElementsByClassName('nav-list-item');
const byIdName  = document.getElementById('item-2');
const bySelectorName  = document.querySelector('item-2');
const byName  = document.getElementsByName('item-4');

const $elementsByTagName = $('li')
const $byClassName = $('.nav-list-item')
const $byIdName = $('#item-2')
const $bySelectorName = $('ul>li.nav-list-item')
const $byName = $('.nav-list-item[name="item-4"]')

console.log(elementsByTagName,$elementsByTagName, byClassName,$byClassName,bySelectorName, $bySelectorName,byName,$byName);
console.dir(byIdName,$byIdName)
*/



/* ЗАДАНИЕ - 1
* Повесить обработчики событий на три елемента по таким событиям - click, mouseover, focus. При выполнении события заменять цвет фона.
* Выполнить сначала при помощи DOM, потом при помощи jQuery,
* */

/*

const liEl = document.querySelector('li');
liEl.addEventListener('click', () =>{
    liEl.style.backgroundColor ='palegreen';
})

const $liEl = $('li:first');
$liEl.on('click', () =>{
    $liEl.css({color:'red'})
})

*/



/*
const mouseOv = document.querySelector('item-2');

mouseOv.addEventListener('mouseover', () => {
    mouseOv.style.backgroundColor ='yellow';
});

const $mouseOv = $('nav-list-item:nth-child(2)');

$mouseOv.on('mouseover', () =>{
    $mouseOv({color:'red'})
})

*/


/* ЗАДАИНЕ - 2
* По нажатию на кнопку "Create circle" - создавать на странице круг. размером 150рх на 150рх
* Цвет фона любой, кроме прозрачного.
* */



/*

const $button = $('<button>Create circle</button>');
$(document.body).append($button);

$button.one('click', ( ) => {
   const $circle = $('<div></div>')
    $circle.css({width: '150px',
        display: 'inline-block',
        height: '150px',
        borderRadius: '50%',
        backgroundColor:'teal'})
    $button.after($circle);
} )




*/






/* ЗАДАНИЕ - 3
* На странице есть навигационное меню
* */

/*
* Елемент с классом active имеет следующие свойства:

*
* По нажатию на каждый пункт навигационного меню нужно чтобы
* у елемента с классом active - этот класс пропадал,
* а у того, на который было осуществлено нажатие - появлялся
* Выполнять при помощи методов jQuery
* */


/*
const $navItems = $('.nav-list-item');


$navItems.on('click', ( event ) =>{
    $('.active').removeClass('active');
    $(event.target).addClass('active')
})


*/





/* ЗАДАНИЕ - 4
* Создать 5 текстовых елементов с абзацем текста произвольного количества символов.
* Изменить цвет текста всем, кроме первого елемента при помощи jQuery селекторов
* */

/*
const $changeColorBtn = $('<button> Change Color</button>');
$('script').before($changeColorBtn);

for( let i=0;i<5; i++){
    $changeColorBtn.before($('<p class="text-elem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et natus non reiciendis similique! Accusamus alias amet culpa deleniti eveniet incidunt inventore laborum molestiae, molestias nisi officia perferendis, quaerat tenetur.</p>'));

}

$changeColorBtn.on('click', () =>{
    $(".text-elem:not(:first)").css({color:'red'});
})

*/












/* ЗАДАНИЕ - 5
* По нажатию на кнопку - ее цвет меняется на другой.
* По нажатию еще раз - цвет возвращается в исходное положение. (типичная реализация кнопки Добавить в избранное)
* */

/*

const $Btn = $('<button>KNOPKAA</button>');
$('script:first').before($Btn);
$Btn.on('click',() =>{
    $Btn.toggleClass('active-btn');
})



*/






/* ЗАДАНИЕ - 6
* Есть input.
* Если ввести в него больше 5 символов, то справа от него появляется кнопка - отправить сообщение.
* Если удалить текст и будет меньше 5 символов - то кнопка прячется.
* */

/* ЗАДАНИЕ - 1
*  Добавить на страницу инпут.
*  Если ввести в него больше 5 символов, то справа от него появляется кнопка - "отправить сообщение".
*  Если удалить текст и будет меньше 5 символов - кнопка исчезает.
* */
/*

const $textInput =$('<input id="input" type="text">');
$('script:first').before($textInput);

$textInput.on('keyup', () => {
    if( '$textInput.val().length > 5'){
        const $btn = $('#sendBtn');
        $textInput.after($btn.length ? $btn : $('<button id="$sendBtn">Send</button>'))
    } else {
        $('$sendBtn').remove();
    }

    $('$sendBtn').on('click', () => {
        const $msg = $('<p id="textMsg">${$textInput.val()}</p>');
        $('#sendBtn').after($msg);
    })
})
*/



/* ЗАДАНИЕ - 2
* Сделать бургер меню.
* По нажатию на иконку - открывается блок, иконка меняется на крестик.
* По нажатию на этот крестик или на любую область вне выпавшего меню
* бургер меню закрывается и иконка опять становится прежней.
* */


$('.nav-menu-btn').on('click' , (event) => {
    $(event.currentTarget).toggleClass('toggle')
    $('.nav-menu').slideToggle()
})


/* ЗАДАНИЕ - 3
* Добавить на страницу кнопку "Наверх", которая появляется в правом нижнем углу.
* Как только пользователь проскроллил один экран - кнопка должна появиться.
* Если пользователь вернулся к верху страницы и снова находится на первом экране - кнопка должна пропасть
* */
/* ЗАДАНИЕ 4
* Создать на странице 4 дива любого размера, внутри каждого из которых есть кнопка.
* По нажатию на кнопку меняется цвет заливки дива в котором она находится.
* По повторному нажатию цвет меняется на первоначальный.
* */
/* ЗАДАНИЕ 5 переписать mail-client с занятий по DOM на jQuery
* С поправкой на некоторые изменения в хранилище писем.
* Теперь это объект в котоом каждое свойство - массив объектов, и отвечает за какой-то конкретный раздел.
* Форму для создания нового письма "приклеить" к правому нижнему углу страницы
* Пока форма для нового письма отображается - остальные елементы страницы работают как обычно, т.е. избавляемся от черного полупрозрачного фона.
* */
const mailStorage = {
    inbox: [
        {
            subject: "Hello world",
            from: "gogidoe@somemail.nothing",
            to: "lolabola@ui.ux",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        },
        {
            subject: "How could you?!",
            from: "ladyboss@somemail.nothing",
            to: "ingeneer@nomail.here",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        },
        {
            subject: "Acces denied",
            from: "info@cornhub.com",
            to: "gogidoe@somemail.nothing",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
    ],
    sent: [
        {
            subject: "Hello world",
            from: "gogidoe@somemail.nothing",
            to: "lolabola@ui.ux",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        },
        {
            subject: "Elephant in a car",
            from: "gogidoe@somemail.nothing",
            to: "zoo-mailing@ui.ux",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        },
        {
            subject: "Gogi place is closing",
            from: "gogidoe@somemail.nothing",
            to: "gogi@ui.ux",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        },
    ],
    draft: [
        {
            subject: "",
            from: "gogidoe@somemail.nothing",
            to: "",
            text: "lorem ipsum dolor...dolor?...dollar!!!"
        },
        {
            subject: "",
            from: "gogidoe@somemail.nothing",
            to: "cormhub@gmail.com",
            text: "Can you give me some corn for free?"
        }
    ]
};





