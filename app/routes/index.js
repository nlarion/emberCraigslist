import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      lists: this.store.findAll('list')
    });
  },

  actions: {
    save3(params) {
      var newList = this.store.createRecord('list', params);
      newList.save();
      this.transitionTo('index');
    },

    destroyList(list) {
      list.destroyRecord();
      this.transitionTo('index');
    },
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    }
  }
});
