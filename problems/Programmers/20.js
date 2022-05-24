
participant= ["mislav", "stanko", "mislav", "ana"]
completion= ["stanko", "ana", "mislav"]


// var participant=participant.slice(1)
// console.log(participant)


// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]


console.log(solution(participant,completion))

// 이 문제는 어려웠다. 인터넷의 다른 분의 게시글을 참고했다. 복습 필!!!


function solution(participant, completion) {
    participant.sort(); //참가자 배열 정렬
    completion.sort(); //완주자 배열 정렬'

    console.log(participant)
    console.log(completion)

    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            //인덱스 0부터 순차적으로 두 배열 비교
            return participant[i];
            //비완주자가 참가자 배열에 나올 경우 출력
        }
    }
}