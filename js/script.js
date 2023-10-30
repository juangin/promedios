document.getElementById('gradeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const subject = document.getElementById('subject').value;
    const unit1Note1 = parseFloat(document.getElementById('unit1Note1').value);
    const unit1Note2 = parseFloat(document.getElementById('unit1Note2').value);
    const unit2Note1 = parseFloat(document.getElementById('unit2Note1').value);
    const unit2Note2 = parseFloat(document.getElementById('unit2Note2').value);
    const unit3Note1 = parseFloat(document.getElementById('unit3Note1').value);
    const unit3Note2 = parseFloat(document.getElementById('unit3Note2').value);

    const totalWeightedScore = (unit1Note1 * 0.12 + unit1Note2 * 0.21) +
                             (unit2Note1 * 0.12 + unit2Note2 * 0.21) +
                             (unit3Note1 * 0.13 + unit3Note2 * 0.21);
    const finalGrade = totalWeightedScore.toFixed(2);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2 class="text-center">Resultados</h2>
        <p><strong>Nombre del estudiante:</strong> ${studentName}</p>
        <p><strong>Asignatura:</strong> ${subject}</p>
        <h3>Notas por Unidad:</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Unidad</th>
                    <th>Nota</th>
                    <th>Ponderación</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Unidad 1</td>
                    <td>${unit1Note1 + unit1Note2}</td>
                    <td>${(unit1Note1 * 0.12 + unit1Note2 * 0.21).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Unidad 2</td>
                    <td>${unit2Note1 + unit2Note2}</td>
                    <td>${(unit2Note1 * 0.12 + unit2Note2 * 0.21).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Unidad 3</td>
                    <td>${unit3Note1 + unit3Note2}</td>
                    <td>${(unit3Note1 * 0.13 + unit3Note2 * 0.21).toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
        <p><strong>Promedio Final:</strong> ${finalGrade}</p>
        <p>${finalGrade >= 4.0 ? 'Has aprobado la asignatura' : 'No has aprobado la asignatura'}</p>
    `;
});
