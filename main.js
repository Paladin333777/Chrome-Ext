const content = $("#contents")
let contentParent = content.parent()

let $message = $('<div>')
$message.text('Stop Watching Videos.')
$message.addClass('textStyle')

contentParent.prepend($message)
contentParent.prepend('<img src="https://images.squarespace-cdn.com/content/v1/5feb6d2cab06677bba637eba/1678905323964-FSN7YA7WOQFDF57T7IQ2/LAM+images+%284%29.jpg" />')

$message.click(function() {
    alert('A message was clicked!');
  });

content.remove()
