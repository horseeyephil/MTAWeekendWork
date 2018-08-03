# MTA Planned Work Theme Card Template

A React component in the form of a designed card! The text can be filled out by passing a 'template' object to props. The prop 'flyerWidth' takes a Number that will set the scale of the component in your flow. The inline 'Route Bubble' designs can be added directly into text by injecting a string pattern that is identified by regex.

![alt text](MTACard.png)

#### Props
``` 
template - object
flyerWidth - number(of px)
```

#### The following keys of the template object will set the text:

```
  topHeader: 'A string'
  subDate: ['An Array of up to two strings'] 
  routeBubbles: ['An Array of up to two strings']
  colorSpecs: ['An Optional Array of up to two named color strings or hex values']
  capsHeader: 'A string'
  infoHeader: ['An Array of many strings']
  bulletin: ['An Array of many strings']

```

#### To create route bubble letter:
Route bubbles are identified by ```${bubble@ }``` enclosing brackets. Within them should go specifications for 1.a character 2. a string for color (named or hex) 3. an optional href for a link. They are split by ```>``` characters.
The result in action looks like this:
```${bubble@G>#4286f4>http://google.com}```
This will produce a blue colored route bubble that says G and links to google.com when clicked.


To Demo:

```
npm i
npm run docs
```