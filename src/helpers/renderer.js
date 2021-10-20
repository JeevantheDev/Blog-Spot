import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>,
  );

  const helmet = Helmet.renderStatic();

  return `
        <!DOCTYPE html>
        <html>
            <head>
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
              />
              <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                  integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
                  crossorigin="anonymous"
              />           
              <link
                  href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  rel="stylesheet"
              />
              <link rel="stylesheet" type="text/css" href="https://firebasestorage.googleapis.com/v0/b/blog-spot-e4923.appspot.com/o/css%2Findex.css?alt=media&token=afa3503f-05ea-49d1-a5b5-efd5d880552f" />
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                  window.INITIAL_STATE=${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </body>
        </html>
    `;
};
