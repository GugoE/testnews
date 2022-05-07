import { news } from '@/services/jsons/news-list'
export const getInitialState = () => {
    return {
        list: [],
        news
    }
}

const state = getInitialState()

const getters = {
    getNewsList: (state) => state.list,
}

const actions = {
    async loadNewsList({ commit }) {
        await commit('setNewsList')
    },

    async filterNews({commit, dispatch}, payload) {
        await commit('setFilteredNewsList', payload.value)
    },
}

const mutations = {
    setNewsList(state, data) {
        state.list = state.news.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },

    setFilteredNewsList(state, payload) {
        if(payload.length > 0) {
            state.list = state.list.filter(val => val.title.toLowerCase().includes(payload.toLowerCase()));
        } else {
            state.list = state.news
        }
    }
}

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
}
