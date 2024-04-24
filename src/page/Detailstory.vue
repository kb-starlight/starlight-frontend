<template>
    <div>
      <h2>{{ $route.params.title }}</h2>
      <p>{{ $route.params.content }}</p>
      <p class="text-muted">{{ $route.params.sendtime }}</p>
      <hr class="my-4">
      <div class="row g-2">
        <div class="col-auto ignore-auto-margin">
          <button @click="fnList" class="btn btn-outline-dark">목록</button>
          <button class="btn btn-outline-dark">수정</button>
          <button class="btn btn-outline-dark">삭제</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
         posts: [],
         memberNo: 1,
        };
    },
    methods: {
        fnList(){ //리스트 화면으로 이동
            this.$router.push('/story');
        },
        

    }
  }
  </script>
  
  <style>

  </style>