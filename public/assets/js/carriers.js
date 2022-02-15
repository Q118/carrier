$(() => {
    let carrierChange;
    let changeId;
    $(".edit-button").click(function (e) {
        e.preventDefault();
        carrierChange = $(this).data('id');
        changeId = $(this).data('identifier');
        console.log("You clicked on: " + carrierChange + " " + changeId); //debug
    });

    let formSelectValue;
    // event listener for the form-select to listen once a new selection is made
    $(".form-select").on("change", function () {
        formSelectValue = $(this).val();
        $(".value-input").removeClass("hidden");
    })


    $(".submit-update").click(function (e) {
        e.preventDefault();
        console.log(formSelectValue);
        let value = $(".value-input").val();
        const newEatState = {
            carrier: carrierChange,
            attribute: formSelectValue,
            value: value
        };
        $.ajax(`/api/carriers/${changeId}/update`, {
            type: "PUT",
            data: JSON.stringify(newEatState),
            contentType: "application/json; charset=UTF-8",
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });



    $(".submit-new").on("click", (event) => {
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
        $.ajax("/api/carriers", {
            type: "POST",
            data: newCarrier,
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".delete-button").on("click", function () {
        const id = $(this).data("id");
        $.ajax(`/api/carriers/${id}/delete`, {
            type: "DELETE",
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });
});
