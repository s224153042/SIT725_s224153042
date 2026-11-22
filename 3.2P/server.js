const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const lollies = [
  { title: 'Jelly Beans', image: 'images/jelly-beans.jpg', link: 'Explore jelly beans', desciption: 'A mix fruity jelly beans, perfect for sharing or enjoying a handful yourself.' },
  { title: 'Strawberries & Cream', image: 'images/strawberries-and-cream.jpg', link: 'Explore strawberries & cream', desciption: 'A classic mix of sweet strawberry and creamy vanilla flavours, perfect for your lolly bag.' },
  { title: 'Jelly Snakes', image: 'images/snakes.jpg', link: 'Explore jelly snakes', desciption: 'Soft, chewyy jelly snakes in a mix of fruity flavours - a classic Australian favourite.' }
];

app.get('/api/lollies', (req, res) => {
  res.json({ statusCode: 200, data: lollies, message: 'Success' });
});

const port = process.env.PORT || process.env.port || 3000;
if (require.main === module) {
  app.listen(port, () => console.log('Oz Lolly Shop is listening on http://localhost:' + port));
}
module.exports = app;

