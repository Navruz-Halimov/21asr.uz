<template>
  <div>
    <div class="search__result">
      <b-container>
        <b-row>
          <b-col lg="9">
            <div class="search-block d-none d-md-block">
              <form @submit.prevent="getMore()" class="search-block__form">
                <input
                  type="text"
                  class="search-block__input"
                  v-model="search"
                  required="true"
                  placeholder="Qidiruv"
                  maxlength="150"
                />
                <b-button type="submit" class="search-block__btn"></b-button>
              </form>
            </div>
            <div class="category__news-list">
              <h4 class="category__header-heading-mobile d-block d-md-none">Qidiruv natijasi</h4>
              <div v-if="posts.length == 0" class="notification__text warning">
                <div class="notification__text__icon"></div>
                <div class="notification__text__message">Natijalar yo'q</div>
              </div>
              <b-row v-else>
                <b-col sm="6" lg="4" v-for="(post,index) of posts" :key="index+'-'+post.id">
                  <div class="news__wrapper">
                    <div class="news__item">
                      <nuxt-link
                        class="news__item-img-wrap"
                        :to="localePath(`/${post.category}/${post.id}`)"
                      >
                        <img
                          :src="$store.state.baseURL+post.thumbnail"
                          :alt="post[`title${$store.state.varLang}`]"
                        />
                      </nuxt-link>
                      <div class="news__content">
                        <nuxt-link
                          :to="localePath(`/${post.category}/${post.id}`)"
                          class="news__content-title-mobile d-block d-md-none d-lg-none"
                        >{{ post[`title${$store.state.lang}`] }}</nuxt-link>
                        <nuxt-link
                          :to="localePath(`/${post.category}/${post.id}`)"
                          class="news__content-title d-none d-md-block d-lg-block"
                        >{{ post[`title${$store.state.lang}`] }}</nuxt-link>
                      </div>
                      <!-- end of news__content title -->
                      <div class="news__content-meta">
                        <span
                          class="news__content-meta-calendar d-md-none"
                        >{{ post.created_at | moment("L") }}</span>
                        <span
                          class="news__content-meta-time d-none d-md-inline-block d-lg-inline-block"
                        >{{ post.created_at | moment("L") }}</span>
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
            <!-- <button
              v-if="this.max > this.next"
              class="moreButton"
              style="margin: 30px 0 !important"
              @click="getMore()"
              :disabled="loader">
              <span v-if="loader" style="color: white" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span v-else>{{ $t("button.moreSee")}}</span>
            </button>-->
          </b-col>
          <b-col lg="3">
            <News />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      search: "",
      max: 1,
      next: 0,
      loader: true,
    };
  },
  watch: {
    $route(to, from) {
      if (to.path == "/uz/search" || to.path == "/уз/search") {
        this.getSearch();
        this.search = this.$route.query.search;
      }
    },
  },
  methods: {
    async getSearch() {
      this.loader = true;
      await this.$axios
        .get(
          `posts/${this.$store.state.varLang}?search=${
            this.$route.query.search
          }&limit=10&offset=${this.next * 10}`
        )
        .then((res) => {
          this.posts = res.data.results;
        })
        .catch(() => {});
    },
    async getMore() {
      if (this.max == 1) {
        this.posts = [];
      }
      await this.$axios
        .get(
          `posts/${this.$store.state.varLang}?search=${
            this.search
          }&limit=10&offset=${this.next * 10}`
        )
        .then((res) => {
          this.loader = false;
          this.max = Math.ceil(res.data.count / 10);
          this.posts = res.data.results;
          res.data.results.forEach((item) => {
            this.posts.push(item);
          });
          ++this.next;
        })
        .catch(() => {
          this.loader = false;
        });
    },
  },
  mounted() {
    this.search = this.$route.query.search;
  },
  created() {
    this.getSearch();
  },
};
</script>