function solution(s) {
    let answer = 0;
    
    s = s.replace(/zero/g, 0);
    s = s.replace(/one/g, 1);
    s = s.replace(/two/g, 2);
    s = s.replace(/three/g, 3);
    s = s.replace(/four/g, 4);
    s = s.replace(/five/g, 5);
    s = s.replace(/six/g, 6);
    s = s.replace(/seven/g, 7);
    s = s.replace(/eight/g, 8);
    s = s.replace(/nine/g, 9);
    
    answer = Number(s);
    return answer;
}


//str_text.replace(/찾을 문자열/gi, "변경할 문자열")

//대소문자 구분없이 문자열을 치환하기 위해서는

// 'i' modifier를 사용했기 때문에,

// [Javascript] replace() 함수 사용하여 대소문자 구분 없이 치환하기

// 'i'와 'g' modifier를 위 예제와 같이 함께 적어주면 됩니다.



// 출처: https://hianna.tistory.com/343 [어제 오늘 내일]


s="one4seveneight"
console.log(solution(s))