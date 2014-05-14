Calendar
====================================

__A date and time picker for the Foundation CSS framework.__

## Change Log

- 5/14/2014 -> Added Dependency management via Bower. Added concatination and minification of js and css via grunt.
- 3/5/2014 -> Added event triggers to the date and time picker, added a fixed display state for the calendar and updated the index.html docs.
- 2/13/2014 -> Fixed an issue with FF/Safari dates not parsing correctly.  (Thank you Date.js)
- 2/6/2014 -> Added a UTC offset calculation option that calculates the display time with an offset from UTC, and then stores the selected values as the properly calculated UTC time.

##License

The MIT License (MIT)

Copyright (c) 2014 John "Jocko" S. MacGregor Jr.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

##Introduction

Noting that the Foundation CSS Framework was lacking in the world of date and time picking, this project is an attempt to make the date and time picking process smoother and more considerate of the needs of both the user and the backend data handling system.

Having used the Date/Time picker for other frameworks, and noting that Foundation really only had one option that seemed functional, I decided to create one from the ground up. 

The most popular option out there has one issue that was always difficult to get over: __the input field was used as the display field__.  

This causes an issue because the user will want to see a more friendly, human readable date format (e.g. January 1, 1970 @ 2:00 pm), while the system managing the data will do better handling the date in a more easily parsed format (e.g. 1970-01-01 14:00:00).

Which is exactly why I created Calendar, for the Foundation CSS framework.

## Requirements

There are several requirements you will need to make the Calendar work.  Here's the list:
- __Node.js & NPM__ -- If you don't have it already, you will need Node.js for this project.
- __Bower__ -- Front-end Javascript Library Dependency Utility
- __Foundation__ -- Core Foundation Library (Version 5)
- __Foundation Icon Fonts 3__ -- Icon set from Foundation.
- __jQuery__ -- Javascript utility class.
- __date-helpers.js__ -- This is my own Date modification and manipulation helpers, John "Jocko" S. MacGregor Jr.
- __string-helpers.js__ -- This is my own String modification and manipulation helpers, by John "Jocko" S. MacGregor Jr.

## Installation

By running the install script for npm, bower depencies will be downloaded and release files will be created.
```
npm install
```

The index.html file in the repository gives a full description of how to install and use the plugin.  Read the &lt;head&gt; section of the html to see the file requirements, and view the file to read about how to implement the plugin.

## Customization

If you want to customize the styles of the UI, you can do it directly through the foundation_calendar.css file, or you can add the _calendar.scss file to your Foundation SCSS components directory.  

If you're using SCSS, don't forget to make sure your foundation.scss file imports the _calendar.scss file appropriately. Have fun!!!
