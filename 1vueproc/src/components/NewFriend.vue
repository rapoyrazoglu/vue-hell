<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-bind="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-bind="enteredPhone" />
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-bind="enteredEmail" />
    </div>
    <div>
      <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  watch: {},
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
