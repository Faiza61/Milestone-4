// script.js

function generateResume() {
    // Get user input values with null checks
    const name = (document.getElementById('name') as HTMLInputElement)?.value || 'N/A';
    const email = (document.getElementById('email') as HTMLInputElement)?.value || 'N/A';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value || 'N/A';
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value || 'N/A';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value || 'N/A';
    const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value || 'N/A';
  
   
 // Build resume output
 const resumeOutput = `
 <h2 contenteditable="true">${sanitizeHTML(name)}</h2>
 <p><strong>Email:</strong> <span contenteditable="true">${sanitizeHTML(email)}</span></p>
 <p><strong>Phone:</strong> <span contenteditable="true">${sanitizeHTML(phone)}</span></p>
 <h3>Education</h3>
 <p contenteditable="true">${sanitizeHTML(education)}</p>
 <h3>Work Experience</h3>
 <p contenteditable="true">${sanitizeHTML(experience)}</p>
 <h3>Skills</h3>
 <p contenteditable="true">${sanitizeHTML(skills)}</p>
`;
// Display resume output in the resume container
const resumeContainer = document.getElementById('resume-output');
if (resumeContainer) {
   resumeContainer.innerHTML = resumeOutput;
}
}

// Optional: Basic input sanitization to prevent XSS
function sanitizeHTML(input: string) {
const div = document.createElement('div');
div.textContent = input;
return div.innerHTML;
}

