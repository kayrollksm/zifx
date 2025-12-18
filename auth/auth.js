// ===============================
// ZIFX AUTH CORE (PROTOTYPE)
// ===============================
console.log("AUTH JS LOADED");

// REGISTER
function registerUser(name, email, password, role) {
  const users = JSON.parse(localStorage.getItem("zifx_users")) || [];

  if (users.find(u => u.email === email)) {
    return { success: false, message: "Email already registered" };
  }

  users.push({
    name,
    email,
    password, // plain text (prototype)
    role
  });

  localStorage.setItem("zifx_users", JSON.stringify(users));
  return { success: true };
}

// LOGIN
function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("zifx_users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) return { success: false };

  localStorage.setItem("currentUser", JSON.stringify(user));
  return { success: true, user };
}

// LOGOUT
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "/sandbox/zifx-dev/login.html";
}
