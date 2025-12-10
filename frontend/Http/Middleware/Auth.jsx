// utils/auth.js
export const logoutAll = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("Admin");
  localStorage.removeItem("token");
  window.location.href = "/";
};

export const logoutAdmin = () => {
  localStorage.removeItem("Admin");
  localStorage.removeItem("token");
  window.location.href = "/admin";
};

export const logoutGuest = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location.href = "/login";
};
