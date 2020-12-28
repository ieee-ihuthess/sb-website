<template>
  <section class="hero text-center" id="home">
    <ClientOnly>
    <Particles id="vue-particles" :options="options" />
    </ClientOnly>
    <div class="hero__overlay">
      <div class="hero__content">
        <vue-typed-js
          class="hero__heading"
          :typeSpeed="100"
          :backSpeed="20"
          :loop="true"
          :loopCount="2"
          :strings="['coding.', 'helping.', 'technology.']"
        >
          <h1 class="hero__heading__text">
            A community all about <span class="typing hero__heading__subtext"></span>
          </h1>
        </vue-typed-js>
        <div class="buttons">
          <a v-scroll-to="'#faq'" href="#faq" class="hero__btn1">LEARN ABOUT US</a>
          <a v-scroll-to="'#contact'" href="#contact" class="hero__btn2">GET IN TOUCH</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        background: {
          color: {
            value: "#021b2e",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
            resize: false,
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      },
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

#vue-particles {
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero {
  background: $dark-blue;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  height: 450px;

  &__overlay {
    position: relative;
    top: 30%;
    z-index: 999;
  }

  &__heading {
    color: white;
    margin: 0 auto;
    text-align: center;
    // text-transform: ca;
    font-weight: bold;

    &__text {
      margin: 0 auto;
    }

    &__subtext {
      color: $pale-blue;
    }
  }

  &__btn1 {
    padding: 13px 23px;
    background-color: transparent;
    cursor: pointer !important;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 13px;
    border: 2px solid white;
    border-right: none;
    border-top-left-radius: 15px;
    transition: all 0.5s ease-in;

    &:hover {
      text-decoration: none;
      color: white;
      background-color: $light-blue;
    }
  }

  &__btn2 {
    padding: 13px 18px;
    background-color: transparent;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 13px;
    border: 2px solid white;
    border-bottom-right-radius: 15px;
    transition: all 0.5s ease-in;
    margin-right: 10px;

    &:hover {
      text-decoration: none;
      color: white;
      background-color: $light-blue;
    }
  }
}

.buttons {
  margin-top: 30px;
}
</style>
