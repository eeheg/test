//문제1-for이용
function solution(cipher, code) {
    var answer = '';
    var arr = cipher.split('');
    for(var i=0; i<arr.length; i++) {
        if((i-3) % code === 0) {
            answer = answer + cipher[i];
        }
    }
    return answer;
};

//문제1-filter이용
function solution(cipher, code) {
    return cipher
        .split('')
        .filter((value,index) => index % code === code-1)
        .join("");
}

solution("dfjardstddetckdaccccdegk", 4)



//문제2-for이용1
function solution(array) {
    var answer = [];
    var array2 = [...array]; //array가 바뀌지 않도록 array를 array2에 복사해둔다.
    array2.sort((a, b) => b - a); //array2 내림차순 정렬
    for (var i=0; i<array.length; i++) {
        if(array2[0] === array[i]) {
            return answer = [array2[0], i];
        }
    };
};

//문제2-for이용2
function solution(array) {
    var answer = [0, 0];
    for (let i = 0; i < array.length; i += 1) {
        if (answer[0] < array[i]) {
            answer = [array[i], i];
        }
    }
    return answer;
};

//문제2-map이용
function solution(array) {
    var answer = [0, 0];
    array.map((value, index) => {
        if (answer[0] < value) {
            answer = [value, index];
        }
    })
    return answer;
};

//문제2-forEach이용
function solution(array) {
    var answer = [0, 0];
    array.forEach((value, index) => {
        if (answer[0] < value) {
            answer = [value, index];
        }
    });
    return answer;
  };

solution([1, 8, 3]);