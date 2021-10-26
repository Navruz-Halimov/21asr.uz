<template>
  <div>
    <div class="member__wrapper">
      <b-container>
        <h1 v-if="Object.keys(person).length !== 0" class="member__name text-center">
          {{ person[`firstname${$store.state.lang}`] }} {{ person[`lastname${$store.state.lang}`] }}
        </h1>
        <h1 v-else class="member__name text-center">
          <Loader :line="1" :imgShow="false" :show="false"/>
        </h1>
        <!-- /.member__name -->
        <b-row class="mb-5">
          <b-col sm="12" md="12" lg="12" xl="9">
            <div class="member__card-wrapper justify-content-center">
              <div class="member__card-inner">
                <div v-if="Object.keys(person).length !== 0" class="member__card">
                  <div class="member__card-image">
                    <img
                      :src="$store.state.baseURL + person.profile_picture"
                      alt="team member image"
                      class="member__card-img"
                    />
                  </div>
                  <div class="member__card-info">
                    <p class="member__card-name">
                      {{ person[`firstname${$store.state.lang}`] }} {{ person[`lastname${$store.state.lang}`] }}
                    </p>
                    <p class="member__card-gap">{{ person[`status${$store.state.lang}`] }}</p>
                  </div>
                </div>
                <div v-else class="member__card">
                  <div class="member__card-info">
                    <Loader :line="2" :imgShow="true" :show="true" />
                  </div>
                </div>
                <!-- end of member__card -->
                <div v-if="Object.keys(person).length !== 0" class="member__card-info-social d-lg-none">
                  <a
                    :href="person.fb_url"
                    class="member__card-info-social-facebook"
                  >
                    <span>@{{ person[`firstname${$store.state.lang}`] }} {{ person[`lastname${$store.state.lang}`] }}</span>
                  </a>
                  <a
                    :href="person.inst_url"
                    class="member__card-info-social-telegram"
                  >
                    <span>@{{ person[`firstname${$store.state.lang}`] }} {{ person[`lastname${$store.state.lang}`] }}</span>
                  </a>
                  <a
                    :href="person.tg_url"
                    class="member__card-info-social-instagram"
                  >
                    <span>@{{ person[`firstname${$store.state.lang}`] }} {{ person[`lastname${$store.state.lang}`] }}</span>
                  </a>
                </div>
                <div v-else class="member__card-info-social d-lg-none">
                  <Loader :line="2" :imgShow="false" :show="false" />
                </div>
                <!-- member__card-social-info -->
              </div>
              <!-- /.member__card-inner -->

              <div v-if="Object.keys(person).length !== 0" class="member__social d-none d-lg-block">
                <a :href="person.fb_url" class="member__social-facebook"
                  ><span>@{{ person[`firstname${$store.state.lang}`] }} {{ person[`lastname${$store.state.lang}`] }}</span>
                </a
                >
                <a :href="person.tg_url" class="member__social-telegram"
                  ><span>@{{ person[`firstname${$store.state.lang}`] }} {{ person[`lastname${$store.state.lang}`] }}</span>
                </a
                >
                <a :href="person.inst_url" class="member__social-instagram"
                  ><span>@{{ person[`firstname${$store.state.lang}`] }} {{ person[`lastname${$store.state.lang}`] }}</span>
                </a
                >
              </div>
              <div v-else class="member__social d-none d-lg-block">
                <Loader :line="2" :imgShow="false" :show="false" />
              </div>
              <!-- end of member__social -->
            </div>
            <!-- /.member__card-wrapper -->
            <div v-if="Object.keys(person).length !== 0" class="member__gap">
              {{ person[`bio${$store.state.lang}`] }}
            </div>
            <div v-else class="member__gap">
              <Loader :line="1" :imgShow="false" :show="false" />
            </div>
            <!-- member__gap -->
            <!-- <b-container> -->
            <b-row v-if="posts && posts.length > 0">
              <b-col  sm="6" lg="4" v-for="(post,index) in posts" :key="index" class="news-container">
                <div class="news__wrapper">
                  <div class="news__item">
                    <nuxt-link class="news__item-img-wrap" :to="localePath(`/${post.category}/${post.id}`)">
                      <img
                        :src="$store.state.baseURL+post.thumbnail"
                        :alt="person[`firstname${$store.state.lang}`]"
                      />
                    </nuxt-link>
                    <div class="news__content">
                      <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="news__content-title-mobile d-block  d-md-none d-lg-none" v-html="post.intro" ></nuxt-link>
                      <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="news__content-title d-none d-md-block d-lg-block" v-html="post.intro"></nuxt-link>
                    </div>
                    <!-- end of news__content title -->
                    <div class="news__content-meta">
                      <span class="news__content-meta-calendar d-md-none"
                        >{{ post.created_at | moment("L") }}</span
                      >
                      <span
                        class="news__content-meta-time d-none d-md-inline-block d-lg-inline-block"
                        >{{ post.created_at | moment("LT") }}</span
                      >
                      <span class="news__content-meta-view">{{ post.view_count }}</span>
                    </div>
                  </div>
                  <!-- end of news__item -->
                </div>
                <!-- /.news__wrapper -->
              </b-col>
            </b-row>
            <b-row v-else-if="posts.length > 0">
              <b-col v-for="(i,index) in 6" :key="index" sm="6" lg="4"> 
                <div class="news__wrapper">
                    <div class="news__item" >
                      <Loader :line="1" :imgShow="true" :show="true" />                  
                    </div>
                </div>
              </b-col>
            </b-row>
            <b-row v-else></b-row>
            <div class="latest__news-more" v-show="posts.length > 0">
              <a type="button" class="news__more-btn">{{
                $t("button.more")
              }}</a>
            </div>

            <!-- </b-container> -->
          </b-col>
          <b-col lg="3" class="d-none d-xl-block">
            <div class="authors__block">
              <h4 class="authors__block-heading">
                {{ $t("team.author") }}
              </h4>
              <div class="authors__list-wrapper">
                <nuxt-link
                  class="authors__list"
                  v-for="(user, index) in $store.state.users"
                  :key="index"
                  :to="localePath(`/team/${user.id}`)"
                >
                  <div class="authors__list-item">
                    <div class="authors__list-image">
                      <img
                        class="rounded "
                        :src="$store.state.baseURL + user.profile_picture"
                        :alt="user[`firstname${$store.state.lang}`]"
                      />
                    </div>
                    <div class="authors__list-info">
                      <div>
                        <p class="authors__list-name">
                          {{ user[`firstname${$store.state.lang}`] }} {{ user[`lastname${$store.state.lang}`] }}
                        </p>
                      </div>
                      <p class="authors__list-position">{{ user.jobtype[`name${$store.state.lang}`] }}</p>
                    </div>
                  </div>
                </nuxt-link>
                <!-- /.author__list-item -->
              </div>
              <!-- /.authors__list-wrapper -->
            </div>
            <!-- /.authors__block -->
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'contact',
  data() {
    return {
      id: this.$route.params.id,
      person: [],
      posts: [],
    };
  },
  methods: {
    async getPerson() {
      await this.$axios
        .get(`members/${this.$store.state.varLang}${this.id}/`)
        .then(res => {
          this.person = res.data;
        })
        .catch(() => {});
    },
    async getPersonPosts() {
      await this.$axios.get(`member/${this.id}/posts/`)
      .then(res => {
        this.posts = res.data.results;
      })
      .catch(() => {})
    }
  },
  created() {
    this.getPersonPosts();
    this.getPerson();
    this.$store.dispatch("getUsers").then(() => {
      this.$store.state.users;
    });
  }
};
</script>
