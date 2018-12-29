const Quote = sequelize.define('quote', {
  body: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
Quote.sync({force: true}).then(() => {
  // Table created
  return Quote.create({
    body: 'Much of spiritual life is self-acceptance, maybe all of it.',
    author: 'Jack Kornfield'
  });
});