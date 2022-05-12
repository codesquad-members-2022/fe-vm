# Vending Machine Project

# 🔶 1st PR Message (May 11)

안녕하세요 어텀! 반갑습니다.🍂
이번 PR에서는 주로 Webpack으로 React 환경 설정에 집중하였고, 프로젝트의 기반을 마련하기 위한 작업들을 위주로 하였습니다.
그래서 아직 코드로 구현한 내용은 없지만, 과정에 대한 피드백과 조언 부탁드립니다.😶‍🌫️

## Issue

- jaypedia/fe-vm#1
- jaypedia/fe-vm#2
- jaypedia/fe-vm#3
- jaypedia/fe-vm#5

## Figma 툴을 활용한 Design 시안 제작

![image](https://user-images.githubusercontent.com/85419343/167799918-ea279259-9d6e-4e77-aae0-9cec4b8a4776.png)

- Figma 툴을 활용하여 자판기 웹 페이지 디자인을 해보았습니다.
- 기본적인 요구사항은 모두 반영하였고 일부 수정한 부분도 있습니다.

## 요구사항 분석 시 User Story 방식 적용

- [Link](https://github.com/jaypedia/fe-vm/wiki/User-story) 에서 제가 작성한 사용자 스토리를 확인하실 수 있습니다.
- [이 링크](https://peter-cho.gitbook.io/book/8/how-to-understand-requirements)를 참조하여 사용자 스토리를 작성했습니다.
- `~하면 ~할 수 있다` 형식으로 작성하여 하나의 기능만 포함하도록 하였습니다.

## Webpack Configuration

- CRA 대신 Webpack을 활용해서 React 프로젝트를 셋업하고 싶었습니다.
- 같은 조의 콜라가 작성한 것을 참고하며 공부하고 적용해 보았습니다.

## Component Structure

- 다양한 디자인 패턴들이 있지만 기본에 충실하고 싶어서 공식문서의 [React로 생각하기](https://ko.reactjs.org/docs/thinking-in-react.html)를 참조하여 진행하려고 합니다.
- 큰 컴포넌트를 먼저 생각하고 하위 컴포넌트를 나중에 생각하는 Top-Down 방식으로 진행해보려고 합니다.

## 공통 스타일 작업 : GlobalStyle & ThemeProvider 활용

- GlobalStyle 안에 `@import url()`을 사용해 폰트를 적용했습니다.
- ❓보통 폰트를 적용할 때는 어떤 방식이 선호되는지 궁금합니다.
