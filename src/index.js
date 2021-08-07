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
};

function decode(expr) {
    let process = expr.match((/.{1,10}/g))
   
  for (let i=0;i<process.length;i++) {
    if (process[i] === '**********') continue;
    process[i] = process[i].slice(process[i].indexOf('1'))
    process[i] = process[i].match((/.{1,2}/g))
  }
  
  for (let i=0; i<process.length;i++) {
     if (process[i] === '**********') continue;
    for (let j = 0; j<process[i].length;j++) {
      if (process[i][j] === '11') {
        process[i][j] = '-'
      }
       if (process[i][j] === '10') {
        process[i][j] = '.'
      }
    }
    process[i] = process[i].join('')
  }
  
  for (let i = 0; i<process.length; i++) {
    if (process[i] === '**********') {
      process[i] = ' '
    } else {
      process[i] = MORSE_TABLE[process[i]]
    }
  }
 result = process.join('')
 return result;
}

module.exports = {
    decode
}