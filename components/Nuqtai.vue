<template>
    <div>
        <li class="sidebar__news-list-item" v-for="(post,index) of posts" :key="post.created_at+'_'+index">
            <nuxt-link :to="localePath(`/${post.category}/${post.id}`)" class="sidebar__news-list-link" >{{ post[`title${$store.state.lang}`] }}</nuxt-link>
            <div class="big__news-meta">
                <span class="big__news-meta-date">{{ post.created_at | moment('L') }}</span>
                <span class="big__news-meta-view">{{ post.view_count }}</span>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
        }
    },
    methods: {
        
    },
    created() {
        this.$store.dispatch('getNuqtaiPosts',this.$store.state.category[1].id)
        .then(() => {
            this.posts = this.$store.state.nuqtai.slice(0,6);
        })
    }
}
</script>