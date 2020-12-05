odem:autoform-bs-button-group-input
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/Meteor-Community-Packages/meteor-autoform). Provides a single custom input type "bs-boolean-switch".


## Installation

In a Meteor app directory, enter:

```bash
$ meteor add odem:autoform-bs-button-switch
```

## Usage

Specify "bs-boolean-switch" for the `type` attribute of any input.

```js
{{> afQuickField name="plans" type="bs-select-switch"}}
```

or

```js
plans: {
    type: Boolean,
    autoform: {
        afFieldInput: {
            type: "bs-boolean-switch",
        }
    }
}
```

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.