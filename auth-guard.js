(function () {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const page = document.body.dataset.page;

  if (page === "superadmin" && user.role !== "superadmin") {
    alert("Access denied");
    window.location.href = "login.html";
  }

  if (page === "admin" && !["admin", "superadmin"].includes(user.role)) {
    alert("Access denied");
    window.location.href = "login.html";
  }
})();
