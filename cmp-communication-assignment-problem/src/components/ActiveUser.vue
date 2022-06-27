<template>
  <section>
    <div>
      <h2>{{ username }}</h2>
    </div>
    <div>
      <h3>{{ userage }}</h3>
    </div>
  </section>
</template>
<script>
export default {
  //props: ["username", "userage"],
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style></style>
