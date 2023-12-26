document.addEventListener("DOMContentLoaded", function() {
  var languageButton = document.getElementById("language");
  var dataEN, dataNO;
  var currentLanguage = "English";
  updateButtonClass("Norsk"); // Update button class at start

  fetch('./assets/data/dataEN.json')
    .then(response => response.json())
    .then(data => {
      dataEN = data;
      updatePage(dataEN);
    });

  fetch('./assets/data/dataNO.json')
    .then(response => response.json())
    .then(data => {
      dataNO = data;
    });

  languageButton.addEventListener("click", function () {
    var data;
    var otherLang
    if (currentLanguage === "English") {
      currentLanguage = "Norsk";
      otherLang = "English";
      data = dataNO;
    } else {
      currentLanguage = "English";
      otherLang = "Norsk";
      data = dataEN;
    }
    updateButtonClass(otherLang); // Update button class on click
    updatePage(data);
  });

  function updateButtonClass(language) {
    if (language === "English") {
      languageButton.classList.add("english-class");
      languageButton.classList.remove("norsk-class");
    } else {
      languageButton.classList.add("norsk-class");
      languageButton.classList.remove("english-class");
    }
  }

  function calculateAge(birthDate) {
    var parts = birthDate.split("-");
    var birth = new Date(parts[2], parts[1] - 1, parts[0]);
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
  }

  function updateData(id, data) {
    const element = document.getElementById(id);
    element.classList.add("update-animation");
    setTimeout(() => {
      element.innerHTML = data;
      element.classList.remove("update-animation");
    }, 250);
  }

  async function updatePage(data) {
    // Page Title and Personal Information
    updateData('page-title', data.personalInfo.title);
    updateData('profile-pic', 'assets/images/lucas.jpeg'); // Update image src if needed
    updateData('info-title', data.personalInfo.title);
    updateData('name', data.personalInfo.data.name.value);
    updateData('age', calculateAge(data.personalInfo.data.age.value) + ' ' + data.personalInfo.data.age.label);
    updateData('major', data.personalInfo.data.education.value);
    updateData('location', data.personalInfo.data.location.label + ": " + data.personalInfo.data.location.value);
    updateData('nationality', data.personalInfo.data.nationality.label + ": " + data.personalInfo.data.nationality.value);

    // About Me
    updateData('about-title', data.about.title);
    updateData('about-content', data.about.content);

    // Interests
    updateData('interests-title', data.interests.title);
    updateData('interests-content', data.interests.data.value.join(', '));

    // Languages
    updateData('languages-title', data.languages.title);
    updateLanguages(data.languages.data.value);

    // Skills
    updateData('skills-title', data.skills.title);
    updateSkills(data.skills.data.value);

    // Grades
    updateData('grades-title', data.grades.title);
    updateGrades(data.grades.data);

    // Projects
    updateData('projects-title', data.projects.title);
    updateProjects(data.projects.data);
    updateData('contact-title', data.contact.title);
    updateData('email', data.contact.data.email.value);
    updateData('website', data.contact.data.website.value);
    updateData('github', data.contact.data.github.value);
  }

  function updateLanguages(languages) {
    const languagesList = document.getElementById('languages-list');
    languagesList.innerHTML = '';
    languages.forEach(language => {
        languagesList.innerHTML += `<li>${language.name} (${language.level})</li>`;
    });
  }

  function updateSkills(skills) {
      const skillsList = document.getElementById('skills-list');
      skillsList.innerHTML = '';
      skills.forEach(skill => {
          skillsList.innerHTML += `<li>${skill.name} - ${skill.level}</li>`;
      });
  }

  function updateGrades(grades) {
      const gradesList = document.getElementById('grades-list');
      gradesList.innerHTML = '';
      grades.forEach(grade => {
          gradesList.innerHTML += `<li>${grade.label}: ${grade.value}</li>`;
    });
  }

  function updateProjects(projects) {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';

    projects.forEach(project => {
        const projectButton = document.createElement('button');
        projectButton.textContent = project.name;
        projectButton.classList.add('project-button');
        projectButton.addEventListener('click', () => openProjectDialog(project));

        projectsList.appendChild(projectButton);
    });
  }

  function openProjectDialog(project) {
      const existingDialog = document.querySelector('.project-dialog');
      if (existingDialog) {
          existingDialog.remove();
      }

      const dialog = document.createElement('dialog');
      dialog.classList.add('project-dialog');
  
      dialog.innerHTML = `
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a href='${project.github_link}' target='_blank'>View on GitHub</a>
          <button class='close-dialog'>Close</button>
      `;
  
      document.body.appendChild(dialog);
      dialog.showModal();
      dialog.querySelector('.close-dialog').addEventListener('click', function() {
          dialog.close();
      });
  }
});