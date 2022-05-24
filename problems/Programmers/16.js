function solution(s){
    // var answer = true;


    s=s.toLowerCase()
    
    
    aa=s.split('p')
    ab=s.split('y')
    
    if ((aa.length-1==0) && ((ab.length-1)==0)){
        
        return true
    }
    
    if ((aa.length-1)==(ab.length-1)){
        
        return true
    } else return false
    
    
}