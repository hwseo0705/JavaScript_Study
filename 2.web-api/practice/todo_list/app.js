// --------------------------- 전역변수, 함수 정의부 --------------------------- //

function removeTodo() {
    const $todoList = document.querySelector('.todo-list');
    // $todoList.removeChild($todoList);
}


const createLi = e => {
    const $todoList = document.querySelector('.todo-list');
    const $newLi = document.createElement('li');
    $newLi.classList.add('todo-list-item');
    $newLi.dataset.id = '4';

    const $label = document.createElement('label');
    $label.classList.add('checkbox');

    const $input = document.createElement('input');
    $input.setAttribute('type', 'checkbox');
    $label.appendChild($input);

    const $span = document.createElement('span');
    $span.classList.add('text');
    const $inputValue = document.getElementById('todo-text');
    $span.textContent = $inputValue.value;
    $label.appendChild($span);

    const $divMod = document.createElement('div');
    $divMod.classList.add('modify');

    const $spanMod = document.createElement('span');
    $spanMod.classList.add('lnr');
    $spanMod.classList.add('lnr-undo');
    $divMod.appendChild($spanMod);

    const $divRemove = document.createElement('div');
    $divRemove.classList.add('remove');

    const $spanRemove = document.createElement('span');
    $spanRemove.classList.add('lnr');
    $spanRemove.classList.add('lnr-cross-circle');
    $divRemove.appendChild($spanRemove);

    $newLi.appendChild($label);
    $newLi.appendChild($divMod);
    $newLi.appendChild($divRemove);

    $todoList.appendChild($newLi);

    // use innerHTML

};

function checkEmpty() {
    const $input = document.getElementById('todo-text');
    if ($input.value === '') return false;
    else true;
}

function addTodo(e) {
    e.preventDefault()

    if (checkEmpty() === false) {
        const $inputValue = document.getElementById('todo-text');
        $inputValue.setAttribute('placeholder', '필수입력사항입니다!!');
        return;
    }
    
    createLi();
}

// --------------------------- 메인 코드 실행부분 --------------------------- //
(function () {
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', addTodo);

    const $remove = document.querySelector('.remove');
    $remove.addEventListener('click', removeTodo);

})();

