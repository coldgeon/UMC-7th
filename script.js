const input = document.getElementById('todo-input');
const checkList = document.getElementById('check-list');
const checkedList = document.getElementById('checked-list');

// toto 만들기 함수
function createToDo() {
  const btn = document.createElement('button');
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = input.value;
  btn.innerText = '완료';
  li.append(span, btn);
  checkList.appendChild(li);

  //완료 후에 삭제 하는 함수
  btn.addEventListener('click', () => {
    checkedList.appendChild(li);
    btn.innerText = '삭제';
    btn.setAttribute('class', 'removeBtn');
    //궁금점 해당 li를 삭제하는 과정에서 아래와 같이 짰을 뿐인데 어떻게 버튼을 누르는 li가 remove될 수 있는지..?
    // >>js 클로져? 때문이라고 하는디
    btn.addEventListener('click', () => {
      if (document.getElementsByClassName('removeBtn')) {
        // console.log(li);
        li.remove();
      }
    });
  });
}

function pressedEnter(event) {
  const enterKey = 13;
  if (event.keyCode == enterKey && input.value !== '') {
    createToDo();
    input.value = '';
  }
}
