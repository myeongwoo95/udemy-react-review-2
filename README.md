##### npm install react-router-dom

##### npm install styled-components // import styled from 'styled-components';

### funtion 자동완성은 rsc (vscode에서 확장팩 설치: Reactjs Code Snippet)

---

### 최초 리액트 프로젝트를 git clone할 시 npm install을 해야함

### 리액트 라우팅은 실제로 HTML을 페칭하지않고 페이지변경이 이뤄진것처럼 보이게함

### Favorites.js는 즐겨찾기 기능

### 라우팅은 app.js와 index.js, MainNavigation참고

###### 리액트에서 라우팅할때 a(앵커) 태그를 사용하지 않는다. 왜냐하면 React앱을 호스팅하는 서버에 호출하기때문이다.대신 Link 컴포넌트를 사용하는데 내부적으로는 앵커 태그를 렌더링하지만 내부적으로는 React-router-dom이 앵커태그에 클릭 리스너 기능을 추가한다. 링크를 클릭하면 브라우저가 자동으로 요청을 보내주는걸 막아주고, 접속하려는 URL 주소를 파싱한 다음 브라우저 주소표시줄에 바꿔 넣는다.그리고 React와 Javascript로 적절한 컴포넌트를 화면에 출력하는것이다.

###### module.css는 사실 클래스다. 컴포넌트의 className에 css 클래스가 하드코딩된 문자열을 부여하는게 아니라 중괄호로 동적 값을 부여하여 사용한다.ex) className={classes.header} 참고로 import는 다음과 같이 한다 import classes from "../../style/MainNavigation.module.css";

###### map을 사용하여 배열의 데이터를 <li> 태그에 동적으로 그려줄 경우 고유 key 프로퍼티가 있어야한다. ex)<li key={meetup.title}>{meetup.title}</li>;참고로 key 프로퍼티는 리액트에서 몇 안되는 특별한 내장 중 하나로 모든 컴퍼넌트에서 사용가능하다.(커스텀 컴포넌트에서도 사용가능!)

###### 리액트에서 중요한 것은 재사용 가능한 작은 부분으로 나누는 연습이 필요하다.

###### 다른 컴포넌트를 감싸는 래퍼(wrapper)는 주로 중복되는 css사용을 줄이기 위해 사용한다. 또한 애플리케이션에 대한 전반적인 레이아웃을 설정할 수 도 있다. (layout.js 여기에 보통 gloabl header를 넣고 app.js에서 호출하고 Routes를 넣어줌) 사용예제는 components/layout/ui/Card.js 및 layout.js, app.js참고 hint: {props.children}

###### styled-components를 사용할때 조금 헷갈렸던게 내장 컴포넌트의 css 스타일은 어떻게 명시해야하는가였는데 그냥 일반 div에 스타일링을 준다고했을때 <div></div>이렇게하지말고 그냥 <Div> 대문자로 써주면된다

<code>
ex)
const Div = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

// wrapper 사용법
const Card = (props) => {
return <Div>{props.children}</Div>;
};
</code>

###### 리액트에서 label의 프로퍼티중에 htmlFor라는게 있다. 이것은 className처럼 일반적인 html에서 벗어난 속성이름으로 input id와 매칭되게 적어주면된다.

###### React hook중에서 ref는 DOM 요소에 직접 액세스할 수 있게해준다. input에 접근하기위해 ref 프로퍼티를 추가하고 useRef가 저장된 변수를 넣어준다. 접근하는 방식은 변수명.current

ex)
const titleInputRef = useRef();
<input type="text" required id="title" ref={titleInputRef}/>
const enteredTitle = titleInputRef.current.value

##### 화면에 출력되는 내용을 변경하려면 useState를 사용하면 되지만 입력 및 값을 읽을 때는 ref가 더 유용하게 쓰입니다.

##### react는 보안상 직접 DB에 접근할 수 없다. 반드시 서버를 거쳐야한다.

##### 데이터는 부모 -> 자식으로 보내는 것 뿐만아니라 자식->부모로도 보낼 수 있다. 정말 간단한데 부모 컴포넌트에서 함수 데이터를 인자값을 받는 함수를 만들어 준 다음 그 함수를 자식 컴포넌트에게 props로 보내고, 자식 컴포넌트는 그 함수에 데이터를 넣어주면서 실행하면된다.

##### 리액트 hook중 useHistory 훅은 브라우저 기록을 조작할 수 있게 해준다. (navigate로 변경됨)

##### history.replace('/')를 하면 뒤로가기 버튼으로 이전 페이지에 돌아갈 수 없다.

##### navigate의 경우 navigate("/", { replace: true }); 두번째 인자의 객체로 첫번재 인수는 replace를 줘야한다. false는 뒤로가기 가능(default)두번째 인자의 두번째 인수는 state로 데이터를 넘겨줄 수 있다. 전달받은 state는 useLocation hook을 통해서 취득할 수 있다. // 뒤로가기 2번하면 가능한데...? 아마 아예 초기화를 해줘야하는듯 2번

##### fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환한다.

<code>
ex)
fetch(url, options)
.then((response) => console.log("response:", response))
.catch((error) => console.log("error:", error));
</code>

##### 컴포넌트에서 fetch를 사용할 경우 fetch가 프로미스를 반환해 프로미스 체인 상에 있기 때문에 자바스크립트는 체인이 끝날 때까지 기다리는게 아니라 바로 컴포넌트를 return한다. 그래서 fetch가 끝날때까지 기다려야하는데 그러기 위해서 async await를 사용하면 또 다른 문제가 발생한다. async 키워드의 역할 중 하나는 함수가 프로미스를 반환하도록 변환시키기 때문이다. 그렇게 되면 컴포넌트는 더이상 유효한 React 컴포넌트가 아니게된다. 리액트 컴포넌트 함수는 동기적이어야 하며 프로미스가 아닌 JSX를 직접 반환해야 하기때문이다. fetch 응답을 받을 때까지 컴포넌트가 return하는 것을 미룰 수 없다. 대신 임시 JSX 코드를 반환하는데, 데이터부분에 바로 로딩 스피너를 넣고 임시적으로 JSX를 반환하고, fetch가 응답을 받은 후에는 반환된 JSX코드를 React state를 통해서 업데이트 해야한다.

##### 리액트에서 useEffect hook을 사용하지 않고 Http통신을 하게된다면 무한루프를 돈다. 리액트 컴포넌트는 상태가 변경되면 컴포넌트를 재 실행해서 업데이트를 하는데 재실행될때마다 Http로 상태를 변경하고 리액트 컴포넌트는 무한루프를 돌게된다.

##### useEffect는 특정 조건 하에서 일부 코드를 실행 가능케하는 훅인데, useEffect를 통해서 계속 Http통신을 하는 것을 제한해서 언제 코드가 실행되어야할지 조건을 정의해 항상 실행되지 않게 만들 수 있다.

##### useEffect는 두 개의 인수를 받는데 하나는 함수, 하나는 의존성 배열이다. 의존성 배열 자체를 넣지않는다면 useEffect함수는 컴포넌트가 실행 될때 마다 실행된다. 데이터가 담긴 의존성 배열([])에 추가된다면 React가 이 배열로 추가된 값을 확인하고 useEeffect 함수가 마지막으로 실행되었을 때의 값과 비교하게 된다. 그리고 값이 다르면 useEffect를 실행한다. 빈 배열을 넣을 경우에는 최초의 컴포넌트가 렌더링 될 의존성이 없어서 값이 없기 때문에 의존성의 값이 항상 같아져 최초에 실행되는 것 을 제외하고는 useEffect함수가 실행되지 않는다. 간단하게 useEffect에서 데이터 변경이 일어났을 때 useEffect가 실행되길 원한다면 즉 특정 데이터가 컴포넌트에서 다시 그려주길 원한다면 그 데이터가 담긴 배열을 넘겨주면된다.

##### ★★★ 상태가 둘 이상의 컴포넌트에 영향을 미치게 될 경우, 해당 상태를 전역적으로 관리하고 그 상태를 다른 컴포넌트에 분배할 매커니즘이 필요하다. 모든 상태를 최상단인 App.js내에서 관리하고 이에 영향을 받을 컴포넌트 모두에 상태를 프로퍼티로서 전달하는것이다. 이렇게하면 몇가지 문제가 있는데 애플리케이션의 규모가 커지고 다른 컴포넌트에 영향을 미치는 다른 상태가 추가될 경우에 App 컴포넌트 내에서 많은 상태를 관리해야하기 때문에 App컴포넌트의 길이가 계속해서 길어져 이상적이지않다. 또한 상태를 프로퍼티로서 전달해 내려가면 아주 긴 프로퍼티 체인이 생길 수도 있다. 리액트는 이러한 문제점을 해결하고 애플리케이션 내의 상태를 좀더 수월하게 관리하기 위한 솔루션이 있다. 써드파티 redux나 리액트 빌트인 Context기능이 있다.

##### 또한 데이터를 props로 전달하는 뎁스가 2개 이상인 경우 contextAPI를 고려해봐야한다.
