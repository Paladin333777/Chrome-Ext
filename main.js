const content = $("#contents")
let contentParent = content.parent()

function getRandomArbitrary(min, max) {
  let randomDec = Math.random()
  let randomNum = Math.floor(randomDec * (max - min) + min);
  return randomNum
}

let $message = $('<div>')
$message.text('Stop Watching Videos.')
$message.addClass('textStyle')

let $images = $('<img src="https://images.squarespace-cdn.com/content/v1/5feb6d2cab06677bba637eba/1678905323964-FSN7YA7WOQFDF57T7IQ2/LAM+images+%284%29.jpg" />')

contentParent.prepend($message)
contentParent.prepend($images)

$message.click(function() {
    alert('A message was clicked!');
  });

content.remove()

$.get('https://picsum.photos/list', function(result) {
  let ranNum = getRandomArbitrary(0, result.length)
  let image = result[ranNum]

  let curr = 'https://unsplash.it/1200/800?image=' + image.id
  return contentParent.prepend(`<img src="${curr}">`)
});
