let m = {
    space: ' ',
    clear: 'clear',
    backspace: 'backspace',

    // 数学記号
    equal: '=',
    plus: '+',
    minus: '-',
    times: '\\times',
    div: '\\div',
    pm: '\\pm',
    mp: '\\mp',
    cdot: '\\cdot',
    ra: '\\Rightarrow',
    la: '\\Leftarrow',
    lra: '\\Leftrightarrow',
    // : '',
    // : '',
    // : '',
    // : '',

    // Griss
    alpha: '\\alpha',
    beta: '\\beta',
    gamma: '\\gamma',

    // Functions
    sqrt: '\\sqrt x',
    nsqrt: '\\sqrt[n] x',
    sin: '\\sin x',
    cos: '\\cos x',
    tan: '\\tan x',
    asin: '\\sin^{-1} x',
    acos: '\\cos^{-1} x',
    atan: '\\tan^{-1} x',
    arcsin: '\\arcsin x',
    arccos: '\\arccos x',
    arctan: '\\arctan x',
    exp0: '\\exp(x)',
    exp1: 'e^x',
    log0: '\\log x',
    log1: '\\log_a x',
    log2: '\\ln x',
    sinh0: '\\sinh x',
    sinh1: '',
    cosh0: '\\cosh x',
    cosh1: '',
    tanh0: '\\tanh x',
    tanh1: '',



    //
    frac: '\\frac{a}{b}',
    superscript: 'x^{a}',
    subscript: 'x_{a}',
    limit: '\\lim_{n \\to \\infty}',
    limsup0: '\\limsup_{n \\to \\infty}',
    limsup1: '\\varlimsup_{n \\to \\infty}',
    liminf0: '\\liminf_{n \\to \\infty}',
    liminf1: '\\varliminf_{n \\to \\infty}',
    diff0: "f'(x)",
    diff1: "f^{(n)}(x)",
    diff2: "\\frac{dy}{dx}",
    diff3: "\\frac{df(x)}{dx}",
    pdiff0: "f_{x}",
    pdiff1: "f_{xy}",
    pdiff2: "\\frac{\\partial f}{\\partial y}",
    int: '\\int ',
    intd: '\\int_{a}^{b} ',
    iint: '\\iint ',
    sum0: '\\sum_{i=0}^{n}',
    sum1: '\\sum_{i,j}',

    formula0: '\\begin{align} f(x) &= x^2+3x+2 \\\\ &= (x+1)(x+2) \\end{align}',
    formula1: '\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} \\\\',
    formula2: 'f(x) = \\left\{\\begin{array}{ll}1 & (x \\geq 0) \\\\0 & (x \lt 0)\\end{array}\\right.',

    // matrix
    matrix0: '\\begin{matrix}a & b \\\\c & d \\end{matrix}',
    matrix1: '\\begin{pmatrix} a & b \\\\ c & d \\\\ \\end{pmatrix}',
    matrix2: '\\begin{bmatrix} a & b \\\\ c & d \\\\ \\end{bmatrix}',
    matrix3: '\\begin{Bmatrix} a & b \\\\ c & d \\\\ \\end{Bmatrix}',
    matrix4: '\\left(\\begin{array}{ccc}a & b & c \\\\d & e & f \\\\g & h & i\\end{array}\\right)',
    matrix5: `\\left(
        \\begin{array}{ccc}
        a & b & c \\\\
        d & e & f \\\\
        g & h & i
        \\end{array}
    \\right)`,
    det0: '\\mathrm{det} A',
    det1: '\\begin{vmatrix} a & b \\\\ c & d \\\\ \\end{vmatrix}',
    det2: '\\begin{Vmatrix} a & b \\\\ c & d \\\\ \\end{Vmatrix}',
    matrix_g: 'A = a_{ij} = \\left( \\begin{array}{cccc}a_{11} & a_{12} & \\ldots & a_{1n} \\\\a_{21} & a_{22} & \\ldots & a_{2n} \\\\\\vdots & \\vdots & \\ddots & \\vdots \\\\a_{m1} & a_{m2} & \\ldots & a_{mn}\\end{array} \\right)',


};


function Push(rep) {
    var doc = editor.getDoc();
    var cur = doc.getCursor();

    if (Number.isInteger(rep)) {
        area.value = area.value.substr(0, as) + rep + area.value.substr(as);
        area.setSelectionRange(as + String(rep).length, as + String(rep).length);
        area.focus();
        area.blur();

    } else {
        let tex = m[rep]
        let len = tex.length

        if (tex == 'clear') {
            editor.doc.setValue('')
            editor.save()

        } else if (tex == 'backspace') {
            doc.replaceRange(' ', {
                line: cur.line,
                ch: cur.ch - 1
            });

        } else if (tex == 'space') {
            area.value = area.value.substr(0, as) + ' ' + area.value.substr(as);

            area.setSelectionRange(as + len, as + len);
            area.focus();
            area.blur();
        } else {
            doc.replaceRange(tex, {
                line: cur.line,
                ch: cur.ch
            });
            editor.focus()
        }
    }


}

/* Cursol Button */
function cursol_left() {
    var doc = editor.getDoc();
    var cur = doc.getCursor();

    doc.setCursor({
        line: cur.line,
        ch: cur.ch - 1
    })

    editor.focus()
}

function cursol_right() {
    var doc = editor.getDoc();
    var cur = doc.getCursor();

    doc.setCursor({
        line: cur.line,
        ch: cur.ch + 1
    })

    editor.focus()
}

/*
function clickBtn(rep) {


    //テキストエリアと挿入する文字列を取得
    var area = document.getElementById('input');
    let as = area.selectionStart;

    if (Number.isInteger(rep)) {
        area.value = area.value.substr(0, as) + rep + area.value.substr(as);
        area.setSelectionRange(as + String(rep).length, as + String(rep).length);
        area.focus();
        area.blur();

    } else {
        let tex = btn_text[rep]
        let len = tex.length


        if (tex == 'clear') {
            area.value = '';
            area.focus();
            area.blur();
        } else if (tex == 'backspace') {
            let a = area.value;
            area.value = a.substr(0, as - 1) + a.substr(as);
            area.setSelectionRange(as - 1, as - 1);
            area.focus();
            area.blur();
        } else {
            //カーソルの位置を基準に前後を分割して、その間に文字列を挿入
            area.value = area.value.substr(0, as) + tex + area.value.substr(as);

            area.setSelectionRange(as + len, as + len);
            area.focus();
            area.blur();

        }
    }


}*/