// 1-1번 문제 정답
function add(v1, v2) {
    return v1*v2
  }
  
  // 1-2번 문제 정답
  const add = function (v1, v2) {
    return v1*v2
  }
  
  // 1-3번 문제 정답
  const add = (v1, v2) => {
    return v1*v2
  }
  
  // 2번 문제 정답
  Hello
  Hello Again
  Bye
  
  // 3번 문제 정답
  function add(v1, v2, callback) {
    return v1*v2
  }
  
  function call(v1) {
    console.log(v1)
  }
  
  add(1, 2, call)
  
  
  // 4번 문제 정답
  c
  a
  b
  b-callback
  a - callback
  
  // 5번 문제 정답
  add(1, 2, function (value // 여기 부분에 파라미터 추가) {
    console.log(value)
  })
  
  // 6번 문제 정답
  function add(v1) {
    let all = 0
    v1.forEach((e) => {
      all += e
    })
  }
  
  // 7번 문제 정답
  function A(v1, v2, callback) {
    const value = v1 + v2
    callback(value) 
  }
  
  function B(v1) {
    return v1 * v1
  }
  
  A(1, 2, (v) => {
    console.log(B(v))
  })
  
  
  function a(callback) {
    setTimeout(() => {
      console.log("a")
      b(function () {
        console.log("b-callback")
      })
      callback()
    }, 1000);
  }
  
  function b(callback) {
    setTimeout(() => {
      console.log("b")
      callback()  
    }, 1000);
  }
  
  a(function () {
    console.log("a-callback")
  })
  console.log("c")