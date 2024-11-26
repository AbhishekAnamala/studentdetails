let studentData = {};

// Load the JSON data dynamically using fetch
fetch('./object.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to fetch JSON: ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        studentData = data; // Assign loaded data
    })
    .catch((error) => {
        console.error('Error loading JSON:', error);
    });

// Handle form submission
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentNumber = document.getElementById('studentNumber').value;
    const detailsContainer = document.getElementById('detailsContainer');

    if (studentData[studentNumber]) {
        // Display student details
        document.getElementById('studentName').textContent = studentData[studentNumber].name;
        document.getElementById('studentCourse').textContent = studentData[studentNumber].course;
        document.getElementById('studentPhone').textContent = studentData[studentNumber].phone;
        document.getElementById('studentAddress').textContent = studentData[studentNumber].address;
        document.getElementById('studentYear').textContent = studentData[studentNumber].year;
        document.getElementById('studentEmail').textContent = studentData[studentNumber].email;
        document.getElementById('studentBatch').textContent = studentData[studentNumber].batch;

        // Display student photo
        document.getElementById('studentPhoto').src = studentData[studentNumber].photo;

        detailsContainer.style.display = 'block';
    } else {
        alert('Student not found.');
    }
});

// Reset form and hide details container
function resetForm() {
    document.getElementById('detailsContainer').style.display = 'none';
    document.getElementById('studentForm').reset();
}