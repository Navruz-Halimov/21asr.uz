<template>
    <div>
        <a v-if="Object.keys(ads).length !== 0" :href="ads.ads_link" target="_blank" class="mini-adv-link" :title="ads.title">
            <img :src="$store.state.baseURL+ads.image" :alt="ads.title" />
        </a>
        <!-- <Loader v-else /> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            ads: []
        }
    },
    computed: {
        
    },
    methods: {
        getAdv() {
            this.$store.dispatch('getAdv')
            .then(() => {
                this.$store.state.adv.forEach(item => {
                    if(item.active){
                        this.ads = item;
                    }
                })
            })
        },
    },
    created() {
        this.getAdv();
    }

}
</script>