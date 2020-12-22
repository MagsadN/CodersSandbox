const input = document.getElementById("input");
const button = document.querySelector("button");
const checkbox = document.getElementById("checkbox");
//const head = document.getElementById("head");
const body = document.getElementById("body");
const imagePlace = document.getElementById("imagePlace");
// For makeChange Function
let usdSum;
let usdCoin;
let aznSum;
let qepikSum;
//For convertUSDToWord
let usdSumArr = [];
let usdSumStr;
let usdSumWord;
let len;
let index;
let myNumbers = [];

// For convertUSDToWord
const ones = ["","Bir ","İki ",  "Üç ",  "Dörd ",  "Beş ",  "Altı ",  "Yeddi ",  "Səkkiz ",  "Doqquz "];
const tens = ["",  "On ",  "İyirmi ",  "Otuz ",  "Qırx ",  "Əlli ",  "Altmış ",  "Yetmiş ",  "Səksən ",  "Doxsan "];
const hundreds = ["",  "Yüz ",  `${ones[2]}Yüz `,  `${ones[3]}Yüz `,  `${ones[4]}Yüz `,  `${ones[5]}Yüz `,  `${ones[6]}Yüz `,  `${ones[7]}Yüz `,  `${ones[8]}Yüz `,  `${ones[9]}Yüz `];
const thousands = ["",  "Min ",  `${ones[2]}Min `,  `${ones[3]}Min `,  `${ones[4]}Min `,`${ones[5]}Min `,`${ones[6]}Min `,`${ones[7]}Min `,  `${ones[8]}Min `,  `${ones[9]}Min `];
const tenThousands = ["","On Min ",`${tens[2]}Min `,`${tens[3]}Min `,`${tens[4]}Min `,`${tens[5]}Min `,`${tens[6]}Min `,`${tens[7]}Min `,`${tens[8]}Min `,`${tens[9]}Min `];
const hundredThousands = ["",  "Yüz Min ",  "İki Yüz Min ",  "Üç Yüz Min ",  "Dörd Yüz Min ",  "Beş Yüz Min ",  "Altı Yüz Min ","Yeddi Yüz Min ","Səkkiz Yüz Min ","Doqquz Yüz Min "];
const millions = ["","Bir Milyon ","İki Milyon ","Üç Milyon ","Dörd Milyon ","Beş Milyon ","Altı Milyon ","Yeddi Milyon ","Səkkiz Milyon ","Doqquz Milyon "];
const numbers = [ones,tens,hundreds,thousands,tenThousands,hundredThousands,millions];
const inputNumbers = [ones,tens,hundreds,thousands,tenThousands,hundredThousands,millions];
//1237
//console.log(numbers[3][1]+ones[2]+numbers[4][0]+numbers[5][3]+numbers[6][7]);

// Example: 1345
// const dollar = thousands[1] + ones[3] + hundred[0] + tens[4] + ones[5]
// console.log(dollar);

// const converUSDToWord = () => {
//     //49th line
//     console.log(m);
//     if (usdSumArr[0] == 1) {
//         usdSumWord =
//     }
// }

input.addEventListener("click", () => {
  //For clear input place, body, imagePlace and console
  input.value = "";
  body.innerHTML = "";
  imagePlace.innerHTML = "";
  console.clear();
});

button.addEventListener("click", () => {
  //For checkbox checked Value Word
  console.log(checkbox.checked);
  // For spliting coin and banknote
  // Input Error Case
  // if (input.value <= 0) throw new Error('Negative numbers and \'zero\' are not supported.');
  // usdCoin
  usdCoin = +((input.value % 1) * 100).toFixed(0);
  console.log("usdCoin: ", usdCoin);
  // usdSum
  usdSum = input.value - (input.value % 1);
  console.log("usdSum: ", usdSum);
  // usdSum => usdSumStr '123'
  usdSumStr = usdSum.toString();
  console.log(usdSumStr);
  // USD value to string then to array
  // usdSumStr => usdSumArr ['1','2','3']
  usdSumArr = [];
  for (let i = 0; i < usdSumStr.length; i++) {
    usdSumArr.push(usdSumStr[i]);
  }
  console.log(usdSumArr);
  // For finding Value Place // Teklik, onluq, yuzluk, minlik ve s. oldugu
  let m = usdSumArr.length;
  console.log(m);
  len = numbers.length;
  index = m;
  if (index > -1) {
    inputNumbers.splice(index, len - 1);
    console.log("inputNumbers: ", inputNumbers);
    console.log("numbers: ", numbers);
  }
  //////////////////////////////////////

  console.log("_____________________________________");
  console.log(+"2");
  console.log(inputNumbers);
  console.log(m);
  console.log("usdSumArr: ", usdSumArr);
  console.log("usdSumArr.length: ", m);
  const usdToWord = (ones = "",tens = "",hundreds = "",thousands = "",tenThousands = "",hundredThousands = "",millions = "") => {
    // word = `${numbers[6][usdSumArr[0]]}`+`${hundredThousands[m-2]}`+ `${tenThousands[m-3]}`+ `${thousands[m-4]}`+ `${hundreds[m-5]}`+ `${tens[m-6]}`+`${ones[m-7]}`
    let word2 = millions +hundredThousands +tenThousands +thousands +hundreds +tens +ones;
    console.log(word2);
  };
  //Asagida check ele undefined gelmesin, gelse onu ''-a cevire bil.
  let onesV = `${numbers[0][usdSumArr[m - 1]]}`;
  if (onesV === undefined) {
    onesV = "";
  }
  console.log(onesV);
  let tensV = numbers[1][usdSumArr[m - 2]];
  console.log(numbers[1][usdSumArr[m - 2]], "tensV: ", tensV.value);
  if (undefined) {
    tensV = "tensValue";
    console.log(tensV);
  }
  console.log(typeof tensV, typeof tensV);
  let hundredsV = `${numbers[2][usdSumArr[m - 3]]}`;
  let thousandsV = `${numbers[3][usdSumArr[m - 4]]}`;
  let tenThousandsV = `${numbers[4][usdSumArr[m - 5]]}`;
  let hundredThousandsV = `${numbers[5][usdSumArr[m - 6]]}`;
  let millionsV = `${numbers[6][usdSumArr[m - 7]]}`;
  usdToWord(onesV,tensV,hundredsV,thousandsV,tenThousandsV,hundredThousandsV,millionsV);
  console.log(numbers);

  if (checkbox.checked && input.value > 0) {
    aznSum = input.value * 1.7;
    qepikSum = (aznSum - Math.floor(aznSum)).toFixed(2);
    body.innerHTML = `
            <div >
                <h2>USD: ${input.value}</h2>
                <h2>AZN: ${aznSum.toFixed(2)}</h2>
                <h1>${input.value} Dollar = ${Math.floor(
      aznSum
    )} Manat ${qepikSum} Qəpik</h1><br>
                <h1>${
                  input.value
                } Dollar = ${usdSumWord2} Manat ${qepikSum} Qəpik </h1>
            </div>
    `;
    // makeChange()
  } else if (input.value > 0) {
    aznSum = input.value * 1.7;
    qepik = (aznSum - Math.floor(aznSum)).toFixed(2);
    body.innerHTML = `
            <div >
                <h2>USD: ${input.value}</h2>
                <h2>AZN: ${aznSum.toFixed(2)}</h2>
                <h1>${input.value} Dollar = ${Math.floor(
      aznSum
    )} Manat ${qepik} Qəpik</h1>
            </div>
    `;
    // makeChange()
  } else {
    console.log("USD Value is not able to become negative value");
  }
});

// const convertUsdValueToWord = () => {
//     console.log(m);
//     if (m == 3) {
//         if (usdSumArr[0] == 1) {
//             usdSumWord = hundred[1]
//             console.log(usdSumWord);
//         } else {
//             usdSumWord = ones[usdSumArr[0]] + hundred[0]
//             console.log(usdSumWord);
//         }
//         m = m-1
//         return convertUsdValueToWord()
//     }
//     if (m == 2) {
//         usdSumWord += tens[usdSumArr[1]]
//         console.log(usdSumWord);
//         m = m - 1
//         return convertUsdValueToWord()
//     }
//     if (m == 1) {
//         usdSumWord += ones[usdSumArr[0]]
//         console.log(usdSumWord);
//         m = m - 1
//         return convertUsdValueToWord()
//     }
//     else {
//         console.log('You should input a value!');
//     }
//     console.log('Final USD Value Word: ',usdSumWord);
// }

// const makeChange = () => {
//     if (aznSum >= 1) {
//         qepikSum = (aznSum % 1).toFixed(2) * 100
//         if (aznSum / 200 >= 1) {
//             // console.log(aznSum);
//             aznSum = aznSum - 200
//             // console.log(aznSum);
//             imagePlace.innerHTML += `
//                         <img id="banknote" src="./200azn.jpg" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (aznSum / 100 >= 1) {
//             aznSum = aznSum - 100
//             // console.log(aznSum);
//             imagePlace.innerHTML += `
//                         <img id="banknote" src="./100azn.jpg" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (aznSum / 50 >= 1) {
//             aznSum = aznSum - 50
//             // console.log(aznSum);
//             imagePlace.innerHTML += `
//                         <img id="banknote" src="./50azn.jpg" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (aznSum / 20 >= 1) {
//             aznSum = aznSum - 20
//             // console.log(aznSum);
//             imagePlace.innerHTML += `
//                         <img id="banknote" src="./20azn.jpg" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (aznSum / 10 >= 1) {
//             aznSum = aznSum - 10
//             // console.log(aznSum);
//             imagePlace.innerHTML += `
//                         <img id="banknote" src="./10azn.jpg" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (aznSum / 5 >= 1) {
//             aznSum = aznSum - 5
//             // console.log(aznSum);
//             imagePlace.innerHTML += `
//                         <img id="banknote" src="./5azn.jpg" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (aznSum / 1 >= 1) {
//             aznSum = aznSum - 1
//             // console.log(qepikSum);
//             imagePlace.innerHTML += `
//                         <img id="banknote" src="./1azn.jpg" alt=""/><br>
//                     `
//             return makeChange()
//         }
//     }
//     else if (aznSum < 1 && qepikSum > 0) {
//         console.log(qepikSum);
//         if (qepikSum / 50 >= 1) {
//             // console.log('50 qepik');
//             qepikSum = qepikSum - 50
//             // console.log(qepikSum);
//             imagePlace.innerHTML += `
//                         <img id="coin" src="./50.png" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (qepikSum / 20 >= 1) {
//             // console.log('20 qepik');
//             qepikSum = qepikSum - 20
//             // console.log(qepikSum)
//             imagePlace.innerHTML += `
//                         <img id="coin" src="./20.png" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (qepikSum / 10 >= 1) {
//             // console.log('10 qepik');
//             qepikSum = qepikSum - 10
//             // console.log(qepikSum);
//             imagePlace.innerHTML += `
//                         <img id="coin" src="./10.png" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (qepikSum / 5 >= 1) {
//             // console.log('5 qepik');
//             qepikSum = qepikSum - 5
//             // console.log(qepikSum);
//             imagePlace.innerHTML += `
//                         <img id="coin" src="./5.png" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (qepikSum / 3 >= 1) {
//             // console.log('3 qepik');
//             qepikSum = qepikSum - 3
//             // console.log(qepikSum)
//             imagePlace.innerHTML += `
//                         <img id="coin" src="./3.png" alt=""/><br>
//                     `
//             return makeChange()
//         }
//         if (qepikSum / 1 >= 1) {
//             // console.log('1 qepik');
//             qepikSum = qepikSum - 1
//             // console.log(qepikSum);
//             imagePlace.innerHTML += `
//                         <img id="coin" src="./1.png" alt=""/><br>
//                     `
//             return makeChange()
//         }
//     }

//     else {
//         console.log('aznSum is not able to become negative value');
//         return 0
//     }

// }
