<template>
      <div>
    <!-- Category-2 page -->
    <div class="category">
      <b-container>
        <div class="category__news-wrapper">
          <b-row>
            <b-col lg="9" md="12">
              <div class="category__header d-none d-md-block">
                <h2 class="category__header-heading">{{ titleHeader }}</h2>
              </div>
              <!-- /.category__header -->
              <div class="category__news d-none d-md-block">
                <div class="top-big__news" v-if="singleElem != undefined">
                  <nuxt-link :to="localePath(`/${singleElem.category}/${singleElem.id}`)" class="big__news">
                    <span class="big__news-img">
                      <img :src="$store.state.baseURL+singleElem.thumbnail" height="380" width="476" alt="">
                    </span>
                    <span class="big__news-content">
                      <span class="big__news-title">
                        {{ singleElem[`title${$store.state.lang}`] }}
                      </span>
                      <div class="big__news-description" v-html="singleElem[`intro${$store.state.lang}`]"></div>
                      <div class="big__news-meta">
                        <span class="big__news-meta-date">{{ singleElem.created_at | moment('L') }}</span>
                        <span class="big__news-meta-view"> {{ singleElem.view_count }} </span>
                      </div>
                    </span>
                  </nuxt-link>
                </div>
                <div v-else class="top-big__news">
                  <Loader :img="true" />
                </div>
                <!-- /.big__news -->
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
export default {
  props: {
    titleHeader: {
      type: String, // Might need to be Null, can't recall if caps matters
    },
    posts: {
      type: Array, // Might need to be Null, can't recall if caps matters
    }
  },
  data() {
    return {
      single: [],
    }
  },
  computed: {
      singleElem() {
        return this.posts[0];
      }
  },
  methods: {
      
  },
  mounted() {
    
  }
}
</script>