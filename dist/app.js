const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const planner = document.querySelector('#planner');
const infoDialog = document.querySelector('#info-dialog');
const planningForm = document.querySelector('#planning-form');
const formView = document.querySelector('#planner-form-view');
const resultView = document.querySelector('#planner-result-view');
const summary = document.querySelector('#plan-summary');
let currentPlan = null;

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Menü öffnen');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.classList.toggle('is-open', !isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Menü öffnen' : 'Menü schließen');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 741px)').addEventListener('change', closeMenu);

function openDialog(dialog) {
  dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop = 0;
}

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
});

document.querySelectorAll('[data-plan]').forEach(button => {
  button.addEventListener('click', () => {
    closeMenu();
    if (button.dataset.plan) planningForm.elements.service.value = button.dataset.plan;
    formView.hidden = false;
    resultView.hidden = true;
    planner.setAttribute('aria-labelledby', 'planner-title');
    openDialog(planner);
  });
});

function planEntries(plan) {
  return [
    ['Leistung', plan.service],
    ['Fläche', plan.area ? `${Number(plan.area).toLocaleString('de-DE')} m²` : 'Noch offen'],
    ['Intervall', plan.frequency],
    ['Ort', plan.location || 'Noch offen'],
    ['Hinweise', plan.notes || 'Keine besonderen Hinweise']
  ];
}

planningForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!planningForm.reportValidity()) return;
  currentPlan = Object.fromEntries([...new FormData(planningForm)].map(([key, value]) => [key, value.trim()]));
  summary.replaceChildren();
  for (const [label, value] of planEntries(currentPlan)) {
    const row = document.createElement('div');
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = label;
    description.textContent = value;
    row.append(term, description);
    summary.append(row);
  }
  formView.hidden = true;
  resultView.hidden = false;
  const resultTitle = resultView.querySelector('h2');
  resultTitle.id = 'result-title';
  resultTitle.tabIndex = -1;
  planner.setAttribute('aria-labelledby', 'result-title');
  planner.scrollTop = 0;
  resultTitle.focus({ preventScroll: true });
  document.querySelector('#download-status').textContent = '';
});

document.querySelector('#edit-plan').addEventListener('click', () => {
  formView.hidden = false;
  resultView.hidden = true;
  planner.setAttribute('aria-labelledby', 'planner-title');
  planner.scrollTop = 0;
  planningForm.elements.service.focus({ preventScroll: true });
});

document.querySelector('#download-plan').addEventListener('click', () => {
  if (!currentPlan) return;
  const lines = [
    'MEIN REINIGUNGSPLAN',
    'Reinigung Werner – Website-Entwurf',
    '',
    ...planEntries(currentPlan).map(([label, value]) => `${label}: ${value}`),
    '',
    'Diese Zusammenfassung wurde auf Ihrem Gerät erstellt und nicht versendet.',
    'Sie ist keine Buchung und kein Angebot. Kontaktdaten und Einsatzgebiet folgen.'
  ];
  const url = URL.createObjectURL(new Blob(['\uFEFF' + lines.join('\r\n')], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mein-reinigungsplan.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  document.querySelector('#download-status').textContent = 'Die Textdatei wurde zum Herunterladen bereitgestellt.';
});

const information = {
  impressum: {
    title: 'Impressum – in Vorbereitung',
    html: '<p class="info-notice">Dies ist ein privater Website-Entwurf. Die Angaben zum Unternehmen stehen noch nicht fest.</p><p>Firmenname, verantwortliche Person, ladungsfähige Anschrift und Kontaktmöglichkeiten werden vor dem offiziellen Start ergänzt. „Reinigung Werner“ ist der vorläufige Projektname.</p><p>Eine Kontaktaufnahme oder Beauftragung über diese Website ist derzeit nicht möglich.</p>'
  },
  datenschutz: {
    title: 'Hinweise zu diesem Entwurf',
    html: '<p class="info-notice">Die vollständige Datenschutzerklärung wird ergänzt, sobald Betreiber und endgültige technische Einrichtung feststehen.</p><h3>Reinigungsplaner</h3><p>Ihre Angaben werden in dieser Seite im Arbeitsspeicher des Browsers verarbeitet. Der Planer sendet keine Formulardaten an die Reinigungsfirma. Die Textdatei wird auf Ihrem Gerät erstellt. Die Anwendung speichert Ihre Angaben nicht dauerhaft.</p><h3>Technische Einbindung</h3><p>Fotos und Schrift werden mit der Website ausgeliefert. Dieser Entwurf enthält keine Analyse-, Werbe- oder Tracking-Skripte und setzt selbst keine Cookies. Der Hostinganbieter kann beim Aufruf technische Zugriffsdaten verarbeiten.</p>'
  },
  bildnachweise: {
    title: 'Bildnachweise',
    html: '<p>Die verwendeten Bilder sind Symbolbilder und zeigen keine Referenzobjekte oder Mitarbeitenden von Reinigung Werner.</p><h3>Büroflur</h3><p>Unsplash · <a href="https://unsplash.com/photos/yWwob8kwOCk" target="_blank" rel="noopener noreferrer">Original auf Unsplash</a></p><h3>Fensterreinigung</h3><p>Matilda Wormwood · Pexels · <a href="https://www.pexels.com/photo/a-person-cleaning-a-glass-window-4440540/" target="_blank" rel="noopener noreferrer">Original auf Pexels</a></p><h3>Schrift</h3><p>DM Sans · SIL Open Font License. Schrift und Bilddateien sind lokal eingebunden.</p>'
  }
};

document.querySelectorAll('[data-info]').forEach(button => {
  button.addEventListener('click', () => {
    const info = information[button.dataset.info];
    document.querySelector('#info-title').textContent = info.title;
    document.querySelector('#info-content').innerHTML = info.html;
    openDialog(infoDialog);
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
