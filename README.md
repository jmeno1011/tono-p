public 폴더에는 정적인 에셋들을 저장해준다.
웹팩 관련된 설정은 next.config.js 에서 설정을 하면 된다.

### cna 안 쓰고 진행하기
- 1차 : npm install next@12.2.5 react@18.2.0 react-dom@18.2.0 --save
- 2차 : npm install styled-component --save , npm install babel-preset-next,  npm install --save-dev babel-plugin-styled-components
    - styled-components를 npm install styled-component `--save`이 save를 안해줬을 경우, 다음과 같은 에러가 발생할 수 있다. `Module not found: Can't resolve 'react-is'` 
- 3차 : vercel 배포중 npm install --save-dev eslint가 필요하다는 에러 발견
- 4차 : npm install axios api를 받아오기 위해서 다운 / npm install --save-dev @iconify/react icon사용을 위해 다운
- 5차 : npm install dayjs --save 날짜 포멧을 지정하기 위해 추가 - 달력 페이지에서 

### css 
- primary-color : #35BCB2;
- h2 : 1.5rem;
- h3 : 1.25rem;
- h4 : 1rem;
- h5 : 0.875rem;
- p : 0.875rem;
- border-color : #e3e3e3;

### 색 종류
- 노랑 : #cc9900
- 초록 : #339966
- 회색 : #9e9e9e
- 빨강 : #ca4747