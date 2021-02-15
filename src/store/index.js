import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const api = location.hostname === 'localhost' ?
    'http://localhost:8083' :
    'https://hr-backoffice.allstars-it.com';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        campaign_id: 2
    },
    mutations: {
        applied () {}
    },
    actions: {
        apply({ commit }, data) {
            let wrapper = {
                campaign_id: this.state.campaign_id,
                name: data.fname,
                email: data.femail,
                referrer_name: data.name,
                referrer_email: data.email
            };
            const file = document.getElementById('file').files[0];
            const fd = new FormData();
            fd.append('resume', file);
            fd.append('data', JSON.stringify(wrapper));
            
            return new Promise((resolve, reject) => {
                axios.post(`${api}/apply/${data.femail}`, fd)
                    .then(response => {
                        resolve(response);
                        commit('applied');
                    }).catch(err => reject(err));
            });
        }
    }
});