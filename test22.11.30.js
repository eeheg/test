//문제1
function add(callback) {
	console.log("찍었습니다!")
};

add();
add();
add();
add();
add();


//문제2
function mul(num1, num2) {
    return num1 * num2
};


//문제3
1 2
9


//문제4
1 2
9


//문제5
1 2
9
9


//문제6
1 2
9


//문제7
//매개변수가 1개 주어지면 1개만 적용됨
1 2
1


//문제8
1
1


//문제9
function solution(money) {
    var answer = [
        parseInt(money / 5500), money % 5500
    ];
    return answer;
}

//문제9-다른풀이
function solution(money) {
    return [
        Math.floor(money / 5500), money % 5500 
    ];
}