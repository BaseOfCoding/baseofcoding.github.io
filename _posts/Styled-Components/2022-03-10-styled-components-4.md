---
title: "Styled-Components 애니메이션과 Pseudo Selector"
description: "04. Styled-Components 애니메이션과 Pesudo Selector 사용 방법에 대해서 알아봅시다!"
categories: [Styled-Components]
tags: [styled-components, css, scss, sass]
toc: true
author_profile: false
classes: wide
math: true
mermaid: true
image:
  path: 
  width: 
  height:
---

![](/assets/img/etc/styledcomponents.png)

📖 지난 글 보기<br>

- [01. Styled-Components 설치 및 사용하기](/styled-components/0001/)
- [02. Styled-Components 확장해서 사용하기](/styled-components/0002/)
- [03. Styled-Components as와 attrs란?](/styled-components/0003/)

---

안녕하세요. Nerd Lee 입니다.

지난 글에서, styled-components에서 사용되는 as와 Attrs에 대해서 알아봤습니다.

이번 글에서는 styled-components에서 사용할 수 있는 애니메이션 방법과 Pesudo Selector의 사용법에 대해서 알아보도록 하겠습니다.

---

# Styled-Components 애니메이션, Pesudo Selector

---

### 1. 애니메이션 사용

> App.js에 있는 모든 코드를 지우고 아래와 같은 코드로 작성해주세요.

```jsx
import styled from "styled-components";

const Parent = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
`;

function App() {
  return (
    <Parent>
      <Box />
    </Parent>
  );
}

export default App;
```

> ketframe 추가하기

```jsx
import styled from "styled-components";
import { keyframes } from "styled-components";

const Parent = styled.div`
  display: flex;
`;

const RotateAnim = keyframes`
  from{
    transfrom: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
  animation: ${RotateAnim} 1s linear infinite;
`;

function App() {
  return (
    <Parent>
      <Box />
    </Parent>
  );
}

export default App;
```

- RotateAnim 이란 컴포넌트를 하나 만들고, styled-components에서 제공해주는 keyframes를 사용하면<br>
  기존 css과 같이 from, to를 사용해서 애니메이션의 키 프레임을 만들어 사용할 수 있습니다.<br>
  그리고, Box에 애니메이션 속성값을 넣어줘서, RotateAnim을 사용하고<br>
  1초 동안 0~360도씩 계속 회전하는 방식의 애니메이션이 보입니다.

---

### 2. Pesudo Selector

> Box 컴포넌트 안에 span 태그를 자식으로 넣어줍니다.

```jsx
function App() {
  return (
    <Parent>
      <Box>
        <span>안녕하세요!</span>
      </Box>
    </Parent>
  );
}
```

- scss or sass를 사용 해보셨다면 넘어가셔도 괜찮습니다.

- Box 컴포넌트안에 기존 html 태그인, span 태그를 추가해서 안녕하세요! 라는 글을 추가했습니다.<br>
  이제 Pesudo Selector가 무엇인 지 사용해보겠습니다.

> Box 컴포넌트에 span 태그를 자식관계로 만들어서 속성값을 추가해봅시다.

```jsx
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
  animation: ${RotateAnim} 1s linear infinite;

  span {
    font-size: 36px;
  }
`;
```

- 일반 css를 사용한다면, 부모-자식관게가 형성되어 있다면, Box > span 이런 식으로 만들어 사용해야 했다면<br>
  sass / scss나 styled-components는 부모 컴포넌트 안에 자식의 태그의 속성값을 넣어줄 수도 있습니다.<br>
  이렇게 span 태그에 font-size 속성에 36px로 값을 줘서 안녕하세요! 라는 글의 사이즈를 키울 수 있습니다.<br>

- scss / sass를 html 환경에서 사용해보셨다면, scss -> css로 변환되는 작업을 해야 사용이 가능한데<br>
  css를 보면, 저 위의 코드처럼 작업을 하면, 알아서, Box span과 같이 변환해주기 때문에<br>
  styled-components도 html에서 사용할 수 있도록 알아서 변환해줄 것입니다.

> hover 이벤트 추가

```jsx
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
  animation: ${RotateAnim} 1s linear infinite;

  span {
    font-size: 36px;

    &:hover {
      color: white;
    }
  }

  &:hover {
    background-color: black;
  }
`;
```

- 저 위의 코드처럼 Box에도, hover 이벤트를, span 태그에도 hover 이벤트를 발생시키도록 했습니다.<br>
  글을 마우스로 가져가면 글씨 색상이 흰색, Box는 검은색으로 변경되게끔 작성된 코드입니다.<br>
  css라면 전부 각각 따로 Box:hover 와 같이 사용해야 했지만<br>
  styled-components는 &: / &:: 로 각 이벤트들을 설정해줄 수 있습니다.<br>

> 저 위의 코드는 html 태그니깐 span을 자식으로 줄 수 있는데<br>
> styled로 만든 컴포넌트는 어떻게 자식 관계로 만들어서 사용할 수 있나요??

```jsx
import styled from "styled-components";
import { keyframes } from "styled-components";

const Parent = styled.div`
  display: flex;
`;

const RotateAnim = keyframes`
  from{
    transfrom: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

const Text = styled.span``;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
  animation: ${RotateAnim} 1s linear infinite;

  ${Text} {
    font-size: 36px;

    &:hover {
      color: white;
    }
  }

  &:hover {
    background-color: black;
  }
`;

function App() {
  return (
    <Parent>
      <Box>
        <Text>안녕하세요!</Text>
      </Box>
    </Parent>
  );
}

export default App;
```

- span 대신, Text라는 컴포넌트를 만들어서 안녕하세요! 라고 출력할 수 있도록 만들었습니다.<br>
  그럼, span 대신 ${Text} 를 사용하면 됩니다.<br>
  이렇게 사용하면 좋은 점은, as 키워드에 대해서 전에 쓰여진 글을 보셨다면 아시겠지만<br>
  as 키워드로, 이 태그가 anchor 태그가 되었든, input 태그가 되었어도 hover 이벤트는 실행되게 됩니다.<br>
  물론 as 키워드를 얼마나 사용하게 될지는 저도 잘 모르겠네요ㅎㅎ;;

---

<br>

<div style="font-size:25px; text-align:center">
이 글이 도움이 되셨다면 댓글 부탁드립니다^^<br>
다음 글로 찾아오겠습니다!

</div>
