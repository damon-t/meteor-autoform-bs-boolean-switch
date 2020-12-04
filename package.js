Package.describe({
    name: 'odem:autoform-bs-boolean-switch',
    summary: 'A Bootstrap button switch for AutoForm input types',
    version: '1.0.0',
    // git: 'https://github.com/aldeed/meteor-autoform-bs-button-group-input.git'
  });
  
  Package.onUse(function(api) {
    api.use('templating@1.0.0');
    api.use('blaze@2.0.0');
    api.use('aldeed:autoform@7.0.0');
    api.addFiles([
      'bs-boolean-switch.html',
      'bs-boolean-switch.js',
    ], 'client');
  });