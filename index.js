// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase())


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function U(param) {
    //首先统一格式化为小写
    var str = param.toLowerCase();
    //正则表达式
    str = str.replace(/\b\w+\b/g, function (arg) {
        return arg.substring(0, 1).toUpperCase() + arg.substring(1)
    });
    console.log(str)
}
U(sentence)


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substr(1))
