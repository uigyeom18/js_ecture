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
















