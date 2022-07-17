<template>
  <div>
    <plain-header title="Links" />
    <card-container class="container">
      <image-text-card
        v-for="(link, index) in links"
        :key="link.url"
        :style="{ 'animation-delay': index*.04 + 's'}"
        :image="require(`@/assets/links/${link.name}.png`)"
        :text="link.name"
        :desc="link.desc"
        :link="link.url"
        :link-props="{ newTab: true }"
      />
      <card style="animation-delay: 1s">
        <div class="input-card">
          <h3 class="center">Add a Custom Link</h3>
          <form @submit.prevent @submit="addLink()">
            <input placeholder="Enter a Link Name" />
            <input placeholder="Enter a Valid Link" />
            <rounded-button class="button center"  type="submit" text="Add" :circular="false"/>
          </form>
        </div>
      </card>
    </card-container>
  </div>
</template>

<script>
import CardContainer from '@/components/CardContainer.vue';
import Card from '@/components/Card.vue';
import ImageTextCard from '@/components/cards/ImageTextCard.vue';
import PlainHeader from '@/components/PlainHeader.vue';

export default {
  components: {
    CardContainer,
    ImageTextCard,
    PlainHeader,
    Card,
  },
  data() {
    return {
      links: [ /* eslint-disable max-len */
        { name: 'D125', url: 'https://www.d125.org/' },
        { name: 'Canvas', desc: 'Must be logged in using school google account', url: 'https://d125.instructure.com/' },
        { name: 'IRC', desc: 'Must be logged in using school google account', url: 'https://irc.d125.org/login' },
        { name: 'Infinite Campus', url: 'https://infinitecampus.d125.org/campus/portal/aes.jsp' },
        { name: 'Naviance', url: 'https://student.naviance.com/aeshs' },
        { name: 'Peer Tutors', desc: 'Must be logged in using school google account', url: 'https://sites.google.com/d125.org/peer-tutors/home' },
        { name: 'Testing Center', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdMoby5m1oNCMi_VgINPE-FDqPqjH5XlvgdDXUFxS4lJbb4Ng/viewform' },
        { name: 'Patriot Dollars', url: 'https://d125-sp.transactcampus.com/eaccounts/%28S%28hpb5gh0sgji4hrhmx2ymnvot%29%29/AnonymousHome.aspx' }], /* eslint-enable max-len */
    };
  },
};
</script>

<style lang="sass" scoped>
@import 'src/styles/style.sass'
.center
  width: 100%
  display: flex
  justify-content: center

.input-card
  padding: 10px
  form
    display: flex
    flex-direction: column
    justify-content: center
    padding: 10px
    input
      margin: 0
      background: none
      text-align: center
      border: none
      font-size: 17px
      max-width: 650px
      padding: 7px 0
      border-radius: 7px
      margin-bottom: 10px
      color: var(--primary)
      border: 1px solid var(--color)
      +shadow-light
      &:focus
        outline: none
</style>
