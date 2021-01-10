<template>
  <section class="section" id="contact">
    <h2>Contact us</h2>
    <div class="col-md-12 col-md-offset-2">
      <form
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label> Don’t fill this out: <input name="bot-field" /> </label>
        </p>
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
              name="email"
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
              name="message"
              placeholder="Message*"
              v-model="form.message"
              required
            ></textarea>
          </div>
          <div class="col-md-12 text-center">
            <b-alert variant="success" v-model="submitSuccessful"
              >Your message was submitted. Thank you!</b-alert
            >
            <b-alert variant="danger" v-if="submitFailed"
              >Something went wrong. {{ errorMessage }}</b-alert
            >
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
      form: {},
      submitFailed: false,
      submitSuccessful: false,
      errorMessage: "",
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
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
