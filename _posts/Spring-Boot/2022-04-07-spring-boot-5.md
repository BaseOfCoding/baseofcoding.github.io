---

title: "JSP 만들어서 동적인 페이지로 구동하기"
description: "JSP 만들어서 동적인 페이지로 구동하기"
categories: [Spring-Boot]
tags: [jsp, 동적 페이지, 정적 페이지, html, spring-boot, 공부, study 공부]
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

![](/assets/img/etc/javaspring.png)

안녕하세요. Nerd-Lee입니다.<br>
공부 내용은, 인프런 박매일님의
`[NarP Series]MVC 프레임워크는 내 손에[나프1탄]` 을 참고하였습니다.

---

### 1. 정적 페이지 ? 동적 페이지 ?

- 정적 페이지가 어떤 것이고, 동적 페이지가 어떤 것이냐
1분마다 시간을 물어본다고 예를 들어보도록 하자.<br>
그런데, 정적인 페이지는 시간이 변경이 되질 않는다.<br>
하지만 동적인 페이지는 2시 50분이면, 2시 50분이라고 출력이 되고 1분 뒤에는 2시 51분이 출력되게 된다.<br>
가장 큰 차이점은, `프로그래밍`을 할 수 있느냐 없느냐라는 것이다.

---

### 2. 홈페이지 파일의 역할

- HTML
	- 뼈대를 나타내는 파일이며, 홈페이지의 쌩얼이라고 생각하자.
- CSS
	- Casting Style Sheet의 약자로, 꾸미기 위한 파일이며, 홈페이지의 색조 화장품이라고 생각하자.
- Javascript
	- 동작 기능을 만들 수 있는 파일이며, 예를 들어서, 홈페이지에서 버튼을 클릭하면 밥을 먹는다. 와 같이 사람으로 표현하자면 행동이라고 생각하자.
- HTML + CSS + Javascript = Front-end
- Backend
	- Java, PHP, C# 등의 언어로 만들 수 있는 서버를 뜻하고 UI에 입력을 받아 DB에 데이터들을 처리하는 역할을 한다.

---

### 3. JSP

- webapp 폴더에, time.jsp 라는 파일을 하나 만들어주자.
- jsp를 사용하기 위해서는, java용 api 뿐만 아니라, Web용 api가 필요하다.
- Web용 api는, 톰캣 서버에서 제공을 해주는데, 톰캣 서버가 설치되어 있는 경로로 이동한 다음 `lib` 폴더로 들어가자.
- `lib` 폴더에 있는 `servlet-api.jar` 파일을 복사한 다음, `WEB-INF / lib` 폴더에 붙여넣기 해주자.
- 해당 프로젝트는 수동으로 만들었기 때문에, `servlet-api.jar` 파일을 연결해줘야 한다.
- 연결 방법은 다음과 같다.
	- 해당 프로젝트를 오른쪽 마우스 클릭
	- Build Path -> Configure Build Path 클릭
	- Libraries 메뉴로 이동
	- Add External JARs 클릭 후, 톰캣 경로에 있던 `servlet-api.jar` 더블클릭해서 연결
	- Apply 클릭하면, jsp에 <%@ %> 이 부분의 에러가 없어진다.

---

### 4. JSP 페이지에 JAVA 사용해서, 시간 넣기

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>Nerd-Lee의 홈페이지 방문을 환영합니다.</h2>
	<p>지금 몇시야? 2시 50분!</p>
</body>
</html>
```

위의 코드는 기본으로 만든 jsp 템플릿이다.<br>
이제 java로 프로그래밍을 해서 현재 시간을 구해서, 2시 50분이 아닌 현재 시간을 넣어주면 끝난다.

java로 프로그래밍을 할 때엔 `<% %>` 태그 안에서 하고, `<% %>`에서 얻은 데이터 값을 출력할 때엔<br>
`<%= %>`로 받아오면 된다. 코드를 한 번 보도록 하자.

```jsp
<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	Date d = new Date();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>Nerd-Lee의 홈페이지 방문을 환영합니다.</h2>
	<p>지금 몇시야? <%=d.toString() %></p>
</body>
</html>
```

- 위의 코드로 jsp를 만들어서 톰캣 서버를 실행해서, `localhost:port/time.jsp` 로 하면<br>
새로고침을 할 때마다 시간이 바뀐 것을 확인할 수 있다. 이러한 것을 `동적인 페이지`라고 하는 것이다.
- Tomcat server가 `<% %>` 와 `<%= %>`를 해석한 것이라고 볼 수 있다.

---

<br>

<div style="font-size:25px; text-align:center">
이 글이 도움이 되셨다면 댓글 부탁드립니다^^<br>
다음 글로 찾아오겠습니다!

</div>
