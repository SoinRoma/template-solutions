//Функция для выдачи юзеров при @
let tribute = new Tribute({
    values: [ {key: "user1", value: "name1"},
              {key: "user2", value: "name2"},]
});

tribute.attach(document.getElementById("id"));
