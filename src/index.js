import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);
  Routes.forEach((r) => {
    r.queryParams = req.query;
  });

  const promises = matchRoutes(Routes, req.path)
    .map(({ route, match }) => (route.loadData ? route.loadData(store, match) : null))
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) return res.redirect(301, context.url);
    if (context.notFound) res.status(404);

    res.send(content);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listen on 3000`);
});
