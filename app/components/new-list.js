import Ember from 'ember';

export default Ember.Component.extend({
  addNewList: false,
  actions: {
    listFormShow() {
      this.set('addNewList', true);
    },

    save1() {
      var date = new Date();
      var params = {
        userName: this.get('userName') ? this.get('userName') : "",
        category: this.get('category') ? this.get('category') : "",
        date: date,
        title: this.get('title') ? this.get('title') : "",
        description: this.get('description') ? this.get('description') : "",
        image: this.get('image') ? this.get('image') : "",
        price: this.get('price') ? this.get('price') : "",
        location: this.get('location') ? this.get('location') : "",
      };
      this.set('addNewList', false);
      this.sendAction('save2', params);
    }
  }
});
