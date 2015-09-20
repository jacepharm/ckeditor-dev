CKEDITOR.plugins.add( '_variables', {
	icons: 'variables',
    init: function( editor ) {
        editor.addCommand( 'showVarDialog', new CKEDITOR.dialogCommand( 'variablesDialog' ) );
        editor.ui.addButton( 'Variables', {
            label: 'Variables',
            command: 'showVarDialog',
			toolbar: 'jacepharm'
        });

		var variables = [
			{
				label: 'Buyer Name',
				code: '[[buyer-name]]',
				description: 'The buyer\'s full name.'
			},
			{
				label: 'First Name',
				code: '[[first-name]]',
				description: 'The buyer\'s first name.'
			},
			{
				label: 'Product Name',
				code: '[[product-name]]',
				description: 'The name of the item that the customer bought.'
			},
			{
				label: 'Order ID',
				code: '[[order-id]]',
				description: 'The Customer order ID.'
			},
			{
				label: 'ASIN',
				code: '[[asin]]',
				description: 'The Amazon ASIN for the product.'
			},
			{
				label: 'Product Link',
				code: '[[product-link]]',
				description: 'Link the product\'s page on Amazon.<br/>The link text will contain the product name.'
			},
			{
				label: 'Coupon Code',
				code: '[[coupon-code]]',
				description: 'The coupon code from the uploaded coupon code file.'
			}
		];

		CKEDITOR.dialog.add( 'variablesDialog', function( editor ) {
			var elements = [];
			for (var i = 0; i < variables.length; i++) {
				var variable = variables[i];
				elements.push({
					type: 'hbox',
					widths: [ '25%', '75%' ],
					children: [
						{
							type: 'button',
							label: variable.label,
							title: variable.label,
							variableCode: variable.code,
							onClick: function (event) {
								editor.insertText(event.sender.variableCode);
								CKEDITOR.dialog.getCurrent().hide();
							}
						},
						{
							type: 'html',
							html: '<div>' + variable.description + '</div>'
						}
					]
				});
			}
			return {
				title: 'Insert Variables',
				minWidth: 500,
				minHeight: 200,
                contents: [
					{
						id: 'tab1',
						label: 'Label',
						title: 'Title',
						expand: true,
						padding: 0,
						elements: elements
					}
				],
				buttons: [ CKEDITOR.dialog.cancelButton ]
			};
		});

    }
});
