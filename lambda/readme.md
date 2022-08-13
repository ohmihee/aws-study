# lambda 
aws lambda를 통해 작성한 함수를 통해 별도의 서버 구축없이도 웹서버를 만들수 있도록 해주는 aws 서버리스 아키텍처 서비스의 일종이다.
lambda 는 클라이언트 요청과 같은 이벤트에 의해 디비에 데이터를 추가하는 기능을 하는 함수가 동작하는 식으로 이루어진다. 
ex) 클라이언트 요청 -> api 게이트 웨이 -> lambda -> db

// pyton, node. java, Go, ruby 등의 런타임 환경을 지원한다.

1. 콘솔에 lambda 입력후 lambda 콘솔에 들어간다.
2. 우측 상단의 create function (함수 생성)을 클릭한다. 

권한은 해당 lambda가 접근가능한 리소스에 대한 것을 설정하는 것이다. ex) rds에 접근할 수 있도록하려면 해당 lambda가 rds에 접근할 수 있도록 해야한다. 
 

생성된 함수의 코드 소스 부분의 index.js 파일이 이벤트 트리거를 유발하는 진입점 역할을 한다. 해당 인자는 이벤트를 발생시킨 요청에 대한 정보를 담고 있다.
파일명과 함수명을 변경하고 싶은 경우 아래의 런타임 설정 변경에서 변경 가능한다.

코드 수정한 경우 - command+s를 눌러 저장 - deploy

제한시간 : 해당 시간을 초과하면 에러처리

vscode에서 작업한 것을 lambda 함수로 만드려면 작성한 파일은 압축후 ..에서 업로드 클릭하여 zip파일에서 업로드

- api 게이트 웨이
트리거 추가 클릭 - api 게이트 웨이 선택 - 보안 열기 (모든 사용자가 접근 가능)
해당 api 게이트 웨이 클릭 후 - 세부 정보 클릭하여 앤드 포인트 확인

장단점
장
서버 구축과 운영을 위한 인력, 자원을 절약할 수 있다. 
개발생산성 증가
사용한 만큼만 과금된다.
단
러닝타임에 제한이 있어서 러닝타임이 긴 프로그램에는 부적절하다. (러닝타임이 긴 프로그램은 ec2, ecs, fargate 사용)

# API gateway
api 형식으로 aws의 서비스에 접급할 수 있게 해주는 서비스이다.
## 형식
- REST API
lambda를 http 프로토콜 기반의 rest api로 호출
- WebSocket
websocket 프로토콜로 lambda 호출
ConnectionID를 부여하여 구분된 클라이언트와 지속적인 메시지 통신



# DynamoDB
key-value 기반의 완전관리 DocumnetDB이다.

# aws 서비스를 이용한 serverless 채팅서버 생성
순서
1. iam role 생성
2. api gateway 생성
3. dynamodb 생성
4. lambda 생성
    - api gateway와 연동
5. 클라이언트 테스트
