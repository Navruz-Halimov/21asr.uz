<template>
    <div class="xxinavbar">
        <b-navbar toggleable="xl" type="dark">
            <b-navbar-nav class="d-xl-none d-inline-block">
                <b-button @click="showSearch()">
                    <svg fill="none" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                        <path d="M17.75 16.87l-4.718-4.745a6.875 6.875 0 10-.907.907l4.744 4.718.881-.88zM2.125 7.75a5.625 5.625 0 1111.25 0 5.625 5.625 0 01-11.25 0z" fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1=".863" y1="9.307" x2="17.75" y2="9.307" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9B6618"/>
                            <stop offset=".105" stop-color="#F6DE6E"/>
                            <stop offset=".276" stop-color="#BB862E"/>
                            <stop offset=".565" stop-color="#E0B64C"/>
                            <stop offset=".808" stop-color="#FAECBA"/>
                            <stop offset="1" stop-color="#AF721E"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </b-button>
                <form @submit.prevent="search" :class="showInput ? 'header__search-form d-flex open' : 'header__search-form d-flex'">
                    <b-button class="header__search-icon">
                        <svg fill="none" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <path d="M17.75 16.87l-4.718-4.745a6.875 6.875 0 10-.907.907l4.744 4.718.881-.88zM2.125 7.75a5.625 5.625 0 1111.25 0 5.625 5.625 0 01-11.25 0z" fill="url(#paint0_linear)"/>
                                <defs>
                                    <linearGradient id="paint0_linear" x1=".863" y1="9.307" x2="17.75" y2="9.307" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#9B6618"/>
                                    <stop offset=".105" stop-color="#F6DE6E"/>
                                    <stop offset=".276" stop-color="#BB862E"/>
                                    <stop offset=".565" stop-color="#E0B64C"/>
                                    <stop offset=".808" stop-color="#FAECBA"/>
                                    <stop offset="1" stop-color="#AF721E"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                    </b-button>
                    <input type="text"  v-model="searching" id="search-input" class="search-input" :placeholder="$t('navbar.search')" required="true" autofocus="on">
                    <div class="close-btn" @click="showSearch()"></div>
                </form>
                <!-- /.header__search-form -->
            </b-navbar-nav>
            <b-navbar-brand :to="localePath('/')">
                <!-- <img src="../assets/image/navbar/front.png" alt="XXI ASR GAZETASI"> -->
                <Logo />
                <span>{{ $t('navbar.century') }}</span>
            </b-navbar-brand>
            <b-navbar-toggle class="d-none" target="nav-collapse"></b-navbar-toggle>
            <b-button class="toggler d-block d-xl-none" @click="toggleSidebar()">
                <div class="line-wrapper">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </b-button>
            <b-collapse class="d-none" id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="localePath('/iqtisod')">{{ $t('navbar.economy') }}</b-nav-item>
                    <b-nav-item :to="localePath('/siyosat')">{{ $t('navbar.policy') }}</b-nav-item>
                    <b-nav-item :to="localePath('/jamiyat')">{{ $t('navbar.society') }}</b-nav-item>
                    <b-nav-item :to="localePath('/madaniyat')">{{ $t('navbar.culture') }}</b-nav-item>
                    <b-nav-item :to="localePath('/jahon')">{{ $t('navbar.global') }}</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-button size="sm" @click="changeLanguage('uz')" type="button">O'z</b-button>    
                    <b-button size="sm" @click="changeLanguage('уз')" type="button">Уз</b-button>
                </b-navbar-nav>
                <b-navbar-nav id="subscribe">
                    <b-button @click="openSubscribe()" type="button">{{ $t('navbar.subscribe') }}</b-button>
                </b-navbar-nav>
                <b-navbar-nav id="search" class="d-lg-block d-none">
                    <b-form @submit.prevent="search">
                        <b-form-input id="searchInput" v-model="searching" type="text" :placeholder="$t('navbar.search')"></b-form-input>
                    </b-form>
                    <b-button>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                    </b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    data() {
        return{
            showInput: false,
            searching: '',
        }
    },
    methods: {
        changeLanguage(lang){
            this.$router.push(this.switchLocalePath(lang));
            if(lang == 'uz') {
                this.$store.commit('setVarLang','');
                this.$store.commit('setLang','');
            }else{
                this.$store.commit('setVarLang','kl/');
                this.$store.commit('setLang','_kl');
            }
        },
        showSearch() {
            this.showInput = !this.showInput;
        },
        toggleSidebar(){
            this.$store.commit('setSidebar',!this.$store.state.show);
        },
        openSubscribe(){
            this.$store.commit('setSubscribe');
        },
        search() {
            this.showSearch();
            this.searching = encodeURIComponent(this.searching)
            this.$router.push(this.localePath(`/search?search=${this.searching}`));
            this.searching = '';
        }
    }
}
</script>