document.write("js 를 시작했어요!");

// 한줄 주석 

/*
영역 주석
*/

//1. js 대소문자 구분
// 날짜 객체
new Date();
// New date(); <- 컴파일 에러

//2. 코드 한 줄 작성 후 세미콜론
document.write("hi");
document.write("bye");

// 3. 큰따옴표 작은 따옴표 겹침 주의 
document.write("선생님이 '필기를 해' 라고 말씀하셨다");
document.write("선생님이 \"필기를해\"라고 말씀하셨다");

// 변수 선언

var age1 = 10; // <- 이제 사용하지 맙시다

//es6(ECMA2015)
//변수 -> 재할당(수정) 가능/불가능

//constant :  상수 , 수정 절대 불가능!
//생성 동시에 할당 필수
const age2 = 10;//
//age2 =23; (에러 발생 , 재할당 불가능한데 했음)

// Let : 수정 및 재할당 자유로움
let age3 = 10; // 
age3 = "20살 부터 성인";

console.log(age3); // 브라우저의 console 영역에 문자열 출력

// JS 에서 사요하는 자료형
//1. 문자형 ->String
let firstNmae ="천";

//문자열 데이터에 HTML 태그를 포함하여 출력시 ,  태그로 잘 인식
let lastName = "<h1>예지</h1>";


//2. 숫자형 - > Number
let age4 = 10;
let age5 = Number("18"); // 문자열 데이터 (숫자만 있는) -> NUmber 자료형으로 변환!

let age6 = Number("18"); // 문자열 데이터 (숫자만 있는) -> NUmber a Number(NaN)으로 변환

//3. 논리형 - > Boolean (ture/false)
let isLogined = true;
isLogined = false;

let check = Boolean("곧 쉬는 시간");
//대부분 트루
// null , 0, undefind, ... -> false

//4. 빈 데이터
let tmp; // 의도 x
let tmp2 = null; // null : 변수에 저장도니 데이터를 비울 때 의도(o) 

// 자료형 typeof
// string , number , boolean , undefined
// typeof NaN -> Number
// typeof null -> ofject ( 객체) ( null)이라는 이름의 자료형XXXXXX

let $num1, _num2, num3; // 숫자로 시작하는 것 x

// 연산자
// 산술 연산자 : + - * / %

console.log(typeof(3+"3")); // 연산자 : 하나라도 문자열이 등장 시 문자열 결함으로 작동

// 대입 연산자 : = += -= *= %= /=
let test = 1;
test += 2; // test = test +2;
console.log(test);

//증감 연산자 : ++ -- 
test = 1;
console.log(test++); // 후위 증감, console.log() 실행전 값이 증가
test = 1;
console.log(test--); // 전위 증감, console.log() 실행전 값이 증ㄱ


// 비교 연산자 : > < >= <= == != === !==
console.log(3=="3"); //true
console.log(3 === "3")//false;

// 논리 연산자 : && || !
// && : 하나라도 flase 가 존재하면 flase
// || : 하나라도 true 가 존재하면 true
// ! : 반대값을 반환
test = 1;
// && 나 || 연산자의 평가 결과는 반드시 불리언 값이 아닐 수도 있다

//첫번째 피 연산자 "dog"의 경우 , true값 
// 하지만 이 시점에서는 아직 && 연산을 수행할 수가 없다 그래서 우리는 두번쨰 피연산자 " cat" 으로 넘어감
// 두번째 피연산자 && 연산자 표현식의 평가 결과를 결정
// 이때의 && 연산자는 논리 연산 결과를 결정하는 두번쨰 피연산자 , "cat"을 그대로 반환 
console.log("dog" && "cat");

// 단축 평가 : 표현식을 평가하는 도중에 평가 결과가 확정된 경우  , 나머지 평가 과정을 생략


// 단축평가
//console.log(test ===1 ||flase || "바보");
console.log(false || "미완료");

//연산자  우선 순위
//1.()
//2. ++ -- !
//3. 산술 4.비교 5.논리 6. 대입
console.log((3+4)*2);

//삼항 조건 연산자
// 조건식 ? 조건식이 참일때 사용량 결과값 : 거절할때 사용량 결과값
test =1;
console.log(test > 1 ? "맞습니다":"틀립니다");

// 제어문 : 프로그램의 흐름을 제어
// 조건을 만족하는 여부에 따라 흐름을 제어하는 조건문: if else if else
// 변수에 일치하는 경우에 따라 코드를 제어하는 선택문 switch
// 특정 코드를 여러 번 반복해서 실행할 수 있는 반복문 for , while , do while

// 조건문
if(1 > 3){
    // 실행문
}else if(1>2){
    // 실행문
}else if(1>1){
    // 실행문
}else{
    //
};

//조건식 부분에 true/false가아닌 요소가 오더라도 , true/falsy에 ㅏㄸ라 처리함
if(null){
    if(true){
    console.log("오늘 하루도 얼마 안남았다");
    }
} else{
    console.log("falsy 한 친구들")
}

// 선택문 switch
let flag = 1;
switch(flag){
    case 1:
        console.log("첫번쨰 조건");
        break;
        case 2:
            console.log("두번째 조건");
            break;
            default:
                console.log("기본값");
}
// 반복문
// 조건식을 만족할 때 까지 계속 반복
flag = 1;
while(flag < 5){
    console.log(flag)
    flag++;
}

// do while : 반드시 한번은 코드를 실행하고 조건식을 검사
do{
console.log(flag);
flag++;
}while(flag < 5);

//for문 : 조건식을 만족할때까 계속 반복
// for(초기값; 조건식; 증갑식;){}
console.log("________________________________")
for(let i =0; i < 10; i++){
    if(i==5){
        break;
    }
    if(i%2==0){
    console.log(i);
    }
}

console.log("------------------")

// 객체
// smartphone. turnOn();
//console.log(smartphone.company);


// 자바스크립트 객체 종류
// 1. 재장 객체 -> String , data , Array, Math


// 가장 기본 객체 생성
const sample = new Object();


// 날짜 정보 객체
const date = new Date();
console.log(date.getDay()); // 요일 정보 0(일요일) ~ 6(토용일)
console.log(date.getMonth());
console.log(date.getTime());

//set~~~~ : 날짜 정보를 수정할 때

// 오늘 부터 연말까지 며칠이 남았을까? -> JS 계산
const lastDay = new Date(2023,11,31)// 2023-12-31
let diff = lastDay.getTime() - date.getTime();
diff = Math.ceil(diff / (1000*60*60*24));
document.write("<h3>연말까지"+diff+"일이 남았습니다</h3>")


// 수학 객체 :Math
Math.abs()//절대값
Math.max(2,3,4,5,6,100); // 넘겨 받은 숫자 중 가장 큰 값
Math.min(1,2,3,4,5) // 넘겨받은 숫자 중 가장 적은 값
Math.pow(2,4); // 2^4(숫자 제곱값)

//0~10까지의 난수
Math.round()*10;//소수점 첫번쨰 자리에서 반올림
console.log(Math.ceil(Math.random()*10));

console.log(Math.floor(Math.random()*31)) // 0~ 30
console.log(Math.floor(Math.random()*31)+120);

//배열 여러개의 데이터를 묶어서 저장하고자 할 때
// 
// 방식 1 :
const arr = new Array();
arr[0] = 1;
arr[1] = 2;

//방식 2 :
const arr2 = new Array(1,2);

//방식 3 : 
const arr3 = [1,2];

//Array에서 제공하는 메서드 및 속성
console.log(arr.join(" "))// 배열 데이터를 문자 기준으로 이어 붙여서 반환해주는 명령어

arr.reverse();
arr.sort();

let startIdx = 0;
let endIdx = 1;
console.log(arr.slice(startIdx, endIdx));

arr.concat(arr2); // 배열 2개를 하나로 결합
arr.pop(); // 마지막 인덱스의 데이터를 반환 후 삭제
arr.push(3); // 마지막 인덱스에 새로운 데이터 추가 

arr.shift(); // 첫번째 인덱스이 데이터를 반환 후 삭제
arr.unshift(); // 첫번째 인덱스에 새로운 데이터를 추가

arr.length; // 배열의 길이 값 (마지막 인덱스값)
//arr.length =10; // -> 비열의 길이를 10간으로 늘려버림

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}



Math.random(); // 0~1사이의 난수
Math.ceil();//소수점 첫번쨰 자리에서 올림
Math.floor(); // 소숫점 첫번째 자리에서 내림

Math.PI;
Math.sqrt(4); // 제곱근 값

//문자열 String

//2. qmfkdnwj rorcp ahepf (BDM)
//window, screen, location, history, navigator.....

// window.location.href = "https://www.naver.com"

//3. 문서 객체 모델 (dom): html 문서 구조
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       








































