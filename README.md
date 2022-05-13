# CodeSquad Vending Machine Project

---

# 🔶 1st PR Message (May 11)

안녕하세요 어텀! 반갑습니다.🍂
이번 PR에서는 주로 Webpack으로 React 환경 설정에 집중하였고, 프로젝트의 기반을 마련하기 위한 작업들을 위주로 하였습니다.
그래서 아직 코드로 구현한 내용은 없지만, 과정에 대한 피드백과 조언 부탁드립니다.😶‍🌫️

## Closed Issues

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

<br/>

# 🔶 2nd PR Message (May 13)

안녕하세요 어텀!🍁 두 번째 PR입니다.
이번에는 Styled Components를 활용해서 피그마 디자인 도안대로 디자인 작업을 완료해 보았습니다.
React Router의 중첩 라우팅과 Outlet 컴포넌트를 활용해서 페이지 전환이 되도록 구현했습니다.

## Closed Issues

- jaypedia/fe-vm#4
- jaypedia/fe-vm#6
- jaypedia/fe-vm#7
- jaypedia/fe-vm#8
- jaypedia/fe-vm#9
- jaypedia/fe-vm#10

## Demo

![myvendor](https://user-images.githubusercontent.com/85419343/168315301-37da32ac-f203-4a64-92d3-f3e67456d505.gif)

## 고민한 점

### `NavLink` 컴포넌트를 활용할 때

```jsx
const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <S.NavbarInner>
        <NavLink to="/" style={({ isActive }) => (isActive ? theme.activeNavStyle : undefined)}>
          <S.LogoIcon />
        </NavLink>
        <S.IconBox>
          <NavLink
            to="/wallet"
            style={({ isActive }) => (isActive ? theme.activeNavStyle : undefined)}
          >
            <S.MoneyIcon />
          </NavLink>
          <NavLink
            to="/stock"
            style={({ isActive }) => (isActive ? theme.activeNavStyle : undefined)}
          >
            <S.StockIcon />
          </NavLink>
        </S.IconBox>
      </S.NavbarInner>
    </S.NavbarWrapper>
  );
};
```

- Navbar 구현 시 Link 컴포넌트 대신, 활성화될 때 스타일링을 좀 더 편리하게 할 수 있는 NavLink를 활용해 보았습니다. 그런데 이 때 style props로 넘겨 주는 콜백 함수가 중복되는 것을 없애 보고 싶어서 이것저것 시도해 보았으나 실패했습니다.
- NavLink의 자식 컴포넌트로 또 다른 컴포넌트를 전달해야 하는 상황이어서 그런 것 같은데 혹시 이에 관련해서 조언을 주실 수 있나요?

### Styled Components를 활용해서 컴포넌트에 다양한 스타일링을 할 때

```js
// components/ItemBlock/ItemBlock.style.js
const getCategoryColor = categoryId => {
  switch (categoryId) {
    case 1:
      return theme.color.green;
    case 2:
      return theme.color.purple;
    case 3:
      return theme.color.pink;
    case 'money':
      return theme.color.blue;
  }
};

const InnerColor = styled(FlexBox)`
  ...
  background-color: ${({ theme: { greyScale }, categoryId }) =>
    categoryId ? getCategoryColor(categoryId) : greyScale.soldOut};
  ...
`;
```

- 각 음료 아이템의 컬러를 카테고리마다 다른 색으로 바꿔주기 위해서 위와 같이 `switch case`문을 활용해 보았습니다.
- 객체로도 구현이 가능한데 객체로 구현하는 것이 좀 더 효율적인 방법일까요? 함수를 만들지 않아도 되어서 객체가 좀 더 빠른 방법일까요?
- 혹은 위 두 가지 방법 외에 스타일링을 어떤 조건에 따라 분기처리 해 주려면 더 나은 방법이 있을까 궁금합니다.

### Styled Components를 작성하면서

이번 프로젝트를 하면서 Styled Components를 좀 더 잘, 중복되지 않도록 작성하고 싶었는데 그 점이 잘 되었는지 궁금합니다. 어떻게 하면 좀 더 잘 작성할 수 있을까요? 뭔가 기준이 아직 없어서 그런지 구현할 때 '이게 잘 한 건가?'라는 의문이 계속 들었습니다.

## 추후 계획

- state를 고민하며 요구사항 기능 구현
- context API 학습
