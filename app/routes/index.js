import Route from '@ember/routing/route';

const WAX_CATEGORIES = ['NoWax', 'Wax', 'XtraWax'];

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/detail.json');
    let { data } = await response.json();

    return data.map((model) => {
      let { attributes } = model;
      let type;

      if (WAX_CATEGORIES.includes(attributes.category)) {
        type = 'No Wax';
      } else {
        type = 'Wax';
      }

      return { type, ...attributes };
    });
  }
}
