import App from './AppRender';
import icon from '../images/meme.jpg';

const app = new App(icon);
app.initRender();
for (let i = 0; i < 3; i += 1) {
  app.renderArticle();
}
