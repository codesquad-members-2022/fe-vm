# 🍒🍋 Dony's Fruit Vending Machine 🥝🫐

코드스쿼드 개인 프로젝트이다.  
사용자가 지갑에 있는 돈을 입력 또는 클릭하여, 원하는 제품을 선택할 수 있다.  
실제 자판기의 작동 원리와 비슷하게 작동하도록 구현하는 것이 목표였다.  
<br>
2022.05.09 ~ 05.20 까지 약 2주간 진행되었다.  
자세한 내용은 [Wiki](https://github.com/jindonyy/fe-vm/wiki)에서도 확인할 수 있다.  
<br>
<br>

## 🛠 Skills

<br>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>  
<br>

### React

- 캡슐화된 컴포넌트로 상태관리를 할 수 있어 복잡한 UI도 효과적으로 구성할 수 있다.
- Router의 기능으로 SPA(Single Page Application)가능하다.  
  <br>

### Styled Components

- Scss라이브러리 설치 없이 Scss 문법을 사용할 수 있다.
- 자유로운 CSS 커스텀 컴포넌트를 만들 수 있다.
- 컴포넌트의 props를 참조할 수 있으며, props의 값에 따라 스타일을 다르게 코딩 할 수 있다.  
  <br>
  <br>

## ✅ Demo

### site

[dony vending machine 🍒](https://jindonyy.github.io/fe-vm/)

### video


https://user-images.githubusercontent.com/17706346/169633859-8b734cac-8a2a-4a0a-985c-a28dfdcd3c32.mov


 
<br>
<br>

## ✨ Feature

- [x] Context, useReducer 등을 이용하여 상태 관리하기
- [x] Router를 사용하여 SPA 구현
- [x] custom Hook 사용해보기  
       <br>
      <br>

## 📂 Directory Tree

```
├── 📂 src
│   ├── App.jsx
│   ├── App.style.js
│   ├── GlobalStyles.js
│   ├── 📂 components
│   │   ├── 📂 orderArea
│   │   │   ├── History.jsx
│   │   │   ├── History.style.js
│   │   │   ├── MoneySlot.jsx
│   │   │   ├── MoneySlot.style.js
│   │   │   ├── OrderArea.jsx
│   │   │   ├── OrderArea.style.js
│   │   │   ├── ProductHole.jsx
│   │   │   ├── ProductHole.style.js
│   │   │   ├── PutBtn.jsx
│   │   │   ├── PutBtn.style.js
│   │   │   ├── ReturnBtn.jsx
│   │   │   └── ReturnBtn.style.js
│   │   ├── 📂 productsArea
│   │   │   ├── Product.jsx
│   │   │   ├── Product.style.js
│   │   │   ├── ProductsArea.jsx
│   │   │   └── ProductsArea.style.js
│   │   └── 📂 wallet
│   │       ├── AmountWrap.jsx
│   │       ├── AmountWrap.style.js
│   │       ├── MoneyItem.jsx
│   │       └── MoneyItem.style.js
│   ├── 📂 constant
│   │   └── constant.js
│   ├── 📂 contexts
│   │   ├── FinalPayProvider.jsx
│   │   ├── HistoryProvider.jsx
│   │   ├── SelectedProductProvider.jsx
│   │   ├── VMTimerProvider.jsx
│   │   └── WalletProvider.jsx
│   ├── 📂 data
│   │   ├── products.js
│   │   └── wallet.js
│   ├── 📂 hooks
│   │   ├── useInputPay.jsx
│   │   └── useVMState.jsx
│   ├── index.jsx
│   ├── 📂 layout
│   │   └── GNB
│   │       ├── GNB.jsx
│   │       └── GNB.style.js
│   ├── 📂 pages
│   │   ├── VendingMachine.jsx
│   │   ├── VendingMachine.style.js
│   │   ├── Wallet.jsx
│   │   └── Wallet.style.js
│   └── 📂 helpers
│       └── helper.js
├── .gitignore
├── .prettierrc
├── jsconfig.json
├── package.json
├── package.lock.json
└── README.md
```
