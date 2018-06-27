(function(exports) {
  function testNoteCanBeReturned() {
    var note = new Note("Hello");

    assert.isTrue("note stores text", note.read === "Hello");

  };

  testNoteCanBeReturned();
})(this);
