# add-nedry

add-nedry lets you add a gif of [Nedry from Jurassic Park](https://www.youtube.com/watch?v=RfiQYRn7fBg) to your html page. There are two Nedrys you can add, the classicish one that is more like the one in the movie or the common one that is seen floating around online more.

![Alt text](nedry-common.gif?raw=true "Nedry Common")

## Getting Started

```
-- add the classicish nedry
$("#example-content-2").addNedry();

-- add the common nedry
$("#example-content-2").addNedry({gifStyle: "common"});
```
If you really want to you can pass in right and top as params
```
$("#example-content-2").addNedry({right:"50px",top:"50px"});
```

### Prerequisites

You need jQuery. 
Add nedry-add.js to your page and have one of the included gifs in the same dir (or update the js to have the new path).


