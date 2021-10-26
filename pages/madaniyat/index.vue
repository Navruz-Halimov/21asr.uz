<template>
    <PostIndex :titleHeader="$t('navbar.culture')" :posts="$store.state.culture" />
</template>
<script>
export default {
    data() {
        return {
                                                                                    
        }
    },
    created() {
        this.$store.dispatch('getCulturePosts',this.$store.state.category[2].id);
    }
}
</script>
