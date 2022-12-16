//문제1
function solution(box, n) {
    var answer = Math.floor(box[0]/n) * Math.floor(box[1]/n) * Math.floor(box [2]/n);
    return answer;
}

//문제1-for사용
var answer = 1;
for (let i = 0; i < box.length; i++) {
  anwser *= Math.floor(box[i] / n);
}

//문제1-forEach사용
box.forEach((value) => {
  answer *= Math.floor(value / n);
});
return answer;



//2022.12.14 문제1
function solution(numbers, direction) {
    var array = numbers.slice();
    if (direction === "right") {
        array.unshift(numbers[array.length]);
        array.pop();
    } else {
        array.push(numbers[0]);
        array.shift();
    };
    return array;
}



//2022.12.14 문제2
function solution(num, k) {
    const str = String(num);
    const k2 = String(k);
    const array = Array.from(str);
    let answer = -1;
    for (var i=0; i<array.length; i++) {
        if (array[i] === k2) {
            answer = i+1;
            break;
        }
    }
    return answer;
}

//문제2-indexOf 이용
function solution(num, k) {
    return (" " + num).indexOf(k);
  }


//문제2-indexOf + if문
function solution(num, k) {
    var answer = 0;
    let a = num.toString();
    let b = a.indexOf(k);
    if (b !== -1) {
        answer = b + 1;
    } else {
        answer = -1;
    }
    return answer;
}