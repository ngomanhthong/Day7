var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all')

var tags = ['Nodejs', 'Reactjs']

function render(){
    content.innerHTML = ''
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i];
        content.innerHTML += `<li>
             ${tag}                                                       
         <i class='bx bx-x' data-index='${i}'></i>
    </li>`
    }

    content.appendChild(input);
    input.focus()
}

function removeTag(index){
    tags.splice(index, 1)
    render();
}

render();

input.addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        tags.push(input.value.trim())
        input.value =''
        render();
    }var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var btnRemoveAll = document.querySelector('.remove-all');

// Lấy dữ liệu từ local storage hoặc khởi tạo mảng rỗng nếu chưa có
var tags = loadTags() || [];

function render() {
  content.innerHTML = '';
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<li>
             ${tag}                                                       
         <i class='bx bx-x' data-index='${i}'></i>
    </li>`;
  }

  content.appendChild(input);
  input.focus();
}

function removeTag(index) {
  tags.splice(index, 1);
  render();
}

function saveTags() {
  localStorage.setItem('tags', JSON.stringify(tags));
}

function loadTags() {
  return JSON.parse(localStorage.getItem('tags'));
}

render();

input.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    tags.push(input.value.trim());
    input.value = '';
    saveTags();
    render();
  }
});

content.addEventListener('click', function (event) {
  if (event.target.classList.contains('bx-x')) {
    const index = event.target.getAttribute('data-index');
    removeTag(index);
    saveTags();
  }
});

btnRemoveAll.addEventListener('click', function () {
  tags = [];
  saveTags();
  render();
});
