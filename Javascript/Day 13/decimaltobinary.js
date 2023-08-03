console.log("Give Decimal number");
var num = 10;
console.log(num);
function call(input)
{
    var rem = [];
    while(input != 0)
    {
        rem += input % 2;
        input = parseInt(input / 2);
    }
    var cap = [];
    let inn=rem.length-1;
    while(inn >= 0)
    {
        cap += rem[inn];
        inn--;
    }
    return cap;
}
console.log("After convertion of Decimal to Binary");
console.log(call(num));
