<template>
  <div>
    <Navbar />
    <nuxt/>
    <Sidebar />
    <Footer />
    <b-modal :visible="$store.state.subscribe" centered hide-header hide-footer no-close-on-backdrop no-close-on-esc>
      <b-container>
        <b-row>
          <b-col cols="12" class="px-0">
            <b-button @click="closeSubscribe()" class="close">
              <fa :icon="['fas', 'times']" />
            </b-button>
          </b-col>
          <b-col cols="12" class="px-0">
            <p>{{ $t('button.downloadTitle') }}</p>
            <a href="https://play.google.com/store/apps?hl=ru" target="_blank" rel="noopener noreferrer">
              {{ $t('button.download') }}
            </a>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {
    closeSubscribe() {
      this.$store.commit('setSubscribe');
    },
  },
  created() {
    if(this.$i18n.locale == 'uz') {
        this.$store.commit('setVarLang','');
        this.$store.commit('setLang','');
    }else{
        this.$store.commit('setVarLang','kl/');
        this.$store.commit('setLang','_kl');
    }
  }
}
</script>
