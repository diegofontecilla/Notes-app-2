(function(exports) {
  function testNoteController() {
    var text = "Favourite drink: seltzer"
    var notelist = new Notelist();
    notelist.store(text)
    var notecontroller = new NoteController(notelist);

    assert.isTrue("notecontroller instanciates", notecontroller.display().includes(text))
  };

  testNoteController();
})(this);
