# web-components-example

This is an example app


## Installation

### Option 1: with local npm

This app is preconfigured to use a local NPM repsository to hold the built version of this app for [web-components-example-npm-consumer](https://github.com/bmomberger-bitovi/web-components-example-npm-consumer) to consume at build time.

1. build and install a verdaccio container.  The repository maintainers recommend using the Docker container: [https://verdaccio.org/docs/installation#docker-image](https://verdaccio.org/docs/installation#docker-image).
2. `npm publish` the current release to the container.

### Option 2: without publishing to local npm

1. delete .npmrc
2. delete package-lock.json
3. `npm install`

From this point the application should still be usable by [web-components-consumer](https://github.com/bmomberger-bitovi/web-components-consumer) once it has started up, but [web-components-example-npm-consumer](https://github.com/bmomberger-bitovi/web-components-example-npm-consumer) will need some file linking to work correctly.

## Usage

### Starting up

`npm run dev` to start serving both the example web app and the web components

### Rebuilding web components and dist files

`npm run build:wc` to rebuild the contents of the `public/` folder, both the web components and the bare Javascript React components.

### CORS for serving web component scripts

The file `next.config.js` has a configuration to allow cross-domain script loading from this app from two categories:
1. localhost on ports 3000-3009;
2. any subdomain of ngrok-free.app.  To use this subdomain, create a free account with [ngrok](https://ngrok.com/) and start a tunnel locally with the command line tools.

Edit the `value:` line of `next.config.js` to add more domains as needed.  It's just a large regex.

# Web Components / Events API

## Event registry note
All events listened to by this application's Web components will set up listeners on the document, and assume that events will be dispatched by the document or dispatched by a descendant element with `bubbles: true`.  If event listeners are not firing, please ensure that the event is either dispatched at the document level or bubbling from below, and `stopPropagation` is not happening before reaching the document level.

## &lt;bread-crumbs/&gt;
the `<bread-crumbs />` custom element is a tracker of the path elements of a URL.  It may be configured to only respond to a certain subset of the path.

### Initial properties
These properties may be set at the web component's initial render time in lieu of waiting for the component to render and firing an event to set initial state.

#### route-root 
string, optional, defaults to "/".  Bread crumbs will only display if the route root is a prefix of the current route (as defined by the initial-route property or the `url` detail property of a `routechange` event). 
#### initial-route
string, required.  This represents the full route path or the portion that the bread-crumbs application should be aware of.
#### tokens
JSON string, optional. When parsed, the tokens should form an object with the shape:
```js
{
  $title: "a title for the breadcrumb"
  aSubRouteName: { $title: "...", aSubSubRouteName: { /* and so on */ } },
  anotherSubRouteName: { $title: "..." }
}
```

### Events listened
#### routechange
To direct the bread-crumbs component to update its shown breadcrumbs, emit "routechange" 
##### Detail
- url (string) \[required\] the new route path or fragment of the route path that the bread-crumbs component should be aware of
 

## &lt;nav-links/&gt;
the `<nav-links />` custom element is a set of top-level navigation links that might appear in a header or footer.  If the route to be navigated by a link matches the current route, the link is highlighted.

### Initial properties
These properties may be set at the web component's initial render time in lieu of waiting for the component to render and firing an event to set initial state.

#### route-root 
string, optional, defaults to "/".  Nav-links will only consider a matching route "current" and highlight a link if the route root is a prefix of the current route (as defined by the initial-route property or the `url` detail property of a `routechange` event). 
#### initial-route
string, required.  This represents the full route path or the portion that the nav-links application should be aware of.

### Events generated

#### routerequest
The `routerequest` event represents the nav links component's intent to update the host application's route.
##### Detail
- href (string) the intended full route path to navigate to
##### Other properties
- originalEvent (React Event) the user event that triggered this request, for analytics or accessibility concerns.

#### prefetchrequest
The `prefetchrequest` event represents the nav links component's intent to notify the host application that a route may soon be navigated to, and any resources for the route that can be prefetched should be prefetched.
##### Detail
- href (string) the full route path that may be navigated to
ascending or descending.
##### Other properties
- originalEvent (React Event) the user event that triggered this request, for analytics or accessibility concerns.

### Events listened

#### routechange
To direct the nav-links component to update its higlighted current route link, emit "routechange" 
##### Detail
- url (string) \[required\] the new route path or fragment of the route path that the nav-links component should be aware of
 