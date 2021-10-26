import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        baseURL: 'https://21asr.uz',
        // baseURL: 'https://ybnchiasr.herokuapp.com',
        website: 'https://21asr.uz',
        categorizedPosts: [],
        videoPosts: [],
        moreRead: [],
        business: [],
        culture: [],
        economy: [],
        society: [],
        critism: [],
        policy: [],
        global: [],
        nuqtai: [],
        // amazon
        category: [
            {id: 12, title: 'policy'},
            {id: 15, title: 'nuqtai'},
            {id: 17, title: 'culture'},
            {id: 16, title: 'global'},
            {id: 13, title: 'society'},
            {id: 11, title: 'economy'},
            {id: 18, title: 'critism'},
            {id: 14, title: 'business'}
        ],
        weather: [],
        similarTags: [],
        slider: [],
        users: [],
        posts: [],
        adv: [],
        post: {},
        lang: '',
        varLang: '',
        subscribe: false,
        show: false,
    },
    mutations: {
        setSidebar(state,payload){
            state.show = payload;
        },
        setUsers(state,payload){
            state.users = payload;
        },
        setSubscribe(state){
            state.subscribe = !state.subscribe;
        },
        setMoreRead(state, payload){
            state.moreRead = payload;
        },
        setCategoryPosts(state, payload){
            state.categorizedPosts = payload;
        },
        setVideoPosts(state, payload){
            state.videoPosts = payload;
        },
        setAdv(state,payload){
            state.adv = payload;
        },
        setPost(state,payload){
            state.post = payload;
        },
        setPostCategory(state,payload){
            state.category = payload;
        },
        setPosts(state,payload){
            state.posts = payload;
        },
        setCulturePosts(state, payload){
            state.culture = payload;
        },
        setNuqtaiPosts(state, payload){
            state.nuqtai = payload;
        },
        setEconomyPosts(state, payload){
            state.economy = payload;
        },
        setPolicyPosts(state, payload){
            state.policy = payload;
        },
        setSocietyPosts(state, payload){
            state.society = payload;
        },
        setGlobalPosts(state, payload){
            state.global = payload;
        },
        setBusinessPosts(state, payload){
            state.business = payload;
        },
        setCritismPosts(state, payload){
            state.critism = payload;
        },
        setWeather(state,payload) {
            state.weather = payload;
        },
        setLang(state,payload) {
            state.lang = payload;
        },
        setVarLang(state,payload) {
            state.varLang = payload;
        },
        setSlider(state, payload) {
            state.slider = payload;
        },
        setSimilarTags(state,payload) {
            state.similarTags = payload;
        }
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        postsFour(state) {
            return state.posts.slice(0,4);
        },
        post(state) {
            return state.post;
        },
        nuqtaiPosts(state) {
            return state.nuqtai;
        },
        singleNuqtai(state) {
            return state.nuqtai.length > 0 ? state.nuqtai.slice(0,1) : '';
        },
        globals(state) {
            return state.global;
        },
        criticismPosts(state) {
            return state.critism;
        },
        singleCriticism(state) {
            return state.critism.slice(0,1);
        },
        businessPosts(state) {
            return state.business;
        },
        singleBusiness(state) {
            return state.business.slice(0,1);
        },
        videoPosts(state) {
            return state.videoPosts;
        },
        economyPosts(state) {
            return state.economy;
        },
        getMore(state) {
            return state.moreRead;
        },
        policyPosts(state) {
            return state.policy;
        },
        weather(state) {
            return state.weather;
        },
        adv(state) {
            return state.adv;
        },
        slider(state) {
            return state.slider;
        },
        similarTags(state) {
            return state.similarTags;
        }
    },
    actions: {
        async getSlider({ commit }) {
            await this.$axios.get(`sliders/`)
            .then(res => {
                commit('setSlider',res.data.results);
            })
            .catch(() => {})
        },
        async getSimilarTags({ commit,state },payload) {
            await this.$axios.get(`postsbytags/${state.varLang}${payload}/`)
            .then(res => {
                commit('setSimilarTags',res.data.results);
            })
            .catch(() => {})
        },
        async getUsers({ commit, state }) {
            await this.$axios.get(`members/${state.varLang}?limit=10&offset=0`)
            .then(res => {
                commit('setUsers',res.data.results);
            })
            .catch(() => {})
        },
        async getMoreRead({ commit,state },payload) {
            await this.$axios.get(`posts/${state.varLang}?ordering=${payload}`)
            .then(res => {
                commit('setMoreRead',res.data.results);
            })
            .catch(() => {})
        },
        async getCulturePosts({ commit,state },payload) {
            await this.$axios.get(`posts/category/${payload}/`)
            .then(res => {
                this.$axios.get(`posts/category/${payload}/${state.varLang}?limit=${res.data.count}`)
                .then(res => {
                    commit('setCulturePosts',res.data.results);
                })
            })
            .catch(() => {})
        },
        async getNuqtaiPosts({ commit,state }, payload) {
            await this.$axios.get(`posts/category/${payload}/`)
            .then(res => {
                this.$axios.get(`posts/category/${payload}/${state.varLang}?limit=${res.data.count}`)
                .then(resp => {
                    commit('setNuqtaiPosts',resp.data.results);
                })
            })
            .catch(() => {})
        },
        async getEconomyPosts({ commit,state },payload) {
            await this.$axios.get(`posts/category/${payload}/`)
            .then(res => {
                this.$axios.get(`posts/category/${payload}/${state.varLang}?limit=${res.data.count}`)
                .then(res => {
                    commit('setEconomyPosts',res.data.results);
                })
            })
            .catch(() => {})
        },
        async getBusinessPosts({ commit,state },payload) {
            await this.$axios.get(`posts/category/${payload}/`)
            .then(res => {
                this.$axios.get(`posts/category/${payload}/${state.varLang}?limit=${res.data.count}`)
                .then(res => {
                    commit('setBusinessPosts',res.data.results);
                })
            })
            .catch(() => {})
        },
        async getCritismPosts({ commit,state },payload) {
            await this.$axios.get(`posts/category/${payload}/`)
            .then(res => {
                this.$axios.get(`posts/category/${payload}/${state.varLang}?limit=${res.data.count}`)
                .then(resp => {
                    commit('setCritismPosts',resp.data.results);
                })
            })
            .catch(() => {})
        },
        async getPolicyPosts({ commit,state },payload) {
            await this.$axios.get(`posts/category/${payload}/`)
            .then(res => {
                this.$axios.get(`posts/category/${payload}/${state.varLang}?limit=${res.data.count}`)
                .then(resp => {
                    commit('setPolicyPosts',resp.data.results);
                })
            })
            .catch(() => {})
        },
        async getSocietyPosts({ commit,state },payload) {
            await this.$axios.get(`posts/category/${payload}/`)
            .then(res => {
                this.$axios.get(`posts/category/${payload}/${state.varLang}?limit=${res.data.count}`)
                .then(res => {
                    commit('setSocietyPosts',res.data.results);
                })
            })
            .catch(() => {})
        },
        async getGlobalPosts({ commit,state },payload) {
            await this.$axios.get(`posts/category/${payload}/`)
            .then(res => {
                this.$axios.get(`posts/category/${payload}/${state.varLang}?limit=${res.data.count}`)
                .then(resp => {
                    commit('setGlobalPosts',resp.data.results);
                })
            })
            .catch(() => {})
        },
        async getCategoryPosts({ commit,state },payload) {
            await this.$axios.get(`posts/category/${payload}/`)
            .then(res => {
                this.$axios.get(`posts/category/${payload}/${state.varLang}?limit=${res.data.count}`)
                .then(res => {
                    commit('setCategoryPosts',res.data.results);
                })
            })
            .catch(() => {})
        },
        async getAdv({ commit,state }) {
            await this.$axios.get('ads/')
            .then(res => {
                commit('setAdv',res.data.results);
            })
            .catch(() => {})
        },
        async getPost({ commit,state }, payload) {
            await this.$axios.get(`posts/${state.varLang}${payload}/`)
            .then(res => {
                commit('setPost',res.data);
            })
            .catch(() => {})
        },
        async getPostCategory({ commit,state }) {
            await this.$axios.get('categories/')
            .then(res => {
                commit('setPostCategory',res.data.results);
            })
            .catch(() => {})
        },
        async getPosts({ commit,state }) {
            await this.$axios.get('posts/')
            .then(res => {
                this.$axios.get(`posts/${state.varLang}?limit=${res.data.count}`)
                .then(resp => {
                    commit('setPosts',resp.data.results);
                })
            })
            .catch(() => {})
        },
        async getVideoPosts({ commit,state }) {
            await this.$axios.get(`posts/?is_videopost=1/${state.varLang}`)
            .then(res => {
                this.$axios.get(`posts/${state.varLang}?is_videopost=1/?limit=${res.data.count}`)
                .then(resp => {
                    commit('setVideoPosts',resp.data.results);
                })
            })
            .catch(() => {})
        },
        async getWeather({commit},id) {
            await this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=7e58bf4bf1cc03ee5c60cf9d5c7ff8cc`)
            .then(res => {
              commit('setWeather',res.data);
            })
            .catch(() => {})
        },
        sortCategoryId({ state },payload) {
            state.category.forEach(item => {
                if(item.name == payload){
                    return item.id;
                }
                return false;
            })
        },
    },
})

export default store