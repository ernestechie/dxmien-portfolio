import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import { OhVueIcon } from 'oh-vue-icons';
import Padding from '../src/components/Slots/Padding.vue';

const app = createApp(App);

app.component('v-icon', OhVueIcon);
app.component('Padding', Padding);

app.mount('#app');
