# Random Color Generator

Generate a random Color based on user input if wished:

- Without an specific user input, the color generated should be random.

        node index.js (in terminal)

When the command is entered in the command line, a block of approximately 31x9 # characters with a random color (hex code #ff0000) in the center should be generated.

- If the user chooses a specific color, show the selected color.

also the request for a:

        hue (e.g. green or red or blue) 
        luminosity (e.g. light or dark) 
        
...and then generate random colors that match those choices.

should be provided.

---------------------------------------------------------

Stretch goals:

 [x] If a user types "ask" instead of a color name, print questions to ask the user for the name of the color and the luminosity.

 [x] If a user types a size in the format of WWxHH (eg. 31x9) before the color and luminosity, it will use this as the size of the box.