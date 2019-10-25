// Создать класс-контейнер, который позволит сортировать и менять местами карточки.
//
//     Технические требования:
//
//     Создать класс, который позволит имитировать поведение колонки на сервисе Trello.
//     Класс должен выводить на экран колонку фиксированной ширины.
//     Колонка должна показывать содержимое в виде карточек.
//     При первом рендере колонка будет пустая.
//     В самом низу колонки должна быть кнопка "Добавить карточку". После нажатия на данную кнопку в нижней части колонки перед кнопкой должна появиться новая пустая карточка, в которую можно добавить какой-нибудь текст.
//     Существующие карточки можно перетягивать вверх и вниз, меняя их порядок в колонке.
//     В верхней части колонки должна быть кнопка для сортировки карточек в колонке по алфавиту. После сортировки карточки можно свободно перетягивать и менять местами.
//     Для реализации перетягивания карточек использовать функционал HTML5 Drag&Drop.
//     Пример финального результата: Пример
//
// В приложении должна быть возможность создать любое количество колонок.

class Trello {
 constructor(){
     const TrelloAddBtn = document.createElement('button');
 }
}

class taskList{
    constructor(){
        TrelloAddBtn.addEventListener('click', addCard);

        function addCart() {
            const TrelloInput = document.createElement('input');
            TrelloInput.text
        }
    }
}
render(wrapper){
    this.wrapper = wrapper;
    const TrelloContainer = document.createElement('div');
    TrelloContainer.height = '400px'
    wrapper.append(TrelloContainer);
    TrelloContainer.append(TrelloAddBtn);
   



}
const trello = new Trello();
trello.render(document.getElementById('wrapper'));