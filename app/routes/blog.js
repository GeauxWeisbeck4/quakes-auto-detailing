import Route from '@ember/routing/route';

const POST_CATEGORIES = ['Tutorials', 'News', 'Tips', 'Events'];

export default class BlogRoute extends Route {
  async model() {
    let response = await fetch('/api/article.json');
    let { data } = await response.json();

    return data.map((model) => {
      let { id, attributes } = model;
      let type;

      if (POST_CATEGORIES.includes(attributes.category)) {
        type = 'Post';
      } else {
        type = 'Comment';
      }

      return { id, type, ...attributes };
    });
  }
}
