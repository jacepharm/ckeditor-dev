/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/* exported CKBUILDER_CONFIG */

var CKBUILDER_CONFIG = {
	skin: 'moono',
	preset: 'standard',
	ignore: [
		'bender.js',
		'.bender',
		'bender-err.log',
		'bender-out.log',
		'dev',
		'docs',
		'.DS_Store',
		'.editorconfig',
		'.gitignore',
		'.gitattributes',
		'gruntfile.js',
		'.idea',
		'.jscsrc',
		'.jshintignore',
		'.jshintrc',
		'less',
		'.mailmap',
		'node_modules',
		'package.json',
		'README.md',
		'tests'
	],
	plugins: {
		_variables: 1,
		'a11yhelp' : 1,
		'about' : 1,
		'basicstyles' : 1,
		'blockquote' : 1,
		'clipboard' : 1,
		'contextmenu' : 1,
		'elementspath' : 1,
		'enterkey' : 1,
		'entities' : 1,
		'filebrowser' : 1,
		'floatingspace' : 1,
		'format' : 1,
		'horizontalrule' : 1,
		'htmlwriter' : 1,
		'image' : 1,
		'indentlist' : 1,
		'link' : 1,
		'list' : 1,
		'magicline' : 1,
		'maximize' : 1,
		'pastefromword' : 1,
		'pastetext' : 1,
		'removeformat' : 1,
		'resize' : 1,
		'showborders' : 1,
		'sourcearea' : 1,
		'specialchar' : 1,
		'stylescombo' : 1,
		'tab' : 1,
		'table' : 1,
		'tabletools' : 1,
		'toolbar' : 1,
		'undo' : 1,
		'wysiwygarea' : 1
	},
	languages: {
		en: 1
	}
};
