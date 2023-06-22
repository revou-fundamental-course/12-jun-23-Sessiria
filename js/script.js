// input topbottom and calculate box
let input = document.getElementById('input');
let output = document.getElementById('output');
let calculate = document.getElementById('calculate');

// label input output yang akan di reverse
let linput = document.getElementById('linput');
let loutput = document.getElementById('loutput');

let reversed = false;

// global variable
let cel = 0;
let fah = 0;

//rumus celsius > fahrenheit
const celToFah = (cel) =>{
    let fahrenheit = parseFloat((cel * 9 / 5 )+32);
    return fahrenheit;
}

const fahToCel = (fah) =>{
    let celsius = parseFloat((fah -32)*5/9);
    return celsius;
}

convert = () => {
    if(isNaN(input.value)){
        alert('Harap gunakan value dalam bentuk angka (tidak menerima huruf maupun simbol');
        output.value = "Value yang diinput invalid";
        calculate.value = "Value yang diinput invalid";
    }else{
        if(input.value == ""){
            // 0 karena jika tidak diisi defaultnya akan 0
            if(reversed){
                cel = fahToCel(0);
                output.value = cel.toFixed(2);
                calculate.value = "(" + input.value + "0°F - 32) * 5 / 9 = " +  output.value + "°C";
            }else{
                fah = celToFah(0);
                output.value = fah.toFixed(2);
                calculate.value = input.value + "0°C * (9/5) + 32 = " +  output.value +"°F";
            }
        }else{
            // jika berisi nilai 1+
            if(reversed){
                cel = fahToCel(input.value);
                output.value = cel.toFixed(2);
                calculate.value = "(" + input.value + "°F - 32) * 5 / 9 = " +  output.value + "°C";
            }else{
                fah = celToFah(input.value);
                output.value = fah.toFixed(2);
                calculate.value = input.value + "°C * (9/5) + 32 = " +  output.value +"°F";
            }
        }
        
    }
   

    // let output = (parseFloat(celsius.value) * 9) /5 + 32;
    // fahrenheit.value = parseFloat(output.toFixed(2));

    // calculate.value = celsius.value + "°C * (9/5) + 32 = " +  fahrenheit.value;
}

reset = () => {
    input.value = "";
    output.value = "";
    calculate.value = "";
}

reverse = () => {
    reversed = !reversed;

    if(input){
        if(reversed){
            linput.innerHTML = 'Fahrenheit (°F):';
            loutput.innerHTML = 'Celsius (°C):';
        }else{
            linput.innerHTML = 'Celsius (°C):';
            loutput.innerHTML = 'Fahrenheit (°F):';
        }
    
        if(reversed){
            cel = fahToCel(input.value);
            output.value = cel.toFixed(2);
            calculate.value = "(" + input.value + "°F - 32) * 5 / 9 = " +  output.value + "°C";
        }else{
            fah = celToFah(input.value);
            output.value = fah.toFixed(2);
            calculate.value = input.value + "°C * (9/5) + 32 = " +  output.value +"°F";
        };
    }else{
        
        alert('Masukkan nilai di kolom input pertama!')
    
    }
    
    
}