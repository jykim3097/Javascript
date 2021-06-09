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

21.05.27     
### 익명 함수
* _변수에 함수 데이터를 저장해_ 변수를 마치 함수처럼 사용하도록 만들어준다.
* 호출은 변수 선언 이후에 해야 한다 = 호이스팅이 안된다.

```javascript
var a = function() {
	console.log("a");
}
a();
```

#### 화살표 함수
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


## 객체(JSON : JavaScript Object Notation)
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
* js의 this와 java의 this는 다르다
	* 현재 실행되고 있는 자체
	* ...
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

21.05.28   
## 이벤트핸들러

### 이벤트
* 화면에서 클릭과 같은 동작 시 발생하는 동적인 기능
* js의 강력한 기능
* 자주 사용하는 이벤트
	* click : 마우스로 클릭했을 때 이벤트가 발생한다
	* keyup : 키를 눌렀다가 떼면 동작하는 이벤트
		* 키는 키보드의 키
	* change : 값이 변경될 때마다 실행되는 이벤트
		* **select 함수**를 쓸 때 onchange 이벤트를 사용한다
	* load : 화면이 load가 완료된 시점에(랜더링이 다 된 시점에) 발생하는 이벤트
* 이외에 필요한 이벤트는 찾아서 사용하면 된다

### 이벤트 핸들러 : 이벤트를 동작하게 하는 함수
* 웹브라우저의 다양한 기능을 컨트롤
* 태그와 스크립트의 이벤트를 연결하는 방식
	* 인라인 이벤트 모델 : 태그 안에 직접 작성
	* 기본 이벤트 모델 : 화면 상의 태그를 얻어와 익명함수 기법으로 이벤트를 만들어준다
	* 표준 이벤트 모델 : 태그를 얻어와 이벤트 리스너라는 함수를 이용해 이벤트를 등록해주는 방법
* 이름은 보통 앞에 on을 붙인다.

### 용어 정리
* tag = element = 브라우저 상의 객체

### 인라인 이벤트 모델 
* 태그 자체에 이벤트 속성을 작성, on이 붙는다
* 이벤트 속성 안에는 모든 스크립트 코드가 들어갈 수 있다
* 동일한 태그에 이벤트를 여러개 걸 수 있다 (나열)
	* 현재 클릭한 버튼이 어떤 버튼인지 알아야할 때 this를 이용한다
	* 객체의 this랑 다르다 (잘 이해 못함)

### 기본 이벤트 모델
* HTML 요소를 취득해 이벤트를 **익명함수로 연결하는 방식**
	* 먼저 스크립트 태그에서 화면에 있는 태그를 통째로 얻어온다
		* document.getElementById("id"); 와 같은 코드를 사용
	* 스크립트 태그를 html 요소보다 먼저 작성할 경우에는 **window.onload**를 사용해 먼저 태그를 가져와야 작동한다.
		* 단, window.onload 이벤트는 화면에서 한 번만 사용할 수 있다.
```javascript
<button type="button" id="a">버튼</button>

<script>
	// 일반적인 사용법 1
	var a = document.getElemnetById("a");
	a.onclick = function() {
		// 실행 코드
	}

	// 일반적인 사용법 2
	function test() {
		// 실행 코드
	}
	var a = document.getElementById("a");
	a.onclick = test;

	// a.onclick = test();
	// ()를 붙이면 코드 실행 시 함수가 한 번 실행되어 버리니 주의!
</script>
```


```javascript
<script>
	var a = document.getElementById("a");

	window.onload = function() {
		var a = document.getElemnetById("a");
		
		a.onclick = function() {
			// 실행 코드
		}
	}
</script>

<button type="button" id="a">버튼</button>
```

### 표준 이벤트 모델
* 객체.addEventListener(이벤트, 함수) 방식으로 연결
	* 이벤트는 **on을 붙이지 않고** 문자열로 작성한다
* 이벤트를 여러개 작성해도 모두 실행된다

```javascript
<button type="button" id="a">표준 이벤트 버튼</button>

<script>
	var a = document.getElementById("a");

	// 방법 1
	a.addEventListener('click', test);
	function test() {
		// 실행 코드
	}

	// 방법 2 - 익명함수 이용
	a.addEventListener('click', function() {
		// 실행 코드
	})
</script>

```


21.05.31.   
## BOM과 DOM
* js의 두번째 강력한 기능!
#### 개념을 잘 파악해야한다

### BOM vs DOM
* BOM : Browser Object Model
	* 브라우저 창에 내장되어 있는 객체를 의미
	* java의 최상위 객체가 object 였다면, js의 최상위 객체는 window
	* window 객체의 자식 객체
		* js : object, array, function 등
		* location, history 객체 등
		* document(DOM)
* DOM : Document Object Model
	* DOM의 자식 객체로는 body, form 등이 있다
	* DOM 객체를 이용한 요소의 접근은 JS의 강력한 기능
	* 문서에 접근하는 다양한 기능을 제공

###  Element(태그) 노드 선택
* 다중 선택자 : 특정 이름을 가진 태그를 **모두** 가져옴
	* _배열로 접근_
	* 선택자 이름에 's'가 들어감
	* getElement**s**ByName() : name이 xx인 태그를 전부 선택
	* getElement**s**ByClassName() : 요소의 class가 xx인 태그 전부 선택
	* getElement**s**ByTagName() : tag 이름이 xx인 태그 전부 선택
	* *체크 박스나 라디오 버튼*에서 많이 사용한다
* 단일 선택자 : 한개만 가져옴
	* getElementById() : id가 xx인 태그를 (한개) 선택
* 모든 태그는 document의 자식이기 때문에 모든 태그에 선택자를 붙여서 사용할 수 있다

### querySelector()와 querySelectorAll()
* css 문법으로 요소를 선택
* 이 문법으로 위의 get~문법을 대체할 수 있다
* querySelector() : 단일 선택자
	* 만약 ul 태그 아래 li를 선택하면 **맨 위에 한 개만** 가져온다 (단일 선택자라서)
* querySelectorAll() : 다중 선택자, ES6 문법

### 노드 css 변경하기
* style 속성을 이용한다
* css 속성은 카멜표기법을 따른다, '-' 사용 불가
* 전달되는 값은 **문자열**로 작성한다
```javascript
// 표현법 : 노드.style.css속성 = 값;
xxx.style.color = 'red';
   
// js에서 '-'을 사용하면 에러가 뜨기 때문에 카멜표기법으로 작성한다
xxx.style.backgroundColor = '#fff';
```

21.06.01   
### 과제 노트
* 03_nodeSelector\07_quiz.html
* 똑같은 패딩 값을 주기 위해서 안보이는 div를 하나 만들어야 한다
* box-sizing
	* 이 속성은 border의 크기를 width에 포함시킬 지 여부를 결정한다
	* border-box : width에 border의 크기를 포함시킨다
* div에 패딩을 주고 위 속성을 사용하면 패딩값과 border 값을 포함한 width의 값을 사용할 수 있다

* body 태그는 tagName 함수를 사용해 접근할 수도 있지만 _document 태그의 자식 객체이기 때문에_ 더 간단하게 접근할 수도 있다.

```javascript
// body 태그에 접근하는 두가지 방법(더 있을 수 있음)
var body = document.getElementsByTagName('body')[0];
var body = document.body;
```

### 04_sidebar 노트
* 위치가 위쪽 오른쪽 끝과 같이 구석에 있으면 position 사용을 의심해보자
* 태그의 style 속성에 접근할 때, 값이 없는 것은 인라인으로 속성이 지정되지 않았기 때문이다
	* 조건을 잘 달아주면 작동한다
* cursor 속성을 통해 마우스 모양을 바꿀 수 있다
* js로 div의 width를 조절할 때 **overflow를 사용해** div 안의 내용을 안보이게 할 수 있다

### 노드 생성과 추가
* 모두 dom 객체 안에 있는 기능이다
* createElement() : 요소 **생성**
* createTextNode() : 텍스트 생성
	* innerHTML로 대체해도 된다
* appendChild() : 요소를 부모 자식 관계로 넣어줌
* insertBefore(삽입노드, 기준노드) : 기준 노드 앞에 삽입 노드 추가

### 노드 삭제
* remove() : 나 자신 노드 삭제
* removeChild(삭제할 자식 요소) : 자식 노드 삭제

#### 자식 노드 childNodes와 children
* childNodes : text를 포함해 모든 자식노드를 가져온다
* children : text를 포함하지 않고 자식노드만 가져온다
	* 사용할 때 접근에 더 유용하다

### 과제 노트
* 05_node_add_delete\03_quiz.html
* input에서 내용을 가져오고 가져온 내용을 지우려면 value에 **공백**을 덮어씌우면 된다


### 부모 노드와 자식 노드 선택
* parentElement : 부모 노드 선택
	* parentNode : text 요소도 포함되어 있는 부모 노드 선택
* nextElementSibling : 다음 형제 노드 선택
* previousElementSibling : 이전 형제 노드 선택
* firstChild, lastChild : 첫번째, 마지막 자식 노드 선택

### 과제 노트
* this와 event.target
* https://stackoverflow.com/questions/12077859/difference-between-this-and-event-target

### 클래스 선택 (pdf에 없는 내용)
* 클래스는 예약어이기 때문에 가져오는 방법이 다르다
* className 으로 가져온다
* 한 태그가 클래스를 여러개 가질 수 있기 때문에 classList로 모든 class를 가져올 수도 있다
	* console.dir을 통해 요소에 접근하면 proto 라는 게 있는데 
	* proto에서 눈에 안보이는 원본 객체에 정의되어 있는 기능을 볼 수 있다
	* 이 하위 함수에는 add, remove, contains 등이 있다

21.06.03   
### Toggle(토글)
* 하나의 버튼으로 두가지 기능을 한다 
* 예시) 네이버 타이머의 start 버튼 
	* display로 숨겨놓은 게 아니고 하나의 버튼으로 동작하는 것
* 방법 1. 클래스로 접근
	* className 속성 이용
* 방법 2 . toggle() 함수

### 노드의 속성 추가 및 제거
* getAttribute() : 요소의 속성 취득, 매개변수 1개(속성)
* setAttribute() : 요소의 속성 저장,  매개변수 2개(키, 값)
* removeAttribute() : 요소의 속성 제거, 매개변수 1개
	* 속성 자체를 제거

### 이벤트 객체
* 이벤트 위임 : **부모한테** 이벤트를 걸어 자식이 이벤트를 위임받게 한다
	* 자식이 모두 똑같은 이벤트를 가졌을 때 사용해야 함!
	* 자식에서만 동작하게끔 코드를 잘 작성해야한다
* target : 클릭한 위치 - 자식
* currentTarget : 실제 이벤트가 적용된(걸려있는) 위치 - 부모
* preventDefault() : 고유 이벤트를 가진 태그의 이벤트 제거
	* a, submit 등과 같이 기본 이벤트를 가진 태그
	* 예) a - 다른 페이지로 넘어가는 이벤트를 막는다
* 면접 질문에서 나올 수 있음! - 남한테 설명할 수 있을 정도로 알아두자

### 이벤트 위임 원리 - 버블링과 캡처링
* 상속 개념은 아니다
* html 문서는 3D 개념 - EX) z-index
* window부터 발생한 이벤트까지 찾아오는 과정 : capture phase
* 찾은 이벤트를 다시 window까지 가지고 가는 과정 : bubbling phase
* 1. 캡쳐링 > 2. 타겟 > 3. **버블링**
	* 캡쳐링>타겟, 타켓>버블링, 두  과정에서 존재하는 모든 이벤트를 다 실행시킨다
	* 그러면 이벤트가 두번씩 발생하기 때문에 캡쳐링>타겟 과정에서는 이벤트를 생략한다
```javascript
<html>
	<body>
		<ul onclick="second();">
			<li onclick="first();">버블링</li>
		</ul>
	</body>
</html>
```
* 위와 같은 코드에서 하위 요소부터 상위 요소 순서로 버블링이 일어나기 때문에 first() > second() 순으로 이벤트가 발생한다
* 캡쳐링은 second() > first() 순으로 이벤트가 발생한다
* 이벤트 위임 방식을 사용하면 더 효율적으로 프로그래밍할 수 있다!
* stopPropagation() 은 연쇄적인 이벤트를 중단한다. 많이 쓰이진 않는다

### 코딩 팁!
* classList에서 className을 찾으려면 인덱스로 접근하지 말고 contains 함수로 접근하라
* classList의 함수 contains, remove, add 잘 활용하기!

## BOM
* DOM을 제외한 여러 객체 - window, location 등

21.06.04   
### event 객체
#### preventDefault()
* 고유 이벤트를 가진 태그의 이벤트 제거
* a, submit
* 한 번 사용하면 모든 태그에 적용된다.
* event.preventDefault()로 사용

#### 이벤트 객체의 데이터 집합
```javascript
<ul class="nameList">
	<li><a href="#" data-info='{"id": "kkk", "age": "20"}'>홍길동</a></li>
	<li><a href="#" data-info='{"id": "aaa", "age": "30"}'>이순신</a></li>
	<li><a href="#" data-info='{"id": "bbb", "age": "40"}'>홍길자</a></li>
	<li><a href="#" data-info='{"id": "ccc", "age": "50"}'>박찬호</a></li>
</ul>
```
* 위와 같은 코드에서 일반적인 방식으로 data-info에 접근하면 에러가 발생한다
	* 일반적인 방식 : event.target.data-info
	* 우선 js는 '-'를 인식할 수 없기 때문에 사용상 에러가 발생한다
* 그래서 이는 가져오는 약속된 방법이 있다
* event 객체의 dir을 검색해보면 이 값은 dataset에 저장되어 있다
* 그래서 이 객체에 접근하기 위해서는 **event.target.dataset.info**를 통해 접근해야 한다
	* 데이터셋의 이름이 data-xxx 이면 접근 코드는 event.target.dataset.xxx 가 된다

### 애니메이션 효과
* @keyframs로 선언하고 animaition 속성으로 사용한다
```html5
@keyframs (애니메이션 이름) {
	from {
		// 적용할 효과 시작
	} to {
		// 적용할 효과 끝
	}
}
```

### 날짜 객체
* 날짜 생성 방법 > var date = new Date();
	* 요일 월 일 연도 현재시간(시간:분:초) 순으로 표시된다
* 생성 시 날짜를 매개변수로 넣으면(20xx-xx-xx 형식) **그 날짜의 9시**로 초기화된 날짜 객체가 생성된다
	* 시간도 넣으면 초기화된다 (20xx-xx-xx xx:xx:xx 형식)

21.06.07   
## BOM
### window객체
* window.open() : 팝업 창(새로운 창)을 띄울 수 있다
* window.close() : 팝업 창을 띄우고 현재창을 닫는다
* setInterval()과 claearInterval()
* setTimeout()과 clearTimeout()

### setInterval()과 claearInterval()
* setInterval() : 일정 시간마다 함수 반복 실행
* claearInterval() : setInterval 중지 함수

### setTimeout()과 clearTimeout()
* setTimeout() : 일정 시간 지난 후 함수 실행
* clearTimeout() : setTimeout() 중지 함수

## 코딩 팁!
* 배경이미지 꽉 차게 설정하는 법
```javascript
<style>
	.bgimg {
		position : absolute;
		left : 0;
		top : 0;
		width : 100%;
		height : 100%;
	}
</style>

<body>
	<img src="img/1.jpg">
</body>
```

21.06.08   
### location 객체
* href()
* reload()
	* 자주 사용하지 않는다
	* 함부로 사용하면 안된다

### history 객체
* 인터넷에서 history는 기록
* history.forword : n만큼 이전으로 간다
* history.go(n) : n만큼 기록을 이동한다
	* 음수를 사용하면 이전으로 갈 수 있다
* history.replaceState
	* 상태를 교체하다
	* 페이지를 조작할 수 있다
	* 중간에 넘어온 데이터(페이지) 등을 삭제하거나 변경할 수 있다

### navigator 객체
* appName() : 브라우저 이름을 얻어온다
	* 어떤 브라우저나, 어디서 브라우저에 접속했는지 알려준다
	* 크로스 브라우징을 위한 기본적인 동작
	* Netscape라고 보통 뜰 것
	* webkit이라고 써있는 건 css 렌더링 엔진(css 해석기)
* geolocation
	* callback 함수 : 허용, 차단에 대한 결과를 반환 받을 수 있는 함수를 매개변수로 넣어준다
		* 값(허용/차단)이 넘어올 때까지 기다린다
		* 그런데 무한정 대기할 수 없기 때문에

## 자바스크립트 비동기 ajax
* 매우 보편화된 기술
* 웹페이지의 이동없이 필요한 데이터만 전송하는 기술 
* 어디로? 어딘가에 만들어져있는 서버
* http xml request 객체
* jquery
* 액시오스
* **fetch api**
	* 최신 기술, ES6

* 지금까지 사용한 건 동기적(순차적) 기술
* 함수가 호출이 되면 그 함수가 끝나기 전까지 다음 함수가 시작되지 않음

### fetch api
* 콜백함수
	* then() 안에 콜백함수를 작성하면 완료가 되면 fetch의 실행결과를 담아둔다
	* 콜백함수 : 얼마가 걸릴 지 모르니까 성공 시에 결과를 돌려받을 함수

* api
	* 기능을 사용하는 **방법**이 정의된 문서
	* vs 라이브러리 : 만들어져있는 기능

* 서버 상태로 두어야 비동기 과정이 돌아간다
* fetch는 내장 객체
* 비동기 구문은 실행하면 결과가 언제 올 지 모르기 때문에 내장 객체에 담는다
* 세가지 상태가 있다
	* 수행 pending
	* 성공 fulfilled
	* 거절 reject