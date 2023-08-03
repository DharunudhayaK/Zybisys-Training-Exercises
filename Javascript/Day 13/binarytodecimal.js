console.log("Give Binary number");
var num = 1010;
console.log(num);

function call(input)
{
    var temp=0;
    var power=0;
    var rem;
    while(input != 0)
    {
        rem = input % 10;
        temp += (rem * Math.pow(2,power));
        input = parseInt(input / 10);
        power++;
    }
    return temp;
}
console.log("After convertion of Binary to Decimal");
console.log(call(num));