import Ember from 'ember';

export default Ember.Component.extend({
  updateListForm: false,
  actions: {
    updateListForm() {
      this.set('updateListForm', true);
    },
    update(list){
      var params = {
        owner: this.get('owner'),
        category: this.get('category'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        cost: this.get('cost')
      };
      this.set('updateListForm', false);
      this.sendAction('update', list, params);
    }
  }
});
