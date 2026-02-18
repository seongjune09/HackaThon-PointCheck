# 🌊 포인트 체크✔️

<img width="1850" height="1040" alt="Image" src="https://github.com/user-attachments/assets/f0c14be7-77b9-4c4a-81f8-6dfeb91aab43" /> <br>

📅 2025.12.29 ~ 2025.12.31


동계 해커톤 프로젝트 포인트 체크는 던져서 확인하는 AI 기반 해양 안전 측정 시스템입니다. 


입수하기 전이나 현재 파도의 세기를 확인하기 위해 센서가 내장된 방수 기기를 바다에 던지면 실시간으로 파도의 세기, 


회전 불안정도, 수온 등을 측정하고, AI가 수집된 데이터를 분석하여 현재 입수가 안전한지를 즉시 알려줍니다.

---

# 🔍 문제상황


해수욕장이나 해양 레저 활동 시, 육안으로는 파도의 위험도를 정확히 판단하기 어렵습니다. 

날씨가 좋아 보여도 이안류나 수중 흐름, 불규칙한 파도 패턴은 눈에 보이지 않아 사고 위험이 높습니다.

기존 예보는 지역 평균치를 제공할 뿐, 내가 지금 들어갈 위치의 실시간 위험도를 알려주지 못합니다.

---

# ‼️ 기존 해양 부이와의 차이점
<img width="1112" height="645" alt="image" src="https://github.com/user-attachments/assets/6fa0d33d-360e-4f0e-b659-3f83b03fee80" />


현재 운용 중인 해양 기상 부이는 주로 먼바다에 설치되어 있어, 실제 사고가 빈번히 발생하는 해안가 인근의 상황을 반영하기 어렵습니다. 

특히 지형적 특성에 의해 발생하는 국지적 이안류는 고정식 부이의 관측 범위를 벗어나기 때문에, 백사장 앞 10m의 실질적인 위험을 감지하는 데는 명확한 한계가 있습니다. 

저희 Point Check✔️는 이러한 한계를 극복하여 내가 원하는 지점의 파도 세기를 직접 확인할 수 있습니다.

---

# ✔️ 프로젝트 소개
<img width="1269" height="705" alt="Image" src="https://github.com/user-attachments/assets/dbeec14b-7b01-4cb4-8188-d9d69174d33b" />
<img width="1018" height="507" alt="image" src="https://github.com/user-attachments/assets/d871b521-2b2c-4de6-ba24-f32800d4cfd1" />



## 1. 
- 시작 버튼을 누르면 현재 위치와 상세 주소를 입력하게 됩니다. 
  입력된 위치 정보는 측정 기록과 함께 저장되어 추후 데이터 분석에 활용됩니다.

---

## 2. 
- 파도의 세기를 측정하고 싶은 장소에 기기를 띄우거나 던집니다.

---

## 3. 
- 위치가 정확하다면 시작 버튼을 눌러 측정을 시작합니다. 시작 버튼을 누르면 기기가 구동하기 시작합니다.

---

<img width="1063" height="685" alt="image" src="https://github.com/user-attachments/assets/354398ff-6de1-4d4d-be15-eb963a9eddcf" />


## 4.
- 측정을 종료하면 센서 데이터가 AI로 전송되어 실시간 분석됩니다. AI는 현재 파도 상태의 안전도를 판단하고, 사용자의 연령대에 맞는 맞춤형 피드백을 제공합니다.

---

## 5.
- 기록 페이지에서 이전에 측정한 모든 기록을 확인할 수 있습니다. 각 기록을 클릭하면 당시 받았던 AI 피드백을 다시 확인할 수 있습니다.


---

# ⚙️하드웨어 구성
<img width="1277" height="701" alt="Image" src="https://github.com/user-attachments/assets/68bd3492-2931-4aef-b9a7-0b8c1874e204" />

## 자이로 센서
- 파도의 높이는 기상 예보로 확인할 수 있지만, 연안 지형에 따른 **불규칙한 회전**과 **체감 진동**은 실측이 필요합니다. <br>
  회전 정도를 정확히 분석하기 위해 자이로 센서를 사용했습니다.

---

## 온도 센서
- 수온 데이터를 실시간으로 측정하여 해양 환경 분석에 활용했습니다.

---

## ESP32 (BLE 통신)
- 해수면 위에서는 전파 감쇄가 심해 **BLE 통신**을 통해 스마트폰과 안정적으로 연동하면서도 배터리 소모를 최소화했습니다. <br>
  또한 ESP32는 센서 데이터를 실시간 필터링하고 처리할 수 있어 본 프로젝트의 핵심 부품으로 사용되었습니다.


<img width="1067" height="614" alt="Image" src="https://github.com/user-attachments/assets/02277eb6-3b84-465d-97a8-91c54ee30873" />

---

# 👍🏻 배운 점 및 느낀 점
- 이번 프로젝트는 학교에서 선배님과 진행한 첫 프로젝트인 만큼 정말 기대감이 높았고, 좋은 결과물을 내고 싶은 마음이 컸습니다.
  특히 문제 정의부터 기획까지 함께 고민하는 과정이 가장 기억에 남습니다. 단순히 기술을 구현하는 것을 넘어, "왜 이 서비스가 필요한가?"부터 시작해 실제 사용자 관점에서 문제를 바라보는 시각을 배울 수 있었습니다.
  임베디드와 웹을 연동하는 프로젝트였던 만큼 예상치 못한 변수가 정말 많았습니다. 센서 데이터 통신 오류, 납땜 실수, 어떻게 기기를 띄울 것인가 등 수많은 시행착오가 있었지만, 팀원들과 함께 하나씩 해결해 나가며 문제 해결 능력과 협업의 중요성을 체감할 수 있었습니다.
  또한 3일이라는 짧은 시간 안에 웹페이지를 완성하면서 React를 활용한 반응형 UI 구현, 실시간 데이터 시각화 등을 직접 적용하며 실전 개발 경험을 쌓을 수 있었습니다. 무엇보다 팀원들과 함께 끝까지 포기하지 않고 완성해낸 것이 가장 자랑스럽습니다.
  
---

# 팀원 소개

|김현호|김민서|문준혁|박성준
|:---:|:---:|:---:|:---:|
|AI|하드웨어|하드웨어|프론트엔드|
<img width="130" src="https://github.com/user-attachments/assets/1b72cd40-c446-4f9e-a96c-da41bef08064" />|<img width="130" src="https://github.com/user-attachments/assets/1b72cd40-c446-4f9e-a96c-da41bef08064" />|<img width="130" src="https://github.com/user-attachments/assets/1b72cd40-c446-4f9e-a96c-da41bef08064" />| <img width="130" src="https://github.com/user-attachments/assets/ace95578-2f8a-4e95-8755-d812a255278b">|

---

# 🛠 기술 스택

<img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />   <img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" />   <img height="40" src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" />

---

# 🔗 배포 링크
[🌐 포인트 체크  바로가기](https://hackathon-pointcheck.vercel.app)  *(아이폰 16 반응형 뷰 기준 [399 x 712])*

⚠️  현재 기기가 구동 중이지 않아 자세한 시연은 영상을 통해 확인해주세요.

---

# [▶ 시연영상 확인하기](https://youtu.be/7ze6g8a8b1s)
