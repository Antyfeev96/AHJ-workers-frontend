/* eslint-disable no-unused-vars */
// import icon from '../images/meme.jpg';
import API from './API';
import AppController from './AppController';
import AppRender from './AppRender';

const app = new AppController(new AppRender(), new API());
app.init();
app.renderArticle();
