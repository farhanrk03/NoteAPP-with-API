import './style.css'

const notesListContainer = document.getElementById('notes-list')
const noNotesMessage = document.getElementById('no-notes-message')
const loadingMessage = document.getElementById('loading-message') // Elemen loading
const listTitle = document.getElementById('list-title')
const toggleArchiveBtn = document.getElementById('toggle-archive-btn')
const toggleFormBtn = document.getElementById('toggle-form-btn')
const closeSidebarBtn = document.getElementById('close-sidebar-btn')
const sidebar = document.getElementById('note-form-sidebar')
const backdrop = document.getElementById('backdrop')
const notificationBox = document.getElementById('notification-box')

const API_BASE_URL = 'https://notes-api.dicoding.dev/v2'

let allNotes = []
let showingArchived = false

// web component
class NoteAppBar extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
            <style>
                .app-bar {
                    background-color: #002b55;
                    color: white;
                    padding: 1.5rem 1rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    border-bottom-left-radius: 15px;
                    border-bottom-right-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .app-logo {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color:rgb(21, 189, 201); 
                    margin: 0;
                }
                h1 {
                    margin: 0;
                    font-size: 2.5rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                    color: white; 
                    text-align: right;
                }
                @media (max-width: 640px) {
                    h1 {
                        font-size: 1.8rem;
                    }
                    .app-logo {
                        font-size: 1.8rem;
                    }
                }
            </style>
            <header class="app-bar">
                <div class="app-logo">FRK</div>
                <h1>${this.getAttribute('app-title') || 'STAMPO NOTEAPP'}</h1>
            </header>
        `
  }
}
customElements.define('note-app-bar', NoteAppBar)

class NoteForm extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
            <style>
                .form-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                    color: #4A5568;
                }
                input[type="text"],
                textarea {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #CBD5E0;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    box-sizing: border-box;
                    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                }
                input[type="text"]:focus,
                textarea:focus {
                    outline: none;
                    border-color: #4CAF50;
                    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.3);
                }
                textarea {
                    min-height: 120px;
                    resize: vertical;
                }
                button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 0.8rem 1.5rem;
                    border: none;
                    border-radius: 0.5rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                    align-self: flex-end;
                }
                button:hover {
                    background-color: #45a049;
                    transform: translateY(-2px);
                }
                .error-message {
                    color: #EF4444;
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                }
            </style>
            <form class="form-container">
                <div class="form-group">
                    <label for="title">Judul Catatan:</label>
                    <input type="text" id="title" name="title" required placeholder="Masukkan judul catatan Anda">
                    <p class="error-message" id="title-error"></p>
                </div>
                <div class="form-group">
                    <label for="body">Isi Catatan:</label>
                    <textarea id="body" name="body" required placeholder="Tulis isi catatan Anda di sini..."></textarea>
                    <p class="error-message" id="body-error"></p>
                </div>
                <button type="submit">Tambah Catatan</button>
            </form>
        `

    this.form = shadow.querySelector('form')
    this.titleInput = shadow.querySelector('#title')
    this.bodyInput = shadow.querySelector('#body')
    this.titleError = shadow.querySelector('#title-error')
    this.bodyError = shadow.querySelector('#body-error')

    this.form.addEventListener('submit', this.handleSubmit.bind(this))
    this.titleInput.addEventListener(
      'input',
      this.validateInput.bind(
        this,
        this.titleInput,
        this.titleError,
        'Judul catatan tidak boleh kosong.',
      ),
    )
    this.bodyInput.addEventListener(
      'input',
      this.validateInput.bind(
        this,
        this.bodyInput,
        this.bodyError,
        'Isi catatan tidak boleh kosong.',
      ),
    )
  }

  validateInput(inputElement, errorElement, errorMessage) {
    if (inputElement.value.trim() === '') {
      errorElement.textContent = errorMessage
      inputElement.classList.add('error-border')
      return false
    } else {
      errorElement.textContent = ''
      inputElement.classList.remove('error-border')
      return true
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const isTitleValid = this.validateInput(
      this.titleInput,
      this.titleError,
      'Judul catatan tidak boleh kosong.',
    )
    const isBodyValid = this.validateInput(
      this.bodyInput,
      this.bodyError,
      'Isi catatan tidak boleh kosong.',
    )

    if (isTitleValid && isBodyValid) {
      const newNote = {
        id: `notes-${Date.now()}`,
        title: this.titleInput.value,
        body: this.bodyInput.value,
        createdAt: new Date().toISOString(),
        archived: false,
      }
      this.dispatchEvent(
        new CustomEvent('note-added', { detail: newNote, bubbles: true }),
      )
      this.form.reset()
      this.titleInput.classList.remove('error-border')
      this.bodyInput.classList.remove('error-border')
    }
  }
}
customElements.define('note-form', NoteForm)

class NoteItem extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
            <style>
                .note-card {
                    background-color: #ffffff;
                    border-radius: 0.75rem;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                    height: 100%;
                    position: relative;
                }
                .note-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
                }
                h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #2D3748;
                    margin-bottom: 0.75rem;
                    line-height: 1.3;
                }
                p {
                    font-size: 1rem;
                    color: #4A5568;
                    line-height: 1.6;
                    flex-grow: 1;
                    margin-bottom: 1rem;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                }
                .note-date {
                    font-size: 0.875rem;
                    color: #718096;
                    margin-top: auto;
                    text-align: right;
                }
                .note-actions {
                    margin-top: 1rem;
                    display: flex;
                    justify-content: flex-end;
                    gap: 0.5rem;
                }
                .archive-button {
                    background-color: #f6ad55;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                }
                .archive-button:hover {
                    background-color: #dd8c2e;
                }
                .unarchive-button {
                    background-color: #4c62af;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                }
                .unarchive-button:hover {
                    background-color: #3b508d;
                }
                
                .delete-button {
                    background-color: #e53e3e;
                    color: white;
                    border: none;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    line-height: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    position: absolute;
                    top: -0.75rem;
                    right: -0.75rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    transition: background-color 0.2s ease;
                }
                .delete-button:hover {
                    background-color: #c53030;
                }
            </style>
            <div class="note-card">
                <h3 id="note-title"></h3>
                <p id="note-body"></p>
                <span class="note-date" id="note-date"></span>
                <div class="note-actions">
                    <button class="archive-button"></button>
                </div>
                <button class="delete-button">&times;</button>
            </div>
        `
  }

  static get observedAttributes() {
    return [
      'data-id',
      'data-title',
      'data-body',
      'data-createdat',
      'data-archived',
    ]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const titleEl = this.shadowRoot.getElementById('note-title')
    const bodyEl = this.shadowRoot.getElementById('note-body')
    const dateEl = this.shadowRoot.getElementById('note-date')
    const archiveBtn = this.shadowRoot.querySelector(
      '.archive-button, .unarchive-button',
    )
    const deleteBtn = this.shadowRoot.querySelector('.delete-button')

    if (name === 'data-title') {
      titleEl.textContent = newValue
    } else if (name === 'data-body') {
      bodyEl.textContent = newValue
    } else if (name === 'data-createdat') {
      dateEl.textContent = this.formatDate(newValue)
    } else if (name === 'data-archived' && archiveBtn) {
      const isArchived = newValue === 'true'
      archiveBtn.textContent = isArchived ? 'Unarchive' : 'Archive'
      archiveBtn.classList.toggle('unarchive-button', isArchived)
      archiveBtn.classList.toggle('archive-button', !isArchived)
    }
  }

  connectedCallback() {
    const archiveBtn = this.shadowRoot.querySelector(
      '.archive-button, .unarchive-button',
    )
    const deleteBtn = this.shadowRoot.querySelector('.delete-button')

    if (archiveBtn) {
      archiveBtn.addEventListener('click', () => {
        const noteId = this.getAttribute('data-id')
        this.dispatchEvent(
          new CustomEvent('archive-note', {
            detail: { noteId },
            bubbles: true,
            composed: true,
          }),
        )
      })
    }

    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => {
        const noteId = this.getAttribute('data-id')
        this.dispatchEvent(
          new CustomEvent('delete-note', {
            detail: { noteId },
            bubbles: true,
            composed: true,
          }),
        )
      })
    }
  }

  formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('id-ID', options)
  }
}
customElements.define('note-item', NoteItem)

class LoadingIndicator extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
            <style>
                .loading-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    text-align: center;
                }
                .spinner {
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    border-left-color: #4CAF50;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                }
                .loading-text {
                    margin-top: 1rem;
                    font-size: 1.2rem;
                    color: #718096;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
            <div class="loading-container">
                <div class="spinner"></div>
                <p class="loading-text">Loading...</p>
            </div>
        `
  }
}
customElements.define('loading-indicator', LoadingIndicator)

class ErrorMessage extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
            <style>
                .error-container {
                    padding: 1.5rem;
                    background-color: #fef2f2;
                    border: 1px solid #f87171;
                    border-radius: 0.5rem;
                    color: #b91c1c;
                    text-align: center;
                    margin-top: 1rem;
                }
            </style>
            <div class="error-container">
                <p id="error-text"></p>
            </div>
        `
  }

  static get observedAttributes() {
    return ['message']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'message') {
      this.shadowRoot.getElementById('error-text').textContent = newValue
    }
  }
}
customElements.define('error-message', ErrorMessage)

//fungsi Aplikasi dan fetch API

function showNotification(message, duration = 3000) {
  notificationBox.textContent = message
  notificationBox.classList.add('show')
  setTimeout(() => {
    notificationBox.classList.remove('show')
  }, duration)
}

function showLoading() {
  notesListContainer.innerHTML = ''
  loadingMessage.classList.remove('hidden')
  noNotesMessage.classList.add('hidden')
}

function hideLoading() {
  loadingMessage.classList.add('hidden')
}

async function fetchNotes(isArchived = false) {
  showLoading()
  try {
    const endpoint = isArchived
      ? `${API_BASE_URL}/notes/archived`
      : `${API_BASE_URL}/notes`
    const response = await fetch(endpoint)
    const data = await response.json()

    if (data.status === 'success') {
      allNotes = data.data
      renderNotes(allNotes)
    } else {
      noNotesMessage.classList.remove('hidden')
      noNotesMessage.textContent = 'Gagal memuat catatan.'
    }
  } catch (error) {
    console.error('Error fetching notes:', error)
    noNotesMessage.classList.remove('hidden')
    noNotesMessage.textContent = 'Gagal terhubung ke server. Silakan coba lagi.'
  } finally {
    hideLoading()
  }
}

function renderNotes(notesToRender) {
  notesListContainer.innerHTML = ''
  if (notesToRender.length === 0) {
    noNotesMessage.classList.remove('hidden')
    noNotesMessage.textContent = showingArchived
      ? 'Tidak ada catatan yang diarsipkan.'
      : 'Tidak ada catatan saat ini.'
  } else {
    noNotesMessage.classList.add('hidden')
    notesToRender.forEach((note) => {
      const noteItem = document.createElement('note-item')
      noteItem.setAttribute('data-id', note.id)
      noteItem.setAttribute('data-title', note.title)
      noteItem.setAttribute('data-body', note.body)
      noteItem.setAttribute('data-createdat', note.createdAt)
      noteItem.setAttribute('data-archived', note.archived)
      notesListContainer.appendChild(noteItem)
    })
  }
}

async function handleNoteAdded(event) {
  const newNote = event.detail
  closeSidebar()
  showLoading()
  try {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newNote.title,
        body: newNote.body,
      }),
    })
    const result = await response.json()
    if (result.status === 'success') {
      showNotification('Catatan berhasil dibuat!')
      fetchNotes(showingArchived)
    } else {
      showNotification('Gagal membuat catatan.')
    }
  } catch (error) {
    console.error('Error adding note:', error)
    showNotification('Terjadi kesalahan saat menambahkan catatan.')
  }
}

async function handleArchiveNote(event) {
  const { noteId } = event.detail
  showLoading()
  try {
    const noteToUpdate = allNotes.find((note) => note.id === noteId)
    if (!noteToUpdate) return

    const endpoint = noteToUpdate.archived
      ? `${API_BASE_URL}/notes/${noteId}/unarchive`
      : `${API_BASE_URL}/notes/${noteId}/archive`
    const response = await fetch(endpoint, {
      method: 'POST',
    })
    const result = await response.json()

    if (result.status === 'success') {
      showNotification(
        noteToUpdate.archived
          ? 'Berhasil Membatalkan Arsip!'
          : 'Catatan berhasil diarsipkan!',
      )
      fetchNotes(showingArchived)
    } else {
      showNotification('Gagal memperbarui status catatan.')
    }
  } catch (error) {
    console.error('Error archiving note:', error)
    showNotification('Terjadi kesalahan saat mengarsipkan catatan.')
  }
}

async function handleDeleteNote(event) {
  const { noteId } = event.detail
  const noteToDelete = allNotes.find((note) => note.id === noteId)
  if (!noteToDelete) return

  const confirmDelete = window.confirm(
    `Apakah Anda yakin ingin menghapus catatan "${noteToDelete.title}"?`,
  )
  if (confirmDelete) {
    showLoading()
    try {
      const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
        method: 'DELETE',
      })
      const result = await response.json()

      if (result.status === 'success') {
        showNotification('Catatan berhasil dihapus!')
        fetchNotes(showingArchived)
      } else {
        showNotification('Gagal menghapus catatan.')
      }
    } catch (error) {
      console.error('Error deleting note:', error)
      showNotification('Terjadi kesalahan saat menghapus catatan.')
    }
  }
}

function toggleArchiveView() {
  showingArchived = !showingArchived
  toggleArchiveBtn.textContent = showingArchived ? 'Notes List' : 'ARCHIVES'
  listTitle.textContent = showingArchived ? 'Archive list' : 'Notes List'
  fetchNotes(showingArchived)
}

function openSidebar() {
  sidebar.classList.add('open')
  backdrop.classList.add('open')
}

function closeSidebar() {
  sidebar.classList.remove('open')
  backdrop.classList.remove('open')
}

document
  .querySelector('note-form')
  .addEventListener('note-added', handleNoteAdded)
document.addEventListener('archive-note', handleArchiveNote)
document.addEventListener('delete-note', handleDeleteNote)
toggleArchiveBtn.addEventListener('click', toggleArchiveView)
toggleFormBtn.addEventListener('click', openSidebar)
closeSidebarBtn.addEventListener('click', closeSidebar)
backdrop.addEventListener('click', closeSidebar)

document.addEventListener('DOMContentLoaded', () => {
  fetchNotes(false)
})
