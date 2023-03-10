// 문자열 String : 문자형 데이터을 객체로 취급

// 문자열 객체 생성
let str1 = "hello";
str1 = new String("hello world");

console.log(str1.charAt(1)); // 인덱스 번호에 해당하는 문자 변환
console.log(str1[1]); // 마치 배열처럼 처리 가능

// 문자열에서 왼쪽에서 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호
// 없으면 -1 반환
console.log(str1.indexOf("world"));

// 오른쪽에서부터 일치하는 문자를 찾는다
console.log(str1.lastIndexOf)

// 문자열에서 왼쪽에서 일치하는 문자를 찾아 제일 먼저 찾은 문자 반화
// 없으면 null 반환
console.log(str1.match("world"));

//왼쪽부터 원하는 문자를 찾아, 제일 먼저 찾은 문자를 치환
// 원본을 건드리지 않고 새로운 문자열 반환
//str1 = str1.replace("world","javascript")
console.log(str1.replace("world","javascript"));

//indexOf() : 문자열과 일치하는 데이터 
// vs
// search() : 문자열, 정규표현식(문자 패턴)과 일치하는 데이터
// 특정 문자를 포함하는 여부 체크 -> (ex, 비밀번호에 허용되는 특수 문자 서리즈)
console.log(str1.search("world"));

// slice(a,b) : a 개의 문자를 자르고, b번째 이후에 문자를 자른 후남은 문자 반환

const str = "The quick brown fox jumps over th lazy dog.";
console.log(str.slice(31));
console.log(str.slice(4,19));
console.log(str.slice(-4));
console.log(str.slice(-9,-5));

// sebstring(a[, b]) : 문자열 a ~ b 까지를 반환 (b번째 인덱스는 포함되지 않음)
// 원본 건들이지 않음 새로운 문자열 반환
// b를 입력하지 않는 경우 , 끝까지~
console.log(str.substring(4,9));

// 구분 문자를 기준으로 문자 데이터를 쪼개서 배열에 저장 후 반환
const result = str.split(" ");
// 원본건들이지 않음 새로운 문자열을 반환
console.log(result);

// 문자열 -> 전부 대문자
console.log(str1.toUpperCase());
// 문자열 -> 전부 소문자
//console.log(str1.toLowerCase());

// 글자 수 속성(필드)
console.log(str1.length); 

console.log(str1.concat(" 2023!"));
console.log(str1+" 2023!");

//trim() : 문자열의 양쪽 공백을 제거
const str2 = "               hello              ";
console.log(str2.trim());

//2. 브라우저 객체 모델 (BDM)
// window: 가장 최상위 객체
// documnet, screan, window, lacation, history, nacigator ....
//window 객체의 메서드 종류
//url 전달받은 페이지를 새 창에 표시!
//
// window.open("https://www.naver.com",
// "naver",
// "width =500,height=500, left=50,top=50,scrollbars=no");

// window.alert("로그인을 먼저 해주세요!");

//prompt("전달할 메세지", [,"기본값"]) - > 문자열 데어터 반환
// const uswerinput =prompt("여러분의 이름은", "디지텍고등학교 학생");

//confirm("전달할 메세지") ->boolean 데이터 반환
// const userConfirm = confirm("둘중하나만 골라 yes or no");

//setInterval(함수, 시간) : 계속해서 일정 시간 간격으로 함수를 호출 
//setTimeout(함수, 시간) : 단 한번 일정 시간이 흐른 후 함수를 호출

function sayHello() {
    console.log("안녕하세요")
}

const sayHelloOneSec = setInterval(sayHello, 1000);

// clear~ 를 통해 함수 제거 가능
clearInterval(sayHelloOneSec);

//screan : 사용자의 모니터 정보 (pc , phone , ...)
console.log(screen.width);  
console.log(screen.height);


//location : 브라우저와 관련된 현재 url에 대한 정보 , 새로고침 메서드를 제고
console.log(location.href);// 현재 접속중인 url
console.log(location.host);// 호스트 (서버주소) & 포트번호 변환
//location.reload(); 새로고침 무한 새로고침

//location.href 지정하여 화면 이동 가능
//ondeviceorientation.href = "https://www.naver.com"


// history : 사용자가 방문한 사이트의 기록 , 이전 방문, 다음 방문 한번씩 제어가 가능함
//history.length : 방문기록에 저장된 목록 개수 
history.back();// 이전 방문 사이트로 이동 (만약 x 이동안함)
history.forward(); // 방문한 사이트 중에 이동 (만약 x 이동안함)


// naviator : 현재 사용자가 사용하는 브라우저 정보 , 운영체제의 정보
navigator.language;
console.log(navigator.onLine); // 유저가 온라인 여부 반환(boolean)

//3. 문서 객체 모델 (DOM) : HTML 문서 구조


// 함수 : js 코드의 묶음 . function 키워드를 사용하거나 , arrow 함수 형태
// 데이터를 전달받아 사용할 수 있으며, 실행 결과를 반환할 수도 있다



//1. 함수 정의 방법
function sayHi(){
    // .....
    console.log("hi1")
}

// 2. 익명 함수 
const sayHi2 = function() {
    console.log("hi2")
}

//3. es6에서 등장한 화살표 함수

const sayHi3 = () => {
    console.log("hi1")
}

sayHi();
sayHi2();
sayHi3();


//4. function 생성자
// const sayHi4 = new Function('name', 'console.log("hi)')

// 매개변수 : 함수를 실행하기 우히 필요한 값을
// 함수 외부에서 내부로 전달하기 위해 사용

// 매기변수 parmeter -> 함수를 정의할 때 선언, 함수 내부에서 변수 처럼 사용
// 인수 argumnets ->  함수를 호출할 때 지정. 개수 , 타입에 재한 X

function add2(x,y){
    x = x || 0;
    y = y || 0;
}



function add(x,y){
    console.log(x+y);
    return x+y;
}

// 함수 호출
// console.log(add(1,2));

//JS에서의 함수-> 매개변수의 개수 체크 X 인수의 개수X
// 인수가 부족(덜 전달) -> 함수 내부에서는 부족한 데이터는 undefined 처리.
// console.log(add(1));
// 인수가 과함 (더 전달) -> 무시 ( 버려지지 않고 , arguments  객체에 저장)
// console.log(add(1,2,3,));


// function f2(...params){
//     console.log(parmas);
//    return Array.from(argments) params.filter((data) => data >=5)
// }
// console.log(f2(1,2,3,4,5,6,7));
console.log(...[1,2,3]);
console.log(..."goodbye~~");

// 1.함수 호출시 인수에서 사용하는 경우
const numbers= [1,2,3,4,5,56,76,4,3,3,4,56,6,7,7,6]
console.log(Math.max(numbers));
console.log(Math.max(...numbers));

// ~ESC


// 2. 배열 내부에서 사용하는 경우
console.log([1,2].concat([3,4]));
const arr = [...[1,2], ...[3,4]];
console.log(arr);

const arr1 = [1,4];
const arr2 = [2,4];

arr1.splice(1,0,...arr2); // [1,[2,3]4]

const origin = [10,20]
const copy = origin.slice();

const trendCopy = [...origin];

const obj1 = {x:1 , y:2};
const copyOfj1 = { ...obj1};

const merged = {x:1, Y:2,...{a:3,b:4}};

















































