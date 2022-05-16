### 웹 자판기

- [ ] 간단한 디자인 시안

- [x] 프로젝트 셋팅

- [x] home / mypage Router 분리

- [x] 상태 설계

- [ ] react + typescript + jest setup

  - [x] Settings
  - [x] 테스트 맛보기
  - [ ] 작은 단위로 시작 (상태값 변경에 따른 해당 컴포넌트가 리렌더링 되었는지를 검사)

- [ ] 금액 컴포넌트 구현

  - [x] 10 ~ 10000을 입력하면 진행화면에 금액 표시
  - [ ] 동전 / 지폐 갯수와 일치하지 않는 금액이 입력되면 가장 가까운 금액으로 자동보정되어 입력됨
    - 금액이 존재하지 않는 화폐 단위이면, 존재하는 화폐 단위로 변환
    - 입력된 금액 -> 화폐가 지갑에 없다면, 가장 가까운 화폐 단위로 변환
    - 가장 가까운 화폐가 없다면(지갑에 돈이 없다면)... 지갑에 돈이 없음을 알린다?
    - 카운트 스타트
  - [ ] 투입금액을 추가로 넣으면 자동반환 되기까지 다시 5초 대기

- [x] 반환 컴포넌트 구현

  - [x] 반환 컴포넌트 클릭 시 투입된 금액 반환되며, 지갑에는 다시 돈이 채워지도록

- [ ] 지갑 컴포넌트 구현

  - [x] 실시간으로 각 금액이 반영되도록 보여지도록 구현
  - [x] 금액 컴포넌트에서 금액입력시 자판기에 금액이 입력함과 동시에 해당 지갑의 돈의 갯수 차감
  - [x] 지갑에서 해당 금액을 클릭 시 해당 금액 재렌더링
  - [ ] 금액이 입력되고 5초 동안 입력이 없으면 투입된 금액은 자동 반환되고(input창 0원으로 변경), 지갑에 다시 돈이 채워지도록

- [x] 이벤트 메시지 컴포넌트 구현

  - [x] 모든 이벤트는 우측 하단 메시지 창 화면에 표시

- [ ] 물품 컴포넌트 구현

  - [x] 물품 이미지 & Text & Price 표현
  - [x] 상품이 존재하지 않을때는 => 상품 선택 불가 || Sold Out Image 대체
  - [x] 투입된 금액이 만족되면 구매할 수 있는 상품의 테두리 색상 변경
  - [ ] 5초 안에 해당 물품 선택 시 상품이 2초뒤에 배출, 잔돈 반환

- [ ] 소지한 물품 컴포넌트 구현

  - [ ] 내가 구입한 물품들을 보여줄 수 있는 리스트로 해당 물품의 이미지, 텍스트, 개수 표현

- [ ] msw로 api 테스트
