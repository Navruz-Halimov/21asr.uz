<template>
  <div>
    <div class="main__page">
      <div class="main__header">
        <b-container>
          <header class="header__top d-none d-sm-block">
            <b-row>
              <b-col v-if="!(global && global.length > 0)" lg="8" class="pr-1">
                  <Loader :line="11" :imgShow="true" :img="true" v-for="(i,index) of 3" :key='index' />
              </b-col>
              <b-col v-else lg="8" class="pr-1" >
                <swiper
                  ref="Navbar__slider"
                  :options="Navbar__slider"
                  class="navbar__slider"
                >
                  <swiper-slide v-for="(global) of global.slice(0,3)" :key="'global'+global.created_at">
                    <div class="navbar__slider-item">
                      <nuxt-link
                        :to="localePath(`/${global.category}/${global.id}/`)"
                        class="navbar__slider-link"
                      >
                        <img :src="$store.state.baseURL+global.thumbnail" :alt="global[`title${$store.state.lang}`]" />
                        <nuxt-link
                          :to="localePath(`/${global.category}`)"
                          class="slider__news-type"
                        >{{ $t('navbar.global') }}</nuxt-link>
                        <div class="navbar__slider-item-wrapper">
                          <div class="navbar__slider-item-content">
                          <div class="navbar__slider-item-meta">
                            <span
                              class="navbar__slider-item-meta-time"
                            >{{ global.created_at | moment('H:mm') }}</span>
                            <span class="navbar__slider-item-meta-view">{{ global.view_count }}</span>
                          </div>
                          <div class="navbar__slider-item-title">{{ global[`title${$store.state.lang}`] }}</div>
                          <!-- <div class="navbar__slider-item-text" v-html="global[`intro${$store.state.lang}`]"></div> -->
                        </div>
                        </div>

                      </nuxt-link>
                    </div>
                    <!-- /.navbar__slider-item -->
                  </swiper-slide>
                  <div class="swiper-button-prev header__swiper-prev" slot="button-prev"></div>
                  <div class="swiper-button-next header__swiper-next" slot="button-next"></div>
                </swiper>
              </b-col>
              <b-col lg="4" class="px-0">
                <div class="header__news-left">
                    <div v-if="business[0] !=undefined ">
                      <nuxt-link :to="localePath(`/${business[0].category}/${business[0].id}`)" class="header__news-left-link">
                        <img
                          :src="$store.state.baseURL+business[0].thumbnail"
                          :alt="business[0][`title${$store.state.lang}`]"
                        />
                        <nuxt-link :to="localePath('/biznes')" class="news__type left__part-news-type">{{ $t('categories.business') }}</nuxt-link>
                        <div class="header__news-left-info">
                          <div class="header__news-left-meta">
                            <span class="header__news-left-meta-time">{{ business[0].created_at | moment('L') }}</span>
                            <span class="header__news-left-meta-view">{{ business[0].view_count }}</span>
                          </div>
                          <h4 class="header__news-left-title">{{ business[0][`title${$store.state.lang}`] }}</h4>
                          <!-- <p class="header__news-left-text d-none d-lg-block" v-html="singleBusiness[0][`intro${$store.state.lang}`]"></p> -->
                        </div>
                      </nuxt-link>
                    </div>
                    <Loader :line="1" :img="true" v-else />
                    <div v-if="criticism[0] !=undefined ">
                      <nuxt-link :to="localePath(`/${criticism[0].category}/${criticism[0].id}`)" class="header__news-left-link">
                        <img
                          :src="$store.state.baseURL+criticism[0].thumbnail"
                          :alt="criticism[0][`title${$store.state.lang}`]"
                        />
                        <nuxt-link :to="localePath('/tanqid')" class="news__type left__part-news-type">{{ $t('categories.critism') }}</nuxt-link>
                        <div class="header__news-left-info">
                          <div class="header__news-left-meta">
                            <span class="header__news-left-meta-time">{{ criticism[0].created_at | moment('L') }}</span>
                            <span class="header__news-left-meta-view">{{ criticism[0].view_count }}</span>
                          </div>
                          <h4 class="header__news-left-title">{{ criticism[0][`title${$store.state.lang}`] }}</h4>
                          <!-- <p class="header__news-left-text d-none d-lg-block" v-html="singleCriticism[0][`title${$store.state.lang}`]"></p> -->
                        </div>
                      </nuxt-link>
                    </div>
                    <Loader :line="1" :img="true" v-else />
                </div>
              </b-col>
            </b-row>
          </header>
          <!-- /.header__top -->
        </b-container>
      </div>
      <header class="header__mobile-news d-block d-sm-none">
        <b-container>
          <b-row>
            <b-col sm="12" class="px-0" v-if="global[0] != undefined">
              <div class="header__mobile-news--item">
                <nuxt-link :to="localePath(`/${global[0].category}/${global[0].id}`)" class="header__mobile-news-link">
                  <img :src="$store.state.baseURL+global[0].thumbnail" alt="header news" />
                  <nuxt-link :to="localePath(`/${global[0].category}`)" class="news__type news__type-mobile">{{ $t('navbar.global') }}</nuxt-link>
                  <div class="header__mobile-meta">
                    <span class="header__mobile-meta-time">{{ global[0].created_at | moment('L') }}</span>
                    <span class="header__mobile-meta-view">{{ global[0].view_count }}</span>
                  </div>
                </nuxt-link>
                <div class="header__mobile-news-content">
                  <nuxt-link :to="localePath(`/${global[0].category}/${global[0].id}`)" class="header__mobile-news-title-wrap">
                    <h2
                      class="header__mobile-news-title"
                    >{{ global[0][`title${$store.state.lang}`] }}</h2>
                  </nuxt-link>
                  <p class="header__mobile-news-text" v-html="global[0][`title${$store.state.lang}`]"></p>
                </div>
              </div>
            </b-col>
            <b-col sm="12" class="px-0" v-else>
              <div class="header__mobile-news--item">
                <Loader :img="true" />
              </div>
            </b-col>
            <b-col v-if="singleBusiness[0] != undefined" sm="12" class="px-0">
              <div class="header__mobile-news--item">
                <nuxt-link :to="localePath(`/${singleBusiness[0].category}/${singleBusiness[0].id}`)" class="header__mobile-news-link">
                  <img :src="$store.state.baseURL+singleBusiness[0].thumbnail" :alt="singleBusiness[0][`title${$store.state.lang}`]" />
                  <nuxt-link :to="localePath('/biznes')" class="news__type news__type-mobile">{{ $t('categories.business') }}</nuxt-link>
                  <div class="header__mobile-meta">
                    <span class="header__mobile-meta-time">{{ singleBusiness[0].created_at | moment('H:mm') }} &nbsp;</span>
                    <span class="header__mobile-meta-view">{{ singleBusiness[0].view_count }}</span>
                  </div>
                </nuxt-link>
                <div class="header__mobile-news-content">
                  <nuxt-link :to="localePath(`/${singleBusiness[0].category}/${singleBusiness[0].id}`)" class="header__mobile-news-title-wrap">
                    <h2
                      class="header__mobile-news-title"
                    >{{ singleBusiness[0][`title${$store.state.lang}`] }}</h2>
                  </nuxt-link>
                  <p
                    class="header__mobile-news-text"
                    v-html="singleBusiness[0][`intro${$store.state.lang}`]"></p>
                </div>
              </div>
            </b-col>
            <b-col sm="12" class="px-0" v-else>
              <div class="header__mobile-news--item">
                <Loader :img="true" />
              </div>
            </b-col>
            <b-col v-if="singleCriticism[0] != undefined" sm="12" class="px-0">
              <div class="header__mobile-news--item">
                <nuxt-link :to="localePath(`/${singleCriticism[0].category}/${singleCriticism[0].id}`)" class="header__mobile-news-link">
                  <img :src="$store.state.baseURL+singleCriticism[0].thumbnail" :alt="singleCriticism[0][`title${$store.state.lang}`]" />
                  <nuxt-link :to="localePath('/tanqid')" class="news__type news__type-mobile">{{ $t('categories.critism') }}</nuxt-link>
                  <div class="header__mobile-meta">
                    <span class="header__mobile-meta-time"> {{ singleCriticism[0].created_at | moment('H:mm') }} &nbsp; </span>
                    <span class="header__mobile-meta-view">{{ singleCriticism[0].view_count }}</span>
                  </div>
                </nuxt-link>
                <div class="header__mobile-news-content">
                  <nuxt-link :to="localePath(`/${singleCriticism[0].category}/${singleCriticism[0].id}`)" class="header__mobile-news-title-wrap">
                    <h2
                      class="header__mobile-news-title"
                    >{{ singleCriticism[0][`title${$store.state.lang}`] }}</h2>
                  </nuxt-link>
                  <p
                    class="header__mobile-news-text"
                  v-html="singleCriticism[0][`intro${$store.state.lang}`]"></p>
                </div>
              </div>
            </b-col>
            <b-col sm="12" class="px-0" v-else>
              <div class="header__mobile-news--item">
                <Loader :img="true" />
              </div>
            </b-col>
          </b-row>
        </b-container>
      </header>
      <!-- /.header__mobile -->
      <div class="main__news">
        <b-container>
          <b-row>
            <b-col lg="9" md="12" class="order-2 order-lg-1">
              <div class="category__news-list">
                <h4 class="category__header-heading-mobile d-block d-md-none">{{ $t('navbar.economy') }}</h4>
                <b-row>
                  <b-col sm="6" lg="4" class="d-lg-flex d-none d-xl-none" v-for="(post) of economyPosts.slice(0,4)" :key="'economy'+post.created_at">
                    <div class="news__wrapper">
                      <div class="news__item">
                        <nuxt-link class="news__item-img-wrap" :to="localePath(`/${post.category}/${post.id}`)">
                          <img :src="$store.state.baseURL+post.thumbnail" :alt="post[`title${$store.state.lang}`]" />
                          <nuxt-link :to="localePath(`/${post.category}`)" class="news__type">{{ $t('navbar.economy') }}</nuxt-link>
                        </nuxt-link>
                        <div class="news__content">
                          <nuxt-link
                            :to="localePath(`/${post.category}/${post.id}`)"
                            class="news__content-title-mobile d-block d-md-none d-lg-none"
                          >
                            {{ post[`title${$store.state.lang}`]}}
                          </nuxt-link>
                          <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="news__content-title d-none d-md-block d-lg-block">
                            {{ post[`title${$store.state.lang}`] }}
                          </nuxt-link>
                        </div>
                        <div class="news__content-meta">
                          <span class="news__content-meta-calendar d-md-none">{{ post.created_at | moment('L') }}</span>
                          <span
                            class="news__content-meta-time d-none d-md-inline-block d-lg-inline-block"
                          >{{ post.created_at | moment('H:mm') }}</span>
                          <span class="news__content-meta-view">{{ post.view_count }}</span>
                        </div>
                      </div>
                    </div>
                  </b-col>
                  <b-col sm="6" lg="4" v-for="(eco) of economyPosts.slice(1,7)" :key="eco.id">
                    <div class="news__wrapper">
                      <div class="news__item">
                        <nuxt-link class="news__item-img-wrap" :to="localePath(`/${eco.category}/${eco.id}`)">
                          <img :src="$store.state.baseURL+eco.thumbnail" :alt="eco[`title${$store.state.lang}`]" />
                          <nuxt-link :to="localePath('/iqtisod')" class="news__type">{{ $t('navbar.economy') }}</nuxt-link>
                        </nuxt-link>
                        <div class="news__content">
                          <nuxt-link
                            :to="localePath(`/${eco.category}/${eco.id}`)"
                            class="news__content-title-mobile d-block d-md-none d-lg-none"
                          >
                            {{ eco[`title${$store.state.lang}`] }}
                          </nuxt-link>
                          <nuxt-link :to="localePath(`/${eco.category}/${eco.id}`)" class="news__content-title d-none d-md-block d-lg-block">
                            <span v-html="eco[`title${$store.state.lang}`]"></span>
                          </nuxt-link>
                        </div>
                        <div class="news__content-meta">
                          <span class="news__content-meta-calendar d-md-none">{{ eco.created_at | moment('L') }}</span>
                          <span
                            class="news__content-meta-time d-none d-md-inline-block d-lg-inline-block"
                          >{{ eco.created_at | moment('H:mm') }}</span>
                          <span class="news__content-meta-view">{{ eco.view_count }}</span>
                        </div>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col lg="3" class="order-lg-2 px-0 px-sm-3">
              <div class="sidebar__news">
                <h3 class="sidebar__news-heading">{{ $t('news.title') }}</h3>
                <ul class="sidebar__news-list">
                  <li class="sidebar__news-list-item" v-for="(post) of allPosts.slice(0,5)" :key="'A'+post.id+'_'+post.created_at">
                    <div class="sidebar__news-mobile-wrap d-block d-lg-none">
                      <div class="sidebar__news-mobile">
                        <nuxt-link
                          :to="localePath(`/${post.category}/${post.id}`)"
                          class="sidebar__news-img"
                        >
                          <img :src="$store.state.baseURL+post.thumbnail" alt="news image" />
                        </nuxt-link>
                        <div class="sidebar__news-mobile-content">
                          <nuxt-link
                            :to="localePath(`/${post.category}/${post.id}`)"
                            class="sidebar__news__mobile-title"
                          >{{ post[`title${$store.state.lang}`] }}</nuxt-link>
                          <div class="sidebar__news-mobile-meta">
                            <span
                              class="sidebar__news-mobile-calendar"
                            >{{ post.created_at | moment('L') }}</span>
                            <span class="sidebar__news-mobile-view">{{ post.view_count }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sidebar__news-desktop d-none d-lg-block">
                      <nuxt-link
                        :to="localePath(`/${post.category}/${post.id}`)"
                        class="sidebar__news-list-link"
                      >{{ post[`title${$store.state.lang}`] }}</nuxt-link>
                      <div class="big__news-meta">
                        <span class="big__news-meta-date">{{ post.created_at | moment('L') }}</span>
                        <span class="big__news-meta-view">{{ post.view_count }}</span>
                      </div>
                    </div>
                  </li>
                  <li class="sidebar__news-list-item d-none d-md-block">
                    <div class="news__more">
                      <nuxt-link
                        :to="localePath('/news')"
                        class="news__more-btn"
                      >{{ $t('button.more') }}</nuxt-link>
                    </div>
                  </li>
                </ul>
              </div>
            </b-col>
            <b-container class="px-0">
              <div class="adv-mini d-block d-sm-none">
                <Adv />
              </div>
            </b-container>
          </b-row>
        </b-container>
        <b-container>
          <b-row>
            <b-col lg="9" class="order-2 order-lg-1 d-none d-md-block">
              <div class="main__news-wrap">
                <h2 class="main__news-heading">{{ $t('navbar.economy') }}</h2>
                <div class="large__news-wrapper d-none d-md-block" v-for="(post) of economyPosts.slice(0,1)" :key="'economy'+post.created_at">
                  <div class="main__news-content">
                    <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="main__news-link">
                      <img :src="$store.state.baseURL+post.thumbnail" :alt="post[`title${$store.state.lang}`]" />
                      <span>{{ $t('navbar.economy') }}</span>
                    </nuxt-link>
                    <nuxt-link to class="main__news-content-link">
                      <h6>{{ post[`title${$store.state.lang}`] }}</h6>
                      <div v-html="post[`intro${$store.state.lang}`]" class="main__news-content-link-text">

                      </div>
                      <div class="big__news-meta">
                        <span class="big__news-meta-date">{{ post.created_at | moment('L') }}</span>
                        <span class="big__news-meta-view">{{ post.view_count }}</span>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <div class="main__news-center">
                  <b-row>
                    <b-col lg="6" md="6" sm="6" v-for="(post) of economyPosts.slice(7,11)" :key="post.id">
                      <div class="main__news-item-wrapper">
                        <nuxt-link class="main__news-item" :to="localePath(`/${post.category}/${post.id}`)">
                          <img :src="$store.state.baseURL+post.thumbnail" height="107" width="196" :alt="post[`title${$store.state.lang}`]" />
                        </nuxt-link>
                        <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="main__news-item-content-link">
                          <div class="main__news-item-content">
                            <h4 class="main__news-item-title">
                              {{ post[`title${$store.state.lang}`] }}
                            </h4>
                            <div class="main__news-item-meta">
                              <span class="main__news-item-meta-calendar">{{ post.created_at | moment('L') }}</span>
                              <span class="main__news-item-meta-view">{{ post.view_count }}</span>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
            <b-col lg="3" class="order-1 order-lg-2 mobile-shadow">
              <div class="main__page-sidebar">
                <div class="main__page-sidebar-heading">{{ $t('categories.nuqtai') }}</div>
                <div class="main__page-sidebar-list">
                  <nuxt-link
                    class="main__page-sidebar-item"
                    v-for="(post,index) in nuqtaiPosts.slice(0,5)"
                    :key="post.created_at+'_'+index"
                    :to="localePath(`/${post.category}/${post.id}`)"
                  >
                    <img
                      :src="$store.state.baseURL+post.thumbnail"
                      :alt="post[`title${$store.state.lang}`]"
                      class="d-block d-lg-none d-xl-block"
                    />
                    <div class="sidebar__item-content">
                      <div class="sidebar__item-content-title">{{ post[`title${$store.state.lang}`] }}</div>
                      <div class="sidebar__item-content-meta">
                        <span class="sidebar__meta-calendar">{{ post.created_at | moment("L") }}</span>
                        <span class="sidebar__meta-view">{{ post.view_count }}</span>
                      </div>
                    </div>
                  </nuxt-link>
                   <div class="news__more nuqtai__btn">
                <nuxt-link :to="localePath('/news')" class="news__more-btn">{{ $t('button.more') }}</nuxt-link>
            </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <section class="bottom__news">
        <b-container>
          <div class="adv-mini d-none d-sm-block mt-3 mb-5">
            <Adv />
          </div>
        </b-container>
        <b-container>
          <b-row>
            <b-col lg="9" class="mobile-shadow">
              <div class="bottom__news-wrapper">
                <div class="main__news-heading">{{ $t('navbar.policy') }}</div>
                <div class="bottom__news-left">
                  <b-row>
                    <b-col md="6" v-for="(post) of policyPosts.slice(0,1)" :key="post.id">
                      <div class="bottom__news-big d-none d-sm-block">
                        <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="bottom__news-big-link">
                          <img :src="$store.state.baseURL+post.thumbnail" :alt="post[`intro${$store.state.lang}`]" />
                          <nuxt-link :to="localePath('/siyosat')" class="bottom__news-type__title">{{ $t('navbar.policy') }}</nuxt-link>
                          <div class="bottom__news-info">
                            <div class="bottom__news-info-meta">
                              <span class="bottom__news-info-meta-time">{{ post.created_at | moment("L") }}</span>
                              <span class="bottom__news-info-meta-view">{{ post.view_count }}</span>
                            </div>
                            <h4
                              class="bottom__news-info-heading"
                            >{{ post[`title${$store.state.lang}`] }}</h4>
                            <!-- <p class="bottom__news-info-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sem massa lectus tortor feugiat sagittis
                              auctor porta penatibus.
                            </p> -->
                          </div>
                        </nuxt-link>
                      </div>
                    </b-col>
                    <b-col md="6" class="d-none d-sm-block">
                      <div class="bottom__small-news" v-for="(post) of policyPosts.slice(1,4)" :key="post.id">
                        <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="bottom__news-small-link">
                          <img :src="$store.state.baseURL+post.thumbnail" :alt="post[`title${$store.state.lang}`]" />
                        </nuxt-link>
                        <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="bottom__small-news-content">
                          <h4 class="bottom__small-news-title">{{ post[`title${$store.state.lang}`] }}</h4>
                          <!-- <p class="bottom__small-news-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sem massa lectus tortor feugiat sagittis
                            auctor porta penatibus.
                          </p> -->
                          <div class="bottom__small-news-meta">
                            <span class="bottom__small-news-meta-time">{{ post.created_at | moment('L') }}</span>
                            <span class="bottom__small-news-meta-view">{{ post.view_count }}</span>
                          </div>
                        </nuxt-link>
                      </div>
                    </b-col>
                  </b-row>
                </div>
                <div class="main__news-center">
                  <b-row>
                    <b-col lg="6" md="6" sm="6" v-for="(post) of policyPosts.slice(4,8)" :key="post.id">
                      <div class="main__news-item-wrapper">
                        <nuxt-link class="main__news-item" :to="localePath(`/${post.category}/${post.id}`)">
                          <img
                            :src="$store.state.baseURL+post.thumbnail"
                            height="107"
                            width="196"
                            :alt="post[`intro${$store.state.lang}`]"
                          />
                        </nuxt-link>
                        <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="main__news-item-content-link">
                          <div class="main__news-item-content">
                            <h4 class="main__news-item-title">
                              {{ post[`title${$store.state.lang}`] }}
                            </h4>
                            <div class="main__news-item-meta">
                              <span class="main__news-item-meta-calendar">{{ post.created_at | moment('L') }}</span>
                              <span class="main__news-item-meta-view">{{ post.view_count }}</span>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </b-col>
                  </b-row>
                  <div class="video__btn-wrap d-block d-sm-none">
                    <div>
                      <nuxt-link :to="localePath('/policy')" class="video__more-btn">{{ $t('button.more') }}</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col lg="3" class="mobile-shadow">
              <div class="sidebar__news">
                <h3 class="sidebar__news-heading">{{ $t('news.moreRead') }}</h3>
                <ul class="sidebar__news-list main__page-sidebar--newslist">
                  <li class="sidebar__news-list-item" v-for="post of getMore" :key="post.id">
                    <nuxt-link
                      :to="localePath(`/${post.category}/${post.id}`)"
                      class="sidebar__news-list-link"
                    >{{ post[`title${$store.state.lang}`] }}</nuxt-link>
                    <div class="big__news-meta">
                      <span class="big__news-meta-date">{{ post.created_at | moment('L') }}</span>
                      <span class="big__news-meta-view">{{ post.view_count }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <section class="video">
        <b-container>
          <div class="video__wrapper">
            <h2 class="video__heading">{{ $t('index.video') }}</h2>
            <div class="video__slider d-none d-md-block">
              <swiper v-if="videoPosts.length > 0" ref="mySwiper" :options="swiperOptionsNews">
                <swiper-slide v-for="(videoPost) in videoPosts" :key="'video'+'_'+videoPost.created_at">
                  <nuxt-link
                    :to="localePath(`/${videoPost.category}/${videoPost.id}`)"
                    class="video__slider-wrapper"
                  >
                    <div class="video__img-wrapper">
                      <span class="video__play-icon"></span>
                      <img
                        :src="$store.state.baseURL+videoPost.thumbnail"
                        alt="video about news"
                        class="video__img"
                      />
                      <span class="video__news-title">{{ videoPost[`title${$store.state.lang}`] }}</span>
                    </div>
                  </nuxt-link>
                </swiper-slide>
              </swiper>
              <swiper v-else ref="mySwiper" :options="swiperOptionsNews">
                <swiper-slide v-for="(i,index) in 4" :key="index">
                  <Loader />
                </swiper-slide>
              </swiper>
            </div>
            <div class="video__section-mobile d-block d-md-none">
              <b-row>
                <b-col sm="6" v-for="(videoPost,index) in videoPosts.slice(0,6)" :key="videoPost.id+index">
                  <div class="video__item">
                    <nuxt-link
                      :to="localePath(`/videoposts/${videoPost.id}/`)"
                      class="video__item-link"
                    >
                      <span class="video__item-play"></span>
                      <img :src="$store.state.baseURL+videoPost.thumbnail" alt="news image item" />
                      <span class="video__item-title">{{ videoPost.title }}</span>
                    </nuxt-link>
                  </div>
                </b-col>
              </b-row>
              <div class="video__btn-wrap">
                <div>
                  <nuxt-link
                    :to="localePath(`/videoposts`)"
                    class="video__more-btn"
                  >{{ $t('button.more') }}</nuxt-link>
                </div>
              </div>
            </div>
            <!-- /.video__section-mobile -->
          </div>
          <!-- /.video__wrapper -->
        </b-container>
      </section>
      <section class="newspaper" id="newspapersSlider">
        <b-container>
          <h2 class="newspaper__heading">{{ $t('index.newspaper') }}</h2>
          <!-- /.newspaper__heading -->
          <div class="newspaper__slider">
            <swiper v-if="newspapers.length > 0" ref="mySwiper" :options="swiperOptions">
              <swiper-slide v-for="(newspaper) in newspapers" :key="'news'+newspaper.id">
                <div class="newsapper__slider-item">
                  <a
                    :href="`https://play.google.com/store/apps?hl=ru`"
                    target="_blank"
                    class="newspaper__slider-link"
                  >
                    <img :src="$store.state.baseURL+newspaper.thumbnail" alt="newspaper image" />
                  </a>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev category-navigation-left" slot="button-prev"></div>
              <div class="swiper-button-next category-navigation-right" slot="button-next"></div>
            </swiper>
          </div>
        </b-container>
      </section>
    </div>
    <!-- /.main__page -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newspapers: [],
      global: [],
      business: [],
      criticism: [],
      swiperOptions: {
        slidesPerView: 7,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          530: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      },
      Navbar__slider: {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          530: {
            slidesPerView: 1,
          },
          620: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1100: {
            slidesPerView: 1,
          },
          1250: {
            slidesPerView: 1,
            height: 500,
          },
        },
      },
      swiperOptionsNews: {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: true,
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          530: {
            slidesPerView: 1,
          },
          620: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters(['slider',
                   'globals',
                   'criticismPosts',
                   'businessPosts',
                   'videoPosts',
                   'economyPosts',
                   'nuqtaiPosts',
                   'singleBusiness',
                   'singleCriticism',
                   'getMore',
                   'allPosts',
                   'policyPosts']),
  },
  methods: {
    getNewspaper() {
      this.$axios.get('newspaperthumbnails/')
      .then(res => {
        this.newspapers = res.data.results;
      })
      .catch(() => {})
    },
  },
  mounted() {
    this.$store.dispatch('getSlider')
    .then(() => {
      this.slider.forEach(item => {
        if(item.post.category == 'jahon') {
          this.global.push(item.post);
        }else if(item.post.category == 'biznes') {
          this.business.push(item.post);
        }else {
          this.criticism.push(item.post);
        }
      })
    })
    this.$store.dispatch('getGlobalPosts',this.$store.state.category[3].id);
    this.$store.dispatch('getBusinessPosts',this.$store.state.category[7].id);
    this.$store.dispatch('getNuqtaiPosts',this.$store.state.category[1].id);
    this.$store.dispatch('getCritismPosts',this.$store.state.category[6].id)
    this.$store.dispatch('getPolicyPosts',this.$store.state.category[0].id);
    this.$store.dispatch('getEconomyPosts',this.$store.state.category[5].id);
    this.$store.dispatch('getMoreRead','view_count');
    this.$store.dispatch('getPosts');
    this.$store.dispatch('getVideoPosts');
    this.getNewspaper();

    // this.$store.dispatch('getCulturePosts',this.$store.state.category[2]);
    // this.$store.dispatch('getSocietyPosts',this.$store.state.category[4]);
    // this.$store.dispatch('getPostCategory');
    // this.getNuqtaiPosts();
    // this.getMoreRead();
  }
};
</script>
