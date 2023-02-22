// 탐색 선택자
// 위치 탐색 선택자는 배열의 인덱스 값을 통해 접근

//first / last 선택자

//$("#menu li.first").css("background-color", "blue"); // [0]
//$("menu li.last").css("color","red"); // [-1]

//even / odd 선택자
//$("#menu li:even").css("color","red"); // 짝수 , 인덱스는 0부터 시작~
//$("#menu li:odd").css("color","blue"); // 홀수 , 인덱스는 0부터 시작~

//nth-child(숫자n) 선택자 : 선택한 요소의 무리 중 지정된 숫자의 요소 선택
//$("#menu li:nth-child(2n)").css("color","black");
//$("#menu li:nth-child(2n+1)").css("color","blue");

// nth-last-of-type(숫자) 선택자
//$("#menu li:nth-last-child(2)").css("color","blue");

// equal = 같다 (eq)
// less than 작다 (lt)
// greater 더 크다 (gt)

//eq(index) : 선택한 요소 중 지정한 인덱스 요소만
//it(index) : 선택한 요소 중 지정한 인덱스 보다 작은 요소만!
//gt(index) : 선택한 요소 중 지정한 인덱스 보다 큰 요소만

//$("#menu li").eq(2).css("color","skyblue");
//$("#menu li:eq(2)").css("color","skyblue"); // [2]번쨰 요소
//$("menu li:lt(2)").css("color","skyblue"); // ~[2]번쨰 요소 전까지
//$("#menu li:gt(2)").css("color","violet");// ~[2]번쨰 요소 이후

//first-of-type / last-of-type : 선택한 요소 중 첫번쨰 / 마지막 요소만
// $("#menu li:fisrt-of-type").css("color","salmon");
// $("#menu li:last-of-type").css("color","skyblue");

// only-child : 부모 요소에 단 하나뿐인 자식 요소일때만 
//$("li:only-child").css("border", "1px solid salmon");

//slice(startIdx, endIdx): 선택한 요소의 구간을 지정
//startIdx는 포함 , endIdx는 미포함
//$("#menu li").slice(1,3).css("background-color", "salmon");

//jQuery에서 제공하는 배열 관련 메서드


//배열에 저장도니 데이터 만큼 function 반복 실행(for문 역할)
// each() / $.each()
//$$("요소선택").each(function);
//$.each($("요소선택"), function);

const obj = [
    {
    area: "서울",
    name: "디지텍고학생",
},
{
    area: "대전",
    name: "예지",
},
{
    area: "부산",
    name: "갈매기",
    },
];

$(obj).each(function(i, data){
    console.log(i + ": ",data);
});

//li 태그가 담겨있는 배열을 순회
$.each($("#menu2 li"), function(i, data){
    console.log(i + ": ",data);
});

//매개변수가 1개로 this 키워드 사용
// 인덱스로 접근한 데이터 -> $(this)
$.each($("#menu2 li"), function(i){
    console.log(i + ": ",$(this));
});

// $.map() : 배열에 저장된 데이터 수만큼 메어드를 반복 실행
// 메서드에서 반환된 데이터를 가지고 새로운 배열을 만들어서 반환<

//obj라는 배열에서  area가 "대전"인 요소만 갖는 배열을 생성
//filter 기능과 비슷하지만, 기존 데이터를 응요한 새로운 데이터를 생성할때 goood
//map함수에 전달하는 콜백함수(데이터,인덱스) { 조건에 맞는 데이터 반환} 
const result1 = $.map(obj, function(data,idx){
    if(data.area == "대전"){
        return data;
    }
});

const result2 = $.map(obj, function(data,idx){
    if(data.area == "대전"){
        return {...data,age:20};
    }
});
// $.grep() : 배열에 저장된 데이터 수만큼 메서드를 반복 실행
//인덱스 오름차순으로 배열의 데이터를 불러옴
// 메서드의 반환값이 true면 데이터를 새 배열에 저장해서 새로운 배열을 반환
//filter기능과 동일 (기존 데이터를 필터링할 수만 있고 응용할 수 없다)
const newArr = $.map(function () {
    if(data.area == "대전"){
        return false;
    }else{
        return true;
    }
});

// $.inArray() : 배열 안에 데이터가 있는가? -> 존재한다면 해당 데이터의 인덱스 값
// $.inArray() : 찾고자 하는 데이터가 배열 객체면 true / 아니면 false 
// $.merge() : 두 배열을 하나의 객체로 결합

const areas = ["서울","대전","부산","전주"];
const contries = ["한국","일본","스페인","파리"];
const tmpObj = {name: "예지"};

const targetIdx = $.inArray("대전",areas);
console.log($.inArray(areas));

$.merge(areas, contries);

//$("요소").index("찾고자 하는 데이터")
const idxNum = $("#menu2 li").index($("#target"));
console.log(idxNum);

















































































































































































































































