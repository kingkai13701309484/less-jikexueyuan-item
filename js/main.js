require.config({
	// baseUrl:'js',
    paths: {
    	
        jquery: 'jquery-2.1.4'
    }
});

	require(["header"],function(header){
		header();
	});

	require(["nav"],function(nav){
		nav();
	});

	require(["banner"],function(banner){
		banner();
	});

	require(["article"],function(article){
		article();
	});

	require(["footer"],function(footer){
		footer();
	});