<template>
  <Post :post="post"/>
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