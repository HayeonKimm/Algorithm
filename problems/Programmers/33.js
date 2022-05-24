lottos=[44, 1, 0, 0, 31, 25]
win_nums=[31, 10, 45, 1, 6, 19]


console.log(solution(lottos,win_nums))

function solution(lottos, win_nums) {
    var answer = [];
    var sum=7;
    var sum_2=7;


    if (lottos.reduce((a,b) => (a+b))==0) return [1,6]
 

    //다 맞았을 때
    for(let i=0;i<lottos.length; i++){

        win_nums.includes(lottos[i])? sum=sum-1:sum
        lottos[i]==0? sum-=1:sum
        
    }if (sum==7) sum=6

    //다 틀렸을 때
    

    for(let i=0;i<lottos.length; i++){

        win_nums.includes(lottos[i])? sum_2=sum_2-1:sum_2
        
    }if (sum_2==7) sum_2=6
    
    
    
    
    return [sum,sum_2];
}