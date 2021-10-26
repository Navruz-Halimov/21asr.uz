<template>
    <PostIndex :titleHeader="$t('categories.critism')" :posts="$store.state.culture" />
</template>
<script>
export default {
    data() {
        return {
                                                                                    
        }
    },
    created() {
        this.$store.dispatch('getCulturePosts',this.$store.state.category[6].id);
    }
}
</script>
