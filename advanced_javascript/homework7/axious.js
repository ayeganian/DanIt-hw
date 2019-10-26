/*
Получить список всех планет из серии фильмов Звездные войны, и вывести на экран список персонажей, для которых эта планета - родной мир.

    Технические требования:
    Отправить AJAX запрос по адресу https://swapi.co/api/planets/ и получить список всех планет серии фильмов Звездные войны.
    Для каждой планеты получить с сервера список персонажей, для которых она является родным миром. Список персонажей можно получить из свойства residents.
    Как только с сервера будет получена информация о планетах, сразу же вывести список всех планет на экран. Необходимо указать имя планеты, климат, а также тип преобладающей местности (поля name, climate и terrain).
Как только с сервера будет получена информация о персонажах, родившихся на какой-то планете, вывести эту информацию на страницу под названием планеты.
    Необходимо написать два варианта реализации в разных .js файлах. Один - с помощью fetch, другой - с помощью axios.
    Чтобы все AJAX запросы получения персонажей выполнялись параллельно, в реализации fetch/axios список персонажей для каждой планеты необходимо получать с помощью функции Promise.all().
Необязательное задание продвинутой сложности
После вывода списка персонажей - выведите для каждой планеты список фильмов, в которых она появлялась.*/


axios.get('https://swapi.co/api/planets/')
    .then(response => {
            const planets = (response.data.results);
            const everyResidentUrl = [];
            let planetIdx = 0;
            const planetsList = planets.map(item => {
                let planet = '<li id="planet-' + planetIdx + '">';
                planet += `Planet name:${item.name}; climate: ${item.climate}; terrain: ${item.terrain}.`;
                planet += '</li>';
                everyResidentUrl[planetIdx++] = item.residents;
                return planet;
            });
            const PlanetWrapper = document.getElementById('wrapper-2');
            PlanetWrapper.innerHTML = planetsList.join('');
            return everyResidentUrl;
        }
    ).then(result => {
    for (let i = 0; i < result.length; i++) {
        const residentsPromises = result[i].map(item => {
            return axios.get(item);
        });
        Promise.all(residentsPromises).then(values => {
            let resident = document.createElement('p');
            resident.textContent += `Residents: `;
            values.forEach(resp => {
                resident.textContent += `${resp.data.name}; `;
                document.getElementById('planet-' + i + '').append(resident);

            })
        });
    }
});



