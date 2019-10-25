// Получить список всех персонажей серии фильмов `Звездные войны` и вывести их на экран. По клику выводить под именем персонажа список космических кораблей, которыми он управлял (если конечно управлял).
//
// #### Технические требования:
//     - Отправить AJAX запрос по адресу `https://swapi.co/api/people/` и получить список всех персонажей серии фильмов `Звездные войны`.
// - Как только с сервера будет получена информация о персонажах, сразу же выведите их список на страницу. Необходимо указать имя, пол и родной мир персонажа (поля `name`, `gender` и `homeworld`).
// - Если персонаж в фильмах управлял каким-то космическим кораблем или несколькими, вывести под названием его родного мира кнопку `Список кораблей` (свойство `starships`).
// - При клике на кнопку `Список кораблей` получите с сервера все космические корабли, которыми персонаж управлял на протяжении саги, и выведите их на экран, заменив кнопку `Список кораблей` на тег h3 с текстом `Пилотируемые корабли` внутри него.
// - AJAX запрос необходимо реализовать используя jQuery, с помощью `$.get()` или $.ajax
//
//     #### Необязательные задания продвинутой сложности
// - сделать каждое имя корабля ссылкой, и при клике на него должен появлятся вложенный список подробных характеристик корабля с такими данными: модель (поле `model`), класс корабля (поле `starship_class`), пасажировместимость (поле `passengers`) и место производства (поле `manufacturer`)
// - Если имя корабля - Тысячелетний сокол (Millennium Falcon), то под списком кораблей вывести крупными буквами надпись: `Хан Соло стрелял первым!`
//
$.ajax({
    url: 'https://swapi.co/api/people/',
    dataType: 'json',
    success: function (data) {
        const heroesWrapper = $('#wrapper');
        const newArr = data.results;
        for (let i = 0; i < newArr.length; i++) {
            function homeworldGetting() {
                return new Promise(function (resolve, reject) {
                    let homeworldUrl = newArr[i].homeworld;
                    $.ajax({
                        url: homeworldUrl,
                        dataType: 'json',
                        success: function (data) {
                            resolve(data.name);
                        },
                        error: function (data) {
                            reject(console.log(data));
                        }
                    });
                });
            };
            homeworldGetting().then(function (homeworldResult) {
                const heroesList = $(` <li class="heroes-list">Name: ${newArr[i].name}; Gender: ${newArr[i].gender}; <br> Home world: ${homeworldResult}</li>`);
                heroesWrapper.append(heroesList);

                // })
                if ((newArr[i].starships).length !== 0) {
                    const starshipsBtn = $('<br><button class="starships-list-btn">Список кораблей</button>');
                    heroesList.append(starshipsBtn)

                    starshipsBtn.click(function (e) {
                        const btn = e.target;

                        function starshipsGetting() {
                            const promise2 = new Promise(function (resolve, reject) {
                                let starshipsUrlArray = newArr[i].starships;
                                const p =[];
                                starshipsUrlArray.forEach(function (element) {
                                    let starshipsUrl = element;
                                    $.ajax({
                                        url: starshipsUrl,
                                        dataType: "json",
                                        success: function (data) {

                                            $(btn).replaceWith("<h3 class='starships-title'>Пилотируемые корабли</h3>");

                                            p.push(data.name);
                                            console.log(p);
                                            resolve (p);

                                        },
                                        error: function (data) {
                                            reject(data);
                                        }
                                    });
                                });
                            })
                            return promise2
                        }





                    })

                }

                starshipsGetting().then(function (StarshipsListResult) {

                    console.log(StarshipsListResult);
                    //
                    // p.forEach(function (e) {
                    //     $('.starships-title').after(e);
                    // })
                })



            })


        }
    },


    error: function (data) {
        console.log(data);
    }
})
;


// The same without using jquery

/*
const request = new XMLHttpRequest();
request.open('GET', "https://swapi.co/api/people/");
request.send();
request.onload = function () {
    if (request.status !== 200) {
        console.log(`Error ${request.status} : ${request.statusText} `)
    } else {
        const heroesWrapper = document.getElementById('wrapper');
        const response = JSON.parse(request.response);
        const newArr = response.results;

        for (let i = 0; i < newArr.length; i++) {
            function homeworldGetting() {
                return new Promise(function (resolve, reject) {
                    let homeworldUrl = newArr[i].homeworld;
                    const request = new XMLHttpRequest();
                    request.open('GET', homeworldUrl);
                    request.send();
                    request.onload = function () {
                        if (request.status !== 200) {
                            reject(`Error ${request.status} : ${request.statusText} `);
                        } else {
                            const homeworldResponse = JSON.parse(request.response);
                            resolve(homeworldResponse.name);
                        }
                    };
                });
            }
            homeworldGetting().then(function (homeworldResult) {
                const heroesList = document.createElement('li');
                heroesList.innerHTML = ` <p class="heroes-list">Name: ${newArr[i].name}; Gender: ${newArr[i].gender}; <br> Home world: ${homeworldResult}</p>`;
                heroesWrapper.append(heroesList);
                if ((newArr[i].starships).length !== 0) {
                    const starshipsBtn = document.createElement('button');
                    starshipsBtn.textContent = 'Список кораблей';
                    starshipsBtn.classList.add('starships-list-btn');
                    heroesList.append(starshipsBtn);
                    starshipsBtn.addEventListener('click', function () {
                        const starshipsTitle = document.createElement('h3');
                        starshipsTitle.textContent = `Пилотируемые корабли`;
                        starshipsBtn.replaceWith(starshipsTitle)
                        function starshipsGetting() {
                            const promise2 = new Promise(function (resolve, reject) {
                                let starshipsUrlArray = newArr[i].starships;
                                starshipsUrlArray.forEach(function (element) {
                                    let starshipsUrl = element;
                                    const request = new XMLHttpRequest();
                                    request.open('GET', starshipsUrl);
                                    request.send();
                                    request.onload = function () {
                                        if (request.status !== 200) {
                                            reject(`Error ${request.status} : ${request.statusText} `);
                                        } else {
                                            const starshipsResponse = JSON.parse(request.response);
                                            const starshipsList = document.createElement('p');
                                            starshipsTitle.after(starshipsList)
                                            starshipsList.textContent = `${starshipsResponse.name}`
                                            starshipsList.style.cssText = `color:teal;`
                                            console.log((starshipsResponse.name));
                                            resolve(starshipsResponse.name);
                                        }
                                    };
                                })

                            });
                            return promise2
                        }
                        starshipsGetting().then(function (starshipsResult) {
                            console.log(starshipsResult);
                        })
                    })
                }
            })
        }
    }
};
request.onerror = function () {
    console.log('Error');
};
*/
