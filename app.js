const validUsers = [
    {email: 'novanhfm05@gmail.com', password: '233307087'},
];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit

    const emailValue = this.querySelector('input[type="email"]').value;
    const passwordValue = this.querySelector('input[type="password"]').value;

    let isValid = false;

    for(let i = 0; i < validUsers.length; i++) {
        if(emailValue === validUsers[i].email && passwordValue === validUsers[i].password) {
            alert('Login successful! Click OK to continue.');
            isValid = true;
            window.location.href = 'order.html'; // Jika berhasil login, beralih ke halaman order.html
            break;
        }
    }
    
    if(!isValid) {
        setErrorFor(email, 'Incorrect email or password');
        alert("Password Salah");
    }
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}


const orderForm = document.getElementById("order-form");
const orderItems = document.getElementById("order-items");
const totalElement = document.getElementById("total");

// Add event listener to order items
orderItems.addEventListener("change", () => {
  // Calculate the total price
  let total = 0;
  const selectedItems = Array.from(orderItems.querySelectorAll("input:checked"));
  selectedItems.forEach((item) => {
    const itemPrice = menuItems.find((menuItem) => menuItem.name === item.value).price;
    total += itemPrice;
  });

  // Update the total element
  totalElement.textContent = total.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
});

// Render the order items
menuItems.forEach((menuItem) => {
  const itemElement = document.createElement("li");
  itemElement.innerHTML = `
    <input type="checkbox" id="${menuItem.name}" value="${menuItem.name}" />
    <label for="${menuItem.name}">${menuItem.name}</label>
    <span class="price">${menuItem.price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    })}</span>
  `;

  orderItems.appendChild(itemElement);
});