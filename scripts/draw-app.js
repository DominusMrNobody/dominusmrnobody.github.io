$(document).ready(function () {
  let words = [];
  let numberOfWords = 0;
  let errorCounter = 0;
  let correctCounter = 0;
  let drawnWord = null;

  if (
    localStorage.getItem("chapterCode") == null ||
    localStorage.getItem("listCode") == null ||
    localStorage.getItem("listName") == null ||
    localStorage.getItem("chapterName") == null
  ) {
    window.location.href = "index.html";
    return;
  }

  if (localStorage.getItem("vocabularyList") == null) {
    window.location.href = "list-action.html";
    return;
  }

  words = JSON.parse(localStorage.getItem("vocabularyList"));
  numberOfWords = words.length;

  function updateStats() {
    let percent = (correctCounter / numberOfWords) * 100;
    $("#value").html(`${percent.toFixed(0)}% (<span id='dobre'>${correctCounter}</span> z ${numberOfWords}) / <span id='zle'>${errorCounter}</span>`);
  }

  function showHint() {
    if (!drawnWord) return;
    let hint = drawnWord.eng[0];
    for (let i = 1; i < drawnWord.eng.length; i++) {
      hint += " -'/".includes(drawnWord.eng[i]) ? drawnWord.eng[i] : "_";
    }
    $("#prompt-full").text(hint);
  }

  function drawWord() {
    const availableWords = words.filter((x) => x.check === 0);

    updateStats();

    if (availableWords.length > 0) {
      const indeks = Math.floor(Math.random() * availableWords.length);
      drawnWord = availableWords[indeks];

      $("#pl").text(drawnWord.pl);
      $("#eng").text("");
      $("#translation").prop("readonly", false);
      $("#prompt-full").text("");
      setTimeout(() => {
        $("#translation").focus();
      }, 0);
    } else if (availableWords.length === 0 && words.length > 0) {
      for (let i = 0; i < words.length; i++) {
        words[i].check = 0;
      }
      drawWord();
    } else {
      alert("Wszystkie słowa zostały już sprawdzone.");
      window.location.href = "chapter-menu.html";
    }
  }

  let waitingForNext = false;
  let inputBgColor = $("#translation").css("background-color");

  function check() {
    if (!drawnWord) return;

    const typedWord = $("#translation").val().toLowerCase().trim();
    const correctWord = drawnWord.eng.toLowerCase();

    if (!waitingForNext) {
      if (typedWord === correctWord) {
        correctCounter++;
        words.splice(words.indexOf(drawnWord), 1);
        $("#translation").css("background-color", "rgba(0, 227, 87, 0.864)");
      } else {
        drawnWord.check++;
        errorCounter++;
        $("#eng").text(drawnWord.eng).show();
        $("#translation").css("background-color", "rgb(255, 118, 171)");
      }

      waitingForNext = true;

      $('#prompt-button').hide();
      $('#check').text("Następny");
      $("#translation").prop("readonly", true);

      updateStats();
    } else {
      $("#translation").val("").css("background-color", inputBgColor);
      $('#prompt-button').show();
      $('#eng').hide();
      $('#check').text("Sprawdź");
      $("#translation").prop("readonly", false);
      waitingForNext = false;

      drawWord();
    }
  }

  $("#prompt-button").on("click", function() {
    setTimeout(() => {
      $("#translation").focus();
    }, 0);

    showHint();
  });

  $(document).on("keydown", function (event) {
    if (event.key === "Control") showHint();
  });

  $("#translation").on("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      check();
    }
  });

  $("#check").on("click", function (event) {
    event.preventDefault();
    setTimeout(() => {
      $("#translation").focus();
    }, 0);
    
    check();
  });

  $("#return").on("click", function () {
    window.location.href = "chapter-menu.html";
  });

  $("#home").on("click", function () {
    window.location.href = "index.html";
  });

  drawWord();
});