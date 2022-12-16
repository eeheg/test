//문제1
function call(v1) {
    return new Promise((resolve, reject) => {
        resolve(v1[0] + v1[1]);
    });
}

call([1, 2]).then((value) => {
    console.log(value);
})




//문제2
const error = false; // true이면 에러가 있음 , false이면 에러가 없음

function promise() {
    return new Promise((resolve, reject) => {
        if (error === true) {
            reject("fail");
        } else {
            resolve("success");
        }
    });
}

promise()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });





// 3번 문제
function add(v1, v2) {
    return new Promise((resolve) => {
        resolve(v1 + v2);
    });
};

function min(v1, v2) {
    return new Promise((resolve) => {
        resolve(v1 - v2);
    });
};

function mul(v1, v2) {
    return new Promise((resolve) => {
        resolve(v1 * v2);
    });
};

function div(v1, v2) {
    return new Promise((resolve) => {
        resolve(v1 / v2);
    });
};


//((((3+1) - 2) * 4) / 2) 계산
add(3,1)
.then((v1) => min(v1,2))
.then((v1) => min(v1,4))
.then((v1) => div(v1,2))
.then((v1) => {
    console.log(v1);
}




// 4번 문제
function getComm(userId) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
        }
        };

        xhr.onerror = () => {
        reject(xhr.responseText);
        };

        xhr.open("GET", `http://localhost:3000/comment/get/user/${userId}`);
        xhr.send();
    });
};

function makeComment(cid, userId, nick, date, content, sort = "DESC") {
    const div1 = document.createElement("div");
    div1.className = "comment-wrap";

    const div1_1 = document.createElement("div");
    div1_1.className = "comment-first";
    const div1_1_1 = document.createElement("div");
    div1_1_1.className = "comment-first-left";
    const span1_1_1_1 = document.createElement("span");
    span1_1_1_1.innerText = nick;
    const span1_1_1_2 = document.createElement("span");
    span1_1_1_2.innerText = date;
    div1_1_1.append(span1_1_1_1, span1_1_1_2);
    div1_1.append(div1_1_1);

    const div1_2 = document.createElement("div");
    div1_2.className = "comment-second";
    const span1_2_1 = document.createElement("span");
    span1_2_1.innerText = content;
    div1_2.append(span1_2_1);

    div1.append(div1_1, div1_2);

    if (sort === "ASC") {
        document.getElementsByClassName("profile-bottom")[0].prepend(div1);
    } else if (sort === "DESC") {
        document.getElementsByClassName("profile-bottom")[0].append(div1);
    }
}

getComm(1)
.then((response) => {
    response.content.forEach((element) => {
    makeComment(
        element.cid,
        element.uid,
        element.nick,
        element.date,
        element.content
    );
    });
})
.catch((err) => {
    console.log(err);
});




// 5번 문제
function getFollowing(userId) {
return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
    }
    };

    xhr.onerror = () => {
    reject(xhr.responseText);
    };

    xhr.open(
    "GET",
    `http://localhost:3000/profile/following/${userId}?page=${fingPage}&count=${fingCount}`
    );
    xhr.send();
});
}

function makeFollow(userId, nick, sort) {
    const div1 = document.createElement("div");
    div1.className = "follow-content";

    const div1_1 = document.createElement("div");
    div1_1.className = "follow-top";
    const span1_1 = document.createElement("span");
    span1_1.innerText = nick;

    div1_1.addEventListener("click", () => {
        location.href = `http://localhost:3000/profile.html?uid=${userId}`;
    });

    div1_1.append(span1_1);
    div1.append(div1_1);

    if (sort === "ASC") {
        document.getElementsByClassName("profile-bottom")[0].prepend(div1);
    } else if (sort === "DESC") {
        document.getElementsByClassName("profile-bottom")[0].append(div1);
    }
}

getFollowing(1)
.then((response) => {
    response.following.forEach((element) => {
        makeFollow(element.u_id, element.u_nick, "DESC");
    });
})
.catch((err) => {
    console.log(err);
});


//6번문제
function solution(array) {
    var answer = 0;
    
    //[3,5,4,2,1] -> [1,2,3,4,5] 오름차순정렬
    array.sort((a, b) => {return a - b});

    answer = array[Math.floor(array.length / 2)]; //array가운데
    return answer;
}

//한줄풀이
function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)]
}




//문제7번
function solution(my_string) {
    var answer = 0;
    const my_array = my_string.split("");
    for (let i=0; i<my_array.length; i++) {
        const checkNumber = parseInt(my_array[i]);
        // if(checkNumber !== NaN) 동작X
        if(Number.isNaN(checkNumber) === false) {
            answer = answer + checkNumber;
        }
    }
    return answer;
}




// 삼항연산자
let condition = false;
let page;
if (condition === false) {
  page = 0;
} else {
  page = 1;
}
const page = condition === false ? 0 : 1;

const page2 = condition === false && 0;

// 만약에 아래와 같이 obj가 정의 되어 있습니다
const user = {
  name: "123",
};
// name이라는 변수를 넣어주시는데 user가 hun이면 이름을 그대로 넣고
// 아니면 unknown이라고 name의 변수에 넣어 주세요.


let name;
if (user.name === "hun") {
    name = "hun";
} else {
    name = "unknown";
}
const name2 = user.name === "hun" ? "hun" : "unknown";