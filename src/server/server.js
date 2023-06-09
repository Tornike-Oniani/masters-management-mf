import { createServer, Model } from 'miragejs';

createServer({
  models: {
    organization: Model,
  },

  seeds(server) {
    server.create('organization', {
      name: 'Arts',
      roles: 4,
      applications: 2,
      users: 30,
    });
    server.create('organization', {
      name: 'Classics',
      roles: 5,
      applications: 1,
      users: 35,
    });
    server.create('organization', {
      name: 'Commerce',
      roles: 7,
      applications: 4,
      users: 30,
    });
    server.create('organization', {
      name: 'Economics',
      roles: 10,
      applications: 5,
      users: 55,
    });
    server.create('organization', {
      name: 'Engineering',
      roles: 7,
      applications: 3,
      users: 33,
    });
    server.create('organization', {
      name: 'Law',
      roles: 8,
      applications: 5,
      users: 55,
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/organization', (schema, request) => {
      return schema.organizations.all();
    });

    this.get('/organization/:id', (schema, request) => {
      let id = request.params.id;

      return schema.organizations.find(id);
    });

    this.post('/organization', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.organizations.create(attrs);
    });

    this.patch('/organization/:id', (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let movie = schema.organizations.find(id);

      return movie.update(newAttrs);
    });

    this.delete('/organization/:id', (schema, request) => {
      let id = request.params.id;

      return schema.organizations.find(id).destroy();
    });
  },
});
