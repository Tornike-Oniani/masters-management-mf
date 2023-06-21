import {
  createServer,
  RestSerializer,
  Model,
  belongsTo,
  hasMany,
} from 'miragejs';

createServer({
  serializers: { application: RestSerializer },
  models: {
    organization: Model,
    application: Model.extend({
      organization: belongsTo(),
    }),
    permission: Model.extend({
      application: belongsTo(),
    }),
  },

  seeds(server) {
    const artsOrg = server.create('organization', {
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

    const prtfApp = server.create('application', {
      name: 'Portfolio Manager',
      key: '4tx18BAvTqeqtxbLFsE3JoT8I1NIvBPy',
      permissions: 8,
      organization: artsOrg,
    });
    server.create('application', {
      name: 'Reference Browser',
      key: 'ViAB80v1KVSPmvyfEg857hesRst1IMHl',
      permissions: 0,
      organization: artsOrg,
    });

    server.create('permission', {
      name: 'Create result',
      value: 'result_create',
      application: prtfApp,
    });
    server.create('permission', {
      name: 'Read result',
      value: 'result_read',
      application: prtfApp,
    });
    server.create('permission', {
      name: 'Update result',
      value: 'result_update',
      application: prtfApp,
    });
    server.create('permission', {
      name: 'Delete result',
      value: 'result_delete',
      application: prtfApp,
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/organization');
    this.get('/organization/:id');
    this.post('/organization');
    this.patch('/organization/:id');
    this.get('/organization/:id/application', (schema, request) => {
      const organizationId = request.params.id;
      return schema.applications.where({ organizationId });
    });
    this.get('/application/:id');
    this.post('/organization/:id/application/', (schema, request) => {
      const attr = JSON.parse(request.requestBody);
      const organizationId = request.params.id;
      attr.organizationId = organizationId;
      attr.permissions - 0;
      return schema.applications.create(attr);
    });
    this.patch('/application/:id', (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let application = schema.applications.find(id);
      return application.update(newAttrs);
    });
    this.get('/application/:id/permission', (schema, request) => {
      const appId = request.params.id;
      return schema.permissions.where({ applicationId: appId });
    });
    this.post('/application/:id/permission', (schema, request) => {
      const appId = request.params.id;
      const attr = JSON.parse(request.requestBody);
      attr.applicationId = appId;
      return schema.permissions.create(attr);
    });
    this.patch('/permission/:id', (schema, request) => {
      const newAttrs = JSON.parse(request.requestBody);
      const id = request.params.id;
      const permission = schema.permissions.find(id);
      return permission.update(newAttrs);
    });

    // this.get('/organization', (schema, request) => {
    //   return schema.organizations.all();
    // });

    // this.get('/organization/:id', (schema, request) => {
    //   let id = request.params.id;

    //   return schema.organizations.find(id);
    // });

    // this.post('/organization', (schema, request) => {
    //   let attrs = JSON.parse(request.requestBody);

    //   return schema.organizations.create(attrs);
    // });

    // this.patch('/organization/:id', (schema, request) => {
    //   let newAttrs = JSON.parse(request.requestBody);
    //   let id = request.params.id;
    //   let movie = schema.organizations.find(id);

    //   return movie.update(newAttrs);
    // });

    // this.delete('/organization/:id', (schema, request) => {
    //   let id = request.params.id;

    //   return schema.organizations.find(id).destroy();
    // });
  },
});
