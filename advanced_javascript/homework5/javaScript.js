// Получить список фильмов серии Звездные войны и вывести их на экран. По клику выводить под фильмом список персонажей, появляющихся в нем.
//
//     Технические требования:
//
//     Отправить AJAX запрос по адресу https://swapi.co/api/films/ и получить список всех фильмов серии Звездные войны.
//     Как только с сервера будет получена информация о фильмах, сразу же вывести список всех фильмов на страницу. Необходимо указать номер эпизода, название фильма, а также короткое содержание (поля episode_id, title и opening_crawl). Под этими данными вывести кнопку с надписью Список персонажей.
//     При клике на кнопку Список персонажей должны отправлятся AJAX-запросы на сервер для поисках всех персонажей саги, которые появлялись в этом фильме. API для получения каждого персонажа фильма можно получить из свойства characters ленты.
//     Как только с сервера будет получена информация о всех персонажах какого-либо фильма, вывести эту информацию на страницу под кнопкой Список персонажей для этого фильма, а саму кнопку можно удалить.
//     AJAX запрос нужно реализовать с помощью XMLHttpRequest.
//
//     Необязательное задание продвинутой сложности
// Пока загружаются персонажи фильма, прокручивать над кнопкой Список персонажей анимацию загрузки. Анимацию можно использовать любую. Желательно айти вариант на чистом CSS без использования JavaScript.
//

const request = new XMLHttpRequest();
request.open('GET', 'https://swapi.co/api/films/');
request.responseType = 'json';
request.send();

request.onload = function () {
    if (request.status !== 200) {
        console.log(`Error ${request.status} : ${request.statusText} `)
    } else {
        const filmsListWrapper = document.getElementById('wrapper');

        const newArr = request.response.results;
        for (let i = 0; i < newArr.length; i++) {
            const filmsListItem = document.createElement('li');
            filmsListItem.innerHTML = ` <b>Номер эпизода:</b> ${newArr[i].episode_id}; <b>Название фильма:</b> ${newArr[i].title}; <b>Краткое содержание:</b> ${newArr[i].opening_crawl}`;
            const filmsListbutton = document.createElement('button');
            filmsListbutton.textContent = 'Список персонажей';
            filmsListWrapper.append(filmsListItem, filmsListbutton);

            const charactersListWrapper = document.createElement('ul');

            filmsListbutton.addEventListener('click', function () {

                function charactersGetting() {

                    return new Promise(function (resolve, reject) {
                        let charactersUrlArray = newArr[i].characters;
                        charactersUrlArray.forEach(function (el) {

                            let charactersUrl = el;
                            const request = new XMLHttpRequest();
                            request.open('GET', charactersUrl);
                            request.send();
                            request.onload = function () {
                                if (request.status !== 200) {
                                    reject(`Error ${request.status} : ${request.statusText} `);
                                } else {
                                    const charactersResponse = JSON.parse(request.response);
                                    const charactersList = document.createElement('li');
                                    charactersList.innerHTML = `<p class="characters-list">${charactersResponse.name};</p>`;
                                    charactersListWrapper.append(charactersList);
                                    filmsListbutton.after(charactersListWrapper);
                                    filmsListbutton.remove();
                                    resolve(charactersResponse.name);

                                }
                            }
                        });
                    });

                }

                charactersGetting().then(function () {

                    }
                );
            })
        }
    }
};
request.onerror = function () {
    console.log('Error');
};


