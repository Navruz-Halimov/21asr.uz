<template>
      <div>
    <!-- Category-2 page -->
    <div class="category">
      <b-container>
        <div class="category__news-wrapper">
          <b-row>
            <b-col lg="9" md="12">
              <div class="category__header d-none d-md-block">
                <h2 class="category__header-heading">{{ $t('categories.videopost') }}</h2>
              </div>
              <!-- /.category__news -->
              <div class="category__news-list">
                     <h4 class="category__header-heading-mobile d-block d-md-none">{{ $t('post.news') }}</h4>
                <b-row>
                <b-col sm="6" lg="4" v-for="(post,index) in posts.slice(1,7)" :key="post.created_at+'_'+index">
                <div class="news__wrapper">
                  <div class="news__item">
                    <nuxt-link class="news__item-img-wrap" :to="localePath(`/${post.category}/${post.id}/`)">
                      <img
                        :src="$store.state.baseURL+post.thumbnail"
                        alt="news image"
                      />
                      <div class="overlay">
                        <img src="../../assets/image/index/play__video.svg" alt="">
                      </div>
                    </nuxt-link>
                    <div class="news__content">
                      <nuxt-link
                        :to="localePath(`/${post.category}/${post.id}`)"
                        class="news__content-title-mobile d-block  d-md-none d-lg-none"
                        >{{ post[`title${$store.state.lang}`] }}</nuxt-link
                      >
                      <nuxt-link
                        :to="localePath(`/${post.category}/${post.id}`)"
                        class="news__content-title d-none d-md-block d-lg-block"
                      >{{ post[`title${$store.state.lang}`] }}</nuxt-link
                      >
                    </div>
                    <!-- end of news__content title -->
                    <div class="news__content-meta">
                      <span class="news__content-meta-calendar d-md-none"
                        >{{ post.created_at | moment("L") }}</span
                      >
                      <span class="news__content-meta-time d-none d-md-inline-block d-lg-inline-block" >{{ post.created_at | moment("HM") }}</span>
                      <span class="news__content-meta-view">{{ post.view_count }}</span>
                    </div>
                  </div>
                  <!-- end of news__item -->
                </div>
                <!-- /.news__wrapper -->
              </b-col>
                </b-row>
              </div>
              <!-- /.category__news-list -->
            </b-col>
            <b-col lg="3" class="d-none d-lg-block">
              <News />
            </b-col>
          </b-row>
          <div class="advertisement__block">
            <Adv />
          </div>
          <!-- /.advertisement__block -->
        </div>
      </b-container>
    </div><!-- end of category -->
    <div class="category__bottom-news">
      <b-container>
        <b-row>
          <b-col lg="9" md="12">
            <b-row>
              <b-col sm="6" lg="4" v-for="(post,index) in posts.slice(7,13)" :key="post.created_at+'_'+index">
                <div class="news__wrapper">
                  <div class="news__item">
                    <nuxt-link class="news__item-img-wrap" :to="localePath(`/${post.category}/${post.id}`)">
                      <img
                        :src="$store.state.baseURL+post.thumbnail"
                        alt="news image"
                      />
                      <div class="overlay">
                        <img src="../../assets/image/index/play__video.svg" alt="">
                      </div>
                    </nuxt-link>
                    <div class="news__content">
                      <nuxt-link
                        :to="localePath(`/${post.category}/${post.id}`)"
                        class="news__content-title-mobile d-block  d-md-none d-lg-none"
                        >{{ post[`title${$store.state.lang}`] }}</nuxt-link
                      >
                      <nuxt-link
                        :to="localePath(`/${post.category}/${post.id}`)"
                        class="news__content-title d-none d-md-block d-lg-block"
                      >{{ post[`title${$store.state.lang}`] }}</nuxt-link
                      >
                    </div>
                    <!-- end of news__content title -->
                    <div class="news__content-meta">
                      <span class="news__content-meta-calendar d-md-none"
                        >{{ post.created_at | moment("L") }}</span
                      >
                      <span class="news__content-meta-time d-none d-md-inline-block d-lg-inline-block" >{{ post.created_at | moment("HM") }}</span>
                      <span class="news__content-meta-view">{{ post.view_count }}</span>
                    </div>
                  </div>
                  <!-- end of news__item -->
                </div>
                <!-- /.news__wrapper -->
              </b-col>
            </b-row>
            <div class="news__more">
                <nuxt-link :to="localePath('/news')" class="news__more-btn">{{ $t('button.more') }}</nuxt-link>
            </div>
          </b-col>
          <b-col lg="3" class="d-none d-lg-block">
            <div class="sidebar__news">
              <h3 class="sidebar__news-heading">
                {{ $t('categories.nuqtai') }}
              </h3>
              <!-- /.sidebar__news-heading -->
              <ul class="sidebar__news-list">
                <Nuqtai />
              </ul>
              <!-- /.news__sidebar__list -->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- /.category__bottom-news -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      single: [],
    }
  },
  computed: {
      singleElem() {
        return this.posts[0];
      },
      ...mapGetters({ posts: 'videoPosts'}),
  },
  methods: {
      
  },
  mounted() {
    
  },
  created() {
    this.$store.dispatch('getVideoPosts');
  }
}
</script>
