$(document).ready(function() {
	$('#expression').on('blur', function(e) {
		expression = $(this).text();

		setTimeout(function() {
			$.post('/convertexpression', {exp: expression}, function(data) {
				$('#response').empty();
				$('#response').text(data);
			});
		}, 2000);
	});
});