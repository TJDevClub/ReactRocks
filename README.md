# React Rocks!  
![Weather
Rock](https://bluesyemre.files.wordpress.com/2014/05/this-weather-rock-is-never-wrong.jpg)

# What!?

React is a view framework. This means you can use it with any backend that you
would like (in this example, I used the metaweather api). It was developed by
Facebook to make building web applications easier, and has since taken off. A
lot of plugins and additional functionality have been made available for
developers to use.

# That rocks! How do I get started?

In creating single page applications, there's a super handy dandy tool for you
to use, called `create-react-app`. You can get it by running:

``` 
$ npm install -g create-react-app 
```

Then, whenever you run 

``` 
$ create-react-app <name> 
```

in the terminal, it will create a new react app (wow, who would've thunk it?) in
the `<name>` directory with some filler content. It's super nice because it sets
up a lot of the background stuff for you, so you can focus on using React and
building your app.

Now you can start developing by `cd`'ing into the directory and running

```
$ npm start
```
to serve the app locally. It also automatically refreshes whenever you change
your code. Wow!

# Sweet. But how do I use React to build my awesome weather app?

If you were here for the [Vue.js
lecture](https://github.com/tjdevClub/roomwithavue), you will probably find a
lot of similarities between the two frameworks. First of all, React uses a lot
of ES6 in its usage, so all React components are just child classes of the
`Component` class of `react`.

Since they are classes, you can also make a constructor. However, unless you're
specifying states or other instance variables, you don't actually need the
constructor. Nifty!

The most important part of every `Component` is its `render()` function. The
render function renders what's essentially the HTML associated with that
component - it's what ties the Javascript representation of a component with the
HTML representation of the object.

### JSX: A quick interlude. <<important actually though
> 
> So when I say the render function returns the HTML, that's not entirely
> accurate. It doesn't actually return HTML. It actually returns what's known as
> JSX. It's "syntax extension to Javascript", according to the docs. Basically,
> that means it's a special thing that lets Javascript do special things (yeah,
> that's maybe oversimplifying a little bit). So it's neither HTML nor a string,
> yet in a lot of cases you can write it like HTML and pass it into functions or
> assign variables to it like a string. Fancy, right? Right.
> 
> This also means that you can add other React components into the JSX. Fancy.

Okay cool. So now a little bit about

# States and Javascript Stuff

## States (not of the fifty nifty variety)
React mainly manages data using states (defined in the constructor with
`this.state`). When you update a state, the DOM also reacts to that state change
(wow it's like it's so important they named the thing after it). You update the
state by calling `this.setState({key: value})`.

## Event Handling and Parental Duties
As with all view frameworks, there needs to be a good way of handling events, as
well as passing data from parent to and from the child.

Much like Vue.js, you can pass in data from the parent to the child by adding
HTML attributes and using `this.props` to access those attributes in the child
component.

Also like Vue.js, you can handle events and pass events and data to the parent
by having a handler property.

## Warnings
When you're adding methods to a component class, often times you need to
`bind(this)` so that the `this` refers to the component class, and not some
other thing Javascript sets this too ( [`this` is often very
confusing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this))

It's also best practice to make the state immutable, so instead of operating on
preexisting state variables, make copies, operate on those, and then push those
to the state. You can read more about why that's a good idea
[here](https://facebook.github.io/react/tutorial/tutorial.html#why-immutability-is-important)

# Parting Words
As always, the best way to learn a framework is to use it. Look through the demo
app, and then make your own web application. React is extremely robust, and used
in many production situations, so definitely try to use it in one of your
projects.

# Additional Readings:
- [The Docs (of course)](https://facebook.github.io/react/docs/hello-world.html)
- [awesome-react](https://github.com/enaqx/awesome-react#react) for a list of
awesome react resources
