const copyPssword = () =>{
    const input = document.getElementById('inputPass')

    input.select()

    navigator.clipboard.writeText(input.value)
}
// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet);
// const Symbol = document.getElementById('Symbol')
// const Include_Number = document.getElementById('Include_Number')
// const Include_LowerCase = document.getElementById('Include_LowerCase')
// const Include_UpperCase = document.getElementById('Include_UpperCase')
const label = document.querySelectorAll('.form-check-input')
// let inputLength = document.getElementById('inputLength').innerText
// console.log(inputLength)

const checked = ()=> {
    let passwordArr = []
  let inputLength = document.getElementById('exampleFormControlInput1').value
  inputLength = Number(inputLength)
  if(inputLength >= 8){
    label.forEach(
        (input)=>{
            if(input.checked){
                if(input.value == "Symbol"){
                    for(let i = 0;i<=8;i++){
                        var symbols = ['!','@','#','$','%','^','&','*','(',')','_','+']
                        var randomSymbol = Math.floor(Math.random() * symbols.length)
                        passwordArr.push(symbols[randomSymbol])
                    }
                }else if(input.value == "Include_Number"){
                    for(let i = 0;i<=8;i++){
                        var number = ['1','2','3','4','5','5','6','7','8','9','0']
                        var randomNumber = Math.floor(Math.random() * number.length)
                        passwordArr.push(number[randomNumber])
                    }
                }else if(input.value == "Include_LowerCase"){
                    for(let i = 0;i<=8;i++){
                        const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                        var randomLower = Math.floor(Math.random() * alphabetLower.length)
                        passwordArr.push(alphabetLower[randomLower])
                    }
                }else if(input.value === "Include_UpperCase"){
                    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
                    const alphabetUpper = alpha.map((x) => String.fromCharCode(x));
                    for(let i = 0;i<=8;i++){
                        var randomUpper = Math.floor(Math.random() * alphabetUpper.length)
                        passwordArr.push(alphabetUpper[randomUpper])
                    }
                }
            }
        }
    )
  }else{
    alert('The entered number must be greater than 8')
  }
  shuffle(passwordArr)
  passwordArr.length = inputLength

  let input = document.getElementById('inputPass')
  let resultPassword = passwordArr.join("")
  resultPassword
  input.value = resultPassword                                                                   
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


