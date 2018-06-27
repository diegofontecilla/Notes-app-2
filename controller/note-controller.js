(function(exports){

  function NoteController(notelist){
    this._notelistview = new NotelistView(notelist);

  };

  NoteController.prototype.display = function () {
    var htmlResult = this._notelistview.view();
    document.getElementById('app').innerHTML = htmlResult;
  };

  exports.NoteController = NoteController

})(this);
