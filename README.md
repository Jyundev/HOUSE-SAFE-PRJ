# 전세사기 길잡이 앱 👋

## Contents Table

- [프로젝트 개요](#프로젝트-개요)
- [프로젝트 설명](#프로젝트-설명)
- [개발 환경](#개발-환경)
- [데이터](#데이터)
- [와이어프레임](#와이어프레임)


</br></br>

## 📆 프로젝트 기간 

| **날짜**              | **업무 내용**                                            |
| --------------------- | -------------------------------------------------------- |
| **2024.07.28 - 2023.08.04** | 프로젝트 기획, 주제 선정, 자료 조사                           |
| **2024.08.04 - 2023.08.10** | 데이터 수집 및 와이어프레임 생성                              |
| **2024.08.10 -**           | 프론트엔드 개발 (React Native Expo) <br> 백엔드 개발 (Node.js) |


</br></br>

## 🕺 구성원

| 구성원 | 깃허브 주소 | 분담 역할 |
| --- | --- | --- |
| 장윤영 | https://github.com/Jyundev |UI 디자인 및 프론트앤드 및 백엔드 개발|
| 김도한 | https://github.com/rlaehgks115 |UI 디자인 및 프론트앤드 및 백엔드 개발|
| 김백운 | https://github.com/kimbw0615 | 데이터 분석 및 데이터 시각화 리포트 생성|

</br></br>



## 프로젝트 개요


<div style="display: flex; justify-content: center;">
    <img src="assets\images\article.png" alt="Alt text" style="width: 70%; height: 100%; margin-top: 20px; margin-bottom: 40px;">
</div>

</br>

최근 몇 년간 전세 사기가 급증하며 심각한 사회적 문제로 떠오르고 있습니다. **2023년 기준, 전세 사기 피해는 전년 대비 20% 이상 증가**하였고, 피해 금액은 **수백억 원**에 달하고 있습니다. 

전세 사기는 단순히 깡통주택을 이용한 사기뿐만 아니라 다양한 형태로 나타나고 있습니다. 이 프로젝트는 전세 계약 전 필요한 정보를 제공하여, 계약 과정에서 발생할 수 있는 위험을 줄이는 것을 목표로 합니다.


</br></br>

## 프로젝트 설명

이 프로젝트는 안심전세 포털을 참고하여 전세사기 유형별 사례 및 대처방안을 사용자가 쉽게 검수할 수 있도록 돕는 것을 목표로 합니다.

### 주요 기능

1. **악성 임대인 확인**: 상습 채무불이행자인 임대인을 식별합니다.
2. **전세가율 분석**: 전세가율을 분석하여 깡통전세 여부를 파악합니다.
3. **건축물대장 확인**: 건축물의 주용도가 공동주택 혹은 단독주택 이외의 용도인지 확인합니다.
4. **공인중개사 사무소 확인**: 등록된 공인중개사 사무소인지 확인하고 정보를 조회합니다.

</br></br>

## 개발 환경

| 구분            | 기술 스택                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **백엔드**      | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white) |
| **프론트엔드**  | ![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=flat&logo=react&logoColor=white) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white) |
| **데이터베이스**| ![Amazon RDS](https://img.shields.io/badge/Amazon%20RDS-527FFF?style=flat&logo=amazon%20rds&logoColor=white) ![Elasticsearch](https://img.shields.io/badge/Elasticsearch-005571?style=flat&logo=elasticsearch&logoColor=white) |
| **도구**        | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) |
| **언어**        | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) |


</br></br>

## 데이터

| **데이터 정보** | **링크** |
| --- | --- |
| **법정동 코드** | [법정동 코드](https://www.code.go.kr/stdcode/regCodeL.do) |
| **국토교통부 실거래가** | [국토교통부 실거래가](https://rt.molit.go.kr/pt/xls/xls.do?mobileAt=) |
| **상습채무불이행자** | [상습채무불이행자](https://www.molit.go.kr/USR/WPGE0201/m_37180/DTL.jsp) |
| **건축물 대장** | [공공 데이터 : 국토교통부_건축물대장정보 서비스 API](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15044713#tab_layer_detail_function) |
| **공인중개사** | [공공 데이터 : 국토교통부_중개사무소 등록현황 API](https://www.data.go.kr/data/15063946/fileData.do) |

</br></br>

## 와이어프레임
안전전세 앱의 와이어프레임을 Figma를 이용해 주요 페이지 중심으로 작성했습니다.

### 홈 화면, 로그인 화면
<div style="display: flex; justify-content: center;">
    <img src="assets\images\home.png" alt="Alt text" style="width: 70%; height: 100%; margin: 10px;">
</div>

### 스텝 화면

<div style="display: flex; justify-content: center;">
    <img src="assets\images\step1.png" alt="Alt text" style="width: 75%; height: 100%; margin-top: 10px;">
</div>
<div style="display: flex; justify-content: center;">
    <img src="assets\images\step2.png" alt="Alt text" style="width: 75%; height: 100%; ">
    
</div>

### 마이페이지
<div style="display: flex; justify-content: center;">
    <img src="assets\images\mypage.png" alt="Alt text" style="width: 75%; height: 100%; margin: 10px;">
</div>


## ERD 
[DBdiagram](https://dbdiagram.io/d/HOUSE-66cfc95ccf8e2d1d1c2cd3c4)을 이용해 ERD를 작성했습니다. 테이블 구성은 다음과 같습니다.

- BadLandlord: 상습 채무 불이행자 정보
- RealEstateAgent: 부동산 중개사무소 정보
- ApartSalesPrice: 아파트 실거래 매매가 정보
- Reports: 전세 위험도 리포트
- Users: 사용자 정보

<div style="display: flex; justify-content: center;">
    <img src="assets\images\erd.png" alt="Alt text" style="width: 80%; height: 80%; margin: 10px;">
</div>

