# Working with SASS variables

This project uses SASS for creating the stylesheets. Here are some common files used in whole project:

## _colors.scss

Contains colors-variables. **You should avoid** using color values on yous stylesheets instead of import these variables. Use the following command

### `@import "../<path>/styles/colors";`

at the top of your <Component>.module.scss to import color variables.

## _fonts.scss

Contains fonts-variables. To add new font-family use SASS style of declaration fonts. Also you can use

### `@import "../<path>/styles/fonts";`

at the top of your <Component>.module.scss to use some font variables.

## _icons.scss

Contains icons. **Avoid** adding plain SVG to use it as an icon. Instead follow this instructions:

To add any svg icon to the project
insert *.svg file to the "/src/assets/svg" directory
and then push it's name (without .svg) to the array $items
you see below. Please add names in asc-order (abc).

To insert an icon on a page, simply add any element and give it a class of "icon-{icon-name}", for example
<i className="icon-arrow-down" />

Classes like "icon-*" are available in the whole project without the need to import.

To change the size or fill color, use additional classes.

## _variables.scss

Contains common variables like font sizes, paddings and margins, and other. Use 

### `@import "../<path>/styles/variables";`

at the top of your <Component>.module.scss to import these variables.