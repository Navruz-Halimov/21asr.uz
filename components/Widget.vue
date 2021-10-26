<template>
  <b-container class="d-none d-lg-block">
    <div class="page-header">
      <ul class="page-header__menu">
        <li class="page-header__menu-item">
          <strong>USD</strong>
          <span class="up">{{ dollar.value }} 
            <img v-if="dollar.value > 0" src="../assets/image/category/up.svg" />
            <img v-else src="../assets/image/category/down.svg" />
          </span>
        </li>
        <li class="page-header__menu-item">
          <strong>EUR</strong>
          <span class="down">{{ euro.value }} 
            <img v-if="euro.value > 0" src="../assets/image/category/up.svg" />
            <img v-else src="../assets/image/category/down.svg" />
          </span>
        </li>
        <li class="page-header__menu-item">
          <strong>RUB</strong>
          <span class="down">{{ rubl.value }} 
            <img v-if="rubl.value > 0" src="../assets/image/category/up.svg" />
            <img v-else src="../assets/image/category/down.svg" />
          </span>
        </li>
        <li class="page-header__menu-item weather">
            <div class="weather-img">
              <img v-if="weatherIcon" :src="`http://openweathermap.org/img/w/${weatherIcon}.png`" :alt="name">
            </div>
          <div class="weather__wrapper">
            <b-dropdown id="weather__list" :text="$t(`region.${name}`)">
              <div class="weather__item">
                <b-dropdown-item v-for="(region,index) of regions" :key="index" @click="weather(region.id)">{{ $t(`region.${region.name}`) }}</b-dropdown-item>
              </div>
            </b-dropdown>
          </div>
          <div class="weather__temp">
            <span class="sign">{{ temperature >= 0 ? '+' : '-' }}</span>
            <span class="temp">{{ Math.ceil(temperature) }}</span>
            <span class="celcium">°C</span>
          </div>
        </li>
        <li class="page-header__menu-item d-none d-xl-block">
          <nuxt-link to="" class="our__app">
            <span class="top">{{ $t('weather.download') }}</span>
            <span class="bottom">Apple Store</span>
          </nuxt-link>
          <nuxt-link to="" class="our__app">
            <span class="top">{{ $t('weather.download') }}</span>
            <span class="bottom">Google Play</span>
          </nuxt-link>
        </li>
      </ul>
      <!-- /.page__header-list -->
    </div>
    <!-- /.page__header -->
  </b-container>
</template>

<script>
export default {
  data() {
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
  computed: {

  },
  methods: {
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
    } 
  },
  created() {
    this.weather(this.regions[10].id);
    this.currency();
  }
}
</script>