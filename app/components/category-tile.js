import Ember from 'ember';

export default Ember.Component.extend({

  fullLocation: Ember.computed('category.name', 'category.country', function() {
    return this.get('category.name') + ', ' + this.get('category.country');
  }),

  sortBy: ['date:asc'],
  sortedLists: Ember.computed.sort('category.lists', 'sortBy'),

  actions: {
    save3(params) {
      var newList = this.store.createRecord('list', params);
      var category = params.category;
      category.get('lists').addObject(newList);
      newList.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    },
    delete(category) {
      if (confirm('Are you sure you want to delete this category?')) {
        this.sendAction('destroyCategory', category);
      }
    }
  }
});
