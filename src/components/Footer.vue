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
        <font-awesome :icon="['fab', link.icon]" size="2x" />
      </a>
    </div>
    <hr />
    <span class="credit"
      >© IEEE International Hellenic University, Thessaloniki Department</span
    >
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          icon: "facebook",
          to: "https://www.facebook.com/ieee.ihuthess/",
        },
        {
          icon: "instagram",
          to: "https://www.instagram.com/ieee.ihuthess/",
        },
        {
          icon: "youtube",
          to: "https://www.youtube.com/channel/UCmzjQYFb33sHrWKVWv-VW0A",
        },
        {
          icon: "github",
          to: "https://github.com/ieee-ihuthess",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables";

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

.credit {
  color: white;
  margin-top: 20px;
}
</style>
