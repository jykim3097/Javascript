# Javascript

21-05-26    
## 여는 말
* 요즘 많이 사용되는 jquery, view, ~~angular~~, react +a 등의 라이브러리를 갖고 있다
* node.js와 같이 서버를 구현하는 js도 있기 때문에 중요도가 높다

## 개요
* 인터프리터 언어라 표준이 정해져 있지 않다
* 그래서 사용 전에 표준을 정해야 한다
	* ES5, ES6 문법이 있다
	* ES5를 많이 사용하는데
	* 요즘 많이 사용하는 react 같은 라이브러리는 ES6 표준을 사용한다
* ES5를 배워야 ES6를 더 잘 배울 수 있기 때문에 __ES5를 배운다__

### 컴파일 언어 VS 인터프리터 언어(스크립트 언어)
* 컴파일 언어 - JAVA : 코드를 class파일로 컴파일해서 해석하는 언어
* 스크립트 언어 - 브라우저와 대화하듯 코드를 작성하면 바로 실행되는 언어
    
* JS는 객체지향적 느낌이 있는 인터프리터 언어이다.
* 객체지향 언어는 클래스가 있는데 JS는 없었는데 생겼다
* 그래서 객체지향의 특징을 가진 인터프리터 언어가 되었다
* 모든 브라우저에 스크립트 언어 해석기(엔진)가 있기 때문에 부가적으로 설치할 게 없다
	* 익스플로어 같은 예전 브라우저에서는 해석이 안되는 문제가 있기도 하다
	* 크롬이나 엣지에서는 잘 돌아간다
* 함수기반의 스크립트언어
	* JAVA가 할 수 있는 일은 다 할 수 있다

### JS의 특징 (인터프리터 언어의 특징)
* 타입체크가 철저하지 않다
* 순수 스크립트의 사용을 선호하게 되며 JAVA보다 확장성이 뛰어나다

## 자바스크립트의 범주
* 1단계 : 기초가 되는 데이터, 연산자, 제어문 함수
* 2단계 : 문서 제어(DOM), 브라우저 엔진 제어(BOM)
	* 요거를 잘 해야된다

## 외부 script sheet 선언 
```javascript
<script type="text/javascript" src="script.js"></script>
```
* 위와 같이 선언되고 type 속성은 생략할 수 있다.
* script sheet에는 별도의 태그 없이 바로 코드를 입력한다.
* 어느 위치에서 선언되느냐에 따라 실행 순서가 달라진다.
	* <head> 에 선언하면 가장 먼저 실행되고,
	* <body> 가장 아래에 선언하면 나중에 실행된다.

## 변수
### 변수 선언
* var 키워드 : 같은 이름으로 변수를 선언할 수 **있다**
```javascript
var a = 1;
var a = 2;
// 위와 같이 중복으로 같은 변수에 값을 저장할 수 있지만, 이렇게 사용하지 않기로 한다.
// 내부적으로 a에 새로운 값이 저장되는 게 아니라 새로운 a에 새로운 값이 저장되는 것이다
```
* let 키워드 : 같은 이름으로 변수를 선언할 수 **없다**
	* ES6문법에 추가된 변수

### 데이터 타입
* 문자가 가장 강한 타입이다.
	* 문자 + 숫자 = 문자
	* 타입을 명확하게 명시하지 않기 때문에 문자끼리도 비교가 된다
* 변수의 타입을 설정하지는 않았지만 암묵적으로 갖고 있는 타입이 있다
	* typeof로 확인 가능
* boolean : 0은 false이고, 0을 제외한 나머지는 모두 true이다
* undefined
	* 정의되지 않은 변수
	* *변수를 선언했지만 **초기화를 하지 않은** 경우*
* null
	* *값은 저장했지만 존재하지 않을 때*
	* undefined와 비교해서 차이를 명확하게 알아야한다
* 참조 타입 : 배열 [], 객체 {}

## 연산자
* 비교 연산자
	* == : 값 자체만 비교
	* === : 값, *데이터 타입*까지 동일한지 비교
* 논리 연산자
	* &, | 와 같이 한개로만 작성되면 비트 연산을 한다

## 배열
* js에서 배열에는 타입을 혼용해서 담을 수 있다
```javascript
 var arr3 = [1,2,3,'a','b', , 4,5];
 ```
 * 배열을 객체 형식으로 선언할 수도 있다
 ```javascript
 var arr = new Array();
 
 var arr2 = new Array(10); //파라미터 1개일 때는 '배열의 크기'를 지정
 var arr3 = new Array(1,2,3); //파라미터 n개일 때는 크기 n짜리 배열에 '초기화'까지 한 것
 ```
 * 배열의 함수
 ```javascript
 //push() : 배열의 마지막에 값을 추가
 arr.push(1,2,3);

 //pop() : 배열의 마지막 값을 제거
 arr.pop();

 //unshift() : 배열의 맨 앞에 값 추가
 arr.unshift(100);

 //shift() : 배열의 맨 앞 값 제거
 arr.shift();

 //splice(인덱스, 제거할 요소, 추가할 요소)
 arr.splice(1,1); //1번 인덱스부터 1개 삭제
 arr.splice(0,2); //0번 인덱스부터 2개 삭제
 arr.splice(1,1,1); //1번 인덱스부터 1개 삭제하고 1 추가
 arr.splice(1,0,'가'); //1번 인덱스에 '가' 추가

 //sort()
 arr.sort(); //먼저 push한 순서대로, 오름차순으로 정렬

 //reverse() - 순서 뒤집기
 arr.reverse();

 //indexOf(), lastIndexOf : 값의 탐색
 arr.indexOf('가'); //앞에서부터 탐색
 arr.lastIndexOf('a'); //뒤에서부터 탐색
 ```

## 반복문
```javascript
for(var i=1; i<=10; i++) {..} //일반 for문
for(var i in arr) {...} //향상된 for문
```



## 함수(선언적 함수)
* 1급 최상위 함수
* 메서드의 기능보다 더 많은 기능을 한다
    
* js는 타입이 중요하지 않기 때문에 **매개변수에는 개수의 의미만 있다**
    
* return을 적어도 되고 적지 않아도 된다
* return이 없는 함수는 자동으로 undifined 타입이 된다
    
* 함수의 호이스팅이 가능하다
	* 호이스팅이란? 코드를 아래에서 작성하고 위에서 호출하는 것

21.05.26    
### 익명 함수
* _변수에 함수 데이터를 저장해_ 변수를 마치 함수처럼 사용하도록 만들어준다.
* 호출은 변수 선언 이후에 해야 한다 = 호이스팅이 안된다.

```javascript
var a = function() {
	console.log("a");
}
a();
```

* 화살표 함수(람다식)를 사용할 수 있다 **(ES6 문법)**
	* 단일 명령문일 경우 {}를 생략할 수 있다.
```javascript
var a = function() {
	console.log("익명함수");
}

var a_arrow = () => console.log("익명 함수 람다식");
```

### 가변 인자
* 매개변수를 2개 받는 메서드에 매개변수를 2개 이상 넘겨도 문제가 발생하지 않는다.
* 더 많은 매개변수를 보내도 매개변수는 다 받아오면서 메서드를 실행한다.
* 즉, js에서 매개변수는 큰 의미가 없고, 단순히 인자로 들어오는 값에 이름을 붙여 사용하는 것이다.
* 이렇게 메서드에 전달되는 매개변수는 arguments 객체에서 확인할 수 있다.

### 즉시 실행 함수
* 익명함수 형태로 만들고, 이 익명함수를 큰 소괄호를 감싸고, 호출 구문 **();**을 붙인다
* 사용 이유?
	* _페이지 시작 시_ 호출할 함수를 기술한다
```javascript
function func1() {
	console.log("1번");
	return "1번";
}

function func2() {
	console.log("2번");
}

//즉시 실행 함수
(function() {
	var result = func1();
	func2(result);
})();
```

### var와 let
* var : **함수 level scope**
	* 변수의 중복 선언이 가능하다
	* **함수 블록 내부에만** 지역 변수가 존재한다
* let : **block level scope**
	* 같은 블록에서는 변수의 중복 선언이 안된다
* var 변수와 let 변수는 같이 쓰지 않는다
* ES5 문법을 사용할 때는 var 변수를 쓰고, ES6 문법을 사용할 때는 let 변수를 사용한다.

### closer 함수
* var는 함수 블록 변수이기 때문에 함수 내부에서 생성된 변수는 함수 외부에서 사용할 수 없다
* 이 변수를 함수 밖에서 사용하기 위해 처리하는 방법이 closer 이다.
```javascript
// 값만 내보내기
function method() {
	var a = "private 변수"

	return function() {
		return a;
	}
}

var b = method(); 
// b에 function()이 담긴다
// b = function() {
// 	return a;
// }

console.log(b()); // a 출력


// 값 바꾸기
function test() {
	var _name = "private"; // private 변수 앞에는 '_'를 붙인다

	return function(name) {
		_name = name;
		return _name;
	}
}

var setter = test();
// setter에 담긴 function(name)
// function(name) {
// 	_name = name;
// 	return _name;
// }

console.log(setter("홍길동"));
```
* js에는 접근 제어자가 없어서 외부에서 접근하지 못하도록 할 때 사용한다. (private 변수)
* closer를 통해 getter, setter 메서드를 작성할 수 있다.


## 객체(JSON)
* JSON : JavaScript Object Notation
* {키:값, 키:값, ...}로 표기, 함수로도 표기할 수 있다.
```javascript
var person = {namd:"홍길동", age:20, arr:[1,2,3,4]};

// 객체 표현 방법1
person.name;
person.arr[0]

//객체 표현 방법2
person["name"];
person["arr"][0]
```


### 함수를 이용한 객체 선언
```javascript
function Person(name) {
	this.name = name;
	this.info = function() {
		return "이름: " + name;
	}
}

var p = new Person("홍길동");
var p2 = new Person("이순신");

console.log(p.info());
console.log(p2.info());
```

### JSON 파싱
* JSON을 모르는 네트워크와 통신하려면 객체(JSON)를 문자열로 파싱해야한다.
* 그리고 이 값을 다시 사용하려면 object로 변경해줘야 한다.
```javascript
var data = [
	{id:'kkk123', title:'java'},
	{id:'aaa123', title:'jsp'},
	{id:'bbb123', title:'js'}
]

// 객체 배열을 문자열로 바꿈
var result = JSON.stringify(data);

//문자열을 객체 배열로 바꿈
var result2 = JSON.parse(result);
```

#### 문자열을 직접 JSON 형식으로 변경할 때는 키와 값 모두를 string 처리 해야 한다!!
```javascript
var result3 = JSON.parse('[{"키":"aaa123"}]');
```