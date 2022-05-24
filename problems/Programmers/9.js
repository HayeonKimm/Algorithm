function solution(phone_number) {
    var answer = '';
    
 
    phone_number2=phone_number.slice(-4,)
    answer='*'.repeat(phone_number.length-4)+ phone_number2
    console.log(phone_number.length)
    return answer;

}
