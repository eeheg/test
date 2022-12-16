//문제1
const array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
	console.log(array[i])
}

출력
1
2
3
4
5



//문제2
const array = [1, 2, 3, 4, 5]
for (let i = array.length; i >= 0; i--) {
	console.log(array[i])
}

출력
5
4
3
2
1



// 3번 문제 정답
const array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
		console.log(array[i], array[j])
	}
}

출력
1 2
1 3
1 4
1 5
2 3
2 4
2 5
3 4
3 5
4 5



// 4번 문제 정답
const array = [1, 2, 3, 4, 5]
for(let i = 0; i < array.length; i = i + 2) {
	for(let j = 0; j < array.length; j++) {
		console.log(array[i], array[j])
	}
}

출력
1 1
1 2
1 3
1 4
1 5
3 1
3 2
3 3
3 4
3 5
5 1
5 2
5 3
5 4
5 5



//5번문제
let isTrue = false;
let name;
if(isTrue === flase) {
	name = "거짓"
} else {
  name = "진실"
}

// 아래에 빈칸을 채워 주세요.
name = isTrue === flase ? "거짓" : "진실" ;



//6번문제
const root = ReactDOM.createRoot(document.getElementById("root"));

const obj = {
  lastLogin: "2022-12-06",
  name: "hun",
  phon: "010-1234-1234",
};

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="name">{props.name}</h1>
      <h2 className="phon">{props.phon}</h2>
      <h2 className="lastLogin">{props.lastLogin}</h2>
    </div>
  );
}

// 아래에 빈칸을 채워 주세요.
root.render(
  <Userinfo name={obj.name} phon={obj.phon} lastLogin={obj.lastLogin} />
);




// 7번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));

//const obj = {
//	lastLogin: "2022-12-06",
//	name: "hun",
//	phon: "010-1234-1234"
//}
Userinfo.defaultProps = {
  lastLogin: "2022-12-06",
  name: "hun",
  phon: "010-1234-1234",
};

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="name">{props.name}</h1>
      <h2 className="phon">{props.phon}</h2>
      <h2 className="lastLogin">{props.lastLogin}</h2>
    </div>
  );
}

// 여기에 defaultProps를 넣어주세요

root.render(
  <Userinfo name={obj.name} phon={obj.phon} lastLogin={obj.lastLogin} />
);

// 8번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="work">{props.author.work}</h1>
      <h2 className="UserInfo-name">{props.author.name}</h2>
    </div>
  );
}

Userinfo.propTypes = {
  author: PropTypes.shape({
    work: PropTypes.string.isRequire,
    name: PropTypes.string,
  }),
};

function Comment(props) {
  return (
    <div className="Comment">
      <Userinfo author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.object,
  text: PropTypes.number,
  date: PropTypes.string,
};

const comment = {
  author: {
    name: "hun",
    work: "효성직업전문학원",
  },
  text: 5,
  date: new Date().toLocaleDateString(),
};

root.render(
  <Comment author={comment.author} text={comment.text} date={comment.date} />
);




// 9번 문제 정답
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer = answer + numbers[i];
  }
  return answer / numbers.length;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function solution(numbers) {
  numbers.reduce((a, b) => {
    console.log(a, b);
    return a + b;
  });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reduce(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = func(num, arr[i]);
  }
}

reduce(numbers, (a, b) => {
  return a + b;
});

solution(numbers);

//
function reduce(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = func(num, arr[i]);
  }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reduce(numbers, (a, b) => {
  console.log(a, b);
  return a + b;
});
