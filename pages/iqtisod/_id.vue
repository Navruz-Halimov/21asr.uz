<template>
  <div>
    <Post :post="post" :id="$store.state.category[5].id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['post'])
  },
  methods: {

  },
  created() {
    this.$store.dispatch('getPost',this.$route.params.id)
  }
}
</script>