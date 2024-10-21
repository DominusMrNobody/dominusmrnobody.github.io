let slowa = [];
let iloscSlow = 0;
let licznikBledow = 0;
let licznikPoprawnych = 0;

function pobierzSlowa() {
  switch ($("section").attr("class")) {
    case "p1":
      slowa = allWords.p1;
      break;
    case "p2":
      slowa = allWords.p2;
      break;
    case "p3":
      slowa = allWords.p3;
      break;
    case "p4":
      slowa = allWords.p4;
      break;
    case "p5":
      slowa = allWords.p5;
      break;
    case "p6":
      slowa = allWords.p6;
      break;
    case "p7":
      slowa = allWords.p7;
      break;
    case "p8":
      slowa = allWords.p8;
      break;
    case "p9":
      slowa = allWords.p9;
      break;
    case "p10":
      slowa = allWords.p10;
      break;
  }

  $("#ilosc").text(slowa.length);
  console.table(slowa);
  iloscSlow = slowa.length;
  losujSlowo();
}

function losujSlowo() {
  const dostepneSlowa = slowa.filter((slowo) => slowo.check === 0);
  let procent = (licznikPoprawnych / iloscSlow) * 100;

  $("#ilosc").html(
    procent.toFixed(0) +
      "% (<span id='dobre'>" +
      licznikPoprawnych +
      "</span> z " +
      iloscSlow +
      ") / <span id='zle'>" +
      licznikBledow +
      "</span>"
  );

  if (dostepneSlowa.length > 0) {
    const indeks = Math.floor(Math.random() * dostepneSlowa.length);
    const wylosowaneSlowo = dostepneSlowa[indeks];
    $("#pl").text(wylosowaneSlowo.pl);
    $("#eng").text("");
    $("#odpowiedz").val("");
    $("#podpowiedzFull").text("");

    $("#podpowiedz").click(function() {
      $("#podpowiedzFull").text(wylosowaneSlowo.eng[0]);
      for (let i = 1; i < wylosowaneSlowo.eng.length; i++) {
        if (
          wylosowaneSlowo.eng[i] == " " ||
          wylosowaneSlowo.eng[i] == "-"
        ) {
          $("#podpowiedzFull").text(
            $("#podpowiedzFull").text() + wylosowaneSlowo.eng[i]
          );
        } else {
          $("#podpowiedzFull").text($("#podpowiedzFull").text() + "_");
        }
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Control") {
        $("#podpowiedzFull").text(wylosowaneSlowo.eng[0]);
        for (let i = 1; i < wylosowaneSlowo.eng.length; i++) {
          if (
            wylosowaneSlowo.eng[i] == " " ||
            wylosowaneSlowo.eng[i] == "-"
          ) {
            $("#podpowiedzFull").text(
              $("#podpowiedzFull").text() + wylosowaneSlowo.eng[i]
            );
          } else {
            $("#podpowiedzFull").text($("#podpowiedzFull").text() + "_");
          }
        }
      }
    });

    function check(func) {
      $("#odpowiedz")
        .off()
        .on("keydown", function (event) {
          if (event.key === "Enter") {
            switch (func) {
              case "spr":
                event.preventDefault();
                $("#odpowiedz").prop("disabled", true);
                $("#sprawdz").focus();
                sprawdz();
                break;
            }
          }
        });

      $("#sprawdz")
        .off()
        .click(function () {
          switch (func) {
            case "los":
              $("#odpowiedz").prop("disabled", false);
              $("#odpowiedz").focus();
              losujSlowo();
              break;
            case "spr":
              event.preventDefault();
              $("#odpowiedz").prop("disabled", true);
              $("#sprawdz").focus();
              sprawdz();
              break;
          }
        });
    }

    function sprawdz() {
      const wpisaneSlowo = $("#odpowiedz").val().toLowerCase().trim();

      if (wylosowaneSlowo.eng === wpisaneSlowo) {
        licznikPoprawnych += 1;
        slowa.splice(slowa.indexOf(wylosowaneSlowo), 1);
        $("#odpowiedz").addClass("tAnswer").removeClass("fAnswer");
      } else {
        slowa[slowa.indexOf(wylosowaneSlowo)]["check"] += 1;
        licznikBledow += 1;
        $("#eng").text(wylosowaneSlowo.eng);
        $("#odpowiedz").addClass("fAnswer").removeClass("tAnswer");
      }

      console.table(slowa);
      check("los");
    }

    check("spr");

  } else if (dostepneSlowa.length == 0 && slowa.length > 0) {
    for (i = 0; i < slowa.length; i++) {
      slowa[i]["check"] = 0;
    }

    losujSlowo();
  } else {
    alert("Wszystkie słowa zostały już sprawdzone.");
  }
}

function wyborListy(a) {
  let old = $("section").attr("class");
  $("section").addClass(a).removeClass(old);
  $("section").css("display", "block");
  $("table").css("display", "none");
  pobierzSlowa();
}

function tabela() {
  if ($("table").css("display") == "none") {
    $("table").css("display", "block");
  } else {
    $("table").css("display", "none");
  }
}
