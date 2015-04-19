Dives = new Mongo.Collection("dives");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    dives: function () {
      return Dives.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-dive": function (event) {
      var text = event.target.text.value;

      Dives.insert({
        text: text,
        createdAt: new Date()
      });
      event.target.text.value = "";
      return false;
    }
  });

  Template.dive.events({
    "click .delete": function () {
      Dives.remove(this._id);
    }
  });
}
