<template>
    <div class="live">
      <div class="background-block" />
      <div class="main">
        <home-link class="home-link" :invert="false" />
        <div class="inner-background">
            <h1 class="title"><font-awesome-icon class="icon" :icon="icons.faBrain" /> Welcome to AskAdlai!</h1>
            <p class="subtitle">We've created an "Adlai", our brand new AI assistant that can answer anything! </p>
            <div v-if="!loggedIn">
                <RoundedButton @click="redirectToLogin" class="button" text="Sign in with Google"></RoundedButton>
                <div class="footer-group">
                    <p class="footer">We use Google in order to keep track and record the number of chats you complete.</p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import HomeLink from '@/components/HomeLink.vue';
import RoundedButton from '@/components/RoundedButton.vue'
import {
  faBrain,
} from '@fortawesome/free-solid-svg-icons';

export default {
  components: { HomeLink, RoundedButton },
  data() {
    return {
      icons: {
        faBrain
      },
      loggedIn: false,
    };
  },
  mounted() {

  },
  methods: {
    redirectToLogin() {
        window.location.href = "http://ask-adlai.vercel.app/auth/login"
    },
    sleep(ms) {
      // eslint-disable-next-line no-promise-executor-return
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
</script>

<style lang="sass" scoped>
@import 'src/styles/style.sass'

$small: 300px
$medium: 900px

.live
  .background-block
    background-color: var(--headerBackgroundColor)
    height: 250px
    width: 100%
    left: 0
    position: absolute

  .main
    width: 80%
    max-width: $content-width + 80px // hardcoded value :( to make standard schedule periods all fit in one line (on my display)
    margin: auto
    position: relative
    +mobile
      width: 90%

    .inner-background
      +shadow
      background-color: var(--background)
      position: relative
      border-radius: 20px
      top: 100px
      overflow: hidden
      margin-bottom: 150px
      +mobile
        top: 75px

    .title
      text-align: left
      font-size: 2.5em
      margin: 15px 0 0 15px

    .icon
      color: var(--headerBackgroundColor)

    .subtitle
      text-align: left
      font-size: 1.5em
      margin: 10px 0 0 15px

    .home-link
      position: absolute
      right: 0
      top: 30px
      +mobile
        top: 20px

    .button
        margin-top: 50px
        margin-left: auto
        margin-right: auto
        width: 25%

    .footer-group
      margin-left: 20px
      padding-right: 20px
    .footer
      text-align: center
      font-weight: bold
      font-size: 0.8em
      margin: 10px 0 20px 0
      color: var(--secondary)
      a
        color: var(--secondary)
        text-decoration: none
        &:hover
          text-decoration: underline
</style>
