<template>
  <li v-for="friend in friends" v-bind:key="friend.id">
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
        detailsAreVisible:false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 456 78 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654 32 10",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible
    }
  }
};
</script>
