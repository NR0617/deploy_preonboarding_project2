
## **프로젝트의 실행 방법**

```sh
git clone git@github.com:NR0617/deploy_preonboarding_project2.git

cd deploy_preonboarding_project2

npm install

npm start

open http://localhost:3000
```

## **디렉토리 구조**
```sh
deploy_preonboarding_project2
├── public
├── src
│   ├── api             # axios 등의 호출을 위한 함수들
│   ├── assets          # 이미지 파일 폴더
│   ├── components      # 하위 컴포넌트들
│   ├── context         # context API의 provider 모음
│   ├── pages           # 페이지 컨테이너
├── App.js
├── GlobalStyle.js
└── index.js
```  

## **commit msg 규칙**

### 1. 커밋 유형 지정하기

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

## **코딩 컨벤션**
- 컴포넌트의 ID사용은 지양한다.  
- react의 state는 여러개 사용시 최소 집합을 찾아 사용한다.
- 컴포넌트의 이벤트에서 불필요한 익명함수를 사용하지 않는다. (예시: 함수의 인자가 event 하나인 경우)
- 코드를 설명하는 주석은 가급적 사용하지 않는다.
- 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용한다.(예시: SYMBOLIC_CONSTANTS)
- 반환 값이 불린인 함수는 'is'로 시작한다
- const와 let은 사용 시점에 선언 및 할당한다.
- 함수는 사용 전에 선언해야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.
- 이벤트 핸들러는 'on'으로 시작한다.
- 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.


## 작업한 내용

## Assignment1. 이슈 목록 및 상세 화면 기능 구현


- **Infinity Scroll 구현**

```javascript
  const [page, setPage] = useState(currentPage);
  const loader = useRef(null);

  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, []);
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '10px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => {
      observer && observer.disconnect();
    };
  }, [handleObserver, loader]);

  useEffect(() => {
    if (page === undefined) setPage(0);
    getDataList(dispatch, page);
  }, [page]);

  useEffect(() => {
    try {
      if (page >= 1 && !issueDataArray === false) {
        setIssueDataArr(prev => [...prev, ...issueDataArray]);
      }
    } catch (e) {
      console.log(e.message);
      navigate('/error');
    }
  }, [loading]);

```


### 그 외 기능(옵션)
- 헤더의 로고 클릭시 메인 페이지 이동 기능
