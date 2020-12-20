const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
};

function decode(expr) {
    const arr = expr.split('')
    const newArr = [];

    for (let i = 0; i < (expr.length / 10); i++) {
        newArr.push(arr.slice(0, 10).join(''));
        arr.splice(0, 10)
    }

    const sliced = newArr.map((e) => {
        if (e[0] === '*') {
            return ' '
        }

        const eSpl = e.split('');
        const res = [];

        for (let i = 0; i < (e.length / 2); i++) {
            res.push(eSpl.slice(0, 2).join(''));
            eSpl.splice(0, 2)
        }

        return res
    }).map((e) => {
        if (e === ' ') {
            return ' '
        }
        const res = []
        for (let x of e) {
            switch (x) {
                case '00':
                    break;
                case '10':
                    res.push('.');
                    break;
                case '11':
                    res.push('-');
                    break;
            }
        }
        return res.join('')
    }).map((e) => {
        return MORSE_TABLE[e];
    }).join('');
    
    return sliced
}

module.exports = {
    decode
}