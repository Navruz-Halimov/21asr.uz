<template>
    <PostIndex :titleHeader="$t('categories.business')" :posts="$store.state.business" />
</template>
<script>
export default {
    data() {
        return {
                                                                                    
        }
    },
    created() {
        this.$store.dispatch('getBusinessPosts',this.$store.state.category[7].id);
    }
}
</script>
