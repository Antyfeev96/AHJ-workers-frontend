import icon from '../images/meme.jpg';
import AppController from './AppController';
import AppRender from './AppRender';

const app = new AppController(new AppRender(icon));
app.init();
for (let i = 0; i < 3; i += 1) {
  app.renderArticle(app.formatDate());
}
