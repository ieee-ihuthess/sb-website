<template>
  <footer class="footer">
    <div class="social-links">
      <a
        v-for="link in socialLinks"
        rel="noopener"
        :key="link.to"
        :href="link.to"
        target="_blank"
        class="social-link"
      >
        <font-awesome aria-hidden="true" :icon="[link.iconType, link.icon]" size="2x" />
        <span class="visually-hidden">{{ link.text }}</span>
      </a>
    </div>
    <hr />
    <div class="credits">
      <span class="credit">© IEEE International Hellenic University, Thessaloniki Department</span>
      <a target="_blank" class="reference" href="https://www.vecteezy.com/free-vector/cartoon"
        >Cartoon Vectors by Vecteezy</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          icon: "facebook",
          iconType: "fab",
          text: "Facebook page",
          to: "https://www.facebook.com/ieee.ihuthess/",
        },
        {
          icon: "instagram",
          iconType: "fab",
          text: "Instagram page",
          to: "https://www.instagram.com/ieee.ihuthess/",
        },
        {
          icon: "youtube",
          iconType: "fab",
          text: "YouTube channel",
          to: "https://www.youtube.com/channel/UCmzjQYFb33sHrWKVWv-VW0A",
        },
        {
          icon: "github",
          iconType: "fab",
          text: "GitHub page",
          to: "https://github.com/ieee-ihuthess",
        },
        {
          icon: "envelope",
          iconType: "fas",
          text: "Email",
          to: "mailto:ieeeihuthessaloniki@gmail.com",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables";
@import "~/assets/scss/overwrites";

.footer {
  margin-top: 100px;
  background: $dark-blue;
  height: 200px;
  padding: 30px;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.social-link {
  color: white;
  margin-right: 30px;

  &:last-child {
    margin-right: 0 !important;
  }
}

hr {
  background: white;
  height: 2px;
  width: 70px;
}

.credits {
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 20px;
}

.reference {
  color: rgb(214, 214, 214);
  margin-top: 10px;
  font-size: 12px;
}
</style>
