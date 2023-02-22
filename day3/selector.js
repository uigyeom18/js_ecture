//인접 관계 선택자
// 직접 선택자로 요소를 먼저 선택 후 대당 요소와 가까이에 있는 요소를 선택

// 부모 (나를 감싸고 있는 요소)
//$("h2").prent().css("border","1px ssolid red");

//하위 요소
$("#wrap h1").css("color ", "blue");

//자식요소 . 선택한 요소를 기준으로 쩌장한 자식 요소만
//현재 #wrap의 자식은 #inner-wrap
//$("inner-warp > h1").css("color","red") 
//$("wrap").children("h1").css("color","red");
//$("wrap").children().css("border", "1px solid blue");

//$("#inner-warp > h1").css("color","red".css("border", "1px solid blue"))
//$("#inner-warp > h1".css({color: "red", boreder: "1px solid blue"}));

//형(이전) / 동생(다음) 요소
//$("#target").prev().css("color","red");
//$("#target").next().css("color", "green");
//$("#target").next().next().css("color","green");
//$("#target + li").css("color", "purple");

// 전체 형제 요소
//$("#target").siblings().css("color","red");

//범위 제한 전체 형(이전) / 동생(다음) 요소
//$("#target").prevUntil("contnet0").css("color","red");
//$("#target").nextUntil("contnet4").css("color","blue");

// 모든 상위 요소
//$("target").parents().css("border", "1px solid red");

//사위 요소 중 원하는 요소만
//$("target").parents("#inner-wrap").css("border", "1px solid red");

//closest("요소 선택")
//$("#target").cloest("ul").css("border","1px solid red");











