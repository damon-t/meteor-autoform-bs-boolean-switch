Package.describe({
    name: 'odem:autoform-bs-boolean-switch',
    summary: 'A Bootstrap button switch input types for AutoForm ',
    version: '1.0.1',
    git: 'https://github.com/damon-t/meteor-autoform-bs-boolean-switch'
  });
  
  Package.onUse(function(api) {
    api.use('templating@1.3.2');
    api.use('blaze@2.3.4');
    api.use('aldeed:autoform@7.0.0');
    api.addFiles([
      'bs-boolean-switch.html',
      'bs-boolean-switch.js',
    ], 'client');
  });