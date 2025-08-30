$(document).ready(function() {
  const chapterCode = localStorage.getItem('chapterCode');
  const chapterName = localStorage.getItem('chapterName');

  if (chapterCode == null || chapterName == null) {
    window.location.href = `index.html`;
    return 0;
  }

  $('#title').text(chapterName);

  const chapterList = allChapters[chapterCode];
  chapterList.forEach(element => {
    let index = chapterList.indexOf(element);
    $("#chapter-list").append($(`<li id="list_${index}"></li>`).html(`<h3 class="nav-title">${element.listName}</h3><span class="nav-description">${element.listDescription}</span>`))
  });

  $(".nav-div > li").click(function(){
    let listCode = $(this).attr("id");
    let listName = $(this).children("h3").text();

    localStorage.setItem('listCode', listCode);
    console.log(`'listCode' saved in localStorage.`);

    localStorage.setItem('listName', listName);
    console.log(`'listName' saved in localStorage.`);

    window.location.href = `list-action.html`;
  });

  $("#return").click(function(){
    window.location.href = `index.html`;
  })
});