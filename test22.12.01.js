//문제1

//삼총사만들기 코드
function solution(number) {
    var answer = 0;
    for (pick = 0; pick <= number.length; pick++) {
        for(var i = pick+1; i <= number.length; i++) {
            for(var j = i+1; j <= number.length; j++) {
                if(number[pick] + number[i] + number[j] === 0) {
                    answer += 1;
                }
            }
        }
    }
    if (answer === 0) {
        return('삼총사가 없습니다.');
    } else {
        return answer;
    }
}


//난수배열생성(number) => 삼총사만들기 코드
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function makeNumber(callback) {
    const num = rand(3, 13);
    const number = Array(`${num}`);

    for (var i = 0; i <= `${num}`-1; i++) {
        number[i] = rand(-1000, 1000);
    };

    const pick = Math.floor(Math.random() * number.length);

    console.log(`number = [${number}]`);
    
    callback(number);
};

function solution() {
    makeNumber((number)=> {
        var answer = 0;
        for (pick = 0; pick <= number.length; pick++) {
            for(var i = pick+1; i <= number.length; i++) {
                for(var j = i+1; j <= number.length; j++) {
                    if(number[pick] + number[i] + number[j] === 0) {
                        answer += 1;
                    }
                }
            }
        }
        if (answer === 0) {
            console.log("삼총사가 없습니다.");
        } else {
            console.log(answer)
        }
    })

};

solution();




//문제2
//고기,음료 계산하기 코드
function solution (n, k) {
    if(0<n && n<1000 && parseInt(n/10)<=k && k<1000 && Number.isInteger(n)===true && Number.isInteger(k)===true) {
        const money = 12000 * n + 2000 * (k - parseInt(n/10));
        return `${money}원`;
    } else {
        console.log("0<n<1,000 과 n/10(*소수점버림)<=k<1,000를 충족하는 정수값이 아닙니다.")
    }
};


//난수생성 => 고기,음료 계산하기 코드
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function makeNumber(callback) {
    const n = rand(1, 999);
    const k = rand(parseInt(n/10), 999);
    console.log (`n=${n} / k=${k}`)
    callback (n, k);
};

function solution () {
    makeNumber ((n, k) => {
        var money = 12000 * n + 2000 * (k - parseInt(n/10));
        console.log(`${money}원`);
    });
};

solution();



//문제3 
obj;


//문제4
string


//문제5
string
string2


//문제6 ??????
string
string


//문제7
<script>
const shy = document.getElementById("shy");

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

shy.addEventListener ("mouseover", () => {
    shy.style.top = `${random(200, window.innerHeight)}px`;
    shy.style.left = `${random(200, window.innerWidth)}px`;
})
</script>