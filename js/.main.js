var developers = JSON.parse(localStorage.getItem("developers"));
if (developers == null) {
    var developers = []
}
var employee = document.getElementById('developerCard')
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    Create()
    Start()
    document.getElementById("form").reset()
});
function Create() {
    var developer = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        designation: document.getElementById("designation").value,
        language: document.getElementById("language").value,
        salary: document.getElementById("salary").value,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
        photo: document.getElementById("photo").value
    };
    developers.push(developer)
    localStorage.setItem("developers", JSON.stringify(developers))
}
function Start() {
    employee.innerHTML = ''
    developersst = JSON.parse(localStorage.getItem("developers"))
    if (developersst !== null) {
        for (var i = 0; i < developersst.length; i++) {
            employee.innerHTML += `
            <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 pr-0 mr-0">
            <div class="card border border-success mb-3">
            <img class="card-img-top" src="${developersst[i].photo}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${developersst[i].name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Email : </strong>${developersst[i].email}</li>
                <li class="list-group-item"><strong>Designation : </strong>${developersst[i].designation}</li>
                <li class="list-group-item"><strong>Languages : </strong>${developersst[i].language}</li>
                <li class="list-group-item"><strong>Salary : </strong>${developersst[i].salary}</li>
                <li class="list-group-item"><strong>Linkedin Account : </strong>${developersst[i].linkedin}</li>
                <li class="list-group-item"><strong>Github Account : </strong>${developersst[i].github} </li>
                
            </ul>
            <div class="text-center card-body">
                <button class="col-5 text-white btn btn-dark" onclick="Update(${i})"></i></i>Update</button>
                <button class="col-5 text-white btn btn-dark" onclick="Delete(${i})"></i>Delete</button>
            </div>
            </div>
            </div>
            `
        }
    }
}
function Update(j) {
    let developersup = JSON.parse(localStorage.getItem("developers"));
    employee.innerHTML = ''
    for (var i = 0; i < developersup.length; i++) {
        if (i === j) {
            employee.innerHTML += `
            <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 pr-0 mr-0">
            <div class=" border border-danger card mb-2">
            <div class="card-body">
            <p> Name:</p>
            <input type="text" class="mb-2 form-control" id="newName" placeholder="${developersup[i].name}" required></input>
            <p> Email:</p>
            <input type="email" class="mb-2 form-control" id="newEmail" placeholder="${developersup[i].email}" validate required></input>
            <p Designation:</p>
            <input type="text" class="mb-2 form-control" id="newDesignation" placeholder="${developersup[i].designation}" required></input>
            <p Languages:</p>
            <input type="text" class="mb-2 form-control" id="newLanguage" placeholder="${developersup[i].language}" required></input>
            <p> Salary:</p>
            <input type="number" class="mb-2 form-control" id="newSalary" placeholder="${developersup[i].salary}" required></input>
            <p> Linkedin Account:</p>
            <input input type="text" class="mb-2 form-control" id="newLinkedin" placeholder="${developersup[i].linkedin}" required></input>
            <p> Github Account:</p>
            <input input type="text" class="mb-2 form-control" id="newGithub" placeholder="${developersup[i].github}" required></input>
            <p> Github Photo:</p>
            <input input type="text" class="mb-2 form-control" id="newPhoto" placeholder="${developersup[i].photo}" required></input>
            <div class="text-center">
            <button class="col-5 text-white btn btn-dark" onclick="Update2(${i})"></i>Update</button>
            <button class="col-5 text-white btn btn-dark" onclick="Start()">Cancel</button>
            </div>
            </div>
            </div>
            </div>
            `
        } else {
            employee.innerHTML += `
            <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-1 pr-0 mr-0">
            <div class="border border-success card mb-2">
            <div class="card-body">
            <p><strong>Name: </strong>${developersup[i].name}</p>
            <p><strong>Email: </strong>${developersup[i].email}</p>
            <p><strong>Designation: </strong>${developersup[i].designation}</p>
            <p><strong>Languages: </strong>${developersup[i].language}</p>
            <p><strong>Salary: </strong>${developersup[i].salary}</p>
            <p><strong>Linkedin Account: </strong>${developersup[i].linkedin}</p>
            <p><strong>Github Account: </strong>${developersup[i].github}</p>
            <p><strong>Github Photo: </strong>${developersup[i].photo}</p>
            <div class="text-center">
            <button disabled class="col-5 text-white btn btn-dark" onclick="Update(${i})">Update</button>
            <button disabled class="col-5 text-white btn btn-dark" onclick="Delete(${i})">Delete</button>
            </div>
            </div>
            </div>
            </div>
            `
        }
    }
}
function Update2(x) {
    developers[x] = {
        name: document.getElementById("newName").value,
        email: document.getElementById("newEmail").value,
        designation: document.getElementById("newDesignation").value,
        language: document.getElementById("newLanguage").value,
        salary: document.getElementById("newSalary").value,
        linkedin: document.getElementById("newLinkedin").value,
        github: document.getElementById("newGithub").value,
        photo: document.getElementById("newPhoto").value
    };
    var ud = /\S+@\S+/;
    if (developers[x].photo === '') {
        developers[x].photo = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.pn"
    }
    if (!ud.test(developers[x].email)) {
        alert('Wrong email')
    }
    else {

        if ((developers[x].name === '') || (developers[x].email === '') || (developers[x].designation === '') || (developers[x].language === '') || (developers[x].salary === '') || (developers[x].linkedin === '') || (developers[x].github === '')) {
            alert("You missed out a field")
        }
        else {
            localStorage.setItem("developers", JSON.stringify(developers))
            Start()
        }
    }
}
function Delete(delet) {
    let developersde = JSON.parse(localStorage.getItem("developers"));
    developersde.splice(delet, 1);
    localStorage.setItem("developers", JSON.stringify(developersde));
    Start();
}
function sort() {
    mydeveloper = JSON.parse(localStorage.getItem("developers"))
    if (mydeveloper !== null) {
        for (var a = 0; a < mydeveloper.length; a++) {
            for (var b = a + 1; b < mydeveloper.length; ++b) {
                if (mydeveloper[a].name.toLowerCase() > mydeveloper[b].name.toLowerCase()) {
                    var a = mydeveloper[a];
                    mydeveloper[a] = mydeveloper[b];
                    mydeveloper[b] = a;
                }
            }
        }
    }
    localStorage.setItem("developers", JSON.stringify(mydeveloper));
    Start();
}