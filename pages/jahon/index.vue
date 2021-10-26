<template>
    <PostIndex :titleHeader="$t('navbar.global')" :posts="$store.state.global" />
</template>
<script>
export default {
    data() {
        return {
                                                                                    
        }
    },
    created() {
        this.$store.dispatch('getGlobalPosts',this.$store.state.category[3].id);
    }
}
</script>