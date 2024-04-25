<template>
    <body>
    <div>
        <span id="timer">{{ time }}</span>초&nbsp;
        <span id="score">{{ score }}</span>점
        <button id="start" @click="startGame">시작</button>
    </div>
    <div id="game">
        <div class="row">
            <div class="cell">
                <div class="hole"></div>
                <div class="gopher hidden"></div>
                <div class="bomb hidden"></div>
                <div class="hole-front"></div>
            </div>
            <div class="cell">
                <div class="hole"></div>
                <div class="gopher hidden"></div>
                <div class="bomb hidden"></div>
                <div class="hole-front"></div>
            </div>
            <div class="cell">
                <div class="hole"></div>
                <div class="gopher hidden"></div>
                <div class="bomb hidden"></div>
                <div class="hole-front"></div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="hole"></div>
                <div class="gopher hidden"></div>
                <div class="bomb hidden"></div>
                <div class="hole-front"></div>
            </div>
            <div class="cell">
                <div class="hole"></div>
                <div class="gopher hidden"></div>
                <div class="bomb hidden"></div>
                <div class="hole-front"></div>
            </div>
            <div class="cell">
                <div class="hole"></div>
                <div class="gopher hidden"></div>
                <div class="bomb hidden"></div>
                <div class="hole-front"></div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="hole"></div>
                <div class="gopher hidden"></div>
                <div class="bomb hidden"></div>
                <div class="hole-front"></div>
            </div>
            <div class="cell">
                <div class="hole"></div>
                <div class="gopher hidden"></div>
                <div class="bomb hidden"></div>
                <div class="hole-front"></div>
            </div>
            <div class="cell">
                <div class="hole"></div>
                <div class="gopher hidden"></div>
                <div class="bomb hidden"></div>
                <div class="hole-front"></div>
            </div>
        </div>
    </div>
</body>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';

export default {
  setup() {
    const timer = ref(0);
    const score = ref(0);
    const time = ref(60);
    const started = ref(false);
    const gopherPercent = 0.3;
    const bombPercent = 0.5;
    const holes = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 9개 구멍 정보
    const cells = ref([]);

    const startGame = () => {
      if (started.value) {
        return;
      }
      started.value = true;
      console.log('시작');
      const timerId = setInterval(() => {
        time.value = (time.value * 10 - 1) / 10;
        if (time.value === 0) {
          clearInterval(timerId);
          clearInterval(tickId);
          setTimeout(() => {
            alert(`게임 오버! ${score.value}점입니다.`);
          }, 50);
        }
      }, 100);
      const tickId = setInterval(tick, 1000);
      tick();
    };

    const dateDiff = (start, end) => {
      return Math.floor((end - start) / 1000 / 60 / 60 / 24);
    };
    dateDiff(new Date(2024, 1, 21), new Date(2024, 2, 3));

    const tick = () => {
      holes.forEach((hole, index) => {
        if (hole) {
          return;
        }
        const randomValue = Math.random();
        if (randomValue < gopherPercent) {
          const gopher = cells.value[index].querySelector('.gopher');
          holes[index] = setTimeout(() => {
            gopher.classList.add('hidden');
            holes[index] = 0;
          }, 1000);
          gopher.classList.remove('hidden');
        } else if (randomValue < bombPercent) {
          const bomb = cells.value[index].querySelector('.bomb');
          holes[index] = setTimeout(() => {
            bomb.classList.add('hidden');
            holes[index] = 0;
          }, 1000);
          bomb.classList.remove('hidden');
        }
      });
    };

    const cellClickHandler = (event, index) => {
      const target = event.target;
      if (target.classList.contains('gopher')) {
        if (!target.classList.contains('dead')) {
          score.value += 1;
        }
        target.classList.add('dead');
        target.classList.add('hidden');
        clearTimeout(holes[index]);
        setTimeout(() => {
          holes[index] = 0;
          target.classList.remove('dead');
        }, 1000);
      } else if (target.classList.contains('bomb')) {
        target.classList.add('boom');
        target.classList.add('hidden');
        clearTimeout(holes[index]);
        setTimeout(() => {
          holes[index] = 0;
          target.classList.remove('boom');
        }, 1000);
      }
    };

    onMounted(() => {
      cells.value = Array.from(document.querySelectorAll('.cell'));
      const startButton = document.querySelector('#start');
      startButton.addEventListener('click', startGame);
      cells.value.forEach(($cell, index) => {
        const gopher = $cell.querySelector('.gopher');
        const bomb = $cell.querySelector('.bomb');
        gopher.addEventListener('click', (event) => cellClickHandler(event, index));
        bomb.addEventListener('click', (event) => cellClickHandler(event, index));
      });
    });

    return {
      timer,
      score,
      time,
      started,
      startGame,
      dateDiff,
      tick
    };
  }
};
</script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .cell {
            display: inline-block;
            position: relative;
            width: 200px;
            height: 200px;
            background: 'yellow';
            overflow: hidden;
        }

        .gopher,
        .bomb {
            width: 200px;
            height: 200px;
            bottom: 0;
            position: absolute;
            transition: bottom 1s;
        }

        .gopher {
            background: url('../assets/gopher.png') center center no-repeat;
            background-size: 200px 200px;
        }

        .dead {
            background: url('../assets/dead_gopher.png') center center no-repeat;
            background-size: 200px 200px;
        }

        .bomb {
            background: url('../assets/bomb.png') center center no-repeat;
            background-size: 200px 200px;
        }

        .boom {
            background: url('../assets/explode.png') center center no-repeat;
            background-size: 200px 200px;
        }

        .hidden {
            bottom: -200px;
        }

        .hole {
            width: 200px;
            height: 150px;
            position: absolute;
            bottom: 0;
            background: url('../assets/mole-hole.png') center center no-repeat;
            background-size: 200px 150px;
        }

        .hole-front {
            width: 200px;
            height: 30px;
            position: absolute;
            bottom: 0;
            background: url('../assets/mole-hole-front.png') center center no-repeat;
            background-size: 200px 30px;
        }
  </style>