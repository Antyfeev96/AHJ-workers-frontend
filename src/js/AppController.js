export default class AppController {
  constructor(layout) {
    this.layout = layout;
  }

  init() {
    this.layout.initRender();
  }

  renderArticle(timestamp) {
    this.layout.renderArticle(timestamp);
  }

  formatDate(date) {
    this.date = date || new Date();

    this.yearFormatter = new Intl.DateTimeFormat('ru', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    this.dayFormatter = new Intl.DateTimeFormat('ru', {
      hour: 'numeric',
      minute: 'numeric',
    });

    return `${this.dayFormatter.format(this.date)} ${this.yearFormatter.format(this.date)}`;
  }
}
