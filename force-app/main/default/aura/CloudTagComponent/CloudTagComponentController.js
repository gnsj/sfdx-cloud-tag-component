({
    setupData : function(component, event, helper) {
        // set the data
        var data = [
            {"x": "Mandarin chinese", "value": 1090000000},
            {"x": "English", "value": 983000000},
            {"x": "Hindustani", "value": 544000000},
            {"x": "Spanish", "value": 527000000},
            {"x": "Arabic", "value": 422000000},
            {"x": "Malay", "value": 281000000},
            {"x": "Russian", "value": 267000000},
            {"x": "Bengali", "value": 261000000},
            {"x": "Portuguese", "value": 229000000},
            {"x": "French", "value": 229000000},
            {"x": "Hausa", "value": 150000000},
            {"x": "Punjabi", "value": 148000000},
            {"x": "Japanese", "value": 129000000},
            {"x": "German", "value": 129000000},
            {"x": "Persian", "value": 121000000}
          ];

        // create a tag (word) cloud chart
        var chart = anychart.tagCloud(data);
         // set a chart title
        chart.title('Cloud Word');
        // set an array of angles at which the words will be laid out
        chart.angles([0]);
        // enable a color range
        chart.colorRange(true);
        // set the color range length
        chart.colorRange().length('80%');
        
        // display the word cloud chart
        chart.container("container");
        chart.draw();
    },
    
    doInit : function (component, event, helper) {}
})