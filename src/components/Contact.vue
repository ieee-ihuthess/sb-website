<template>
  <section class="section" id="contact">
    <h2> {{ $t('contact')}} </h2>
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
            <label for="name" class="field__title">{{ $t("name") }}</label>
            <input
              id="name"
              type="text"
              class="form-control"
              :name="$t('name')"
              :placeholder="$t('name').charAt(0).toUpperCase() + $t('name').slice(1)"
              v-model="form.name"
              required
            />
          </div>
          <div class="col-md-6 field">
            <label for="email" class="field__title">Email</label>
            <input
              id="email"
              class="form-control"
              type="email"
              name="email"
              placeholder="Email"
              v-model="form.email"
              required
            />
          </div>
          <div class="col-md-12 field">
            <label for="message" class="field__title">{{ $t("message  ") }}</label>
            <textarea
              id="message"
              rows="5"
              class="form-control"
              :name="$t('message')"
              :placeholder="$t('message').charAt(0).toUpperCase() + $t('message').slice(1)"
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
            <b-button class="submit" type="submit"> {{ $t("submit")}} </b-button>
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
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
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
          console.log(this.$data.form);
        })
        .catch((e) => {
          this.$data.submitSuccessful = false;
          this.$data.submitFailed = true;
          this.$data.errorMessage = e;
          console.log(this.$data.form);
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
    text-transform: capitalize;
    color: $blue;
    margin-bottom: 15px;
    display: block;
    font-weight: 700;
  }
}

.submit {
  background: $blue;
  color: white;
  text-transform: capitalize;
  border-radius: 0;

  &:hover {
    background: $light-blue !important;
    color: white !important;
  }
}
</style>
