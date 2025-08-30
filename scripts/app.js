$(document).ready(function() {
  /*
  
  const variablesToRemove = ['chapterCode', 'chapterName', 'listCode', 'listName'];
  variablesToRemove.forEach(key => {
    if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
      console.log(`'${key}' deleted from localStorage.`);
    }
  });

  */

  $(".nav-div > li").click(function(){
    let chapterCode = $(this).attr("id");
    let chapterName = $(this).children("h3").text();

    if (localStorage.getItem('chapterCode') != chapterCode || localStorage.getItem('chapterName') != chapterName) {
      const storageList = ['chapterCode', 'chapterName', 'listCode', 'listName', 'vocabularyList'];
      storageList.forEach(key  => {
        if (localStorage.getItem(key) != null) {
          localStorage.removeItem(key);
          console.log(`'${key}' deleted from localStorage.`);
        }
      });
      
      
      
      localStorage.removeItem('chapterCode');
      console.log(`1. 'chapterCode' deleted from localStorage.`)

      localStorage.setItem('chapterCode', chapterCode);
      console.log(`'chapterCode' saved in localStorage.`);
    }

    if (localStorage.getItem('chapterName') != chapterName) {
      localStorage.removeItem('chapterName');
      console.log(`2. 'chapterName' deleted from localStorage.`)

      localStorage.setItem('chapterName', chapterName);
      console.log(`'chapterName' saved in localStorage.`);
    }

    window.location.href = `chapter-menu.html`;
  });
});