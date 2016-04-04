import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },

    saveCategory() {
      var params = {
        name: this.get('name'),
        country: this.get('country')
      };
      this.set('addNewCategory', false);
      this.sendAction('saveCategory', params);
    }
  }
});
