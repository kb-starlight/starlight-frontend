<template>
 <img src="@/assets/gopher.png" class="falling-image" style="width: 100px; height: auto; left: 10%; animation-delay: 0s;"/>
 <img src="@/assets/gopher.png" class="falling-image" style="width: 100px; height: auto; left: 30%; animation-delay: 2s;"/>
 <img src="@/assets/gopher.png" class="falling-image" style="width: 100px; height: auto; left: 50%; animation-delay: 1s;"/>
 <img src="@/assets/gopher.png" class="falling-image" style="width: 100px; height: auto; left: 70%; animation-delay: 0s;"/>
 <img src="@/assets/gopher.png" class="falling-image" style="width: 100px; height: auto; left: 90%; animation-delay: 1s;"/>
  <h1 style="margin-top: 70px" class="limited-quantity">[한정 수량] 펄이 T-SHIRT (4 TYPES)</h1>
  <h1 class="sell">예!약!판!매!</h1>
  <h2>1. 스타라이트 로고 티셔츠</h2>
  <img src="@/assets/셔츠1.png" /><br />
  <h2>2. 펄이 레벨 티셔츠</h2>
  <img src="@/assets/셔츠2.png" /><br />
  <h2>3. 펄이 컬러 티셔츠</h2>
  <img src="@/assets/셔츠3.png" /><br />
  <h2>4. 봉사왕 펄이 티셔츠</h2>
  <img src="@/assets/셔츠4.png" /><br />
  <div style="font-size: 20px; font-weight: bold;">
    판매가 30,000원<br /><br />

    사이즈 안내 (M/L)<br />
    M (어깨 50/ 가슴 56/ 소매 27 / 총기장 73 cm)<br />
    L (어깨 55/ 가슴 60/ 소매 29 / 총기장 75 cm)<br />
    사이즈는 측정 방법에 따라 다를 수 있습니다.<br /><br>
    의류 소재의 특성상 보관 및 세탁방법에 따라 제품의 수축, 늘어짐이 발생할 수 있습니다.

  </div>

<div style="text-align: left; padding-left: 50px; border: 1px solid #ccc; border-radius: 5px; margin-top: 100px; font-size: 17px">
<p>
  판매안내 <br />
  -배송예정일 : 2024년 05월 01일부터 순차배송<br />
  -제품 사양 및 발매일은 추후 제작상의 사유로 변경될 수 있습니다. <br />
  -모든 상품은 측정 방식에 따라 규격의 차이가 있을 수 있습니다. <br />
  -본 이미지는 상품의 이해를 돕기 위한 예시로, 실제 상품과 다를 수 있습니다. <br />
  -미성년자 권리보호 안내 : 전자상거래 등에서의 소비자보호법에 관한 법률에 의거하여 미성년자가 체결한 계약은 법정대리인이 동의하지 않은 경우 본인 또는 법정대리인이 취소할 수 있습니다. <br /><br>
  
  교환/환불<br>
  -패키지는 포장 및 배송 과정 중 파손(찌그러짐, 찢어짐, 스크래치, 잔기스, 찍힘 등) 및 오염이 생길 수 있으며, 이는 교환/반품 사유에 해당되지 않습니다. <br />
  -잘못된 배송 정보 기입으로 인한 분실 및 배송 누락은 전적으로 본인에게 책임이 있는 점 참고 부탁드립니다. (연락처 변경, 부재 및 주소 미수정으로 인한 반송, 미수령 또한 본인에게 책임이 있습니다.) <br />
  -불량 및 누락의 정확한 확인을 위해 개봉 영상은 필수로 촬영 부탁드립니다.<br />
  -배송 오류, 파손, 불량 등 상품 결함 등이 있을 경우 고객센터로 연락 부탁드리며, 재고 소진의 경우 재발송이 어렵습니다.<br /></p></div>
</template>

<script>
export default {
  name: "goods",
  setup() {
    return {};
  },
  components: {},
};
</script>

<style>
.limited-quantity {
  /* 다른 스타일들은 그대로 유지하고, 한정수량 글씨에만 반짝임 효과를 추가 */
  animation: blink 2s infinite alternate; /* blink 애니메이션을 적용하여 1초 간격으로 반짝거리게 함 */
}

.sell {
      font-size: 50px;
    font-weight: bold;
    color: red;
}

@keyframes blink {
  0% {
    opacity: 1; /* 처음 상태는 보이게 함 */
  }
  100% {
    opacity: 0; /* 끝 상태는 안 보이게 함 */
  }
}
/* 하늘에서 떨어지는 이미지에 애니메이션 적용 */
.falling-image {
  animation: fall 4s ease forwards, rotate 6s linear infinite; /* 회전 애니메이션 추가 */
  position: absolute;
  top: -200px; /* 이미지가 시작되는 위치 조절 */
  left: 50%; /* 이미지의 가로 중앙 정렬 */
  transform: translateX(-50%);
}

@keyframes fall {
  to {
    top: 80vh; /* 이미지가 떨어지는 위치 조절 */
    opacity: 0; /* 떨어진 후 투명해지도록 설정 */
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg); /* 회전 시작 각도 */
  }
  to {
    transform: rotate(360deg); /* 회전 끝 각도 */
  }
}

</style>
