console.log("Filter.js");
// Filter Feature in Portfolio Section

const allProjects = document.getElementsByClassName("project");
let frontEnd = document.getElementsByClassName("frontEnd");
let fullStack = document.getElementsByClassName("fullStack");
let gui = document.getElementsByClassName("gui");
let reactJs = document.getElementsByClassName("reactJs");
let static = document.getElementsByClassName("static");
let designToWeb = document.getElementsByClassName("designToWeb");



let filterBtns = document.getElementsByClassName("filterBtn");
console.log(filterBtns);
// Adding Click Event Listener to all buttons
for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function(e) {
            // Getting the text of clicked button
            filteredValue = e.target.textContent;


            // Animation on show up
            for (let i = 0; i < allProjects.length; i++) {
                allProjects[i].style.animation = "0.5s ease-in-out animate"
            }



            // Checking if text of the clicked button is ALL
            if (filteredValue == "All Projects") {
                console.log("All Button Clicked!");
                for (let i = 0; i < allProjects.length; i++) {
                    allProjects[i].style.display = 'inline-block';
                }
            }

            // if Button clicked has text of Graphic Design
            else if (filteredValue == "Front End Projects") {
                console.log("Front!");
                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("frontEnd")) {
                        allProjects[i].style.display = "inline-block";
                    } else {
                        allProjects[i].style.display = "none"
                    }
                }
            }


            // if Button clicked has text of Web Dev
            else if (filteredValue == "Full Stack Projects") {
                console.log("Full Clicked!");
                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("fullStack")) {
                        allProjects[i].style.display = "inline-block";
                    } else {
                        allProjects[i].style.display = "none"
                    }
                }
            }

            // if Button clicked has text of Web Dev
            else if (filteredValue == "GUI Projects") {
                console.log("GUI Projects Button Clicked!");
                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("gui")) {
                        allProjects[i].style.display = "inline-block";
                    } else {
                        allProjects[i].style.display = "none"
                    }
                }
            }

            // if Button clicked has text of Web Dev
            else if (filteredValue == "Python Projects") {
                console.log("GUI Projects Button Clicked!");
                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("python")) {
                        allProjects[i].style.display = "inline-block";
                    } else {
                        allProjects[i].style.display = "none"
                    }
                }
            }


             // if Button clicked has text of Web Dev
            else if (filteredValue == "React JS Projects") {
                console.log("React JS Projects Button Clicked!");
                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("reactJs")) {
                        allProjects[i].style.display = "inline-block";
                    } else {
                        allProjects[i].style.display = "none"
                    }
                }
            }




        })
    }