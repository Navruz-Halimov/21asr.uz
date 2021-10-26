<template>
    <PostIndex :titleHeader="$t('categories.nuqtai')"  :posts="$store.state.nuqtai" />
</template>
<script>
export default {
    data() {
        return {
                                                                                    
        }
    },
    created() {
        this.$store.dispatch('getNuqtaiPosts',this.$store.state.category[1].id);
    }
}
</script>