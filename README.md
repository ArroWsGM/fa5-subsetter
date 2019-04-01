# Webpack tree shaking for Font Awesome 5
## For those who not familiar with modern frontend development and getting tired to wait for subsetter from FA team
### Beginners guide
First of all - install node for your platform from [here](https://nodejs.org/en/)

Then, if you have git installed, create a directory for this project, open it in the console/terminal and type
```
git clone https://github.com/ArroWsGM/Font-Awesome-5-Webpack-tree-shaking.git
```
or just download the archive, unzip and open project directory in the console.

Type in the console
```
npm i
```
and wait until node downloads all dependencies.

Open ``src/font-awesome-5-custom-bundle.js`` in your favorite text editor and add/replace/delete icons:
* icons distributed around 6 packages: ``@fortawesome/free-brands-svg-icons``, ``@fortawesome/free-regular-svg-icons``, ``@fortawesome/free-solid-svg-icons``, ``@fortawesome/pro-solid-svg-icons``, ``@fortawesome/pro-regular-svg-icons``, ``@fortawesome/pro-light-svg-icons``
* to install package, type (for example, for brands icons pack)
```
npm i -D @fortawesome/free-brands-svg-icons
```
* to remove package, type (for brands icons pack)
```
npm un @fortawesome/free-brands-svg-icons
```
* you can install all packages, it does not have any impact to final build size
* to install a pro package you need to do some tweaks, as described [here](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers) in ``Installing the Pro version of Font Awesome`` section
* pro packages include all icons from corresponding free package, you don't need to include them both.
* brands have no pro version, as same as light have no free package
* all icons have a camel-cased names (for example: faGooglePlay for fa-google-play html class)
* if you have a doubt about icon name spelling, take a look inside ``node_modules/@fortawesome`` folder, pick a folder with corresponding package name (but this is not necessarily, icons have the same names through regular, solid and light packages, but some of those icons may not exist in the free packages)
* to add an icon in a final bundle, you need to add its name into corresponding import statement, if an icon is from regular, solid or light packages, you also need to add an icon alias, for resolving it in the next step
* next, add icon names or their aliases into library import statement, for example:
    * import facebook icon:
        ```
        import {
            faFacebook,
        } from '@fortawesome/free-brands-svg-icons'
        
        library.add(
            faFacebook,
        )
        ```
    * add calendar regular icon:
        ```
        import {
            faFacebook,
        } from '@fortawesome/free-brands-svg-icons'
        
        import {
            faCalendar as         faCalendarRegular,
        } from '@fortawesome/free-regular-svg-icons'
        
        library.add(
            faFacebook,
            faCalendarRegular,
        )
        ```
    * add calendar solid icon:
        ```
        import {
            faFacebook,
        } from '@fortawesome/free-brands-svg-icons'
        
        import {
            faCalendar as         faCalendarRegular,
        } from '@fortawesome/free-regular-svg-icons'
        
        import {
            faCalendar as         faCalendarSolid,
        } from '@fortawesome/free-solid-svg-icons'
        
        library.add(
            faFacebook,
            faCalendarRegular,
            faCalendarSolid,
        )
        ```
    * add instagram icon:
        ```
        import {
            faFacebook,
            faInstagram,
        } from '@fortawesome/free-brands-svg-icons'
        
        import {
            faCalendar as         faCalendarRegular,
        } from '@fortawesome/free-regular-svg-icons'
        
        import {
            faCalendar as         faCalendarSolid,
        } from '@fortawesome/free-solid-svg-icons'
        
        library.add(
            faFacebook,
            faInstagram,
            faCalendarRegular,
            faCalendarSolid,
        )
        ```
After adding all desired icons, save the file, and, finally, you need to build your bundle:
```
npm run build
```
then grab your three-shaked Font Awesome build from dist directory

This package already contains dist bundle with some frequently used icons