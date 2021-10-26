<template>
    <PostIndex :titleHeader="$t('navbar.policy')" :posts="$store.state.policy" />
</template>
<script>
export default {
    data() {
        return {
                                                                                    
        }
    },
    created() {
        this.$store.dispatch('getPolicyPosts',this.$store.state.category[0].id);
    }
}
</script>