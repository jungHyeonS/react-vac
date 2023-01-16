# VAC Patten Study

## VAC 패턴
View Asset Component의 약자로 렌더링에 필요한 JSX와 스타일을 관리하는 컴포넌트를 의미합니다<br/>
VAC패턴은 View 컴포넌트에서 JSX영역을 Props Object로 추상화 하고 JSX를 VAC로 분리해서 개발을 진행합니다

### VAC 패턴 특징
1. 반복이나 조건부노출, 스타일 제어와 같은 렌더링과 관련된 처리만 수행합니다
2. props를 통해서만 제어가 되고 상태를 관리하거나 변경하지 않는 컴포넌트입니다
3. 이벤트에 함수를 바인딩할때 어떠한 추가처리도 하지 않습니다

### Persentational 패턴과의 차이
<b>Persentational 패턴</b><br/>
1. 비즈니스 로직과 View의 관심사 분리가 목적 입니다<br/>
2. Container 컴포넌트에서 비지니스 로직을 관리하고 Persentational 컴포넌트를 제어 합니다<br/>
3. Presentational 컴포넌트는 VIEW로직(UI기능,상태관리등) 과 렌더링을 담당합니다<br/>
<br/>
<br/>
<b>VAC 패턴</b><br/>
1. View 로직(UI 기능, 상태 관리) 과 렌더링(JSX)의 관심사 분리가 목적입니다<br/>
2. View 컴포넌트가 VAC의 Container 컴포넌트 역할을 하며 JSX를 추상화환 Props Object를 관리하여 VAC를 제어합니다<br/>
3. VAC는 JSX,style을 관리하여 렌더링을 처리합니다