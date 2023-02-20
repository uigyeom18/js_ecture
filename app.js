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












































