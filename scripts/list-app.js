$(document).ready(function() {
  const chapterCode = localStorage.getItem('chapterCode');
  const chapterName = localStorage.getItem('chapterName');
  let listCode = localStorage.getItem('listCode').split('_');
  listCode = listCode[1];
  const listName = localStorage.getItem('listName');

  if (chapterCode == null || listCode == null || listName == null || chapterName == null) {
    window.location.href = `index.html`;
    return 0;
  }



  $('#title').text(listName);

  const vocabularyList = allWords[chapterCode][listCode];

  // LOCALSTORAGE
  if (localStorage.getItem('vocabularyList') != null) {
    localStorage.removeItem('vocabularyList');
    console.log(`'vocabularyList' deleted from localStorage.`)
  }

  localStorage.setItem('vocabularyList', JSON.stringify(vocabularyList));
  console.log(`'vocabularyList' (list_${listCode}) saved in localStorage.`);


  $("#vocabulary-quantity").text("Ilość: " + Object.keys(vocabularyList).length)

  vocabularyList.forEach(element => {
    let index = vocabularyList.indexOf(element);
    $("#vocabulary-list").children("table").append($(`<tr id="word_${index}"></tr>`).html(`<td>${element.pl}</td><td>${element.eng}</td>`))
  });



  $("#draw").click(function(){
    window.location.href = `draw.html`;
  })

  $("#test").click(function(){
    window.location.href = `index.html`;
  })

  $("#flashcards").click(function(){
    window.location.href = `index.html`;
  })

  $("#return").click(function(){
    window.location.href = `chapter-menu.html`;
  })

  $("#home").click(function(){
    window.location.href = `index.html`;
  })
});