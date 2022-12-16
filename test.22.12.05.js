let confition = true / false;
let name;
if (confition === true) {
  name = "트루";
} else {
  name = "팔스";
}

let name2 = confition === true ? "트루" : "팔스";

// 2번문제 정답
const param = 5;
let confition = (v1) => {
  return v1 % 2;
};
let name;
if (confition(param) === 0) {
  name = "짝수";
} else {
  name = "홀수";
}

let name2 = confition(param) === 0 ? "짝수" : "홀수";

// 3번 문제
const param = 9;
let confition = (v1) => {
  return v1 % 2;
};
let name;
if (confition(param) === 0) {
  if (param >= 10) {
    name = "10보다 큰 짝수";
  } else {
    name = "10보다 작은 짝수";
  }
} else {
  name = "홀수";
}

let name2 =
  if (confition(param) === 0) {
    if(param >= 10) {
      "10보다 큰 짝수"
    } else { "10보다 작은 짝수"}
  } else {
    "홀수"  
  };
  
// 4번 문제
router.get("/follower/:uid", (req, res) => {
  let { page, count } = req.query;
  if (page === undefined) page = 0;
  if (count === undefined) count = 10;
}
  
const req = {
	body: {
    page: 0,
    count: 5
	}
}

let page = if (req.body.page === undefined) {
  page = 0
} else {
  page = page
}
let page = req.body.page === undefined ? 0 : page

let count = if (req.body.count === undefined) {
  count = 0
} else {
  count = count
}
let count = req.body.count === undefined ? 0 : count

혹은

const { page = req.body.page === undefined ? 0 : req.body.page, count = req.body.count === undefined ? 0 : req.body.count } = req.body;

// 5번 문제 정답
<div id="profile" class="wrap-left-profile">
  <span>PROFILE</span>
</div>

const Span = () => {return <span>PROFILE</span>}
const Div = () => {
    return <div id="profile" className = "wrap-left-profile">
        <Span />
    </div>
}


// 6번 문제
<div id="following"> -> Div
  <span class="count" id="following-count"></span> -> Span1
  <span>팔로잉</span> -> Span2
</div>

const Span1 = () => {
  return <span className="count" id="following-count"></span>
}
const Span2 = () => {
  return <span>팔로잉</span>
}
const Div = () => {
  return <div id="following">
    <Span1 />
    <Span2 />
  </div>
}

// 7번 문제 정답
<div class="wrap-left-search"> -> Div
  <img src="./images/search.png" /> -> Img
  <input type="text" id="search" placeholder="Search" /> -> Input
</div>

const Img = () => {
  const src = "./images/search.png"
  return <img src={ src } />
}
const Input = () => {
  return <input type="text" id="search" placeholder="Search" />
}

const Div = () => {
  return <div class="wrap-left-search">
    <Img />
    <Input />
  </div>
}

// 8번 문제
function solution(n, t) {
  return n * (Math.pow(2,t));
}

function solution(n, t) {
  return n * (2 ** t);
}

function solution(n, t) {
  var answer = n;
  for (let i = 0; i < t; i++) {
    answer = answer * 2
  }
  return answer;
}




// 1205 9번 문제 정답
// Set   제일 쉬운데 뭔가 개념을 안친숙 할 수 있어요
// indexOf   그나마 이게 제일 낫습니다
// for => array  힘들어요
// for => object   // array보다는 쉽지만 indexOf보다는 어려워요
const my_string = "people";
function solution(my_string) {
  var answer = "";
  // 같은 문자가 없으면 다른 배열에 추가 해 주자!
  const arr1 = []; // 고유한 문자 저장
  const arr2 = my_string.split(""); // 받은 문자 저장
  for (let i = 0; i < arr2.length; i++) {
    let check = false;
    // arr1에서 arr2의 같은 것을 찾으면 그냥 넘어가고 찾지 못하면 arr1에 추가
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        check = true;
      }
    }
    if (check === false) {
      arr1.push(arr2[i]);
    }
  }
  answer = arr1.join("");
  return answer;
}
