<template>
  <div>
    <b-sidebar :visible="this.$store.state.show"  shadow no-header>
      <b-container fluid>
          <b-row>
              <b-col cols="12">
                  <b-button @click="closeButton()" class="float-right close">
                        <svg viewBox="0 0 16 16" class="bi bi-x" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                        </svg>
                  </b-button>
              </b-col>
          </b-row>
          <b-row>
              <b-col cols="12">
                  <p><span class="currency">USD</span> {{ dollar.value }} <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8"> <path v-if="dollar.diff < 0" d="M13.286 7.428L7.858 2 5 4.857.715.571m12.571 6.857H9.858m3.428 0V4" stroke="#C50000" stroke-linecap="round" stroke-linejoin="round"/> <path v-else d="M13.286.571L7.858 6 5 3.143.715 7.428M13.286.571H9.858m3.428 0V4" stroke="#04C500" stroke-linecap="round" stroke-linejoin="round"/> </svg></p>
                  <p><span class="currency">EURO</span> {{ euro.value }}  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8"> <path v-if="dollar.diff < 0" d="M13.286 7.428L7.858 2 5 4.857.715.571m12.571 6.857H9.858m3.428 0V4" stroke="#C50000" stroke-linecap="round" stroke-linejoin="round"/> <path v-else d="M13.286.571L7.858 6 5 3.143.715 7.428M13.286.571H9.858m3.428 0V4" stroke="#04C500" stroke-linecap="round" stroke-linejoin="round"/> </svg></p>
                  <p><span class="currency">RUBL</span> {{ rubl.value }}   <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8"> <path v-if="dollar.diff < 0" d="M13.286 7.428L7.858 2 5 4.857.715.571m12.571 6.857H9.858m3.428 0V4" stroke="#C50000" stroke-linecap="round" stroke-linejoin="round"/> <path v-else d="M13.286.571L7.858 6 5 3.143.715 7.428M13.286.571H9.858m3.428 0V4" stroke="#04C500" stroke-linecap="round" stroke-linejoin="round"/> </svg></p>
                  <p>
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g clip-path="url(#clip0)"><path d="M15.362 8.532a6.083 6.083 0 00-11.434 2.43 4.22 4.22 0 00.446 8.413h10a5.466 5.466 0 00.988-10.843zm-.988 9.906h-10a3.274 3.274 0 01-.437-6.519c.066.827.3 1.633.69 2.366a.467.467 0 00.776.075.468.468 0 00.05-.52 5.156 5.156 0 018.766-5.394 5.47 5.47 0 00-3.947 1.844.47.47 0 00.193.766.468.468 0 00.51-.146 4.532 4.532 0 113.4 7.528z" fill="url(#paint0_linear)"/><path d="M19.936 6.41a.474.474 0 00-.647-.175L17.4 7.325a.475.475 0 10.474.822l1.887-1.09a.474.474 0 00.174-.648z" fill="url(#paint1_linear)"/><path d="M14.172 4.918a.475.475 0 00.648-.173l1.09-1.888a.475.475 0 00-.821-.474l-1.09 1.888a.475.475 0 00.173.647z" fill="url(#paint2_linear)"/><path d="M10 3.801a.474.474 0 00.474-.474v-2.18a.474.474 0 10-.949 0v2.18a.474.474 0 00.475.475V3.8z" fill="url(#paint3_linear)"/><path d="M5.179 4.745A.474.474 0 006 4.271L4.91 2.383a.474.474 0 10-.821.475l1.09 1.887z" fill="url(#paint4_linear)"/><path d="M2.6 7.325L.713 6.235a.474.474 0 10-.475.822l1.888 1.09a.474.474 0 10.474-.822z" fill="url(#paint5_linear)"/></g><defs><linearGradient id="paint0_linear" x1=".162" y1="12.344" x2="19.847" y2="12.344" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6618"/><stop offset=".105" stop-color="#F6DE6E"/><stop offset=".276" stop-color="#BB862E"/><stop offset=".565" stop-color="#E0B64C"/><stop offset=".808" stop-color="#FAECBA"/><stop offset="1" stop-color="#AF721E"/></linearGradient><linearGradient id="paint1_linear" x1="17.148" y1="7.196" x2="20" y2="7.196" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6618"/><stop offset=".105" stop-color="#F6DE6E"/><stop offset=".276" stop-color="#BB862E"/><stop offset=".565" stop-color="#E0B64C"/><stop offset=".808" stop-color="#FAECBA"/><stop offset="1" stop-color="#AF721E"/></linearGradient><linearGradient id="paint2_linear" x1="13.935" y1="3.572" x2="15.965" y2="3.572" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6618"/><stop offset=".105" stop-color="#F6DE6E"/><stop offset=".276" stop-color="#BB862E"/><stop offset=".565" stop-color="#E0B64C"/><stop offset=".808" stop-color="#FAECBA"/><stop offset="1" stop-color="#AF721E"/></linearGradient><linearGradient id="paint3_linear" x1="9.525" y1="2.237" x2="10.474" y2="2.237" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6618"/><stop offset=".105" stop-color="#F6DE6E"/><stop offset=".276" stop-color="#BB862E"/><stop offset=".565" stop-color="#E0B64C"/><stop offset=".808" stop-color="#FAECBA"/><stop offset="1" stop-color="#AF721E"/></linearGradient><linearGradient id="paint4_linear" x1="4.023" y1="3.558" x2="6.058" y2="3.558" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6618"/><stop offset=".105" stop-color="#F6DE6E"/><stop offset=".276" stop-color="#BB862E"/><stop offset=".565" stop-color="#E0B64C"/><stop offset=".808" stop-color="#FAECBA"/><stop offset="1" stop-color="#AF721E"/></linearGradient><linearGradient id="paint5_linear" x1="-.002" y1="7.193" x2="2.849" y2="7.193" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6618"/><stop offset=".105" stop-color="#F6DE6E"/><stop offset=".276" stop-color="#BB862E"/><stop offset=".565" stop-color="#E0B64C"/><stop offset=".808" stop-color="#FAECBA"/><stop offset="1" stop-color="#AF721E"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>
                      <span>{{ $t('region.toshkent') }}</span> {{ temperature }} C
                  </p>
                  <p>{{ $t('weather.language') }}</p>
              </b-col>
              <b-col cols="12">
                  <div class="language">
                    <b-button size="sm" @click="changeLanguage('uz')" type="button">O'z</b-button>    
                    <b-button size="sm" @click="changeLanguage('уз')" type="button">Уз</b-button>
                  </div>
              </b-col>
              <b-col cols="12"> 
                  <p class="category" @click="closeSidebar('iqtisod')">{{ $t('navbar.economy') }}</p>
                  <p class="category" @click="closeSidebar('siyosat')">{{ $t('navbar.policy') }}</p>
                  <p class="category" @click="closeSidebar('jamiyat')">{{ $t('navbar.society') }}</p>
                  <p class="category" @click="closeSidebar('madaniyat')">{{ $t('navbar.culture') }}</p>
                  <p class="category" @click="closeSidebar('jahon')">{{ $t('navbar.global') }}</p>
              </b-col>
          </b-row>
      </b-container>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    data(){
        return {
            dollar: {value: '',diff: ''},
            euro: {value: '',diff: ''},
            rubl: {value: '',diff: ''},
            temperature: 0,
            weatherData: [],
            weatherIcon: '',
            name: '',
            regions: [
                { id: 1514588, name: 'andijon' },
                { id: 1217662, name: 'buxoro' },
                { id: 1513886, name: 'jizzax' },
                { id: 1513157, name: 'namangan' },
                { id: 1513131, name: 'navoi' },
                { id: 601294, name: 'nukus' },
                { id: 1216311, name: 'qarshi' },
                { id: 1216265, name: 'samarqand' },
                { id: 1484840, name: 'sirdaryo' },
                { id: 1215957, name: 'termiz' },
                { id: 1512569, name: 'toshkent' },
                { id: 1514210, name: 'toshkentv' },
                { id: 1512473, name: 'urganch' },
            ]
        }
    },
    methods: {
        async currency() {
            await this.$axios.get('currency/')
            .then(res => {
                this.dollar.value = res.data[0].Rate;
                this.dollar.diff = res.data[0].Diff;
                this.euro.value = res.data[1].Rate;
                this.euro.diff = res.data[1].Diff;
                this.rubl.value = res.data[2].Rate;
                this.rubl.diff = res.data[2].Diff;
            })
            .catch(() => {})
        },
        async weather(id) {
            await this.regions.forEach(item => {
                if(item.id == id) {
                this.name = item.name;
                }
            })
            this.$store.dispatch('getWeather',id)
            .then(() => {
                this.weatherData = this.$store.state.weather;
                this.temperature = this.weatherData.main.temp;
                this.weatherIcon = this.weatherData.weather[0].icon;
            })
        },
        closeButton () {
            this.$store.commit('setSidebar',false);
        },
        closeSidebar(url) { 
            this.$store.commit('setSidebar',false);
            this.$router.push(this.localePath(`/${url}`))
        },
        changeLanguage(lang) {
            this.$router.push(this.switchLocalePath(lang));
            this.$store.commit('setSidebar',false);
        },
    },
    created() {
        this.weather(this.regions[10].id);
        this.currency();
    }
}
</script>