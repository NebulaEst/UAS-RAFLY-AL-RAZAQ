// ========== LIVE DATE & TIME ========== //
function updateTime() {
  const now = new Date();
  document.getElementById('date').textContent = now.toLocaleDateString('id-ID', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
  document.getElementById('time').textContent = now.toLocaleTimeString('id-ID');
}
setInterval(updateTime, 1000);
updateTime();

// ========== SIMPLE VISITOR COUNTER ========== //
if (!localStorage.getItem('visitorCount')) {
  localStorage.setItem('visitorCount', '0');
}
let count = parseInt(localStorage.getItem('visitorCount')) + 1;
localStorage.setItem('visitorCount', count.toString());
document.getElementById('visitor-counter').textContent = `👥 Total Pengunjung: ${count}`;

// ========== FIREBASE VERSION (OPTIONAL) ========== //
// Uncomment kalo mau pake Firebase
/*
const firebaseConfig = { apiKey: "...", projectId: "..." };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection("stats").doc("visitors").get().then(doc => {
  let count = doc.exists ? doc.data().count + 1 : 1;
  document.getElementById('visitor-counter').textContent = `👥 Total Pengunjung: ${count.toLocaleString()}`;
  db.collection("stats").doc("visitors").set({ count });
});
// ========== LIVE DATE & TIME ========== //
function updateTime() {
  const now = new Date();
  document.getElementById('date').textContent = now.toLocaleDateString('id-ID', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
  document.getElementById('time').textContent = now.toLocaleTimeString('id-ID');
}
setInterval(updateTime, 1000);
updateTime();

// ========== SIMPLE VISITOR COUNTER ========== //
if (!localStorage.getItem('visitorCount')) {
  localStorage.setItem('visitorCount', '0');
}
let count = parseInt(localStorage.getItem('visitorCount')) + 1;
localStorage.setItem('visitorCount', count.toString());
document.getElementById('visitor-counter').textContent = `👥 Total Pengunjung: ${count}`;

// ========== FIREBASE VERSION (OPTIONAL) ========== //
// Uncomment kalo mau pake Firebase
/*
const firebaseConfig = { apiKey: "...", projectId: "..." };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection("stats").doc("visitors").get().then(doc => {
  let count = doc.exists ? doc.data().count + 1 : 1;
  document.getElementById('visitor-counter').textContent = `👥 Total Pengunjung: ${count.toLocaleString()}`;
  db.collection("stats").doc("visitors").set({ count });
});
*/
// ========== LOGIN MODAL ========== //
const modal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close-btn");
const loginForm = document.getElementById("loginForm");

// Buka modal
loginBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Tutup modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Tutup modal kalau klik di luar
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Validasi login sederhana
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  
  if (email === "admin@example.com" && password === "123456") {
    alert("Login sukses! Redirect ke dashboard...");
    modal.style.display = "none";
    // Redirect bisa ditambah di sini
  } else {
    document.getElementById("loginError").textContent = "Email atau password salah!";
  }
});