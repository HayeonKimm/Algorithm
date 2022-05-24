
console.log(solution(7))

function solution(n) {
    var answer = '';
    
    var a="수"
    var b="박"
    var aa="수박수"
    var aaa="수박"


    if (n==1) return a

    

    if (n%2==0){
        
        for(let i = 0; i<n/2 ; i++){
            answer+=aaa
            
        }
        return answer
    }

    if(n%2==1){

        for(let i = 0; i<n ; i++){

            if (i%2==1){answer+=b
            }else{
                    answer+=a
                }
            }
        } return answer
    }

