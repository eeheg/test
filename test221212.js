//문제1
    // 1. render할 함수를 만든다.
    // 2. 전체적인 모양을 잡아 준다.
    //  -모양을 잡아 주고 자신이 없을 때는 함수를 만들면서 테스트 진행
    // 3. 함수를 어떻게 구현 할 것인지 구상
    // 4. 함수를 구현

const root = ReactDOM.createRoot(document.getElementById("root"));

function ListItem(props) {
  return <li>{props.value}</li>;
}

const App = () => {
  const [list, changelist] = React.useState([]);
  const add = () => {
    changelist([
      ...list, Math.floor(Math.random() * (45) + 1)
    ])
  }
  return (
      <div>
          <button onClick={add}>랜덤 숫자</button>
          <TextList items={list} />
      </div>
  )
}

const TextList = (props) => {
  const items = props.items;
  return (
    <ul>
      {items.map((value, index) => {
        return (
          <ListItem
            key={index}
            value={value}
          >
            {value}
          </ListItem>
        );
      })}
    </ul>
  );
}

root.render(<App />)



//문제2
const root = ReactDOM.createRoot(document.getElementById("root"));

function TextList(props) {
  return (
    <ul>
      {props.items.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
}

function App(props) {
  const [isLogin, changeIsLogin] = React.useState(false);

  // React.useEffect(() => {
  //   setInterval(() => {
  //     const tf = Math.floor(Math.random() * (2 - 0) + 0);
  //     console.log(tf);
  //     console.log(!tf ? "로그인 된 상태" : "로그아웃이 필요한 상태");
  //     changeIsLogin((prevValue) => {
  //       return !tf;
  //     });
  //   }, 3000);
  // });

  React.useEffect(() => {
    const id = setInterval(() => {
      const tf = Math.floor(Math.random() * (2 - 0) + 0);
      console.log(tf);
      console.log(!tf ? "로그인 된 상태" : "로그아웃이 필요한 상태");
      changeIsLogin((prevValue) => {
        return !tf;
      });
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });

  function click() {
    changeIsLogin((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <span>{!isLogin ? "회원가입을 해 주세요!" : "반갑습니다~"}</span>
      <button onClick={click}>{!isLogin ? "로그인" : "로그아웃"}</button>
    </div>
  );
}

root.render(<App />);



//문제3
const root = ReactDOM.createRoot(document.getElementById("root"));

function App(props) {
	const firstValue = [
    "홍길동",
    "김아무개",
    "이아무개",
    "최아무개",
    "박아무개",
  ];

  const inp = React.useRef(null);

  React.useEffect(() => {
    inp.current.value = 
      firstValue[Math.floor(Math.random() * (firstValue.length - 0) + 0)];
  });

  return (
    <div>
      <input ref={inp}/>
    </div>
  );
}

root.render(<App />);


//문제4
const root = ReactDOM.createRoot(document.getElementById("root"));

    function TextList(props) {
      return (
        <ul>
          {props.items.map((value, index) => {
            return (
              <li key={index}>
                <span>{`이름 : ${value.name}, 상태 : ${
                  !value.status ? "로그인" : "로그아웃"
                }`}</span>
                {!value.status ? (
                  <button
                    onClick={() => {
                      props.reStatus(index);
                    }}
                  >
                    로그아웃 시키기
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.reStatus(index);
                    }}
                  >
                    로그인 시키기
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      );
    }

    function TextArea(props) {
      return (
        <div>
          <span>{`현재 온라인 한 고객의 수는 ${props.count}명 입니다.`}</span>
        </div>
      );
    }

    function InputArea(props) {
      return (
        <div>
          <input type="text" onChange={props.change} value={props.value} />
          <button onClick={props.add}>추가</button>
        </div>
      );
    }

    function App(props) {
      const user = [
        {
          id: 0,
          name: "홍길동",
          status: true,
        },
        {
          id: 1,
          name: "김아무개",
          status: false,
        },
        {
          id: 2,
          name: "이아무개",
          status: true,
        },
        {
          id: 3,
          name: "최아무개",
          status: false,
        },
        {
          id: 4,
          name: "박아무개",
          status: true,
        },
      ];

      const [users, changeUsers] = React.useState(user);
      const [value, changeValue] = React.useState("");

      const addUser = () => {
        changeUsers([
          ...users,
          { id: user.length, name: value, status: "online" },
        ]);
        changeValue("");
      };

      const reValue = (e) => {
        changeValue(e.target.value);
      };

      const reStatus = (index) => {
        changeUsers(
          users.map((user) =>
            user.id === index ? { ...user, status: !user.status } : user
          )
        );
      };

      const countOnline = () => {
        console.log("이게 반복 됩니다.");
        return users.filter((user) => user.status === true).length;

        // map은 배열을 돌면서 무조건 계산을 해서 return을 해줍니다.
        // 만약에 return을 안하더라도 undefined로 return이 됩니다.
        // filter는 내가 원하는 조건만 걸러 줍니다!
        // Array.filter((value) => 조건문)
        // 조건문이 true인 배열의 값만 따로 모아서 배열을 return 해 줍니다.
        // const array = [1,2,3,4,5]
        // array.filter((value) => value <= 3)
        // [1,2,3]
      };

      const memo = React.useMemo(() => {
        countOnline();
      }, [users]);

      return (
        <React.Fragment>
          <InputArea value={value} change={reValue} add={addUser} />
          <TextArea count={memo} />
          <TextList items={users} reStatus={reStatus} />
        </React.Fragment>
      );
    }

    root.render(<App />);



//문제5
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return answer = numbers[0] * numbers[1];
}


//문제6-정답
function solution(letter) {
  var answer = "";
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  const newArray = letter.split(" ");
  newArray.forEach((value) => {
    answer = answer + morse[value];
  })
  return answer;
}

//문제6-내풀이
function solution(letter) {
  var arr = letter.split(' ');
  const morse = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for(var i=0; i<arr.length; i++) {
    for(var j=0; j<26; j++) {
      if(arr[i] === morse[j]) {
        arr.splice(i,1,alphabet[j]);
      }
    }
  };
  return (answer = arr.join(""));
};

solution(".... . .-.. .-.. ---");