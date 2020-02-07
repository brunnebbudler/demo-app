$(document).ready(function() {
    var displayResources = $(".js-dropdown");
    

    $.ajax({
      type: "GET",
      url: "https://api.myjson.com/bins/tjkpf", // Using our resources.json file to serve results
      success: function(result) {
        console.log(result);
        var output = "<option></option>";
        for (var i in result) {
          output +=
            "<option value='" +
            result[i].SkuID +
            "' data-Name='" +
            result[i].Name +
            "' data-Description='" +
            result[i].Description +
            "' data-Price='" +
            result[i].Price +
            "' data-SalePrice='" +
            result[i].SalePrice +
            "' data-Image='" +
            result[i].Image +
            "' data-Link='" +
            result[i].Link +
            "'>" +
            result[i].SkuID +
            " - " +
            result[i].Name +
            "</option>";
        }

        displayResources.html(output);
      }
    });


    $('.js-example-basic-single').select2({
      placeholder: 'Select an option',
      width: '100%'
    });

	$("#sku").change(function() {

    // jQuery
    var selectedItem = $(this).find(':selected');
    var selectedVal = selectedItem.val();
    var selectedText = selectedItem.text();

    var dataName = selectedItem.attr("data-Name");
    var dataDescription = selectedItem.attr("data-Description");
    var dataPrice = selectedItem.attr("data-Price");
    var dataSalePrice = selectedItem.attr("data-SalePrice");
    var dataImage = selectedItem.attr("data-Image");
    var dataLink = selectedItem.attr("data-Link");

	    console.log(selectedVal);
	    console.log(selectedText);
	    
	    console.log(dataName);
	    console.log(dataDescription);
	    console.log(dataPrice);
	    console.log(dataSalePrice);
	    console.log(dataImage);
	    console.log(dataLink);

});

});
