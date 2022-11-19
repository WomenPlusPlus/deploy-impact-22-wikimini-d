# Wikimini
 
Wikimini is an educational platform designed to involve children in the learning process. Discover information about your favorite topics, write articles.

# Deployment
## Mediawiki 
Install Mediawiki with SQLite
https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki
Files changed: LocalSetting.php,
Wikimini logo in assets folder,
in file $wiki/extensions/Scribunto/includes/engines/LuaStandalone/LuaStandaloneInterpreter.php line 133 $cmd = '"' . $cmd . '"'; is commented out

## WikiMini React Login
1) Through the command line goo to the easywiki-login folder in the medawiki directory.
2) Run npm start to load the application in the browser on localhost:3000.
 
# Skins used
Medik is a MediaWiki skin based on Bootstrap 4, originally created for WikiSkripta
https://www.mediawiki.org/wiki/Skin:Medik
Files changed: skin.mustache, MedikTemplate.php, screen.css, desctop.css, mobile.css
Added pictures to assests folder

# Extensions used
 
* The LinkCards extension adds two parser functions for the easy display of grids of clickable image-and-title 'cards'.
https://www.mediawiki.org/wiki/Extension:LinkCards
Files changed: link-kards.less
* The MsCatSelect extension adds a visual interface to the edit page that allows you to add a category to a page by selecting the category in a drop-down on the edit page and more
https://www.mediawiki.org/wiki/Extension:MsCatSelect
* TemplateStyles extension
https://www.mediawiki.org/wiki/Extension:TemplateStyles

# Templates used
 
* Clickable button template.
https://www.mediawiki.org/wiki/Template:Clickable_button_2
Files changed: 
In file $wiki/extensions/Scribunto/includes/engines/LuaStandalone/LuaStandaloneInterpreter.php line 133 $cmd = '"' . $cmd . '"'; is commented out
 
# Extesions suggested for the future implementation
 
* The Quiz extension is the quiz building tool adopted on the Wikiversity.
https://www.mediawiki.org/wiki/Extension:Quiz
* The SkinPerPage extension allows using different skins on different pages.
https://www.mediawiki.org/wiki/Extension:SkinPerPage
* WikiTextLoggedInOut extension adds two new parser hooks, <loggedin> and <loggedout>. The tags will show different text depending on the users' login state.
https://www.mediawiki.org/wiki/Extension:WikiTextLoggedInOut
* Page Forms allows you to have forms for creating and editing pages on your wiki, as well as for querying data, all without any programming. Forms can be created and edited not just by administrators, but by users themselves.
https://www.mediawiki.org/wiki/Extension:Page_Forms
 

