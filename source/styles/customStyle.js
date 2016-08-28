'strict mode';

var colors = require('material-ui/styles/colors'),
    colorManipulator = require('material-ui/utils/colorManipulator'),
    spacing = require('material-ui/styles/spacing');
    
module.exports = {
    spacing: spacing,
    fontFamily: 'Open Sans, sans-serif',
    palette: {
        primary1Color: colors.lightBlue900,
        primary2Color: colors.cyan700,
        primary3Color: colors.grey400,
        accent1Color: colors.pinkA200,
        accent2Color: colors.grey100,
        accent3Color: colors.grey500,
        textColor: colors.darkBlack,
        alternateTextColor: colors.white,
        canvasColor: colors.white,
        borderColor: colors.grey300,
        disabledColor: colorManipulator.fade(colors.darkBlack, 0.3),
        pickerHeaderColor: colors.cyan500,
        clockCircleColor: colorManipulator.fade(colors.darkBlack, 0.07),
        shadowColor: colors.fullBlack
    }
};