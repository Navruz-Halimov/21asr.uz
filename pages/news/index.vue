<template>
  <div>
    <!-- latest news -->
    <div class="latest__news-wrapper">
      <b-container>
        <b-row>
          <b-col lg="9" md="12">
            <div class="category__header d-none d-md-block">
              <h2 class="category__header-heading">{{ $t("news.title") }}</h2>
            </div>
            <div class="latest__news-section">
              <b-row>
                <div class="latest__news-list">
                  <h4
                    class="category__header-heading-mobile d-block d-md-none"
                  >{{ $t("news.title") }}</h4>
                  <b-col lg="12" md="12" sm="12" v-for="(post, index) in posts" :key="index">
                    <div class="latest__news-section-item">
                      <div class="latest__news-content-wrap">
                        <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="latest__news-section-link">
                          <img
                            :src="$store.state.baseURL+post.thumbnail"
                            height="103"
                            width="103"
                          />
                        </nuxt-link>
                        <div class="latest__news-section-content">
                          <span
                            class="latest__news-section-time d-none d-md-block"
                          >{{ post.created_at | moment("H:mm") }}</span>
                          <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="latest__news-section-title">{{ post[`title${$store.state.lang}`] }}</nuxt-link>
                          <div class="latest__news-section-meta d-block d-md-none">
                            <span class="latest__news-section-meta-calendar">
                              {{ post.created_at | moment("L") }}
                            </span>
                            <span class="latest__news-section-meta-view">
                              {{ post.view_count }}
                            </span>
                          </div>
                          <div class="d-none d-md-block">
                              <div class="latest__news-section-description " v-html="post[`intro${$store.state.lang}`]" ></div>
                          </div>
                        </div>
                        <!-- /.latest__news-section-content -->
                      </div>
                    </div>
                  </b-col>
                  <div class="latest__news-adv d-block d-md-none">
                    <Adv />
                  </div>
                </div>
                <button v-if="this.max >= this.next" @click="getPosts()"  class="moreButton" :disabled="loader">
                  <span v-if="loader" style="color: white" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span v-else>{{ $t("button.moreSee")}}</span>
                </button>
              </b-row>
            </div>
            <!-- /.latest__news-section -->
          </b-col>
          <b-col lg="3" class="d-none d-lg-block">
            <div class="sidebar__news">
              <h3 class="sidebar__news-heading">{{ $t("news.nuqtai") }}</h3>
              <!-- /.sidebar__news-heading -->
              <ul class="sidebar__news-list">
                <Nuqtai />
                <li class="sidebar__news-list-item">
                  <div class="news__more">
                    <nuxt-link :to="localePath('/nuqtai-nazar')" class="news__more-btn">
                      {{ $t("button.more") }}
                    </nuxt-link>
                  </div>
                </li>
              </ul>
              <!-- /.news__sidebar__list -->
            </div>
            <div class="latest__news-bottom-sidebar">
              <div class="sidebar__news">
                <h3 class="sidebar__news-heading">{{ $t("news.moreRead") }}</h3>
                <!-- /.sidebar__news-heading -->
                <ul class="sidebar__news-list">
                  <li class="sidebar__news-list-item" v-for="(readmore,index) in moreRead" :key="index">
                    <nuxt-link :to="localePath(`/${readmore.category}/${readmore.id}`)" class="sidebar__news-list-link">
                      <span v-html="readmore[`title${$store.state.lang}`]"></span>
                    </nuxt-link>
                    <div class="big__news-meta">
                      <span class="big__news-meta-date">{{ readmore.created_at | moment("L") }}</span>
                      <span class="big__news-meta-view">{{ readmore.view_count }}</span>
                    </div>
                  </li>
                </ul>
                <!-- /.news__sidebar__list -->
              </div>
            </div>
            <!-- /.latest__news-bottom-sidebar -->
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- /.latest__news -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      posts: [],
      next: 1,
      moreRead: [],
      categoryPosts: [],
      loader: false,
      max: 1,
    };
  },
  computed: {
    ...mapGetters(["slicePosts"]),
  },
  methods: {
    async getPosts() {
      this.loader = true;
      await this.$axios.get(`posts/${this.$store.state.varLang}?ordering=created_at&limit=10&offset=${this.next * 10}`)
        .then(res => {
          this.loader = false;
          this.max = Math.ceil(res.data.count/10);
          res.data.results.forEach((item) => {
            this.posts.push(item);
          })
          ++this.next;
        })
        .catch(() => {
          this.loader = false;
        })
    },
    getMoreReadPosts() {
      this.$store.dispatch("getMoreRead", "view_count").then(() => {
        this.moreRead = this.$store.state.moreRead;
      });
    },
    getCategorizedPosts() {
      this.$store.dispatch('getSocietyPosts',this.$store.state.category[4].id)
      .then(() => {
        this.categoryPosts = this.$store.state.society;
      })
    }
  },
  mounted() {
    this.getPosts();
    this.getMoreReadPosts();
    this.getCategorizedPosts();
  },
};
</script>
