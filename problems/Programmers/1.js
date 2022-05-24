process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); // 입력 받은 값을 공백을 기준으로 나눠준다.
    const a = Number(n[0]), b = Number(n[1]); // a,b에 각자 행과 열에 해당하는 숫자 값 할당.
    const row = '*'.repeat(a)
    
    // repeat는 반복을 시켜주는 라이브러리다.
    
    for(let i =0; i<b; i++){   // 반복문
        console.log(row) // 출력 !!
    }
    
});
