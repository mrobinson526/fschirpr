const fetchChirps = () => {

const postChirp = (e) => {
    e.preventDefault()

    $.post({
        url: "/api/chirps",
        data: JSON.stringify({
            username: $("#username-input").val(),
            message: $("#message-input").val()
        }),
        contentType: 'application/json',
        success: () => {
            $("#chirp-list").empty();
            fetchChirps();
        }
    });
};

const deleteChirp = id => {
    $.ajax({
        url: `/api/chirps/${id}`,
        method: "DELETE",
        success: () => {
            $("#chirp-list").empty();
            fetchChirps();
        }
    });
}

const editChirp = id => {
    $.ajax({
        url: `/api/chirps/${id}`,
        method: "PUT",
        data: JSON.stringify({
            username: $(`#edit-username${id}`).val(),
            message:  $(`#edit-message${id}`).val()
        }),
        contentType: 'application/json',
        success: () => {
            $("#chirp-list").empty();
            fetchChirps();
        }
    });
}

$("#submit-btn").click((e) => postChirp(e))

fetchChirps();