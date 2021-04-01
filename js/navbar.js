// Code adapted from  (Responsive Nav Bar Tutorial | HTML CSS JS Flexbox Navigation Menu, 2019) 
const toggle = document.getElementsByClassName("toggle");
const item = document.querySelectorAll(".item");
item.forEach(navItem => { 
        function toggleMenu() {
            if (navItem.classList.contains("active") ){
             navItem.classList.remove("active");
            } else {
                navItem.classList.add("active");
            }
        }
        document.querySelector(".toggle").addEventListener("click", toggleMenu);
    });
// End of adapted code