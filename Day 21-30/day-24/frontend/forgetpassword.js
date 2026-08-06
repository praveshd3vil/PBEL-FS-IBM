const forgetPasswordForm = document.getElementById("forgetPasswordForm");

forgetPasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // if (newPassword !== confirmPassword) {
    //     Toastify({
    //         text: "Passwords do not match",
    //         duration: 3000,
    //         gravity: "top",
    //         position: "right",
    //         style: {
    //             background: "linear-gradient(to right, #b00000, #460404)"
    //         }
    //     }).showToast();
    //     return;
    // }

    const response = await fetch("https://pbel-fs-ibm.onrender.com/api/forget-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            newPassword
        })
    });

    const res = await response.json();
    if (newPassword !== confirmPassword) {
        Toastify({
            text: "Passwords do not match",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #b00000, #460404)"
            },
            onClick: function () { }
        }).showToast();
    }else {
    Toastify({
        text: res.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: response.ok ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #b00000, #460404)"
        },
        onClick: function () { }
    }).showToast();
}
});