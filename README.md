npm install react-router-dom
npm install styled-components // import styled from 'styled-components';

### funtion 자동완성은 rsc (vscode에서 확장팩 설치: Reactjs Code Snippet)

---

### 최초 리액트 프로젝트를 git clone할 시 npm install을 해야함

### 리액트 라우팅은 실제로 HTML을 페칭하지않고 페이지변경이 이뤄진것처럼 보이게함

### Favorites.js는 즐겨찾기 기능

### 라우팅은 app.js와 index.js, MainNavigation참고

리액트에서 라우팅할때 a(앵커) 태그를 사용하지 않는다. 왜냐하면 React앱을 호스팅하는 서버에 호출하기때문이다.
대신 Link 컴포넌트를 사용하는데 내부적으로는 앵커 태그를 렌더링하지만 내부적으로는 React-router-dom이 앵커태그에 클릭 리스너 기능을 추가한다.
링크를 클릭하면 브라우저가 자동으로 요청을 보내주는걸 막아주고, 접속하려는 URL 주소를 파싱한 다음 브라우저 주소표시줄에 바꿔 넣는다.
그리고 React와 Javascript로 적절한 컴포넌트를 화면에 출력하는것이다.

module.css는 사실 클래스다. 컴포넌트의 className에 css 클래스가 하드코딩된 문자열을 부여하는게 아니라 중괄호로 동적 값을 부여하여 사용한다.
ex) className={classes.header}
참고로 import는 다음과 같이 한다 import classes from "../../style/MainNavigation.module.css";

map을 사용하여 배열의 데이터를 <li> 태그에 동적으로 그려줄 경우 고유 key 프로퍼티가 있어야한다. ex)<li key={meetup.title}>{meetup.title}</li>;
참고로 key 프로퍼티는 리액트에서 몇 안되는 특별한 내장 중 하나로 모든 컴퍼넌트에서 사용가능하다.(커스텀 컴포넌트에서도 사용가능!)

리액트에서 중요한 것은 재사용 가능한 작은 부분으로 나누는 연습이 필요하다.

다른 컴포넌트를 감싸는 래퍼(wrapper)는 주로 중복되는 css사용을 줄이기 위해 사용한다.
또한 애플리케이션에 대한 전반적인 레이아웃을 설정할 수 도 있다. (layout.js 여기에 보통 gloabl header를 넣고 app.js에서 호출하고 Routes를 넣어줌)
사용예제는 components/layout/ui/Card.js 및 layout.js, app.js참고
hint: {props.children}

styled-components를 사용할때 조금 헷갈렸던게 내장 컴포넌트의 css 스타일은 어떻게 명시해야하는가였는데 그냥 일반 div에 스타일링을 준다고했을때

<div></div>이렇게하지말고 그냥 <Div> 대문자로 써주면된다
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
