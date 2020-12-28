<template>
  <section class="section" id="contact">
    <h2>Contact us</h2>
    <div class="col-md-12 col-md-offset-2">
      <form
        onsubmit="sendMail(this);"
        method="POST"
        id="contact-form"
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
              required
            ></textarea>
          </div>
          <div class="col-md-12 text-center">
            <b-button class="submit" type="submit">Submit Message</b-button>
          </div>
          <p id="msgs"></p>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/variables";

textarea{
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
