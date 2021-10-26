<template>
<div class="sidebar__news">
    <h3 class="sidebar__news-heading">
        {{ $t('post.news') }}
    </h3>
    <!-- /.sidebar__news-heading -->
    <ul v-if="allPosts && allPosts.length > 0" class="sidebar__news-list">
        <li class="sidebar__news-list-item" v-for="(post,index) of allPosts.slice(0,6)" :key="index">
        <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="sidebar__news-list-link">
            {{ post[`title${$store.state.lang}`] }}
        </nuxt-link>
        <div class="big__news-meta">
            <span class="big__news-meta-date">{{ post.created_at | moment('L') }}</span>
            <span class="big__news-meta-view">{{ post.view_count }}</span>
        </div>
        </li>
        <li class="sidebar__news-list-item">
            <div class="news__more">
                <nuxt-link :to="localePath('/news')" class="news__more-btn">{{ $t('button.more') }}</nuxt-link>
            </div>
        </li>
    </ul>
    <ul v-else class="sidebar__news-list">
        <li class="sidebar__news-list-item" v-for="(i,index) of 8" :key="index">
            <Loader />
        </li>
    </ul>
    <!-- /.news__sidebar__list -->
</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['allPosts'])
    },
    created() {
      this.$store.dispatch('getPosts');
    }
}
</script>