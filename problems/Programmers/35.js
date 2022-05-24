function solution(strings, n) {

    strings.sort();
    return strings.sort((a,b)=>{
        
        if(a[n]===b[n]){
            return a-b;
            
        }else if(a[n]>b[n]){
            
            return 1;
            
        }else return -1;
    })
    //-1을 리턴하는 것은 오름차순, 1을 리턴하는 것은 내림차순이다. 같을 때는 0을 리턴한다.
}