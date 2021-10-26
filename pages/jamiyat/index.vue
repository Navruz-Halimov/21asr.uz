<template>
    <PostIndex :titleHeader="$t('navbar.society')"  :posts="$store.state.society" />
</template>
<script>
export default {
    data() {
        return {
                                                                                    
        }
    },
    created() {
        this.$store.dispatch('getSocietyPosts',this.$store.state.category[4].id);
    }
}
</script>