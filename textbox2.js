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
  console.log($("span[role='presentation']")[0].innerText);
  //$("#output2").html($("#input").val());

  //MathJax.Hub.Typeset($("#output2")[0], function () {console.log("Done");});
  MathJax.typeset([document.getElementById("output2")]);
};

$(function () {
  editor.on('change', function () {
    console.log("a");
    $("#output2").html('\\[' + editor.doc.getValue() + '\\]');

    //MathJax.Hub.Typeset($("#output2")[0], function () {console.log("Done");});
    MathJax.typeset([document.getElementById("output2")]);
  });

  $("button").on("click", function () {
    $("#output2").html('\\[' + $("span[role='presentation']")[0].innerText + '\\]');
    //MathJax.Hub.Typeset($("#output2")[0], function () {console.log("Done");});
    MathJax.typeset([document.getElementById("output2")]);
  });
});





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