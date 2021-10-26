<template>
  <div>
    <div class="news__view-wrapper">
      <b-container>
        <b-row>
          <b-col  v-show="post != undefined" lg="9">
            <div class="news__view">
              <div class="news__view-header">
                <div class="news__view-title">{{ post[`title${$store.state.lang}`] }}</div>
                <div class="news__view-meta">
                  <span class="news__view-meta-date">{{ post.created_at | moment('L') }}</span>
                  <span class="news__view-meta-view">{{ post.view_count }}</span>
                </div>
                <div class="news__view-content">
                  <!-- <div class="news__view-content-img">
                    <img
                      :src="$store.state.baseURL+post.thumbnail"
                      :alt="post[`title${$store.state.lang}`]"
                      class="img-fluid"
                    />
                  </div> -->
                  <div class="news__view-content-text" v-html="post[`content${$store.state.lang}`]"></div>
                </div>
                <!-- /.news__view-body -->
                <ul class="tags-ui d-none d-md-block">
                    <li class="tags-ui__items">
                      <div class="tags-ui__item" v-for="(tag,index) of post.tags" :key="tag.created_at+'_'+index">
                        <span @click="search(tag)" class="tags-ui__link">#{{ tag }}</span>
                      </div>
                    </li>
                  </ul>
                  <ul class="news__view-social-list">
                    <li class="share__it">{{ $t('index.share') }}:</li>
                    <ShareNetwork 
                        network="facebook"
                        :url="`${$store.state.website}/${$i18n.locale}/${post.category}/${post.id}`"
                        :title="post[`title${$store.state.lang}`]"
                      >
                        <img src="../assets/image/social__network/fb.svg" alt="">
                        <span class="iocn__text d-none d-md-block">Facebook </span>
                    </ShareNetwork>
                    <ShareNetwork
                      network="telegram"
                      :url="`${$store.state.website}/${$i18n.locale}/${post.category}/${post.id}`"
                      :title="post[`title${$store.state.lang}`]"
                    >
                       <img src="../assets/image/social__network/tg.svg" alt="">
                        <span class="iocn__text d-none d-md-block">Telegram </span>
                  </ShareNetwork>

                  <ShareNetwork
                      network="Odnoklassniki"
                      :url="`${$store.state.website}/${$i18n.locale}/${post.category}/${post.id}`"
                      :title="post[`title${$store.state.lang}`]"
                    >
                       <img src="../assets/image/social__network/ok.svg" alt="">
                        <span class="iocn__text d-none d-md-block">Odnoklassniki </span>
                  </ShareNetwork>

                  <ShareNetwork
                      network="Twitter"
                      :url="`${$store.state.website}/${$i18n.locale}/${post.category}/${post.id}`"
                      :title="post[`title${$store.state.lang}`]"
                    >
                       <img src="../assets/image/social__network/tw.svg" alt="">
                        <span class="iocn__text d-none d-md-block">Twitter </span>
                  </ShareNetwork>
                  </ul>
              </div>
            </div>
            <!-- /.news__view -->
          </b-col>
          <b-col  v-show="post == undefined"  lg="9">
            <Loader :img="true" :line="15" />
          </b-col>
          <b-col lg="3" class="d-none d-lg-block">
            <News />
          </b-col>
        </b-row>
      </b-container>
      <div class="resemble__news-section">
        <b-container>
          <div class="resemble__news-section-heading">
            <h3 class="text-center">{{ $t('post.similarNews') }}</h3>
          </div>
          <b-row no-gutters>
            <div class="category__news-list">
              <b-row v-show="postsFour.length > 0">
                <b-col lg="3" sm="6" v-for="(post,index) of similarTags.slice(0,4)" :key="post.created_at+'_'+index">
                  <div class="news__wrapper">
                    <div class="news__item">
                      <nuxt-link class="news__item-img-wrap" :to="localePath(`/${post.category}/${post.id}`)">
                        <img :src="$store.state.baseURL+post.thumbnail" height="184" width="264" alt="news image" />
                      </nuxt-link>
                      <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="news__view-link-title">{{ post[`title${$store.state.lang}`] }}</nuxt-link>
                    </div>
                    <!-- end of news__item -->
                  </div>
                  <!-- /.news__wrapper -->
                </b-col>
              </b-row>
              <b-row v-show="postsFour.length <= 0">
                <b-col lg="3" sm="6" v-for="(i,index) of 4" :key="index">
                  <Loader :img="true" />
                  <!-- /.news__wrapper -->
                </b-col>
              </b-row>
            </div>
            <!-- /.category__news-list -->
          </b-row>
        </b-container>
      </div>
    </div>
    <!-- /.news__view-wrapper -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ["post","id"],
  data() {
    return {
      searching: '',
    };
  },
  computed: {
    ...mapGetters(['postsFour','similarTags'])
  },
  methods: {
    async copySomething(text) {
      try {
        await this.$copyText(text);
        this.$toast.success(this.$t('post.copyS'))
      } catch (e) {
        this.$toast.success(this.$t('post.copyE'))
      }
    },
    search(id) {
        this.searching = encodeURIComponent(id)
        this.$router.push(this.localePath(`/search?search=${this.searching}`));
        this.searching = '';
    }
  },
  mounted() {
    this.$store.dispatch('getSimilarTags',this.post.id);
  },
  created() {
    this.$store.dispatch('getPosts');
  }
};
</script>