import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const api = location.hostname === 'localhost' ?
    'http://localhost:8083' :
    'https://hr-backoffice.allstars-it.com/';


console.log(api);

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        campaign_id: 2
    },
    mutations: {},
    actions: {
        apply({
            commit
        }, data) {
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
            axios.post(`${api}/apply`, { data: wrapper })
                .then(response => {
                    console.log(response, commit);
                });
        }
    }
});