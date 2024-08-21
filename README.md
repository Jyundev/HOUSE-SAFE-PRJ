# 전세사기 길잡이 앱 👋

## Contents Table

- [프로젝트 개요](#프로젝트-개요)
- [프로젝트 설명](#프로젝트-설명)
- [개발 환경](#개발-환경)
- [데이터](#데이터)
- [와이어프레임](#와이어프레임)


</br></br>

## 프로젝트 개요


<div style="display: flex; justify-content: center;">
    <img src="assets\images\article.png" alt="Alt text" style="width: 70%; height: 100%; margin-top: 20px; margin-bottom: 40px;">
</div>


2023년 기준, 전세 사기 피해는 전년 대비 20% 이상 증가했으며, 피해 금액은 수백억 원에 이르고 있습니다. 전세 사기는 깡통주택을 이용한 사기 외에도 다양한 형태로 발생하고 있습니다. 

최근 몇 년간 전세 사기가 급증하며 심각한 사회적 문제로 떠오르고 있습니다. **2023년 기준, 전세 사기 피해는 전년 대비 20% 이상 증가**하였고, 피해 금액은 **수백억 원**에 달하고 있습니다. 

전세 사기는 단순히 깡통주택을 이용한 사기뿐만 아니라 다양한 형태로 나타나고 있습니다. 이 프로젝트는 전세 계약 전 필요한 정보를 제공하여, 계약 과정에서 발생할 수 있는 위험을 줄이는 것을 목표로 합니다.


## 프로젝트 설명

이 프로젝트는 안심전세 포털을 참고하여 전세사기 유형별 사례 및 대처방안을 사용자가 쉽게 검수할 수 있도록 돕는 것을 목표로 합니다.

### 주요 기능

1. **악성 임대인 확인**: 상습 채무불이행자인 임대인을 식별합니다.
2. **전세가율 분석**: 전세가율을 분석하여 깡통전세 여부를 파악합니다.
3. **건축물대장 확인**: 건축물의 주용도가 공동주택 혹은 단독주택 이외의 용도인지 확인합니다.
4. **공인중개사 사무소 확인**: 등록된 공인중개사 사무소인지 확인하고 정보를 조회합니다.


## 개발 환경

| 구분            | 기술 스택                          |
| --------------- | ---------------------------------- |
| **백엔드**      | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) |
| **프론트엔드**  | ![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=flat&logo=react&logoColor=white) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) |
| **데이터베이스**| ![Amazon RDS](https://img.shields.io/badge/Amazon%20RDS-527FFF?style=flat&logo=amazonrds&logoColor=white) |

## 데이터

| **데이터 정보** | **링크** |
| --- | --- |
| **법정동 코드** | [법정동 코드](https://www.code.go.kr/stdcode/regCodeL.do) |
| **국토교통부 실거래가** | [국토교통부 실거래가](https://rt.molit.go.kr/pt/xls/xls.do?mobileAt=) |
| **상습채무불이행자** | [상습채무불이행자](https://www.molit.go.kr/USR/WPGE0201/m_37180/DTL.jsp) |
| **건축물 대장** | [공공 데이터 : 국토교통부_건축물대장정보 서비스 API](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15044713#tab_layer_detail_function) |
| **공인중개사** | [공공 데이터 : 국토교통부_중개사무소 등록현황 API](https://www.data.go.kr/data/15063946/fileData.do) |

## 와이어프레임

### 홈 화면, 로그인 화면
<div style="display: flex; justify-content: center;">
    <img src="assets\images\home.png" alt="Alt text" style="width: 70%; height: 100%; margin: 10px;">
</div>

### 스텝 화면

<div style="display: flex; justify-content: center;">
    <img src="assets\images\step1.png" alt="Alt text" style="width: 70%; height: 100%; margin-top: 10px;">
</div>
<div style="display: flex; justify-content: center;">
    <img src="assets\images\step2.png" alt="Alt text" style="width: 70%; height: 100%; ">
    
</div>

### 마이페이지
<div style="display: flex; justify-content: center;">
    <img src="assets\images\mypage.png" alt="Alt text" style="width: 70%; height: 100%; margin: 10px;">
</div>