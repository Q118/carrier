// Make sure here that we wait to attach our handlers until the DOM is fully loaded.
$(() => {

    // todo: add logic to click on the row to edit the carriers info
    $('.edit-button').click(function (e) {
        e.preventDefault();
        // const id = $(this).data("id");
        // const newEat = $(this).data("neweat");
        // const newEatState = { value: newEat };
        // // Send the PUT request.
        // $.ajax(`/api/carriers/${id}/devoured`, {
        //     type: "PUT",
        //     // Convert object to JSON
        //     data: JSON.stringify(newEatState),
        //     // Tell the server that this request contains JSON
        //     contentType: "application/json; charset=UTF-8",
        // }).then(() => {
        //     // Reload the page to get the updated list
        //     location.reload();
        // });

        // log to console the id of the item that was clicked
        console.log("You clicked on: " + $(this).data("id"));
    });


    // event listener for the form-select to listen once a new selection is made
    $(".form-select").on("change", function (event) {
        const formSelectValue = $(this).val();
        console.log(formSelectValue); //debug
        // remove  the hidden class from  the input
        $(".value-input").removeClass("hidden");

    })


    $(".devour-button").on("click", function () {
        const id = $(this).data("id");
        const newEat = $(this).data("neweat");
        const newEatState = { value: newEat };
        // Send the PUT request.
        $.ajax(`/api/carriers/${id}/devoured`, {
            type: "PUT",
            // Convert object to JSON
            data: JSON.stringify(newEatState),
            // Tell the server that this request contains JSON
            contentType: "application/json; charset=UTF-8",
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });



    $(".submit-new").on("click", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newCarrier = {
            carrier_name: $("#name-add").val().trim(),
            carrier_address: $("#address-add").val().trim(),
            address_2: $("#address2-add").val().trim(),
            city: $("#city-add").val().trim(),
            state_code: $("#state-add").val().trim(),
            zip: $("#zip-add").val().trim(),
            contact: $("#contact-add").val().trim(),
            phone: $("#phone-add").val().trim(),
            fax: $("#fax-add").val().trim(),
            email: $("#email-add").val().trim(),
        };
        // console.log(newCarrier); //degbug
        // Send the POST request.
        $.ajax("/api/carriers", {
            type: "POST",
            data: newCarrier,
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".delete-roll").on("click", function () {
        const id = $(this).data("id");

        // Send the DELETE request.
        $.ajax(`/api/carriers/${id}`, {
            type: "DELETE",
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });
});
