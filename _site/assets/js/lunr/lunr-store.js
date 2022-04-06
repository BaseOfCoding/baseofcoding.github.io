var store = [{
        "title": "React.js에서 Typescript 사용하는 방법",
        "excerpt":"   안녕하세요. React.js에서 Typescript를 사용하는 방법에 대해서 알아보도록 하겠습니다.   설치방법   - 터미널 또는 CMD 창에서 명령어 입력하기   react.js를 설치할 수 있는 환경이 갖춰졌다는 가정하에 작성이 되었습니다.   1 npx create-react-app '프로젝트 이름' --template typescript   이렇게 입력을 하게 되면 React.js 환경에서 Typescript를 사용할 수 있게 됩니다.   이 글이 도움이 되셨다면 댓글 부탁드립니다^^   다음 글로 찾아오겠습니다!  ","categories": ["ReactJS"],
        "tags": ["typescript","reactjs","타입스크립트","리액트"],
        "url": "/reactjs/0001/",
        "teaser": null
      },{
        "title": "React.js에서 Firebase 사용하기",
        "excerpt":"   안녕하세요.   React.js에서 Firebase를 사용하는 방법에 대해서 알아보도록 하겠습니다.         &lt;Firebase 연결 방법을 알아보자!&gt;     1. 터미널을 이용하여 React.js를 설치한다.   1 2 3 4 5 [ Javascript ] npx create-react-app '프로젝트 이름'  [ Typescript ] npx create-react-app '프로젝트 이름' --template typescript     2. Firebase로 이동해서 프로젝트를 만든다.   아래 링크를 타고, 프로젝트 만들기 또는 프로젝트 추가를 클릭합니다.   애널리틱스는 나중에 추가가 가능하기 때문에, 사용 설정을 꺼주어도 됩니다.   파이어 베이스 콘솔 링크     3. 웹 앱을 클릭해서 앱을 하나 만들어준다.      &lt;/&gt; 모양으로 되어 있는 버튼이 웹앱입니다. 클릭 후 앱의 닉네임을 적어줍니다.   testing 이란 이름으로 프로젝트를 만들었기 때문에, testing 이라고 닉네임을 적었습니다. ( 꼭 그렇게 하지 않아도 됩니다. )   닉네임을 적어주면 밑에 사진과 같이 화면이 뜰 것입니다. 넘어가시면 안됩니다!        4. VS Code로 React 폴더를 열어서 파이어베이스 프레임워크를 다운받고 src 폴더에 Firebase.js 또는 Firebase.ts 라는 파일을 생성하자.   만약에 넘어가셨다면, 방법이 있습니다.   앱에서의 홈으로 돌아가면 앱이 하나 뜰 겁니다. 그걸 클릭하면 설정버튼(톱니바퀴 모양)이 보이는데, 버튼을 클릭하고 밑으로 내려가면   npm / cdn / 구성으로 나뉘어 있는데, 그 중에 npm을 보면 됩니다.       그리고 vs code를 켜서 처음에 만든 React 폴더를 열어 준 다음, vs code에서 터미널을 열어줍니다.   맥북은 command+j 키를 클릭하면 터미널 창이 열립니다.   터미널에서 명령어를 입력해줍니다.   1 $ npm install firebase   명령어를 입력해서, firebase 프레임워크를 설치하셨다면 src 폴더에, Firebase.js 또는 타입스크립트를 사용하신다면, Firebase.ts 라는 파일을 만들어줍니다.   그리고, 사진 또는 설정버튼에서 보인 코드를 입력합니다.   1 2 3 4 5 6 7 8 9 10 11 12 13 14 import { initializeApp } from \"firebase/app\";  const firebaseConfig = { \tapiKey: \"AIzaSyCUHqOw9SpvrZueh1eHCIzCjKn0ECU2aMU\", \tauthDomain: \"test-wow-95d8e.firebaseapp.com\", \tprojectId: \"test-wow-95d8e\", \tstorageBucket: \"test-wow-95d8e.appspot.com\", \tmessagingSenderId: \"728758293118\", \tappId: \"1:728758293118:web:be438d1fe9354471387e2f\" };  export default initializeApp(firebaseConfig);  이 코드는 입력하시면 안됩니다. 본인 프로젝트 구성 코드를 입력하셔야 합니다!   ( 주의!! 절대 위의 코드를 사용하시면 안됩니다. 본인 프로젝트 구성 코드를 입력하세요! )       그리고, 잘 연결이 되었는지를 확인하기 위해서 index.js 또는 index.tsx 파일에 가서 밑에 코드를 입력하면 됩니다.   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 import React from \"react\"; import ReactDOM from \"react-dom\"; import \"./index.css\"; import App from \"./App\"; import reportWebVitals from \"./reportWebVitals\"; import { BrowserRouter } from \"react-router-dom\"; import firebase from \"./Firebase\"; // Firebase.js or Firebase.tsx 입니다.  console.log(firebase); // 이 부분을 추가해주세요^^  ReactDOM.render(   &lt;React.StrictMode&gt;     &lt;BrowserRouter&gt;       &lt;App /&gt;     &lt;/BrowserRouter&gt;   &lt;/React.StrictMode&gt;,   document.getElementById(\"root\") );  // If you want to start measuring performance in your app, pass a function // to log results (for example: reportWebVitals(console.log)) // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals();   console.log(firebase); 를 입력한 뒤, 터미널에서 npm start를 입력해서 실행하면   브라우저에서 개발자 모드로 console에 로그가 잘 뜬다면 연결이 잘 된 것입니다.   이 글이 도움이 되셨다면 댓글 부탁드립니다^^   다음 글로 찾아오겠습니다!  ","categories": ["ReactJS"],
        "tags": ["firebase","파이어베이스","reactjs","리액트js"],
        "url": "/reactjs/0002/",
        "teaser": null
      },{
        "title": ".env 파일 .gitignore에 추가해도 구동될 수 있게 하기",
        "excerpt":"   안녕하세요. Nerd Lee 입니다.   이번 글은 .env 파일을 어떻게 하면, github에 올려도  클라우드 서비스에서 구동이 될 수 있는 지에 대해서 알아보도록 하겠습니다.     - 환경 변수 관리하기 -     1. 설치하기      npm을 이용하여 dotenv 라이브러리를 다운받습니다.   1 npm i dotenv     2. .env 파일 작성하기      프로젝트 폴더 최상단에 .env 라고 파일을 만들어줍니다. 그럼 process.env 라는 코드로 디렉토리에 있는 .env 파일을 읽어오는 역할을 합니다.   1 2 AWS_KEY=어쩌구 저쩌구 AWS_SECRET_KEY=어쩌구 저쩌구     3. require 또는 import로 dotenv 라이브러리 사용하기      require 또는 import를 이용하여, dotenv를 사용하면 됩니다.      require 사용 방법    1 2 3 4 require(\"dotenv\").config();  console.log(\"AWS_KEY : \", process.env.AWS_KEY); console.log(\"AWS_SECRET_KEY : \", process.env.AWS_SECRET_KEY);      import 사용 방법    1 2 3 4 5 import dotenv from \"dotenv\"; dotenv.config();  console.log(\"AWS_KEY : \", process.env.AWS_KEY); console.log(\"AWS_SECRET_KEY : \", process.env.AWS_SECRET_KEY);      이렇게 사용하면, .gitignore에 .env 파일을 넣어놓더라도 사용을 할 수 있게 됩니다.      위 코드 실행 시 출력 결과    1 2 AWS_KEY : 어쩌구 저쩌구 AWS_SECRET_KEY : 어쩌구 저쩌구     4. 주의사항      config() 함수를 맨 위에 호출을 해야 합니다.    1 2 3 4 console.log(\"AWS_KEY : \", process.env.AWS_KEY); console.log(\"AWS_SECRET_KEY : \", process.env.AWS_SECRET_KEY);  require(\"dotenv\").config();      위와 같이 코드를 작성하게 되면, 빈 값이 뜨게 됩니다. 그렇기 때문에 3번과 같이 위에 config() 함수를 호출을 하고 사용하시는 걸 주의하시길 바랍니다.      만약 다른 폴더에 .env를 만들었다면?    1 require(\"dotenv\").config({ path: \"해당 .env path 작성\" });      config() 함수 안에 object 형식으로, path : value를 작성해주셔야 사용이 가능해집니다.     5. Heroku에 env파일 적용하기      heroku-dotenv 설치    1 npm i -g heroku-dotenv      heroku-dotenv push 하기    1 heroku-dotenv push      이렇게 설치하고, 명령어를 입력해서 push를 하게 되면, 해당 키 값의 환경변수를 heroku 서버에 전달했다는 식의 log가 출력이 되고 사용이 가능해집니다.      이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["Error"],
        "tags": [".env","env",".gitignore","dotenv","heroku_env"],
        "url": "/error/0001/",
        "teaser": null
      },{
        "title": "Styled-Components 설치 및 사용하기",
        "excerpt":"   🖥 Styled-components 관련 모든 글 보기      01. Styled-Components 설치 및 사용하기   02. Styled-Components 확장해서 사용하기   03. Styled-Components에서 as와 attrs란?   04. Styled-Components 애니메이션과 Pseudo Selector   안녕하세요. Nerd Lee 입니다.   이번 글은 styled-components를 설치하고 어떻게 사용하는 지에 대해서 한 번 알아보도록 하겠습니다. 기본적으로 react 프레임워크가 있어야합니다.     Styled-Components     1. 설치하기      React.js 설치 방법       기본적으로 npm 패키지가 설치되어 있어야 합니다.   1 2 cd desktop (desktop 폴더로 이동) npx create-react-app {폴더 이름} ( 설치 )      styled-components 설치       vs code로 설치 한 리액트 프로젝트를 열어서 터미널로 설치해주세요.   1 npm i styled-components     2. 기본 문법을 사용해보기      기본 문법 작성 (src -&gt; App.js )    1 2 3 4 5 6 7 8 function App() {   return (     &lt;div style={{ display: \"flex\" }}&gt;       &lt;div style={{ backgroundColor: \"pink\", width: 100, height: 100 }}&gt;&lt;/div&gt;       &lt;div style={{ backgroundColor: \"black\", width: 100, height: 100 }}&gt;&lt;/div&gt;     &lt;/div&gt;   ); }         import 된 부분을 전부 삭제하고, 이렇게 코드를 작성해볼게요.  flex로, 정렬을 해주고, 두 개의 정사각형인 box를 만들어 준다라고 얼추 눈에 보이시죠?  그런데.. 너무 가독성이 떨어집니다. div 태그만 보이기 때문에, 가끔은 헷갈릴 때도 있죠.  그래서 사용하기 좋은 것이 styled-components 입니다.!     3. 위의 코드 이쁘게 변경하기      styled-components가 설치되셨다면 밑에 처럼 코드를 작성해보세요.    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const ChlidBoxOne = styled.div`   background-color: pink;   width: 100px;   height: 100px; `;  const ChlidBoxTwo = styled.div`   background-color: black;   width: 100px;   height: 100px; `;  function App() {   return (     &lt;Parent&gt;       &lt;ChlidBoxOne /&gt;       &lt;ChlidBoxTwo /&gt;     &lt;/Parent&gt;   ); }  export default App;      아주 깔끔해졌죠?ㅎㅎㅎ styled.div로 div 태그와 같다는 것을 명시해주고 그 안에 css 속성값들을 넣어줘서 class 형식으로 사용이 가능해지기 때문에 가독성도 좋아져서 이게 어떤식의 코드인지도 명확해지게 됩니다. 또한 className을 알아서 styled-components가 랜덤하게 만들어주기 때문에 className도 걱정 할 필요가 없어집니다.               이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["Styled-Components"],
        "tags": ["styled-components","css","scss","sass"],
        "url": "/styled-components/0001/",
        "teaser": null
      },{
        "title": "Styled-Components 확장해서 사용하기",
        "excerpt":"   📖 지난 글 보기       01. Styled-Components 설치 및 사용하기     안녕하세요. Nerd Lee 입니다.   지난 글에서, styled-components를 사용하는 방법에 대해서 알아봤습니다.   그런데! 지난 글을 보면, 같은 크기의 박스인데.. color만 다를 뿐인데   이걸 꼭 굳이 두개를 같이 써야할까? 라는 고민을 하실 수 있습니다.   그럼 어떻게 하면, 같은 Box 컴포넌트를 가지고 색깔을 변경할 수 있을까에 대해서 한 번 알아보도록 하겠습니다!     Styled-Components 확장 사용     1. 코드 작성하기      지난 강의 코드    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const ChlidBoxOne = styled.div`   background-color: pink;   width: 100px;   height: 100px; `;  const ChlidBoxTwo = styled.div`   background-color: black;   width: 100px;   height: 100px; `;  function App() {   return (     &lt;Parent&gt;       &lt;ChlidBoxOne /&gt;       &lt;ChlidBoxTwo /&gt;     &lt;/Parent&gt;   ); }  export default App;      위의 코드를 밑에처럼 변경해주세요.    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const ChlidBox = styled.div`   background-color: pink;   width: 100px;   height: 100px; `;  function App() {   return (     &lt;Parent&gt;       &lt;ChlidBox /&gt;       &lt;ChlidBox /&gt;     &lt;/Parent&gt;   ); }  export default App;      그리고 npm start를 입력해서 실행하면, 핑크색 박스만 2개가 나란히 정렬이 되어 있는 것을 확인하실 수 있습니다.     2. props로 색깔만 전달해서 변경하기      react에서 자주 사용되는 props 처럼, styled-components에 전달해서 색깔을 변경해봅시다.    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const ChlidBox = styled.div`   background-color: ${(props) =&gt; props.backgroundColor};   width: 100px;   height: 100px; `;  function App() {   return (     &lt;Parent&gt;       &lt;ChlidBox backgroundColor=\"pink\" /&gt;       &lt;ChlidBox backgroundColor=\"black\" /&gt;     &lt;/Parent&gt;   ); }  export default App;      ChlidBox 컴포넌트에, backgroundColor 라는 속성을 넣어주고, 거기에 각각의 색깔 값을 넣어줍니다.  그리고 위에 있는 ChlidBox에는 ${(props) =&gt; props.backgroundColor} 로 값을 받아와서 속성에 값을 대입합니다.     3. styled-components 확장해서 사용해보기      box가 아닌 circle을 만들어봅시다.    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const Box = styled.div`   background-color: ${(props) =&gt; props.backgroundColor};   width: 100px;   height: 100px; `;  const Circle = styled.div`   background-color: ${(props) =&gt; props.backgroundColor};   width: 100px;   height: 100px;   border-radius: 50px; `;  function App() {   return (     &lt;Parent&gt;       &lt;Box backgroundColor=\"pink\" /&gt;       &lt;Circle backgroundColor=\"black\" /&gt;     &lt;/Parent&gt;   ); }  export default App;      Circle을 추가해주고, ChildBox가 아닌 Box로 이름을 변경한 뒤  Box에 있는 값을 Circle에 복사 / 붙여넣기 한 다음, border-radius만 추가해줍니다.  하지만, 이번엔 속성값이 중복이 됩니다. border-radius만 추가하면 되는데 말이죠….;;  걱정하지 마세요! styled-components는 가능합니다!!!      styled() 함수 사용하기    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const Box = styled.div`   background-color: ${(props) =&gt; props.backgroundColor};   width: 100px;   height: 100px; `;  const Circle = styled(Box)`   border-radius: 50px; `;  function App() {   return (     &lt;Parent&gt;       &lt;Box backgroundColor=\"pink\" /&gt;       &lt;Circle backgroundColor=\"black\" /&gt;     &lt;/Parent&gt;   ); }  export default App;      위의 코드처럼 작성하게 되면, styled(Box)로, Box에 있는 속성값을 상속받는 형태가 됩니다.  클래스를 사용하는 것 처럼 말이죠.          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["Styled-Components"],
        "tags": ["styled-components","css","scss","sass"],
        "url": "/styled-components/0002/",
        "teaser": null
      },{
        "title": "Styled-Components에서 as와 attrs란?",
        "excerpt":"   📖 지난 글 보기       01. Styled-Components 설치 및 사용하기   02. Styled-Components 확장해서 사용하기     안녕하세요. Nerd Lee 입니다.   지난 글에서, styled-components를 클래스처럼 상속받아서 확장시켜 사용하는 방법에 대해서 알아봤습니다.   이번 글에서는 styled-components에서 사용되는 as와 Attrs에 대해서 알아보도록 하겠습니다.     Styled-Components as | Attrs     1. as란 무엇일까?      이렇게 코드를 작성해보세요.    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const Button = styled.button`   background-color: black;   color: white;   border: 0;   border-radius: 5px; `;  function App() {   return (     &lt;Parent&gt;       &lt;Button&gt;로그인&lt;/Button&gt;     &lt;/Parent&gt;   ); }  export default App;      저는 button이란 태그를 가지고 있는 styled-components를 사용하려고 합니다.  그런데, 만약 anchor 태그를 가지고 싶은데, Button에 있는 속성값은 그대로 사용하고 싶다면 어떻게 해야할까요?  그 때 사용하는 게 as라는 것입니다.   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const Button = styled.button`   background-color: black;   color: white;   border: 0;   border-radius: 5px; `;  function App() {   return (     &lt;Parent&gt;       &lt;Button&gt;로그인&lt;/Button&gt;       &lt;Button as=\"a\"&gt;전 a 태그입니다.&lt;/Button&gt;     &lt;/Parent&gt;   ); }  export default App;      이러면, Button의 속성은 그대로 사용하고, a 태그로 사용이 되게 됩니다.  버튼 태그에서는 사용하지 못하는 href 속성을 a 태그로 사용이 가능해지거든요.     2. Attrs란 무엇일까?      Parent만 빼고 모두 지운 다음, Input을 추가해봅시다.    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const Input = styled.input`   background-color: black; `;  function App() {   return (     &lt;Parent&gt;       &lt;Input placeholder=\"hello\" /&gt;       &lt;Input placeholder=\"hello\" /&gt;       &lt;Input placeholder=\"hello\" /&gt;       &lt;Input placeholder=\"hello\" /&gt;       &lt;Input placeholder=\"hello\" /&gt;     &lt;/Parent&gt;   ); }  export default App;      자 이렇게, 많은 Input이 있고, 모든 Input의 placeholder 속성값을 hello 라고 하고 싶다라고 에를 들어보겠습니다.  그런데, 여기서 hello가 아니라 bye라고 하고 싶으면, 저 5개를 다 수정해야하는데  프로그래머들은 저런 귀찮은 작업 하기 싫어하잖아요ㅠㅠ 그래서 styled-components에서 제공하는 것이 attrs 함수 입니다!      이렇게 한 번 코드를 수정해보세요.    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const Input = styled.input.attrs()`   background-color: black; `;  function App() {   return (     &lt;Parent&gt;       &lt;Input /&gt;       &lt;Input /&gt;       &lt;Input /&gt;       &lt;Input /&gt;       &lt;Input /&gt;     &lt;/Parent&gt;   ); }  export default App;      styled.input.attrs() 를 해줍니다. 그러면 attrs 함수를 사용할 수 있는데요.  attrs 함수로, input 태그에 있는 속성값을 가질 수 있습니다. 그래서, 만약 같은 태그에 같은 속성을 사용한다면  attrs에 속성값만 추가해주면 된다는 것입니다!      이렇게 말이죠!!    1 2 3 const Input = styled.input.attrs({ placeholder: \"hello\" })`   background-color: black; `;      이렇게 하면, bye로 바꾸고 싶으면, hello를 bye로만 바꿔주면 됩니다ㅎㅎㅎ 참 쉽죠?          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["Styled-Components"],
        "tags": ["styled-components","css","scss","sass"],
        "url": "/styled-components/0003/",
        "teaser": null
      },{
        "title": "Vercel process.env.CI = true 오류 해결 방법",
        "excerpt":"   안녕하세요. Nerd Lee 입니다.   이번 글은 Vercel을 이용해서 홈페이지를 배포할 때 빌드 중에 process.env.CI=true 라는 에러를 볼 때   해결할 수 있는 방법에 대해서 알려드리도록 하겠습니다!     - Vercel process.env.CI = true 오류 해결 방법에 대해 알아보자! -   1. 홈으로 돌아와 해당 프로젝트를 클릭      프로젝트 홈에서, 메뉴에 Settings 클릭하기          맨 위에 보이는 메뉴 중에, Settings를 클릭해주세요.     2. Environment Variables 클릭하기      Settings에 있는 소메뉴 중 Environment Variables가 있습니다. 그걸 클릭해주세요.         3. NAME에는 CI, VALUE에는 false를 입력 후 Add 클릭      NAME 부분엔 CI를 입력하고, VALUE 부분엔 false를 입력하고 추가해줍니다.         4. 그리고 다시 상단에 보이는 메뉴 중, Deployments를 클릭해서 Redeploy를 하자!      상단에 Deployments라는 메뉴가 있습니다. 빌드가 실패 된 것을 클릭하면  Redeploy 버튼을 클릭할 수 있습니다. 그걸 클릭해서 재 빌드하면 됩니다.       이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!  ","categories": ["Error"],
        "tags": ["vercel","Vercel","process.env.CI","CI오류","CIError"],
        "url": "/error/0002/",
        "teaser": null
      },{
        "title": "타입스크립트로 styled-components 설치 할 때 Cannot find module 'styled-components' or its corresponding type declarations. 오류 해결 방법",
        "excerpt":"   안녕하세요. Nerd Lee 입니다.   이번 글은 typescript용 styled-components를 설치할 때   Cannot find module ‘styled-components’ or its corresponding type declarations.   오류를 해결하는 방법에 대해서 알아보도록 하겠습니다.     - Cannot find module ‘styled-components’  or its corresponding type declarations. -   1. package.json 수정      react.js 환경에 있는 package.json 파일 수정       dependencies 또는 dev 환경으로 설치하셨다면  devDependencies에 있는 버전을 수정해주셔야 합니다.   1 2 3 4 5 \"dependencies\": {     ...,     styled-components: \"version\",     @types/styled-components: \"version\"   },      에러가 나는 이유는 두 버전의 값이 같지 않기 때문입니다.  저 두 패키지 중, 낮은 패키지의 버전에 맞춰서 값을 변경해주시면 됩니다.     2. node_module 폴더 삭제           node_module 폴더를 삭제해주세요.            그리고 vs code terminal 환경에서 npm i를 입력합니다.       1 $ npm i      그럼 package.json에 있는 dependencies에 있는 패키지들을 전부 설치하게 됩니다.  에러가 없어지고 웹페이지가 정상적으로 작동이 될 것이라고 생각이 됩니다.      이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!  ","categories": ["Error"],
        "tags": ["styled-components","declarations","typescript용 에러","Cannot find module 'styled-components' or its corresponding type declarations"],
        "url": "/error/0003/",
        "teaser": null
      },{
        "title": "Styled-Components 애니메이션과 Pseudo Selector",
        "excerpt":"   📖 지난 글 보기       01. Styled-Components 설치 및 사용하기   02. Styled-Components 확장해서 사용하기   03. Styled-Components as와 attrs란?     안녕하세요. Nerd Lee 입니다.   지난 글에서, styled-components에서 사용되는 as와 Attrs에 대해서 알아봤습니다.   이번 글에서는 styled-components에서 사용할 수 있는 애니메이션 방법과 Pesudo Selector의 사용법에 대해서 알아보도록 하겠습니다.     Styled-Components 애니메이션, Pesudo Selector     1. 애니메이션 사용      App.js에 있는 모든 코드를 지우고 아래와 같은 코드로 작성해주세요.    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 import styled from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const Box = styled.div`   height: 200px;   width: 200px;   background-color: green; `;  function App() {   return (     &lt;Parent&gt;       &lt;Box /&gt;     &lt;/Parent&gt;   ); }  export default App;      ketframe 추가하기    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 import styled from \"styled-components\"; import { keyframes } from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const RotateAnim = keyframes`   from{     transfrom: rotate(0deg);   }    to{     transform: rotate(360deg);   } `;  const Box = styled.div`   height: 200px;   width: 200px;   background-color: green;   animation: ${RotateAnim} 1s linear infinite; `;  function App() {   return (     &lt;Parent&gt;       &lt;Box /&gt;     &lt;/Parent&gt;   ); }  export default App;      RotateAnim 이란 컴포넌트를 하나 만들고, styled-components에서 제공해주는 keyframes를 사용하면  기존 css과 같이 from, to를 사용해서 애니메이션의 키 프레임을 만들어 사용할 수 있습니다.  그리고, Box에 애니메이션 속성값을 넣어줘서, RotateAnim을 사용하고  1초 동안 0~360도씩 계속 회전하는 방식의 애니메이션이 보입니다.     2. Pesudo Selector      Box 컴포넌트 안에 span 태그를 자식으로 넣어줍니다.    1 2 3 4 5 6 7 8 9 function App() {   return (     &lt;Parent&gt;       &lt;Box&gt;         &lt;span&gt;안녕하세요!&lt;/span&gt;       &lt;/Box&gt;     &lt;/Parent&gt;   ); }           scss or sass를 사용 해보셨다면 넘어가셔도 괜찮습니다.            Box 컴포넌트안에 기존 html 태그인, span 태그를 추가해서 안녕하세요! 라는 글을 추가했습니다.  이제 Pesudo Selector가 무엇인 지 사용해보겠습니다.          Box 컴포넌트에 span 태그를 자식관계로 만들어서 속성값을 추가해봅시다.    1 2 3 4 5 6 7 8 9 10 const Box = styled.div`   height: 200px;   width: 200px;   background-color: green;   animation: ${RotateAnim} 1s linear infinite;    span {     font-size: 36px;   } `;           일반 css를 사용한다면, 부모-자식관게가 형성되어 있다면, Box &gt; span 이런 식으로 만들어 사용해야 했다면  sass / scss나 styled-components는 부모 컴포넌트 안에 자식의 태그의 속성값을 넣어줄 수도 있습니다.  이렇게 span 태그에 font-size 속성에 36px로 값을 줘서 안녕하세요! 라는 글의 사이즈를 키울 수 있습니다.             scss / sass를 html 환경에서 사용해보셨다면, scss -&gt; css로 변환되는 작업을 해야 사용이 가능한데  css를 보면, 저 위의 코드처럼 작업을 하면, 알아서, Box span과 같이 변환해주기 때문에  styled-components도 html에서 사용할 수 있도록 알아서 변환해줄 것입니다.          hover 이벤트 추가    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 const Box = styled.div`   height: 200px;   width: 200px;   background-color: green;   animation: ${RotateAnim} 1s linear infinite;    span {     font-size: 36px;      &amp;:hover {       color: white;     }   }    &amp;:hover {     background-color: black;   } `;      저 위의 코드처럼 Box에도, hover 이벤트를, span 태그에도 hover 이벤트를 발생시키도록 했습니다.  글을 마우스로 가져가면 글씨 색상이 흰색, Box는 검은색으로 변경되게끔 작성된 코드입니다.  css라면 전부 각각 따로 Box:hover 와 같이 사용해야 했지만  styled-components는 &amp;: / &amp;:: 로 각 이벤트들을 설정해줄 수 있습니다.       저 위의 코드는 html 태그니깐 span을 자식으로 줄 수 있는데  styled로 만든 컴포넌트는 어떻게 자식 관계로 만들어서 사용할 수 있나요??    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 import styled from \"styled-components\"; import { keyframes } from \"styled-components\";  const Parent = styled.div`   display: flex; `;  const RotateAnim = keyframes`   from{     transfrom: rotate(0deg);   }    to{     transform: rotate(360deg);   } `;  const Text = styled.span``;  const Box = styled.div`   height: 200px;   width: 200px;   background-color: green;   animation: ${RotateAnim} 1s linear infinite;    ${Text} {     font-size: 36px;      &amp;:hover {       color: white;     }   }    &amp;:hover {     background-color: black;   } `;  function App() {   return (     &lt;Parent&gt;       &lt;Box&gt;         &lt;Text&gt;안녕하세요!&lt;/Text&gt;       &lt;/Box&gt;     &lt;/Parent&gt;   ); }  export default App;      span 대신, Text라는 컴포넌트를 만들어서 안녕하세요! 라고 출력할 수 있도록 만들었습니다.  그럼, span 대신 ${Text} 를 사용하면 됩니다.  이렇게 사용하면 좋은 점은, as 키워드에 대해서 전에 쓰여진 글을 보셨다면 아시겠지만  as 키워드로, 이 태그가 anchor 태그가 되었든, input 태그가 되었어도 hover 이벤트는 실행되게 됩니다.  물론 as 키워드를 얼마나 사용하게 될지는 저도 잘 모르겠네요ㅎㅎ;;          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["Styled-Components"],
        "tags": ["styled-components","css","scss","sass"],
        "url": "/styled-components/0004/",
        "teaser": null
      },{
        "title": "[Next.js] 1. Intro",
        "excerpt":"작업 환경 : Mac OS 🧑🏻‍💻      🖥 Next.js 관련 모든 글 보기      01. Next.js 프로젝트 생성 및 실행 방법   02. Next.js url 구조에 대해서 알아봅시다.      안녕하세요. Nerd Lee 입니다.   이번 글은 next.js를 설치하는 방법과 실행하는 방법에 대해서 글을 적어보겠습니다.     NEXT.JS Intro     1. Next.js 란?           Next.js는 node.js를 기반으로 구축된 오픈 소스 웹 개발 프레임워크로써, 서버 측 렌더링 및 정적 웹사이트 생성과 같은 React 기반 웹 애플리케이션 기능을 가능하게 한다. 라고, 위키백과는 설명하고 있습니다.            쉽게 말해서, React 또한 SSR ( Server Side Rendering ) 방식으로 설계되어 있어 SSR이 가능은 하지만, 구현하기가 굉장히 번거롭기 때문에 그래서 나온 것이 Next.js 프레임워크다. 라고 말할 수 있습니다.         2. 프로젝트 생성하기      React.js를 설치하는 것과 비슷합니다. 터미널을 열고 명령어를 입력합니다.              바탕화면에 설치하시려면, cd desktop을 입력해서, desktop에 위치하게 한 다음 자바스크립트 환경을 하시려면 2번째 명령어를, 타입스크립트는 3번째 명령어를 입력하시면 됩니다.            입력한 뒤에 y를 입력하고, 해당 앱의 이름을 입력하시면 됩니다.         3. 프로젝트 실행해보기      vs code로, 해당 폴더를 열어보시면 다음과 같은 폴더구조를 가지고 있습니다.    [ TypeScript ]     [ JavaScript ]        vs code terminal( Command (⌘) + J )을 실행해서 명령어를 입력한 뒤 실행해봅시다!       ‘npm run dev’를 입력하면 실행이 됩니다. 하지만 react 처럼 브라우저를 열어주진 않습니다.   하지만 ready - started .. url : http://localhost:3000 이 보이실 것입니다.  그 링크를 command + 클릭 또는 브라우저에 http://localhost:3000을 입력하시면 실행이 됩니다.            이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["NextJS"],
        "tags": ["next.js","typescript","nextjs","reactjs","vercel"],
        "url": "/nextjs/0001/",
        "teaser": null
      },{
        "title": "[Next.js] 2. url 구조에 대해서 알아봅시다.",
        "excerpt":"작업 환경 : Mac OS 🧑🏻‍💻 언어 : Typescript      🖥 Next.js 관련 지난 글 보기      01. Next.js 프로젝트 생성 및 실행 방법   안녕하세요. Nerd Lee 입니다.   이번 글은 next.js의 url 구조에 대해서 알아보겠습니다.     NEXT.JS url 구조     1. react.js의 url 생성 방법      react.js의 url path 지정 방법       react.js는, react-router-dom을 설치하고 BrowserRouter로 감싸고, Switch 컴포넌트를 감싼 뒤, Route 컴포넌트를 이용해서, 각 컴포넌트(페이지)를 자식으로 둬야 합니다. 밑에 코드처럼 말이죠.       2. next.js는 더 쉽다!      next.js의 url path 지정 방법       이전 글에서 보시면 아시겠지만 pages 폴더가 있습니다. 그 폴더의 파일 이름이 url 주소가 됩니다. 하지만, 프레임워크인 만큼 next.js만의 룰이 있는데요. _app.tsx와 index.tsx 만큼은 가지고 있어야 합니다. index.tsx가 localhost:3000/ 이기 때문입니다.      예 ) 만약에 localhost:3000/test 를 만들고 싶다면?         예 ) localhost:3000/coin/price를 만들고 싶다면?         이렇게 파일 구조를 가지게 되면, 쉽게 url 구조를 만들 수 있습니다.          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["NextJS"],
        "tags": ["next.js","typescript","nextjs","reactjs","vercel","url"],
        "url": "/nextjs/0002/",
        "teaser": null
      },{
        "title": "[포트폴리오 작업] 01. 주식 커뮤니티 작업환경 설정",
        "excerpt":"작업 환경 : Mac OS 🧑🏻‍💻  Lauguage : Typescript  Web Framework: React.js  Framework To Use : react-router-dom, react-query, styled-components … 등등     📈 주식 커뮤니티 개발 1일차 ( 작업 환경 설정 )      모든 부분을 적지 않고, 생략되는 부분들도 많습니다.  프로젝트 하면서 반복되는 작업 또는 까먹을 수 있는 중요한 해결 문제들만 적을 예정이니  정확한 정보를 얻으실 수도 없을 수 있다는 점 알려드립니다.      1. 작업 환경 설정하기      1-1) react.js 설치하기         1-2) vs code extension 설치하기            indent-rainbow              들여쓰기를 할 경우, 유용한 익스텐션 중 하나, start point와 end point가 어디인지를 알 수 있다.                Material Icon Theme              해당 확장자나, 폴더의 이름이 무엇이냐에 따라, 파일의 아이콘이 이쁘게 변경된다.                Prettier              Command + S를 눌러 저장을 할 경우, 알아서 Prettier가 코드를 가독성 좋게 저장해준다.                vscode-styled-components             styled-components를 사용할 때, 속성 값을 보여주는 역할을 하는 익스텐션이다.              1-3) npm 패키지로 사용할 프레임워크들 설치하기             이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["project"],
        "tags": ["포트폴리오","프로젝트","개발","개발환경"],
        "url": "/project/0001/",
        "teaser": null
      },{
        "title": "[포트폴리오 작업] 02. 주식 커뮤니티 카테고리 및 미디어 쿼리 설정",
        "excerpt":"작업 환경 : Mac OS 🧑🏻‍💻  Lauguage : Typescript  Web Framework: React.js  Framework To Use : react-router-dom, react-query, styled-components … 등등     📈 주식 커뮤니티 개발 Two      모든 부분을 적지 않고, 생략되는 부분들도 많습니다.  프로젝트 하면서 반복되는 작업 또는 까먹을 수 있는 중요한 해결 문제들만 적을 예정이니  정확한 정보를 얻으실 수도 없을 수 있다는 점 알려드립니다.      1. 카테고리 설정      1-1 ) 폴더 구조         1-2 ) 카테고리       카테고리는 총 4가지로 구성. 국내 주식 / 해외 주식 / 코인 / 주식 계산기로, 주식 계산기는 예전에 만든 주식 계산기를 조금 디자인 이쁘게 만들면 될 듯 싶음.     2. Styled-components 미디어 쿼리 설정하기      2-1 ) theme.ts 수정         2-2 ) styled-components에서 미디어 쿼리 사용하기         한 예로, 브라우저가 laptop의 크기라면, font-size를 16 픽셀로 tablet이면, 14, 모바일 크기면 12 픽셀로 하게끔 미디어 쿼리를 작성함. styled-components에서는 미디어 쿼리를 이렇게 사용 가능하다.          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["project"],
        "tags": ["포트폴리오","프로젝트","개발","개발환경"],
        "url": "/project/0002/",
        "teaser": null
      },{
        "title": "[HTML/CSS] 1. HTML 구조",
        "excerpt":"   🖥 HTML / CSS 전체 글 보기      01. HTML의 구조에 대해서   02. HTML의 기본 문법에 대해서   02. CSS 기본 구조 (1)     안녕하세요. Nerd Lee 입니다.   게임 프로그래밍을 전공하면서, AR / VR을 개발하다가 회의감을 느끼고 1년여간 쉬면서   평소에 관심이 있던 웹 개발쪽을 공부해서 취업을 해야겠다 라고 생각을 한 뒤   독학을 하고 포트폴리오를 2가지를 만들면서 HTML과 CSS를 얕봤습니다.   그냥 만들면 되겠지 하다가 반응형 페이지도 만들어야 되는데, 계속 노가다 형식으로 때려 맞추다보니   이래선 안되겠다 싶어, HTML / CSS를 공부했습니다.   HTML을 공부했던 내용 중, HTML의 간단한 구조에 대해 알아보도록 하겠습니다!     HTML 구조     1. HTML의 기본 형식        1.1) DOCTYPE html?       이 문서의 타입이 html이란 내용입니다.      1.2) html태그의 속성 중 lang이란?            lang이란 속성은, 이 페이지의 언어를 뜻합니다. 저 언어에 따라 구글이 자동으로 번역할 건지 안할건지를 물어보기도 합니다. 저는 한국어로 되어 있기에, ko라는 값을 넣어줬습니다. ISO 코드에 대한 부분이 궁금하시다면 밑에 있는 버튼을 클릭해주세요.       ISO 코드          1.3) meta 태그의 charset 속성이란?       파일의 인코딩 형식에 대해 알려주는 속성입니다. UTF-8은 유니코드라는 문자 인코딩 방식 중 하나이며, charset이 없다면, 한글 또는 특수문자 등의 문자들이 깨져서 나올 수 있습니다.      1.4) name, content 속성?       보통 name속성은, viewport라는 값으로 사용되고 있고, iOS 장치로 인해서, 표준처럼 사용되고 있고 화면 상의 화상 표시 영역을 뜻합니다. 가장 기본적으로 사용되는 content 속성의 값이 width-device-width인데, 해당 기기의 넓이에 맞게 viewport의 넓이도 조절이 된다라는 뜻입니다. 예를 들어, 나의 pc의 최대 px이 1024px이라면 1024px만큼 화면 영역을 표시해줍니다.      1.5) title 태그?       title 태그는, 웹 페이지의 제목을 나타내는 태그입니다.     이렇게 작성을 했다면 밑에 사진과 같이 안녕 난 타이틀이야 라고 제목이 변경되는 것을 볼 수 있습니다.         1.6) &lt;head&gt; 와 &lt;body&gt; 태그란?       head태그는 문서의 내부 정보를 관리하는 용도로 사용되고 body태그는 화면의 모든 출력 내용을 가지는 컨테이너이며, 개발자가 내용을 출력할 수 있는 영역을 뜻합니다.          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["HTML_CSS"],
        "tags": ["html","css","head","body"],
        "url": "/html_css/0001/",
        "teaser": null
      },{
        "title": "[HTML/CSS] 2. HTML 기본 문법",
        "excerpt":"   🖥 HTML / CSS 이전 글 보기      01. HTML의 구조에 대해서     안녕하세요. Nerd Lee 입니다.   HTML을 공부했던 내용 중, HTML의 간단한 기본 문법에 대해 알아보도록 하겠습니다!     HTML 기본 문법     1. HTML의 사용 방법      1.1) element         위의 코드처럼 HTML은 &lt;&gt; 태그로 감싸져있고, 끝을 표현할 때엔 &lt;/&gt; 이렇게 사용합니다. 만약에 &lt;&gt;value&lt;/&gt; 라면, 브라우저에 문자열을 표현하기도 하고 태그 안에 다른 자식 element나 또는 value가 필요 없다면  로 사용할 수 있습니다. 그리고 이것들을 element라고 부릅니다.      1.2) attribute ( 속성 )         attribute는 태그에 대한 더 구체적인 설명을 제공하는 역할로 대표적으로 class와 id와 같이 해당 태그에 대한 속성을 지정해서 태그의 기능들을 추가해주기도 합니다.      1.3 ) 주석         html에서 주석은 &lt;!-- --&gt; 이렇게 표현합니다.     2. 각 태그에 대한 내용들      2.1) 텍스트 관련 태그         &lt;h1&gt;~&lt;h6&gt; 태그는 Headings라고 하며, 문서의 제목 작성에 필요한 태그이며 숫자가 크면 클수록 글씨의 크기가 작아집니다.   &lt;p&gt; 태그는 paragraph라고 하며, 본문 또는 한 단락에 대한 글을 작성하기 좋은 태그입니다.   &lt;br&gt; 태그는 한 줄 띄어쓰기로 C언어나 JAVA에서의 \\n과 같다고 생각하면 됩니다.      2.2 ) Anchor 태그 및 속성         &lt;a&gt; 태그는 Anchor, 한국말로 닻인데, 왜 Anchor인지는 모르겠지만 앵커 태그라고 합니다.  자주 쓰이는 속성은 href, target, title 정도입니다.  “href” 속성은 이동하려는 링크를 값으로 주면 클릭 시 해당 홈페이지로 이동합니다.  “target” 속성은, 현재 페이지에서 홈페이지로 이동할 지 아니면  새로운 탭을 추가해서 홈페이지로 이동할 지를 결정하는 속성입니다.  default값으로, _self이며 _self는 현재 페이지에서 홈페이지 이동, _blank는 다른 탭에서의 홈페이지 이동입니다.  “title” 속성은 링크에 마우스를 가져다 대고 있으면 구글로 이동합니다. 라는 글이 뜨게 됩니다.       2.3 ) 리스트         &lt;li&gt; 태그는 list를 ㄹ뜻합니다.   &lt;ul&gt; 태그는 unordered list라고 하며, 순서가 정해지지 않은 리스트를 말합니다.        &lt;ol&gt; 태그는 ordered list라고 하며, 순서가 정해진 리스트를 말합니다.       아래 코드의 실행 결과입니다.      See the Pen hello by nerd-lee (@nerd-lee) on CodePen.             ul 태그는 순서는 올바르게 출력하지만, ol 태그처럼 앞에 순서를 적어서 정렬하지 않는 반면에  ol 태그는 순서에 맞게 1. 2. 3. 을 앞에 붙여주게 됩니다.            또한 ol 태그에서는 type이란 속성을 사용할 수 있는데, type에는 “a”, “A”, “1”, “I”, “i” 라는 값을 넣어줄 수 있습니다. 해당 값에 따른 출력값은 다음과 같습니다.          See the Pen hello by nerd-lee (@nerd-lee) on CodePen.        2.4 ) 이미지 태그       img 태그는, 이미지를 나타내는 태그이고 src 속성은, source의 줄임말로써 해당 프로젝트 폴더에 있는 경로를 넣어주거나 다른 웹페이지에 있는 이미지 url을 넣어 사용할 수 있습니다.         2.5 ) input 태그       input 태그는 쓰이는 속성도 많고 그만큼 사용하는 값도 많기 때문에 링크를 따로 남기겠습니다.   Input 속성이 궁금하다면 클릭!      2.6 ) strong과 i 태그       strong 태그는 bold 처리, i 태그는 이탤릭체(italic)를 만들 때 사용합니다.      See the Pen hello by nerd-lee (@nerd-lee) on CodePen.            이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["HTML_CSS"],
        "tags": ["html","css","head","body"],
        "url": "/html_css/0002/",
        "teaser": null
      },{
        "title": "[HTML/CSS] 3. CSS 기본 구조 (1)",
        "excerpt":"   🖥 HTML / CSS 이전 글 보기      01. HTML의 구조에 대해서   02. HTML의 기본 문법에 대해서     안녕하세요. Nerd Lee 입니다.   HTML과 CSS를 공부 한 내용 중 CSS의 기본구조에 대한 내용에 대해 알아보도록 하겠습니다.     CSS 기본 구조     1. CSS 공부 전 html의 코드        위 코드로 공부를 진행했습니다.     2. CSS란 무엇인가?      Cascading Style Sheets의 약자로  HTML이나 XML로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어라고 합니다.  CSS는 HTML의 요소 하나하나를 어떻게 렌더링되어야 하는지를 지정할 수 있고  Cascade란, 한국어로 종속을 뜻하는데 서로 다른 원점에서 가져온 속성 여럿을 조합해서  최종 결과를 도출하는 알고리즘을 뜻한다고, MDN Web Docs에선 표시되어 있습니다.     3. CSS의 기본 구조       4. CSS 사용 방법      4.1 ) HTML style 태그에서 사용하기         &lt;style&gt; 태그 안에 h1 태그의 스타일을 지정해주는 코드를 작성했습니다.  color는, 문자의 색상의 속성을 뜻하고 green은 아시다시피 초록색으로 지정했기에  청춘예찬이라는 글씨가 초록색으로 변합니다.      4.2 ) 스타일을 변경 할 태그 안에 style 속성을 이용하기         &lt;h1&gt; 태그 안에 직접 style 속성에, css의 속성값을 사용할 수도 있습니다.      4.3 ) CSS 파일을 만들어서 html에 연결해서 사용하기       index.css 라는 파일을 만들어준다.   &lt;head&gt; 태그 안에 &lt;link&gt; 태그를 추가한다.             &lt;link&gt;의 rel 속성이 궁금하다면 밑에 버튼을 클릭해주세요.  Link의 rel 속성이 궁금하다면 클릭!            index.css 파일에 값을 넣어줍니다.         글이 길어지기 때문에, 2편으로 다시 돌아오겠습니다!          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["HTML_CSS"],
        "tags": ["html","css","head","body"],
        "url": "/html_css/0003/",
        "teaser": null
      },{
        "title": "[HTML/CSS] 3. CSS 기본 구조 (2)",
        "excerpt":"   🖥 HTML / CSS 이전 글 보기      01. HTML의 구조에 대해서   02. HTML의 기본 문법에 대해서   03. CSS 기본 구조 (1)     안녕하세요. Nerd Lee 입니다.   이전 내용에 이어 CSS 기본 구조에 대한 2번째 글을 작성해보도록 하겠습니다!     CSS 기본 구조 (2)     1. 선택자 (Selector)      1.1) type 선택자       아래 코드와 같이, HTML 태그를 지정하는 것을 type 선택자라고 합니다.        1.2) atrribute 선택자       아래 코드처럼, a 태그인데, href의 속성이 https://google.com 인 태그를 지정하는 것인데 쓰일일은 없다고 생각합니다. PASS!        1.3) id 선택자와 class 선택자       클래스와 id 선택자는 같으면서도 다른 점을 가지고 있습니다.            클래스 선택자는 앞에 .(클래스 네임)을 붙이는 반면에 id 선택자는 #(클래스 네임)을 붙여서 사용합니다.       id 선택자는 주민등록번호라면, class는 성별이라고 생각하면 편할 것 같습니다.                    주민등록번호는 한 사람 당 하나만 존재하지만, 성별이 남자인 사람, 여자인 사람 여러명이 있죠?           즉, id는 태그당 하나만 가질 수 있고, 클래스는 여러 태그에 넣어서 사용할 수 있습니다. 밑에 코드를 보면 자세히 이해가 갈 것입니다.                                1.4) 그룹 선택자       밑에 코드처럼, &lt;h1&gt; 태그와 &lt;span&gt; 태그를 묶어서 한 번에 속성을 변경할 수 있습니다.        1.5) 가상 선택자       가상 선택자는 여러개가 있기 때문에, 가상 선택자에 대해 알고 싶다면 밑에 버튼을 클릭해보세요.  밑에 Codepen 예제를 넣어놨습니다. p 태그를 마우스로 가져다대면 p 태그의 배경색이 회색으로 변경하는 예제입니다.   가상 선택자가 궁금하다면 클릭!      See the Pen hello by nerd-lee (@nerd-lee) on CodePen.       2. div와 span 태그에 대해서      div와 span의 차이점은, block과 lnline이라는 차이점이 있습니다.  block은 글자가 하나밖에 없더라도 가로영역이 100%가 다 잡혀집니다.  기본으로 지정된 margin과 padding을 제외한다면 말이죠.  하지만 inline은, 글자가 한 글자라면, 해당 글자에 대한 영역이 잡혀집니다.  그리고 div는 margin을 사용할 수 있지만, inline은 margin을 사용할 수 없습니다.      See the Pen hello by nerd-lee (@nerd-lee) on CodePen.       3. CSS 속성에 관해      css의 속성은 너무나도 많습니다. 그렇기 때문에, 필요한 속성이 있다면 밑에 버튼을 클릭해서 보시면 될 것 같습니다.     css 속성이 궁금하다면 클릭!          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["HTML_CSS"],
        "tags": ["html","css","head","body"],
        "url": "/html_css/0004/",
        "teaser": null
      },{
        "title": "[HTML/CSS] 4. CSS Flex (1)",
        "excerpt":"   🖥 HTML / CSS 이전 글 보기      01. HTML의 구조에 대해서   02. HTML의 기본 문법에 대해서   03. CSS 기본 구조 (1)   03. CSS 기본 구조 (2)     안녕하세요. Nerd Lee 입니다.   CSS에서 중요한 Flex에 대한 첫 번째 공부 내용을 적어보도록 하겠습니다.     CSS Flex     1. Flex &amp; Grid?      flex       1차원 정렬에 대한 속성      grid       2차원 정렬에 대한 속성     2. flex에 사용되는 속성      2.1) 참고할 만한 링크       CSS Tricks   1분 코딩      2.2) display 속성에서 flex로 값을 지정       display 속성에서, flex로 사용하면 됩니다. 기본 정렬은 row로 설정됩니다.      2.3) flex-direction       flex-direction은 정렬되는 방향을 정하기 위한 속성입니다.  row / column / row-reverse / column-reverse 이렇게 총 4가지의 정렬 값이 제공됩니다.            row : 가로 정렬 ( default )       column: 세로 정렬       row-reverse : 가로 역방향 정렬       column-reverse: 세로 역방향 정렬              See the Pen hello by nerd-lee (@nerd-lee) on CodePen.        2.4) flex-wrap       no-wrap | wrap | wrap-reverse로 값이 제공되며, default로는 nowrap으로 설정이 되어 있습니다.            no-wrap : 브라우저 영역에 벗어나도, 아이템을 밑으로 내려보내지 않습니다.       wrap : 브라우저 영역을 벗어나게 되면 아이템을 밑으로 내려보냅니다.       wrap-reverse : 아이템을 밑으로 내려보내지만, 거꾸로 정렬해서 표시합니다.              See the Pen hello by nerd-lee (@nerd-lee) on CodePen.        2.5) flex-flow       flex-flow는, flex-direction과 flex-wrap을 한 번에 사용할 수 있는 축약형 속성입니다.             예 ) flex-flow : column wrap; 이면, 세로로 정렬되고 영역을 벗어나면  아이템에 크기에 맞게 다른 영역에 채워줘! 라고 한 번에 명령을 내리게 됩니다.              See the Pen hello by nerd-lee (@nerd-lee) on CodePen.     다음 내용은, 2편으로 넘어가도록 하겠습니다.          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["HTML_CSS"],
        "tags": ["html","css","head","body"],
        "url": "/html_css/0005/",
        "teaser": null
      },{
        "title": "remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead. 해결방법",
        "excerpt":"   Mac OS 컴퓨터를 포맷하고 난 뒤 스프링 프로젝트가 다 다운받아지고, github에 업로드 할려고 했는데 밑에와 같은 로그가 뜨면서 업로드에 실패했다고 한다.     1 remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.  이러한 오류를 발견했다. 아니 맥북을 몇년전에 사용했던 것도 아니고.. 한 3개월만에 새로운 마음으로 포맷을 한건데.. 3개월 전에는 이런식으로 안했는데 왜 이러지? 라고 하고 해결법을 찾는다.   Github push token 에러 해결 링크   위의 링크를 참고해서 문제를 해결했다.   아이디와 패스워드를 입력해서 로그인 하는 방식이 아닌, personal access token을 사용해서 push나 pull이 가능하도록 한 것 같다.   해결방법은 다음과 같다.   1. github 홈페이지에서 Settings 클릭   2. 메뉴 맨 밑에 있는 Developer settings 클릭   3. Personal access tokens 클릭   4. Generate new token 클릭   5. token을 설정한다.      5.1 ) Note는, 그냥 인증을 위한 것이기 때문에 auth 또는 아무렇게 이름을 입력한다.   5.2 ) repo, admin:repo_hook, gist, user, delete_repo를 클릭하고, Generate token을 클릭한다.   5.3 ) 그럼 토큰이 만들어졌을텐데, 창을 나가지말고 토큰 번호를 복사한다.   6. 터미널에서, user 정보를 입력하자.   1 2 $ git config --global user.name \"username\" $ git config --global user.email \"user@email.com\"      깃이 올라갈 때의 이름과, 깃허브의 이메일을 입력한다.   7. git push   1 2 $ Username for https://github.com : {아이디 입력} $ Password for https://github.com/id : {복사한 토큰 붙여넣기 또는 입력}      Username에서는, 자신의 아이디를 적고 Password는 token을 입력해야한다. macOS 같은 경우 비밀번호를 입력해도 보이지 않을텐데, 그냥 붙여넣기 하고 엔터를 눌러도 아무런 문제가 없다.   이렇게 하면 push를 해도 아무런 문제 없이 push가 잘 될 것이다.   이전 방식이 편했는데.. 이번 방식은 생각하지도 못해서 당황했다ㅠㅠ   모두 잘 해결이 되기를 바랍니다ㅠㅠ      이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!  ","categories": ["Error"],
        "tags": ["git","github","remote","remote:Support for password authentication was removed on August 13","2021. Please use a personal access token instead.","terminal"],
        "url": "/error/0004/",
        "teaser": null
      },{
        "title": "MacOS Homebrew 및 git bash 설치 방법",
        "excerpt":"  안녕하세요. Nerd Lee 입니다.   MacOS Homebrew 및 git bash 설치 방법에 대해서 알아보도록 하겠습니다.   git bash를 설치하기 전에, Homebrew 라고 하는 오픈소스 패키지 매니저? 패키지 관리 시스템을 설치해야 합니다. 순서대로 하시다보면 git bash 설치는 금방금방 끝낼 수 있습니다!    1. Homebrew 홈페이지 가기     홈브루 홈페이지 링크     2. Homebrew 설치하기      mac os에 내장되어 있는 터미널에 해당 명령어를 붙여넣기 하면 설치 시작! 조금 오래 걸립니다.   1 /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"      설치 완료 후 버전을 확인해보세요.   1 $ brew -v      설치가 되어 있다면, Homebrew 3.x.x 이런 식으로 표시됩니다.     3. Git bash 설치하기  Git bash 홈페이지 링크      링크를 클릭하면, Homebrew로 설치하는 방법이 나오는데, 명령어는 다음과 같습니다.   1 $ brew install git      위의 명령어를 터미널에 붙여넣기 하면 git이 설치가 됩니다.          이 글이 도움이 되셨다면 댓글 부탁드립니다^^  다음 글로 찾아오겠습니다!   ","categories": ["Install"],
        "tags": ["macos","homebrew","mac git bash 설치","mac homebrew 설치","홈브루"],
        "url": "/install/0001/",
        "teaser": null
      }]
