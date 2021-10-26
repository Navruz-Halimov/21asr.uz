<template>
  <div class="footer">
    <footer class="pc d-none d-xl-block">
      <b-container fluid class="px-0">
        <b-row class="header-info">
          <b-col cols="12" xl="4" class="px-0 column-1">
            <nuxt-link :to="localePath('/')" class="logo">
              <!-- <img src="../assets/image/navbar/front.png" alt="XXI ASR" /> -->
              <Logo />
              <span>{{ $t("navbar.century") }}</span>
            </nuxt-link>
            <p>{{ $t("footer.subtitle") }}</p>
            <p>
              {{ $t("footer.madeBy") }}
              <a href="http://greatsoft.uz/" target="_blank"> GreatSoft </a>
            </p>
          </b-col>
          <b-col cols="12" xl="3" class="px-0 column-2">
            <!-- <h2>{{ $t("footer.section") }}</h2> -->
            <p>
              <nuxt-link :to="localePath('/siyosat')">{{
                $t("navbar.policy")
              }}</nuxt-link>
            </p>
            <p>
              <nuxt-link :to="localePath('/jamiyat')">{{
                $t("navbar.society")
              }}</nuxt-link>
            </p>
            <p>
              <nuxt-link :to="localePath('/iqtisod')">{{
                $t("navbar.economy")
              }}</nuxt-link>
            </p>
            <p>
              <nuxt-link :to="localePath('/jahon')">{{
                $t("navbar.global")
              }}</nuxt-link>
            </p>
          </b-col>
          <b-col cols="12" xl="2" class="px-0 column-3">
            <!-- <h2>{{ $t("footer.aboutUs") }}</h2> -->
            <p>
              <nuxt-link :to="localePath('/team')">{{
                $t("footer.aboutUs")
              }}</nuxt-link>
            </p>
            <p>
              <nuxt-link :to="localePath('/contact')">{{
                $t("footer.contact")
              }}</nuxt-link>
            </p>
          </b-col>
          <b-col cols="12" xl="3" class="px-0 column-4">
            <div class="social">
              <div class="eighteen icons">
                <nuxt-link :to="localePath('/')">
                  <span>18+</span>
                </nuxt-link>
              </div>
              <div class="facebook icons">
                <a href="https://www.facebook.com/asrgazetasi">
                  <fa :icon="['fab', 'facebook-f']" />
                </a>
              </div>
              <div class="telegram icons">
                <a href="https://t.me/joinchat/AAAAAExJctm7lXY_roPCzg">
                  <fa :icon="['fab', 'telegram-plane']" />
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="no-gutters">
          <b-col cols="12" class="px-0">
            <div class="line px-4"></div>
          </b-col>
        </b-row>
        <b-row class="footer-info">
          <b-col cols="12">
            <div class="info-wrapper">
              <p class="text-center">
                {{ $t("footer.info") }}
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </footer>
    <footer class="footer__mobile d-block d-xl-none">
      <b-container>
        <b-row>
          <b-col md="12" sm="12">
            <div class="footer__inner">
              <ul class="footer__social">
                <li class="footer__social-item">
                  <nuxt-link to="" class="footer__social-link">
                    <img src="../assets/image/footer/+18mini.svg" alt="" />
                  </nuxt-link>
                </li>
                <li class="footer__social-item">
                  <nuxt-link to="" class="footer__social-link">
                    <img
                      src="../assets/image/footer/footer__facebookmini.svg"
                      alt=""
                    />
                  </nuxt-link>
                </li>
                <li class="footer__social-item">
                  <nuxt-link to="" class="footer__social-link">
                    <img
                      src="../assets/image/footer/footer__telegrammini.svg"
                      alt=""
                    />
                  </nuxt-link>
                </li>
              </ul>
              <ul class="footer__contact-us">
                <li class="footer__contact-us-item">
                  <nuxt-link :to="localePath('/team')" class="footer__contact-us-link"
                    >{{ $t('footer.aboutUs') }}</nuxt-link
                  >
                </li>
                <li class="footer__contact-us-item">
                  <nuxt-link :to="localePath('/contact')" class="footer__contact-us-link"
                    >{{ $t('footer.contact') }}</nuxt-link
                  >
                </li>
              </ul>
              <p class="website__creator">
                {{ $t('footer.madeBy') }} :<a
                  href="https://greatsoft.uz/"
                  target="_blank"
                >
                  GreatSoft</a
                >
              </p>
              <ul class="footer__our-app">
                <li class="footer__our-app-item">
                  <nuxt-link to="" class="apple__mobile">
                    <div class="our__app-content">
                      <span class="our__app-content-top ">{{ $t('button.download') }}</span>
                      <span class="our__app-content-bottom">Apple Store</span>
                    </div></nuxt-link
                  >
                </li>
                <li class="footer__our-app-item">
                  <nuxt-link to="" class="play__market-mobile">
                    <div class="our__app-content">
                      <span class="our__app-content-top">{{ $t('button.download') }}</span>
                      <span class="our__app-content-bottom">Google Play</span>
                    </div></nuxt-link
                  >
                </li>
              </ul>
              <p class="footer__text">
                {{ $t('footer.info') }}
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <ul class="footer__menu">
        <li class="footer__menu-item" @click="makeActive('home')">
          <nuxt-link :to="localePath('/')" :class="(temp == 'home' && routerName == '' ) ? 'footer__menu-link active' : 'footer__menu-link'">
            <div class="icon i-home active"></div>
            <span>{{ $t('categories.main') }}</span>
          </nuxt-link>
        </li>
        <li class="footer__menu-item" @click="makeActive('news')">
          <nuxt-link :to="localePath('/news')" :class="(temp != 'news' && routerName != 'news' ) ? 'footer__menu-link' : 'footer__menu-link active'">
            <div class="icon i-list"></div>
            <span>{{ $t('categories.line') }}</span>
          </nuxt-link>
        </li>
        <li @click="makeActive('videoposts')">
          <nuxt-link :to="localePath('/videoposts')" :class="(temp != 'videoposts' && routerName != 'videoposts') ? 'footer__menu-link' : 'footer__menu-link active'">
            <div class="icon i-video"></div>
            <span>{{ $t('categories.video') }}</span>
          </nuxt-link>
        </li>
        <li class="footer__menu-item" @click="makeActive('newspaper')">
          <nuxt-link :to="localePath('/#newspapersSlider')" :class="(temp == 'newspaper' && routerName == '') ? 'footer__menu-link  active' : 'footer__menu-link'">
            <div class="icon i-newspaper"></div>
            <span>{{ $t('categories.newspaper') }}</span>
          </nuxt-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return  {
      temp: 'home',
      routerName: '',
    }
  },
  watch:{
    $route (to, from){
      this.routerName = to.path.slice(4);
    }
  },
  methods: {
    makeActive(id) {
      this.temp = id;
    }
  },
  mounted() {

  }
}
</script>