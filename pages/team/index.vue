<template>
  <div>
    <div class="our__team">
      <b-container>
        <div class="our__team-heading">{{ $t('team.title') }}</div>
        <!-- /.out__team-heading -->
        <b-row v-show="$store.state.users && $store.state.users.length > 0">
          <b-col md="3" sm="6" cols="6" v-for="person in $store.state.users" :key="person.id">
            <nuxt-link :to="localePath(`/team/${person.id}`)" class="avatar">
              <div class="avatar__image">
                <img
                  :src="$store.state.baseURL+person.profile_picture"
                  :alt="person[`firstname${$store.state.lang}`]"
                />
              </div>
              <p class="avatar__name">{{ person[`firstname${$store.state.lang}`] }} {{ person[`lastname${$store.state.lang}`] }}</p>
              <span class="avatar__job-title">{{ person.jobtype[`name${$store.state.lang}`] }}</span>
            </nuxt-link>
          </b-col>
        </b-row>
        <b-row v-show="!($store.state.users && $store.state.users.length > 0)">
          <b-col md="3" sm="6" cols="6" v-for="person in 6" :key="person">
            <Loader :line="4" :show="true" :imgShow="true" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'contact',
  data() {
    return {

    }
  },
  methods: {

  },
  created(){
    this.$store.dispatch('getUsers')
    .then(() => {
      this.$store.state.users;
    })
  }
}
</script>