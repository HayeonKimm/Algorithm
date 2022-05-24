
n=12345
console.log(solution(n))


function solution(n) {
    // var answer = [];

    n=String(n)
    
    qqq=n.split('')
    qqq = qqq.reverse()

    
    q=qqq.map(Number)

    return q

}