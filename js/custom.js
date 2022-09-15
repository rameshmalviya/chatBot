$(function () {
    chatInit();
});

function chatInit() {
    chatSendFn();
}


function chatSendFn() {

    $('#sendMessageBtnHandler').click(function () {
        const value = $('#sendMessageInput').val();
        messageSenderTemplate(value);
    });

    $('#sendMessageInput').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            const value = event.target.value;
            messageSenderTemplate(value);
        }
    });

    function messageSenderTemplate(value) {
        var senderHTML = "<div class='right-message animate__animated animate__fadeInRight'>" +
            "<span class='right-chat-text'>" + value + "</span>" +
            "</div>";
        var reciverHTML = "<div class='left-message animate__animated animate__fadeInLeft animate__delay-2s'>" +
            "<span class='left-chat-text'>Thanks for chatting with us!.</span>" +
            "</div>";
        $("#sendMessageInput").val('');
        $('#chatInteractionBox').append(senderHTML, reciverHTML);
    }

    $(document).on('click', '.buttonMessageReplyHandler', function (e) {
        buttonValue = e.target.innerText;
        var senderHTML = "<div class='right-message animate__animated animate__fadeInRight'>" +
            "<span class='right-chat-text'>" + buttonValue + "</span>" +
            "</div>";
        if (buttonValue === "No, I like paying more.") {
            var reciverHTML = "<div class='left-message animate__animated animate__fadeInLeft animate__delay-1s'>" +
                "<span class='left-chat-text'>No problem.When you're ready to consolidate your loans and save money -- giving you more financial freedom -- just message us back.</span>" +
                "</div>" +
                "<div class='left-message animate__animated animate__fadeInLeft animate__delay-2s'>" +
                "<span class='left-chat-text'>Thanks for chatting with us!.</span>" +
                "</div>";
        }
        if (buttonValue === "Yes!") {
            var reciverHTML = "<div class='left-message animate__animated animate__fadeInLeft animate__delay-1s'>" +
                "<span class='left-chat-text'>Great!</span>" +
                "</div>" +
                "<div class='left-message animate__animated animate__fadeInLeft animate__delay-2s'>" +
                "<span class='left-chat-text'>What are you looking for specifically?</span>" +
                "</div>" +
                "<div class='left-message animate__animated animate__fadeInLeft animate__delay-3s'>" +
                "<div class='d-flex gap-1'>" +
                "<button class='btn btn-sm btn-primary buttonMessageReplyHandler'>Better rates</button>" +
                "<button class='btn btn-sm btn-primary buttonMessageReplyHandler'>Loan consolidation</button>" +
                "<button class='btn btn-sm btn-primary buttonMessageReplyHandler'>All of the above</button>" +
                "<button class='btn btn-sm btn-primary buttonMessageReplyHandler'>None of the above</button>" +
                "</div>" +
                "</div>";
        } if (buttonValue === "Better rates") {
            var reciverHTML =
                "<div class='left-message animate__animated animate__fadeInLeft animate__delay-1s'>" +
                "<span class='left-chat-text'>Better rates list:</span>" +
                "</div>" +
                '<div class="left-message animate__animated animate__fadeInLeft animate__delay-2s">' +
                '<span class="left-chat-text">' +
                '<table class="table bg-white mb-0 table-bordered">' +
                '<thead>' +
                '<tr>' +
                '<th>Leading Partner</th>' +
                '<th>APR</th>' +
                '<th>Loan Amount</th>' +
                '<th>Min Credit Score</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>' +
                '<tr>' +
                '<td>LoanCompanyName</td>' +
                '<td>5.56%</td>' +
                '<td>Rs. 5k - 100k</td>' +
                '<td>Not disclosed</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '</span>' +
                '</div>';
        } if (buttonValue === "Loan consolidation") {
            var reciverHTML = "<div class='left-message animate__animated animate__fadeInLeft animate__delay-1s'>" +
                "<span class='left-chat-text'>We can certainly help with that!</span>" +
                "</div>" +
                "<div class='left-message animate__animated animate__fadeInLeft animate__delay-2s'>" +
                "<span class='left-chat-text'>Please reach out to us info@companyname.com or +91 99999 99999.</span>" +
                "</div>" +
                "<div class='left-message animate__animated animate__fadeInLeft animate__delay-3s'>" +
                "<div class='d-flex gap-1'>" +
                "<button class='btn btn-sm btn-primary buttonMessageReplyHandler'>None of the above</button>" +
                "</div>" +
                "</div>";
        } if (buttonValue === "All of the above") {
            var reciverHTML = "<div class='left-message animate__animated animate__fadeInLeft animate__delay-2s'>" +
                "<span class='left-chat-text'>Please reach out to us info@companyname.com or +91 99999 99999.</span>" +
                "</div>" +
                "<div class='left-message animate__animated animate__fadeInLeft animate__delay-3s'>" +
                "<div class='d-flex gap-1'>" +
                "<button class='btn btn-sm btn-primary buttonMessageReplyHandler'>None of the above</button>" +
                "</div>" +
                "</div>";
        } if (buttonValue === "None of the above") {
            var reciverHTML = "<div class='left-message animate__animated animate__fadeInLeft animate__delay-2s'>" +
                "<span class='left-chat-text'>Please reach out to us info@companyname.com or +91 99999 99999.</span>" +
                "</div>" +
                "<div class='left-message animate__animated animate__fadeInLeft animate__delay-3s'>" +
                "<div class='d-flex gap-1'>" +
                "<button class='btn btn-sm btn-primary buttonMessageReplyHandler'>Yes!</button>" +
                "<button class='btn btn-sm btn-primary buttonMessageReplyHandler'>No</button>" +
                "</div>" +
                "</div>";
        } if (buttonValue === "No") {
            var reciverHTML = "<div class='left-message animate__animated animate__fadeInLeft animate__delay-2s'>" +
                "<span class='left-chat-text'>Please reach out to us info@companyname.com or +91 99999 99999.</span>" +
                "</div>";
        }
        $('#chatInteractionBox').append(senderHTML, reciverHTML);
        var objDiv = document.getElementById("chatInteractionBox");
        objDiv.scrollTop = objDiv.scrollHeight;
    });
}
