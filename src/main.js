import { createApp } from 'vue';
import App from './App.vue';

// Import global stylesheet
import './styles/global.css';

// Import global components
import HeaderComponent from './components/HeaderComponent.vue';
import MainContent from './components/MainContent.vue';
import ContactForm from './components/ContactForm.vue';
import DonationForm from './components/DonationForm.vue';
import FooterComponent from './components/FooterComponent.vue';

// Create Vue app
const app = createApp(App);

// Register global components
app.component('HeaderComponent', HeaderComponent);
app.component('MainContent', MainContent);
app.component('ContactForm', ContactForm);
app.component('DonationForm', DonationForm);
app.component('FooterComponent', FooterComponent);

// Mount app
app.mount('#app');