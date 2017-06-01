This is an addon starter template for the [Ionic Framework](https://ionicframework.com/).

## How to use this template

*This template does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

### With the Ionic tool:

Take the name after `ionic-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ npm install -g ionic cordova
$ ionic start myApp blank --type ionic1
```

Then, to run it, cd into `myApp` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova build ios
$ ionic cordova emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.

## Demo
https://plnkr.co/edit/tpl:IUU30p?p=preview

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](https://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](https://ionicframework.com/contribute/#issues) to the main Ionic repository. On the other hand, pull requests are welcome here!
