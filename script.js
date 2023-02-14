const count = document.getElementById("notif-count");

function countNotifs() { 
    count.innerHTML = document.querySelectorAll("[data-state='unread']").length;
}

function markAllAsRead() {
    let unread = document.querySelectorAll("[data-state='unread']");
    unread.forEach(e => {
        e.setAttribute('data-state', 'read');
    });
    countNotifs();
}

