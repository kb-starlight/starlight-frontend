<template>
    <div>
      <h2>제목</h2>
      <p>내용</p>
      <p class="text-muted">2020-01-01</p>
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
  import axios from "axios";
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