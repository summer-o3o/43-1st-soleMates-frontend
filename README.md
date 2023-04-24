![wecode](https://user-images.githubusercontent.com/122140479/226254435-436a9a04-988c-4bee-967f-6761fb817f14.png)

# [soleMates] 신발의 클래식함을 판매하는 쇼핑몰

> 본 프로젝트는 2023년 3월 위코드에서 진행항 1차 프로젝트입니다
<br /><br /><br />


# 📅 개발 기간 및 인원

- 개발 기간: 2023.3.6 ~ 2023.3.17 (2주)
- 개발 인원:
  - FrontEnd : 이기태(Product Manager), 김수미, 홍태훈
  - BackEnd : 김승태(Project Manager), 최원식
  <br /><br /><br />
  
# ❶ 배경

왜 처음 "닥터마틴"을 참고하여 기획했나요?
<br />
---

<br>

# ❷ 서비스 소개

## soleMates, 어떤 서비스인가요?

## soleMates, 어떤 기능이 있나요?
- 로그인 회원가입
- 메인, 헤더, 푸터
- 상품 리스트
- 상품 상세페이지
- 장바구니
<br><br>


## 로그인, 회원가입
<img width="700px" align="center" src="https://user-images.githubusercontent.com/89458455/226306034-81f03632-bd96-4ab8-86a4-532c25fad44f.GIF">

- token의 유무에 따라 로그인/로그아웃 기능을 사용할 수 있도록 했어요.
- 정규식을 사용하여 회원가입유효성 검사를 했어요.
- 담긴 상품 갯수에따라서 장바구니아이콘의 수량이 바뀌도록 했어요.
- 토큰이 생성되면 로그인페이지로 이동되게 했어요.
<br><br>

## 메인, 헤더, 푸터
<img width="700px" align="center" src="https://user-images.githubusercontent.com/89458455/226306078-13850f26-4a7d-4078-9e1e-009346769278.GIF">

- 메인과 헤더에 라이브러리를 사용하지 않고 케러셀을 구현했어요.
- 헤더를 스크롤 고정해서, 사용자에게 편의성을 증가시켰어요.
- 카테고리를 상수데이터로 작업하여, 중분류, 소분류가 나오도록 했어요.
- 장바구니에 담긴 상품의 총 갯수 최대 99개까지만 나오도록 했어요.
<br><br>

## 상품 리스트
<img width="700px" align="center" src="https://user-images.githubusercontent.com/124991622/226310059-ea4aa0bf-2680-48e3-83a9-ae37b88da9c0.GIF">

- 상품을 찜할수 있어요.
- 상품호버시 모달이 노출되어, 상세페이지로 가지 않아도 장바구니로 바로 갈수있게 했어요.
- 좌측에 필터를 선택하면 필터를 선택하면 상품이 바뀌도록 했어요.
<br><br>

## 상품 상세페이지
<img width="700px" align="center" src="https://user-images.githubusercontent.com/122140479/226307272-f6022b92-3e12-4b22-b4f3-03f28fa83c66.gif">
<img width="700px" align="center" src="https://user-images.githubusercontent.com/122140479/226307166-28190a97-dbc2-4f5d-9fe8-0d754de10cea.gif">
<img width="700px" align="center" src="https://user-images.githubusercontent.com/122140479/226307292-5b3ed4b5-9afc-4bc7-9522-ba1a6fe48af2.gif">

- 상품의 수량을 증가할수 있도록했어요.
- 상품의 색상, 사이즈를 고를수 있도록 했어요.
- 상품을 찜할수 있도록 했어요.
- 선택한 상품의 정보를 장바구니 버튼을 누르면 모달이 나오도록했어요.
- 장바구니 확인 버튼 클릭 시 DB로 데이터 전송 및 장바구니에 담길수있도록 했어요
- 상품을 구매했다면, 리뷰와 평점을 남길수 있도록 했어요.
- 상품의 갯수의 따라 가격이 바뀌도록 했어요.
<br><br>

## 장바구니
<img width="700px" align="center" src="https://user-images.githubusercontent.com/89458455/226306141-6c3009b1-a9fb-4f5c-b7f4-0ce728861f12.GIF">

- 담긴 상품을 삭제할수 있도록했어요.
- 상품의 수량을 증가할수 있도록했어요.
- 체크박스 전체선택, 전체삭제할수있도록 했어요.
- 상품의 갯수의 따라 가격이 바뀌도록 했어요.
- 상품에 담긴게 없을때 빈페이지가 나오도록했어요.

---

<br><br>

# ❸ 핵심기술
## soleMates에서는 어떤 기술을 사용하였을까요?
> React와 Scss를 사용했어요!
