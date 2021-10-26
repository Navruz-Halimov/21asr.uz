<template>
  <Post :post="post" :id="$store.state.category[7].id" />
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
    this.$store.dispatch('getPost',this.$route.params.id);
  }
}
</script>