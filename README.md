# Stripperify
Browserify transformation that strips out an Array of strings from a stream.

## Why
I was trying to determine whether or not a certain piece of code was breaking a browserify build. Once I realized it was, I needed to remove it from the stream if certain conditions were met.

## How to use
I highly doubt you'll need to use this, as it's such a random scenario, but if you want to try:

    var Stripperify = require('stripperify')

    var strs = [
      'A string I want to strip from a stream',
      '   another line I want to remove'
    ]

    var stripperify = new Stripperify(strs)

    b.transform(stripperify.run)
