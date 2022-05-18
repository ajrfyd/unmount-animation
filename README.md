## Practice of animation for unmount

언마운트시 애니메이션 적용될 수 있도록 연습하였음. 

### 방법(page Component)
1. 페이지가 나타났다 사라지는 trigger를 자체 appear라는 상태를 사용.
2. useEffect(첫번째)의 디펜던시에 페이지 값의 변경에 따른 appear 상태 => true로 변경(최초 마운트에도 true가 됨)
3. next, prev버튼에 appear 상태값 false하여 꺼진 상태를 발동 시키며 동시에 페이지 이동(navigate)하여 새로운 페이지  랜더링
4. 자체 localState를 트리거인 appear 값과 연동시켜 
5. 두번째 useEffect는 버튼을 누름과 디펜던시의 appear 값이 false로 바뀌어 실행.
6. 처음 localState 값이 appear와 연동되어 있으나 버튼의 trigger 역할을 통해 false로 바뀌면 잠시 localState의 값과 appear값이 다르게 되고, 조건문이 발동하여 animate 값을 true로 바꾸게 된다.(여기서 animate 값은 언마운트 시 애니메이션을 발동하는 trigger가 됨)
7. 두번째 useEffect의 조건문 밑에서 다시 localState값과  appear 값을 일치 시켜 준다.(없으면 언마운트시 애니메이션 x)
8. unmount 애니메이션 필요한 컴포넌트에 disappear프롭으로 animation 상태값 넘겨줌.(animation 값이 true 이면 마운트와 다른 애니메이션 보여줌.)