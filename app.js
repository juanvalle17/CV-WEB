// Dropdown functionality
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const btnDownload = document.getElementById('btnDownload');

// Toggle dropdown on click
btnDownload.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdownContent.classList.remove('show');
    }
});

// Botones de descarga
document.getElementById('btnPDF').addEventListener('click', () => {
    // Función para descargar como PDF
    dropdownContent.classList.remove('show');
    window.print();
});

document.getElementById('btnImage').addEventListener('click', () => {
    // Función para descargar como imagen
    dropdownContent.classList.remove('show');
    
    // Usar html2canvas para convertir a imagen
    if (typeof html2canvas !== 'undefined') {
        html2canvas(document.querySelector('.card')).then(canvas => {
            const link = document.createElement('a');
            link.download = 'CV-Juan-Ignacio-Valle.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    } else {
        // Si no hay html2canvas, mostrar instrucciones
        alert('Para descargar como imagen, por favor instala la librería html2canvas o usa la opción de PDF');
    }
});

// Tema oscuro/claro
const toggle = document.getElementById('btnTheme');
// Por defecto en tema oscuro
document.documentElement.dataset.theme = 'dark';
// El icono ya está configurado como luna en el HTML, que es correcto para tema oscuro

toggle.addEventListener('click', () => {
    const light = document.documentElement.dataset.theme === 'light';
    document.documentElement.dataset.theme = light ? 'dark' : 'light';
    
    if (light) {
        // activar oscuro
        document.documentElement.style.setProperty('--bg', '#0d1117');
        document.documentElement.style.setProperty('--card', '#0f1523');
        document.documentElement.style.setProperty('--text', '#e6eaf2');
        document.documentElement.style.setProperty('--muted', '#9aa4b2');
        document.documentElement.style.setProperty('--chip', '#171e2e');
        document.documentElement.style.setProperty('--border', '#1f2a44');
        
        // Cambiar icono a sol
        toggle.innerHTML = `
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
        `;
    } else {
        // activar claro
        document.documentElement.style.setProperty('--bg', '#f7f8fc');
        document.documentElement.style.setProperty('--card', '#ffffff');
        document.documentElement.style.setProperty('--text', '#0b1220');
        document.documentElement.style.setProperty('--muted', '#4b5567');
        document.documentElement.style.setProperty('--chip', '#f1f3fb');
        document.documentElement.style.setProperty('--border', '#e5e9f2');
        
        // Cambiar icono a luna
        toggle.innerHTML = `
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        `;
    }
});

// Fecha de última actualización
const d = new Date();
document.getElementById('lastUpdate').textContent = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;