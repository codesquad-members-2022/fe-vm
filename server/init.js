import jsonServer from 'json-server';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');

server.use(jsonServer.bodyParser);
server.use(middlewares);

const update = (db, collection, data) => {
  const table = db.get(collection);
  table
    .find(elem => elem.id === Number(data.id))
    .assign(data)
    .write();
};

const get = (db, collection, id) => {
  return db
    .get(collection)
    .find(elem => elem.id === Number(id))
    .value();
};

server.patch('/wallet', (req, res) => {
  const db = router.db;
  const body = [];
  if (Array.isArray(req.body)) {
    req.body.forEach(element => {
      update(db, 'wallet', element);
      body.push(get(db, 'wallet', element.id));
    });
  }
  res.send(body);
});

server.use(router);

export default server;
