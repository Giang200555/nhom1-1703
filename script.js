const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
function search() {
    var searchTerm = document.getElementById('searchInput').value;
    // Thực hiện tìm kiếm với searchTerm, ở đây chỉ log searchTerm ra console
    console.log("Tìm kiếm cho: " + searchTerm);
  }
  
  document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      search();
    }
  });
  