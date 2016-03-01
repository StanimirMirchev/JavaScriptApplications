(function () {
	'use strict';
	var counter = 1;

	$(function() {
		
		service.getAllBooks(drawBooks, error);

		//$('#add-book').on('click', addBook);
		//$('#edit-book').on('click', editBook);

	});


	function drawBooks(data){
		$('body').empty();
        $('body').append('<h2>Books</h2>')
            .append('Title: <input type="text" id="add-book-title" /><br><br>')
            .append("Author: <input type='text' id='add-book-author' /><br><br>")
            .append("Isbn: <input type='text' id='add-book-isbn'/><br><br>")
            .append('<a id="add-book-button" href="#">Add a book</a>')
            .append("<h2>List of books</h2>")
            .append('<ul class="books"></ul>');
        $('#add-book-button').click(addBook);

        for (var c in data.results) {
            var book = data.results[c];
            var bookItem = $('<li></li>');

            var bookTitle = $('<div>');
            var bookAuthor = $('<div> ');
            var bookIsbn = $('<div> ');

            bookTitle.data('book', book);
            bookAuthor.data('book', book);
            bookIsbn.data('book', book);
            
            bookTitle.text("Title: " + book.title);
            bookTitle.appendTo(bookItem);

            bookAuthor.text("Author: " + book.author);
            bookAuthor.appendTo(bookItem);

            bookIsbn.text("Isbn: " + book.isbn);
            bookIsbn.appendTo(bookItem);

            addControlButtons(bookItem, book);
           
            bookItem.appendTo($(".books"));

            
        }
	}
/*
	function addBook(){
		var editButton = 
			$('<button id="edit-book-button" class="btn btn-xs btn-info" data-toggle="modal" data-target="#edit-book-modal">')
				.text('Edit')
				.on('click', function(){
					var bookId = $(this).parent().parent().attr('book-id');
					$('#inputEditBookId').text(bookId);
				});

		var removeButton = 
			$('<button class="btn btn-remove btn-xs btn-danger">')
				.text('Remove')
				.on('click', removeBook);

		var bookTitle = $('#inputBookTitle').val();
		var bookAuthor = $('#inputBookAuthor').val();
		var bookISBN = $('#inputBookISBN').val();
		var data = {
			"author": bookAuthor,
			"title": bookTitle,
			"isbn": bookISBN
		};

		service.postBook(data, function(data){
			$('.books tbody')
				.append(
					$('<tr>')
						.attr('book-Id', data.objectId)
						.append($('<td>').text(counter))
						.append($('<td>').text(bookAuthor))
						.append($('<td>').text(bookTitle))
						.append($('<td>').text(bookISBN))
						.append($('<td>').append(editButton).append(removeButton))
				);
			counter++;
		}, error);
	}

	function editBook(){
		var bookTitle = $('#inputEditBookTitle').val();
		var bookAuthor = $('#inputEditBookAuthor').val();
		var bookIsbn = $('#inputEditBookISBN').val();
		var data = {
			"author": bookAuthor,
			"title": bookTitle,
			"isbn": bookIsbn
		};
		var bookId = $('#inputEditBookId').text();

		service.putBook(bookId, data, function(){
			var thisBookQuery = 'tr[book-id="'+ bookId +'"]'; 
			var book = $(thisBookQuery);
			book.find('td:nth-child(2)').text(bookAuthor);
			book.find('td:nth-child(3)').text(bookTitle);
			book.find('td:nth-child(4)').text(bookIsbn);
		}, error)
	}

	function removeBook(){
		var bookId = $(this).parent().parent().attr('book-Id');
		var _this = this;
		service.deleteBook(bookId, function(){
			$(_this).parent().parent().remove();
		}, error)
	}

	function error(){
		alert('Problemm :D');
	}
*/
}());