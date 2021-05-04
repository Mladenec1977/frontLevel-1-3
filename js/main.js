function DataTable(config, data) {
    let headDiv = document.querySelector(config.parent);
    let elTable = document.createElement('table');
    let elThead = document.createElement('thead');
    let elTbody = document.createElement('tbody');
    let elTr = document.createElement('tr');

    let elTh = document.createElement('th');
    elTh.innerHTML = '№';
    elTr.appendChild(elTh);
    config.columns.forEach(elem => {
        elTh = document.createElement('th');
        elTh.innerHTML = elem.title;
        elTr.appendChild(elTh);
    })
    elThead.appendChild(elTr);

    let num = 0;
    data.forEach(user => {
        elTr = document.createElement('tr');
        num++;
        let elTd = document.createElement('td');
        elTd.innerHTML = num;
        elTr.appendChild(elTd);
        config.columns.forEach(elem => {
            elTd = document.createElement('td');
            elTd.innerHTML = user[elem.value];
            elTr.appendChild(elTd);
        })
        elTbody.appendChild(elTr);
    })

    elTable.appendChild(elThead);
    elTable.appendChild(elTbody);
    headDiv.appendChild(elTable);
}

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname'},
        {title: 'Возраст', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
];

DataTable(config1, users);

