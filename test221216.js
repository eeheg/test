//문제1
function solution(sides) {
    var answer = 2;
    sides.sort((a, b) => b - a); //내림차순정렬
    if (sides[1] + sides[2] > sides[0]) {
        var answer = 1;
    }
    return answer;
}