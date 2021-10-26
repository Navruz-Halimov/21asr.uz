<template>
    <PostIndex :titleHeader="$t('navbar.economy')" :posts="$store.state.economy" />
</template>

<script>
export default {
    data() {
        return {
                                                                                    
        }
    },
    created() {
        this.$store.dispatch('getEconomyPosts',this.$store.state.category[5].id)
    }
}
</script>
