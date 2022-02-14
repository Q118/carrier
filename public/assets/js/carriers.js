// Make sure here that we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".devour-button").on("click", function () {
        const id = $(this).data("id");
        const newEat = $(this).data("neweat");

        const newEatState = { value: newEat };

        // Send the PUT request.
        $.ajax(`/api/rolls/${id}/devoured`, {
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

    $(".create-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newRoll = {
            roll_name: $("#ro").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/rolls", {
            type: "POST",
            data: newRoll,
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".delete-roll").on("click", function () {
        const id = $(this).data("id");

        // Send the DELETE request.
        $.ajax(`/api/rolls/${id}`, {
            type: "DELETE",
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });
});
