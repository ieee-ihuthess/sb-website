<template>
  <section class="section" id="contact">
    <h2>Contact us</h2>
    <div class="col-md-12 col-md-offset-2">
      <form
        @submit.prevent="handleSubmit"
        name="contact"
        method="post"
        data-netlify="true"
      >
        <div class="row">
          <div class="col-md-6 field">
            <span class="field__title">Name</span>
            <input
              id="name"
              type="text"
              class="form-control"
              name="name"
              placeholder="Name*"
              v-model="form.name"
              required
            />
          </div>
          <div class="col-md-6 field">
            <span class="field__title">Email</span>
            <input
              id="email"
              class="form-control"
              type="email"
              name="Email"
              placeholder="Email*"
              v-model="form.email"
              required
            />
          </div>
          <div class="col-md-12 field">
            <span class="field__title">Message</span>
            <textarea
              id="message"
              rows="5"
              class="form-control"
              name="Message"
              placeholder="Message*"
              v-model="form.message"
              required
            ></textarea>
          </div>
          <div class="col-md-12 text-center">
            <b-alert variant="success" v-if="submitSuccessful">Your message was submitted. Thank you!</b-alert>
            <b-alert variant="danger" v-if="submitFailed">Something went wrong. {{errorMessage}}</b-alert>
            <b-button class="submit" type="submit">Submit Message</b-button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      submitFailed: false,
      submitSuccessful: true,
      errorMessage: '' 
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-urlencoded",
        },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      })
        .then(() => {
          this.$data.submitSuccessful = true;
          this.$data.submitFailed = false;
          this.$data.errorMessage = "";
          })
        .catch((e) => {
          this.$data.submitSuccessful = false;
          this.$data.submitFailed = true;
          this.$data.errorMessage = e;
        });
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

textarea {
  resize: none;
}

.field {
  margin-bottom: 50px;

  &__title {
    color: $blue;
    margin-bottom: 15px;
    display: block;
    font-weight: 700;
  }
}

.submit {
  background: $blue;
  color: white;
  border-radius: 0;

  &:hover {
    background: $light-blue !important;
    color: white !important;
  }
}
</style>
