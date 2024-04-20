<template>
  <div class="preview-card-container">
    <img :src="image" style="background: green" />
    <div>
      <div class="label">
        <span>{{ label }}</span>
      </div>
      <div class="description">
        <span>{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewCard",
  props: {
    image: { type: String, default: "" },
    label: { type: String, defualt: "" },
    description: { type: String, defualt: "" },
  },
};
</script>

<style scoped>
.preview-card-container {
  border: 1px solid rgba(0, 0, 0, 0.11);
  width: 364px;
}

.preview-card-container div {
  padding: 10px 15px;
}

img {
  width: 364px;
  height: 242px;
}
.label {
  font-size: 15px;
  color: #828282;
}
.description {
  font-size: 17px;
  color: #333;
  font-weight: bold;
}
</style>
