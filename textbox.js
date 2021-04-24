/* copy */
document.addEventListener('DOMContentLoaded', function () {
  function copyClipboard(event) {
    const clipboard = document.createElement('textarea');
    clipboard.value = document.getElementById('input').value;
    event.target.appendChild(clipboard);
    clipboard.select();
    document.execCommand('copy');
    event.target.removeChild(clipboard);
  }

  const buttons = document.getElementsByClassName('copy_clipboard');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', copyClipboard);
  }
});

/* garlic.js */
$(function () {
  $("form").garlic();
});

/* MathJax Typeset */
window.onload = function () {
  $("#output2").html('\\[' + $("#input").val() + '\\]');
  //$("#output2").html($("#input").val());

  //MathJax.Hub.Typeset($("#output2")[0], function () {console.log("Done");});
  MathJax.typeset([document.getElementById("output2")]);
};

$(function () {
  $("#input").on("input", function () {
    //$("#output2").html($("#input").val());

    $("#output2").html('\\[' + $("#input").val() + '\\]');
    //MathJax.Hub.Typeset($("#output2")[0], function () {console.log("Done");});
    MathJax.typeset([document.getElementById("output2")]);
  });

  $("button").on("click", function () {
    //$("#output2").html($("#input").val());

    $("#output2").html('\\[' + $("#input").val() + '\\]');
    //MathJax.Hub.Typeset($("#output2")[0], function () {console.log("Done");});
    MathJax.typeset([document.getElementById("output2")]);
  });
});

/* Click Button */

function clickBtn(str) {
  //テキストエリアと挿入する文字列を取得
  var area = document.getElementById('input');
  let as = area.selectionStart;
  var text = str;

  if (str == 'clear') {
    area.value = '';
    area.focus();
    area.blur();
  } else if (str == 'backspace') {
    area.focus();

    let a = area.value;
    area.value = a.substr(0, as - 1) + a.substr(as);
    area.setSelectionRange(as - 1, as - 1);
    //area.blur();
  } else {
    //カーソルの位置を基準に前後を分割して、その間に文字列を挿入
    area.value = area.value.substr(0, as) + text + area.value.substr(as);

    area.setSelectionRange(as + text.length, as + text.length);
    area.focus();
    area.blur();

  }
}


/* Cursol Button */
function cursol_left() {
  document.getElementById('input').setSelectionRange(
    document.getElementById('input').selectionStart - 1,
    document.getElementById('input').selectionStart - 1
  );
  document.getElementById('input').focus();
}

function cursol_right() {
  document.getElementById('input').setSelectionRange(
    document.getElementById('input').selectionStart + 1,
    document.getElementById('input').selectionStart + 1
  );
  document.getElementById('input').focus();
}


/* */
MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ]
  }
};

/* */


/* */


/* */


/* */


/* */