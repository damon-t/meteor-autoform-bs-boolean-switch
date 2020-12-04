AutoForm.addInputType('bs-boolean-switch', {
    template: 'afBsBooleanSwitch',
    valueOut: function () {
      console.log("bs-switch", this);
      return !!this.is(':checked')
    },
    contextAdjust: function (context) {
        console.log("context", context);
      if (context.value === true) {
        context.atts.checked = ''
      }
      // don't add required attribute to checkboxes because some browsers assume that to mean that it must be checked, which is not what we mean by "required"
      delete context.atts.required
      return context
    }
  })
  