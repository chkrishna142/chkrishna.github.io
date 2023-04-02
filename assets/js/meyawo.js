/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
GitHubCalendar(".calendar", "chkrishna142");

// or enable responsive functionality:
GitHubCalendar(".calendar", "chkrishna142", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "chkrishna142", {
    proxy(username) {
        return fetch(`https://your-proxy.com/github?user=${username}`)
    }
}).then(r => console.log(r))


$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});