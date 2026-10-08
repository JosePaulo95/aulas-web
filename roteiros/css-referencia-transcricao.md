# Transcrição (legenda automática EN) — youtube Z4pCqK-V_Wo

[00:00] this is css in just five minutes i'll
[00:03] explain css how i understand it
[00:05] and the parts of it that i use the most
[00:06] as a full stack developer
[00:08] you can write css directly in html like
[00:10] this or
[00:11] this but it's best to use a css file
[00:15] css just has two easy pieces selectors
[00:17] and attributes
[00:18] selectors say hey search my html for
[00:21] elements that match
[00:22] this you can select by element like h1
[00:26] classes with a dot an id with a hash
[00:29] or chain multiple together chaining with
[00:31] a comma just means
[00:32] select this and this the space syntax
[00:35] means inside
[00:37] of the carrot selects one level deep
[00:39] that is headers just one level deep
[00:41] inside that class
[00:43] keeping your selectors as simple as
[00:44] possible like a single class name
[00:46] are the best case scenario once you've
[00:49] got things selected you need to add some
[00:50] attributes
[00:51] now attributes are the actual styles we
[00:53] apply and these styles get applied from
[00:55] the top to the bottom of your css file
[00:58] now it's not quite that simple because
[00:59] what if we have two conflicting styles
[01:01] well to resolve that there's something
[01:02] called specificity more specific
[01:05] selectors get priorities so it goes from
[01:07] id
[01:08] down to class down to broad elements
[01:10] when you chain selectors together
[01:12] it gets really complicated but you'll
[01:14] get a feel for this over time
[01:16] there are two really big categories
[01:17] color and layout and then a ton of
[01:19] different random properties
[01:20] two common things we set color on are
[01:22] backgrounds and text
[01:24] we use the background hyphen color and
[01:27] color keys
[01:28] respectively and then fill in attribute
[01:30] values like red
[01:31] cornflower blue or sky blue these color
[01:33] words are easy to read but limited so
[01:35] more often you'll use a hex code
[01:37] you can find colors you like around the
[01:39] internet and then get the hex with a
[01:40] color picker extension
[01:42] now for layout attributes which is all
[01:44] based on the box model
[01:46] everything is a box inside of a box each
[01:48] box is made up of content padding
[01:50] border and margin i'll set some values
[01:52] for these and then explain them
[01:54] we can see the box model over in chrome
[01:56] on any page which allows us to check the
[01:58] values and debug if things are being
[02:00] weird
[02:01] the blue part is content which we set in
[02:03] css as
[02:04] width and height width and height are
[02:06] best to set as percentages of the parent
[02:08] container
[02:09] otherwise everything gets messed up and
[02:12] can go out of bounds
[02:14] you can position things within this blue
[02:16] content box with
[02:17] text align center left or right the
[02:20] padding attribute can throw people off
[02:21] because
[02:22] you can write either one two or four
[02:23] values that's because you can set top
[02:26] right bottom and left individually
[02:28] or top and bottom left and right or all
[02:31] four sides
[02:32] if you're writing four remember by going
[02:33] clockwise first top then right bottom
[02:36] left you can also set aside individually
[02:38] like so
[02:39] margin top padding left you get it it's
[02:41] important to know that your element's
[02:42] background color
[02:43] will get applied to padding but not
[02:44] border margin we've set this padding
[02:46] with pixel values but you can also make
[02:47] it rem
[02:48] or rem rem is relative to the base font
[02:51] size so if you
[02:52] change the base font size it will change
[02:55] the spacing of
[02:56] everything this can be useful for
[02:58] responsive designs
[03:00] next up border which is the border
[03:01] between padding and margin and has a
[03:03] three part syntax
[03:04] size type and color 99 of the time
[03:07] you're just going to be using solid for
[03:08] the type
[03:09] and the color rules work the same as for
[03:10] other stuff finally margin which is on
[03:13] the outside of our box
[03:14] and works exactly the same as padding
[03:16] with the one to four value
[03:17] syntax our background color will not
[03:19] extend into the margin
[03:21] okay that's the box model next up the
[03:24] display property
[03:25] use inline for a continuous line and
[03:27] block to space things out
[03:29] or inline block if you still want the
[03:31] benefits of both being able to set the
[03:33] top and bottom
[03:34] padding but still have the same line
[03:38] display flex and grid deserve entire
[03:40] videos of their own
[03:42] you can specify an exact grid which is
[03:44] great for building
[03:45] based on a design or ux wireframe for
[03:48] general purpose and spacing as you go
[03:50] display flex is amazing and it's my
[03:52] go-to
[03:53] it's easy to center horizontally and
[03:55] vertically with the align items and
[03:57] justify content
[03:58] properties you can put things in custom
[04:01] places too by setting position relative
[04:03] on the parent and absolute on the child
[04:05] then we set the top left bottom and
[04:06] right values which can also be
[04:08] percentages
[04:09] now back to selectors for a minute we
[04:11] also have pseudo classes which you can
[04:12] add with a colon
[04:14] most common is probably hover which
[04:15] works a bit like this
[04:17] a different set of styles for when your
[04:19] mouse is over the element and to make it
[04:21] a smooth transition we can add the
[04:22] transition property which takes the time
[04:24] and bezier curve
[04:25] value we can also make this button move
[04:28] on hover with the extremely cool
[04:30] transform property
[04:31] there are other pseudo classes that
[04:32] allow you to select an element kind of
[04:34] like we were doing with the space and
[04:35] carrot
[04:36] a couple examples are first child and
[04:38] child but again keep it simpler than
[04:40] this whenever you can
[04:41] we didn't cover font family or font size
[04:43] but these are pretty self-explanatory
[04:45] you'll always see more than one font for
[04:47] font family just in case the first one
[04:49] doesn't work
[04:49] we did cover background color but you
[04:51] can also set a ton more background
[04:52] properties like background image
[04:55] and you can use the shorthand background
[04:57] syntax to put these all in one line
[04:59] other cool attributes include shadows
[05:01] like box shadow and drop shadow and
[05:03] i usually use a box shadow or drop
[05:05] shadow generator for this
[05:06] you can play around with the options and
[05:08] then just copy the css here
[05:10] just google box shadow generator to find
[05:12] this by the way you'll notice these
[05:14] things called vendor prefixes
[05:15] in front of the box shadow property
[05:17] these are used for new or experimental
[05:19] attributes that get added to css
[05:21] at this point box shadow is not new at
[05:23] all though so it's just for backwards
[05:25] compatibility
[05:26] with older browsers my rule of thumb is
[05:28] to use them if they're included in the
[05:30] documentation for that attribute
[05:32] but otherwise just leave them out you
[05:34] can create animations with keyframe and
[05:35] the animation property and it's usually
[05:38] better to just google css animation
[05:41] and then whatever you want and you'll be
[05:43] able to find one pretty easily
[05:45] just like background animation has a
[05:47] short hand property too
[05:49] lastly we have media queries which allow
[05:51] us to style for mobile and different
[05:52] screen sizes
[05:54] these are triggered by break points
[05:55] which are kind of like if statements so
[05:57] if the width is wider than a certain
[06:00] amount of pixels
[06:00] then the style gets applied and you can
[06:03] use your browser developer tools to test
[06:05] this out
[06:06] okay what else is there with css well
[06:09] you have preprocessors the common one is
[06:11] scss or sas which gives you more syntax
[06:15] variables nested
[06:16] properties but it doesn't do anything
[06:18] normal css can't finally in frameworks
[06:20] like react you will see
[06:22] css in javascript which is also called
[06:25] a styled component pattern and the line
[06:27] between
[06:28] javascript css and html really gets
[06:30] blurred here
[06:31] don't worry too much about these styled
[06:33] components are very similar to regular
[06:34] css
[06:35] and get converted to css at compile time
[06:38] whether you're already a css pro or
[06:40] you're just an inspiring front-end
[06:42] developer
[06:42] i hope this was a helpful summary of css
[06:45] like if you learned something and if you
[06:47] want to become a remote software
[06:48] developer
[06:49] subscribe for more content like this
[08:15] you