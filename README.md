# OLD POP 추천 서비스
## 1. 목표와 기능
### 1.1 목표
- 선택한 조건에 맞는 올드팝을 추천해주는 사이트 만들기


### 1.2기능
- 첫 번째 홈페이지에 나타나는 선택지 중 원하는 조건을 선택
- 선택한 조건에 맞는 올드팝의 제목을 가수, 발매 년도와 함께 출력


## 2. 개발 환경 및 배포 URL
### 2.1 개발 환경
- Visual Studio Code
- 사용 언어: HTML, CSS, JavaScript


### 2.2 배포 URL
-(오류 수정 후 링크 재업로드 예정)


## 3. 프로젝트 구조
### 3.1 프로젝트 구조
```
  ├─ 001.jpg
  └─ html
  │   ├ index.html
  │   └ result.html    
  ├─ js
  │   ├ index.js
  │   └ result.js
  └─css
      ├ common.css
      ├ index.css
      └ result.css    
```


## 4. UI / BM
### 4.1 목업페이지
- 카카오 오븐 이용


#### 1. 첫 번째 페이지

<img src="https://github.com/hantang820/ormi-first-project/assets/142385695/616a82da-d7f2-46ff-92eb-c7d1c4b93df6" width="80%">



#### 2. 로딩 화면

<img src="https://github.com/hantang820/ormi-first-project/assets/142385695/dca60025-b186-4089-9f2f-fee305fb5249" width="80%">



#### 3. 결과 출력 페이지

<img src="https://github.com/hantang820/ormi-first-project/assets/142385695/b2f28330-5473-4005-ae72-3c40953d986d" width="80%">



### 4.2 실제 구현 모습, 기능

#### 1. 첫 번째 페이지
- 노래를 추천 받기 위한 조건 선택
- 조건 선택 후 주문하기 버튼 클릭
- 주문하기 버튼 클릭 시 다음 페이지로 넘어감

<img src="https://github.com/hantang820/ormi-first-project/assets/142385695/a05e2842-8a4e-4427-87d1-469a4a21331f">



#### 2. 주문하기 버튼에 마우스가 올라갔을 때 버튼의 색깔

<img src="https://github.com/hantang820/ormi-first-project/assets/142385695/6d8cec89-9a61-47bf-bc35-f318032bf361" width="80%">



#### 3. 두 번째 페이지
- ChatGPT의 응답을 기다리며 로딩 화면 표시

<img src="https://github.com/hantang820/ormi-first-project/assets/142385695/b9ebdeb4-78cd-4880-b72a-f54df0c5cc06" width="80%">



#### 4. 두 번째 페이지
- ChatGPT가 조건에 맞게 추천한 노래를 화면에 출력
- 첫 번째 페이지로 돌아가 다시 하고 싶다면 다시하기 버튼 클릭

<img src="https://github.com/hantang820/ormi-first-project/assets/142385695/76bcc333-238b-4b27-a701-6f8056662c0f" width="80%">



#### 5. 다시하기 버튼에 마우스가 올라갔을 때 버튼의 색깔

<img src="https://github.com/hantang820/ormi-first-project/assets/142385695/20be1ab2-7b01-43a1-824d-7c9f6f630d2b" width="80%">




#### 6. 작동 영상
- <img src="https://github.com/hantang820/ormi-first-project/assets/142385695/de6baca5-53d7-49ae-87c0-d88e1bb4f385" width="80%">




## 5. 회고
- 배운 것을 직접 적용해보는 게 얼마나 중요한지 깨달을 수 있는 프로젝트였다. 과제 제출 목적이 아니더라도 앞으로 배우는 내용들도 이렇게 작은 프로젝트를 진행하며 공부해봐야겠다는 생각이 들었다.
- 구현하고 싶었지만 넣지 못한 기능들이 많았다. 차후에 하나씩 공부하면서 구현해보고 싶다는 생각이 들었다.
1. 출력된 추천 목록의 노래 제목을 클릭하면 그 노래를 들을 수 있는 페이지가 나왔으면 좋겠다.
2. 추천 받은 목록을 저장해놨다가 불러올 수 있는 기능이 있으면 좋을 것 같다.
3. ChatGPT의 응답이 내가 설정한 것과 다르게 나올 떄가 있다. 노래 제목, 가수, 발매 년도를 제외하고 다른 말을 덧붙이지 않도록 했음에도 부가 멘트가 추가될 때가 있다. 그러면 내가 구현해둔 페이지의 레이아웃이 변형된다. ChatGPT의 응답이 내가 설정한 것과 다르게 나온 경우에도 화면의 레이아웃이 무너지지 않을 수 있게 수정해보고 싶다.
4. 로딩페이지에서 로딩 되는 동안 화면에 표시되는 애니메이션을 구현해보고 싶다.
