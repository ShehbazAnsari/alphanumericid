# What is this?

Generate unique alphanumericid for your projects.

# Installation 

`npm i alphanumericidy --save`

Then...

```
const {alphanumericid} = require('alphanumericidy')
or
import { alphanumericid } from 'alphanumericidy';

//For shortid

alphanumericid({
  shortid:true
});


//For longid

alphanumericid({
  longid:true
});

//Or You can Just pass a number

alphanumericid(7);


```

## Options

* *shortid* - _boolean_ (Defaults to false)
* *longid* - _boolean_ (Defaults to false)

## Length

* *shortid* - _5_ 
* *longid* - _10_ 



