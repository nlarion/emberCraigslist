import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(list) {
      if (confirm('Are you sure you want to delete this list?')) {
        this.sendAction('destroyList', list);
      }
    }
  }
});
