;(() => {
  'use strict'
  var n = {
      56: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc
          t && n.setAttribute('nonce', t)
        }
      },
      72: (n) => {
        var t = []
        function e(n) {
          for (var e = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === n) {
              e = o
              break
            }
          return e
        }
        function o(n, o) {
          for (var r = {}, i = [], s = 0; s < n.length; s++) {
            var d = n[s],
              c = o.base ? d[0] + o.base : d[0],
              l = r[c] || 0,
              u = ''.concat(c, ' ').concat(l)
            r[c] = l + 1
            var m = e(u),
              b = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              }
            if (-1 !== m) (t[m].references++, t[m].updater(b))
            else {
              var p = a(b, o)
              ;((o.byIndex = s),
                t.splice(s, 0, { identifier: u, updater: p, references: 1 }))
            }
            i.push(u)
          }
          return i
        }
        function a(n, t) {
          var e = t.domAPI(t)
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return
                e.update((n = t))
              } else e.remove()
            }
          )
        }
        n.exports = function (n, a) {
          var r = o((n = n || []), (a = a || {}))
          return function (n) {
            n = n || []
            for (var i = 0; i < r.length; i++) {
              var s = e(r[i])
              t[s].references--
            }
            for (var d = o(n, a), c = 0; c < r.length; c++) {
              var l = e(r[c])
              0 === t[l].references && (t[l].updater(), t.splice(l, 1))
            }
            r = d
          }
        }
      },
      113: (n) => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild)
            t.appendChild(document.createTextNode(n))
          }
        }
      },
      208: (n, t, e) => {
        e.d(t, { A: () => s })
        var o = e(601),
          a = e.n(o),
          r = e(314),
          i = e.n(r)()(a())
        i.push([
          n.id,
          "body {\n  font-family: 'Inter', sans-serif;\n  background-color: #a2a8b1;\n  color: #333;\n  padding-bottom: 5rem;\n  position: relative;\n  margin: 0;\n}\n\n/* Styling Scrollbar */\n::-webkit-scrollbar {\n  width: 8px;\n}\n::-webkit-scrollbar-track {\n  background: #e2e8f0;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: #a0aec0;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #718096;\n}\n\n/* Layout Utama dan Kontainer */\n.main-layout {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.section-container {\n  padding: 1.5rem;\n  background-color: #ffffff;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.list-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2d3748;\n}\n.button {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    background-color 0.2s ease,\n    transform 0.2s ease;\n}\n.button:hover {\n  transform: translateY(-1px);\n}\n.toggle-archive-btn {\n  background-color: #4299e1;\n  color: white;\n}\n.toggle-archive-btn:hover {\n  background-color: #3182ce;\n}\n\n/* Tampilan Grid Catatan */\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 1.5rem;\n  row-gap: 2rem;\n}\n\n/* Pesan Kosong atau Loading */\n.message-text {\n  text-align: center;\n  color: #718096;\n  margin-top: 1rem;\n}\n.hidden {\n  display: none;\n}\n\n/* Sidebar Form */\n#note-form-sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-width: 350px;\n  height: 100%;\n  background-color: white;\n  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);\n  transform: translateX(-100%);\n  transition: transform 0.3s ease-in-out;\n  z-index: 50;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem;\n  box-sizing: border-box;\n}\n#note-form-sidebar.open {\n  transform: translateX(0);\n}\n.sidebar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.close-btn {\n  font-size: 2rem;\n  line-height: 1;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #718096;\n  transition: color 0.2s ease;\n}\n.close-btn:hover {\n  color: #4a5568;\n}\n\n/* Backdrop Overlay */\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 40;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease-in-out;\n}\n.backdrop.open {\n  opacity: 1;\n  visibility: visible;\n}\n\n/* Tombol Floating */\n#toggle-form-btn {\n  background-color: #48bb78;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 9999px; /* Bentuk bulat */\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  position: fixed;\n  top: 80%;\n  right: 2rem;\n  transform: translateY(-50%);\n  z-index: 30;\n}\n#toggle-form-btn:hover {\n  background-color: #38a169;\n}\n\n/* Footer */\nfooter {\n  background-color: #002b55;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  font-size: small;\n}\n\n/* Kotak Notifikasi */\n#notification-box {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  background-color: #38a169;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 100;\n  transition:\n    transform 0.3s ease-in-out,\n    opacity 0.3s ease-in-out;\n  transform: translateX(120%);\n  opacity: 0;\n}\n#notification-box.show {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n\n\n/* Responsivitas */\n@media (max-width: 1024px) {\n  .notes-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .notes-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* CSS untuk Custom Elements */\nnote-app-bar {\n  display: block;\n}\nnote-form {\n  display: block;\n  flex-grow: 1;\n  overflow-y: auto;\n}\nnote-item {\n  display: block;\n}\n\nloading-indicator, error-message {\n  display: block; \n  margin: 2rem auto;\n  max-width: 500px;\n}\n\n.hidden {\n  display: none;\n}",
          '',
        ])
        const s = i
      },
      314: (n) => {
        n.exports = function (n) {
          var t = []
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = '',
                  o = void 0 !== t[5]
                return (
                  t[4] && (e += '@supports ('.concat(t[4], ') {')),
                  t[2] && (e += '@media '.concat(t[2], ' {')),
                  o &&
                    (e += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {',
                    )),
                  (e += n(t)),
                  o && (e += '}'),
                  t[2] && (e += '}'),
                  t[4] && (e += '}'),
                  e
                )
              }).join('')
            }),
            (t.i = function (n, e, o, a, r) {
              'string' == typeof n && (n = [[null, n, void 0]])
              var i = {}
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var d = this[s][0]
                  null != d && (i[d] = !0)
                }
              for (var c = 0; c < n.length; c++) {
                var l = [].concat(n[c])
                ;(o && i[l[0]]) ||
                  (void 0 !== r &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = r)),
                  e &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = e))
                      : (l[2] = e)),
                  a &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = a))
                      : (l[4] = ''.concat(a))),
                  t.push(l))
              }
            }),
            t
          )
        }
      },
      540: (n) => {
        n.exports = function (n) {
          var t = document.createElement('style')
          return (n.setAttributes(t, n.attributes), n.insert(t, n.options), t)
        }
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1]
        }
      },
      659: (n) => {
        var t = {}
        n.exports = function (n, e) {
          var o = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n)
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head
                } catch (n) {
                  e = null
                }
              t[n] = e
            }
            return t[n]
          })(n)
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            )
          o.appendChild(e)
        }
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} }
          var t = n.insertStyleElement(n)
          return {
            update: function (e) {
              !(function (n, t, e) {
                var o = ''
                ;(e.supports && (o += '@supports ('.concat(e.supports, ') {')),
                  e.media && (o += '@media '.concat(e.media, ' {')))
                var a = void 0 !== e.layer
                ;(a &&
                  (o += '@layer'.concat(
                    e.layer.length > 0 ? ' '.concat(e.layer) : '',
                    ' {',
                  )),
                  (o += e.css),
                  a && (o += '}'),
                  e.media && (o += '}'),
                  e.supports && (o += '}'))
                var r = e.sourceMap
                ;(r &&
                  'undefined' != typeof btoa &&
                  (o +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      ' */',
                    )),
                  t.styleTagTransform(o, n, t.options))
              })(t, n, e)
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1
                n.parentNode.removeChild(n)
              })(t)
            },
          }
        }
      },
    },
    t = {}
  function e(o) {
    var a = t[o]
    if (void 0 !== a) return a.exports
    var r = (t[o] = { id: o, exports: {} })
    return (n[o](r, r.exports, e), r.exports)
  }
  ;((e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n
    return (e.d(t, { a: t }), t)
  }),
    (e.d = (n, t) => {
      for (var o in t)
        e.o(t, o) &&
          !e.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: t[o] })
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0))
  var o = e(72),
    a = e.n(o),
    r = e(825),
    i = e.n(r),
    s = e(659),
    d = e.n(s),
    c = e(56),
    l = e.n(c),
    u = e(540),
    m = e.n(u),
    b = e(113),
    p = e.n(b),
    h = e(208),
    g = {}
  ;((g.styleTagTransform = p()),
    (g.setAttributes = l()),
    (g.insert = d().bind(null, 'head')),
    (g.domAPI = i()),
    (g.insertStyleElement = m()),
    a()(h.A, g),
    h.A && h.A.locals && h.A.locals)
  const f = 'https://notes-api.dicoding.dev/v2'
  let v = [],
    y = !1
  class x extends HTMLElement {
    constructor() {
      ;(super(),
        (this.attachShadow({ mode: 'open' }).innerHTML =
          `\n            <style>\n                .app-bar {\n                    background-color: #002b55;\n                    color: white;\n                    padding: 1.5rem 1rem;\n                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n                    border-bottom-left-radius: 15px;\n                    border-bottom-right-radius: 15px;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                }\n                .app-logo {\n                    font-size: 2.5rem;\n                    font-weight: 700;\n                    color:rgb(21, 189, 201); \n                    margin: 0;\n                }\n                h1 {\n                    margin: 0;\n                    font-size: 2.5rem;\n                    font-weight: 700;\n                    letter-spacing: 1px;\n                    color: white; \n                    text-align: right;\n                }\n                @media (max-width: 640px) {\n                    h1 {\n                        font-size: 1.8rem;\n                    }\n                    .app-logo {\n                        font-size: 1.8rem;\n                    }\n                }\n            </style>\n            <header class="app-bar">\n                <div class="app-logo">FRK</div>\n                <h1>${this.getAttribute('app-title') || 'STAMPO NOTEAPP'}</h1>\n            </header>\n        `))
    }
  }
  customElements.define('note-app-bar', x)
  class w extends HTMLElement {
    constructor() {
      super()
      const n = this.attachShadow({ mode: 'open' })
      ;((n.innerHTML =
        '\n            <style>\n                .form-container {\n                    display: flex;\n                    flex-direction: column;\n                    gap: 1rem;\n                }\n                .form-group {\n                    margin-bottom: 1rem;\n                }\n                label {\n                    display: block;\n                    margin-bottom: 0.5rem;\n                    font-weight: 600;\n                    color: #4A5568;\n                }\n                input[type="text"],\n                textarea {\n                    width: 100%;\n                    padding: 0.75rem;\n                    border: 1px solid #CBD5E0;\n                    border-radius: 0.5rem;\n                    font-size: 1rem;\n                    box-sizing: border-box;\n                    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n                }\n                input[type="text"]:focus,\n                textarea:focus {\n                    outline: none;\n                    border-color: #4CAF50;\n                    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.3);\n                }\n                textarea {\n                    min-height: 120px;\n                    resize: vertical;\n                }\n                button {\n                    background-color: #4CAF50;\n                    color: white;\n                    padding: 0.8rem 1.5rem;\n                    border: none;\n                    border-radius: 0.5rem;\n                    font-size: 1.1rem;\n                    font-weight: 600;\n                    cursor: pointer;\n                    transition: background-color 0.3s ease, transform 0.2s ease;\n                    align-self: flex-end;\n                }\n                button:hover {\n                    background-color: #45a049;\n                    transform: translateY(-2px);\n                }\n                .error-message {\n                    color: #EF4444;\n                    font-size: 0.875rem;\n                    margin-top: 0.25rem;\n                }\n            </style>\n            <form class="form-container">\n                <div class="form-group">\n                    <label for="title">Judul Catatan:</label>\n                    <input type="text" id="title" name="title" required placeholder="Masukkan judul catatan Anda">\n                    <p class="error-message" id="title-error"></p>\n                </div>\n                <div class="form-group">\n                    <label for="body">Isi Catatan:</label>\n                    <textarea id="body" name="body" required placeholder="Tulis isi catatan Anda di sini..."></textarea>\n                    <p class="error-message" id="body-error"></p>\n                </div>\n                <button type="submit">Tambah Catatan</button>\n            </form>\n        '),
        (this.form = n.querySelector('form')),
        (this.titleInput = n.querySelector('#title')),
        (this.bodyInput = n.querySelector('#body')),
        (this.titleError = n.querySelector('#title-error')),
        (this.bodyError = n.querySelector('#body-error')),
        this.form.addEventListener('submit', this.handleSubmit.bind(this)),
        this.titleInput.addEventListener(
          'input',
          this.validateInput.bind(
            this,
            this.titleInput,
            this.titleError,
            'Judul catatan tidak boleh kosong.',
          ),
        ),
        this.bodyInput.addEventListener(
          'input',
          this.validateInput.bind(
            this,
            this.bodyInput,
            this.bodyError,
            'Isi catatan tidak boleh kosong.',
          ),
        ))
    }
    validateInput(n, t, e) {
      return '' === n.value.trim()
        ? ((t.textContent = e), n.classList.add('error-border'), !1)
        : ((t.textContent = ''), n.classList.remove('error-border'), !0)
    }
    handleSubmit(n) {
      n.preventDefault()
      const t = this.validateInput(
          this.titleInput,
          this.titleError,
          'Judul catatan tidak boleh kosong.',
        ),
        e = this.validateInput(
          this.bodyInput,
          this.bodyError,
          'Isi catatan tidak boleh kosong.',
        )
      if (t && e) {
        const n = {
          id: `notes-${Date.now()}`,
          title: this.titleInput.value,
          body: this.bodyInput.value,
          createdAt: new Date().toISOString(),
          archived: !1,
        }
        ;(this.dispatchEvent(
          new CustomEvent('note-added', { detail: n, bubbles: !0 }),
        ),
          this.form.reset(),
          this.titleInput.classList.remove('error-border'),
          this.bodyInput.classList.remove('error-border'))
      }
    }
  }
  customElements.define('note-form', w)
  class k extends HTMLElement {
    constructor() {
      ;(super(),
        (this.attachShadow({ mode: 'open' }).innerHTML =
          '\n            <style>\n                .note-card {\n                    background-color: #ffffff;\n                    border-radius: 0.75rem;\n                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n                    padding: 1.5rem;\n                    display: flex;\n                    flex-direction: column;\n                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n                    height: 100%;\n                    position: relative;\n                }\n                .note-card:hover {\n                    transform: translateY(-5px);\n                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n                }\n                h3 {\n                    font-size: 1.5rem;\n                    font-weight: 700;\n                    color: #2D3748;\n                    margin-bottom: 0.75rem;\n                    line-height: 1.3;\n                }\n                p {\n                    font-size: 1rem;\n                    color: #4A5568;\n                    line-height: 1.6;\n                    flex-grow: 1;\n                    margin-bottom: 1rem;\n                    overflow: hidden;\n                    display: -webkit-box;\n                    -webkit-line-clamp: 5;\n                    -webkit-box-orient: vertical;\n                }\n                .note-date {\n                    font-size: 0.875rem;\n                    color: #718096;\n                    margin-top: auto;\n                    text-align: right;\n                }\n                .note-actions {\n                    margin-top: 1rem;\n                    display: flex;\n                    justify-content: flex-end;\n                    gap: 0.5rem;\n                }\n                .archive-button {\n                    background-color: #f6ad55;\n                    color: white;\n                    border: none;\n                    padding: 0.5rem 1rem;\n                    border-radius: 0.5rem;\n                    cursor: pointer;\n                    transition: background-color 0.2s ease;\n                }\n                .archive-button:hover {\n                    background-color: #dd8c2e;\n                }\n                .unarchive-button {\n                    background-color: #4c62af;\n                    color: white;\n                    border: none;\n                    padding: 0.5rem 1rem;\n                    border-radius: 0.5rem;\n                    cursor: pointer;\n                    transition: background-color 0.2s ease;\n                }\n                .unarchive-button:hover {\n                    background-color: #3b508d;\n                }\n                \n                .delete-button {\n                    background-color: #e53e3e;\n                    color: white;\n                    border: none;\n                    width: 2.5rem;\n                    height: 2.5rem;\n                    border-radius: 50%;\n                    font-size: 1.5rem;\n                    line-height: 1;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    cursor: pointer;\n                    position: absolute;\n                    top: -0.75rem;\n                    right: -0.75rem;\n                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n                    transition: background-color 0.2s ease;\n                }\n                .delete-button:hover {\n                    background-color: #c53030;\n                }\n            </style>\n            <div class="note-card">\n                <h3 id="note-title"></h3>\n                <p id="note-body"></p>\n                <span class="note-date" id="note-date"></span>\n                <div class="note-actions">\n                    <button class="archive-button"></button>\n                </div>\n                <button class="delete-button">&times;</button>\n            </div>\n        '))
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
    attributeChangedCallback(n, t, e) {
      const o = this.shadowRoot.getElementById('note-title'),
        a = this.shadowRoot.getElementById('note-body'),
        r = this.shadowRoot.getElementById('note-date'),
        i = this.shadowRoot.querySelector('.archive-button, .unarchive-button')
      if ((this.shadowRoot.querySelector('.delete-button'), 'data-title' === n))
        o.textContent = e
      else if ('data-body' === n) a.textContent = e
      else if ('data-createdat' === n) r.textContent = this.formatDate(e)
      else if ('data-archived' === n && i) {
        const n = 'true' === e
        ;((i.textContent = n ? 'Unarchive' : 'Archive'),
          i.classList.toggle('unarchive-button', n),
          i.classList.toggle('archive-button', !n))
      }
    }
    connectedCallback() {
      const n = this.shadowRoot.querySelector(
          '.archive-button, .unarchive-button',
        ),
        t = this.shadowRoot.querySelector('.delete-button')
      ;(n &&
        n.addEventListener('click', () => {
          const n = this.getAttribute('data-id')
          this.dispatchEvent(
            new CustomEvent('archive-note', {
              detail: { noteId: n },
              bubbles: !0,
              composed: !0,
            }),
          )
        }),
        t &&
          t.addEventListener('click', () => {
            const n = this.getAttribute('data-id')
            this.dispatchEvent(
              new CustomEvent('delete-note', {
                detail: { noteId: n },
                bubbles: !0,
                composed: !0,
              }),
            )
          }))
    }
    formatDate(n) {
      return new Date(n).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
  }
  function E(n, t = 3e3) {
    const e = document.getElementById('notification-box')
    ;((e.textContent = n),
      e.classList.add('show'),
      setTimeout(() => {
        e.classList.remove('show')
      }, t))
  }
  ;(customElements.define('note-item', k),
    document.addEventListener('DOMContentLoaded', () => {
      const n = document.getElementById('notes-list'),
        t = document.getElementById('no-notes-message'),
        e = document.getElementById('loading-message'),
        o = document.getElementById('list-title'),
        a = document.getElementById('toggle-archive-btn'),
        r = document.getElementById('toggle-form-btn'),
        i = document.getElementById('close-sidebar-btn'),
        s = document.getElementById('note-form-sidebar'),
        d = document.getElementById('backdrop')
      function c() {
        ;((n.innerHTML = ''),
          e.classList.remove('hidden'),
          t.classList.add('hidden'))
      }
      async function l(o = !1) {
        c()
        try {
          const e = o ? `${f}/notes/archived` : `${f}/notes`,
            r = await fetch(e),
            i = await r.json()
          'success' === i.status
            ? (console.log('Fetch data berhasil.'),
              (v = i.data),
              (a = v),
              (n.innerHTML = ''),
              0 === a.length
                ? (t.classList.remove('hidden'),
                  (t.textContent = y
                    ? 'Tidak ada catatan yang diarsipkan.'
                    : 'Tidak ada catatan saat ini.'))
                : (t.classList.add('hidden'),
                  a.forEach((t) => {
                    const e = document.createElement('note-item')
                    ;(e.setAttribute('data-id', t.id),
                      e.setAttribute('data-title', t.title),
                      e.setAttribute('data-body', t.body),
                      e.setAttribute('data-createdat', t.createdAt),
                      e.setAttribute('data-archived', t.archived),
                      n.appendChild(e))
                  })))
            : (t.classList.remove('hidden'),
              (t.textContent = 'Gagal memuat catatan.'),
              console.error('Gagal memuat catatan:', i.message))
        } catch (n) {
          ;(console.error('Error fetching notes:', n),
            t.classList.remove('hidden'),
            (t.textContent = 'Gagal terhubung ke server. Silakan coba lagi.'),
            console.error('Gagal terhubung ke server:', n))
        } finally {
          e.classList.add('hidden')
        }
        var a
      }
      function u() {
        ;(s.classList.remove('open'), d.classList.remove('open'))
      }
      ;(document
        .querySelector('note-form')
        .addEventListener('note-added', async function (n) {
          const t = n.detail
          ;(u(), c())
          try {
            const n = await fetch(`${f}/notes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: t.title, body: t.body }),
              }),
              e = await n.json()
            'success' === e.status
              ? (console.log(
                  'Catatan berhasil dibuat dengan ID:',
                  e.data.noteId,
                ),
                E('Catatan berhasil dibuat!'),
                l(y))
              : (E('Gagal membuat catatan.'),
                console.error('Gagal membuat catatan:', e.message))
          } catch (n) {
            ;(console.error('Error adding note:', n),
              E('Terjadi kesalahan saat menambahkan catatan.'),
              console.error('Terjadi kesalahan saat menambahkan catatan:', n))
          }
        }),
        document.addEventListener('archive-note', async function (n) {
          const { noteId: t } = n.detail
          c()
          try {
            const n = v.find((n) => n.id === t)
            if (!n) return
            const e = n.archived,
              o = e ? `${f}/notes/${t}/unarchive` : `${f}/notes/${t}/archive`,
              a = await fetch(o, { method: 'POST' })
            'success' === (await a.json()).status
              ? (e
                  ? (console.log('Catatan berhasil di-unarsip dengan ID:', t),
                    E('Berhasil Membatalkan Arsip!'))
                  : (console.log('Catatan berhasil diarsipkan dengan ID:', t),
                    E('Catatan berhasil diarsipkan!')),
                l(y))
              : E('Gagal memperbarui status catatan.')
          } catch (n) {
            ;(console.error('Error archiving note:', n),
              E('Terjadi kesalahan saat mengarsipkan catatan.'))
          }
        }),
        document.addEventListener('delete-note', async function (n) {
          const { noteId: t } = n.detail,
            e = v.find((n) => n.id === t)
          if (
            e &&
            window.confirm(
              `Apakah Anda yakin ingin menghapus catatan "${e.title}"?`,
            )
          ) {
            c()
            try {
              const n = await fetch(`${f}/notes/${t}`, { method: 'DELETE' })
              'success' === (await n.json()).status
                ? (console.log('Catatan berhasil dihapus dengan ID:', t),
                  E('Catatan berhasil dihapus!'),
                  l(y))
                : E('Gagal menghapus catatan.')
            } catch (n) {
              ;(console.error('Error deleting note:', n),
                E('Terjadi kesalahan saat menghapus catatan.'))
            }
          }
        }),
        a.addEventListener('click', function () {
          ;((y = !y),
            (a.textContent = y ? 'Notes List' : 'ARCHIVES'),
            (o.textContent = y ? 'Archive list' : 'Notes List'),
            l(y))
        }),
        r.addEventListener('click', function () {
          ;(s.classList.add('open'), d.classList.add('open'))
        }),
        i.addEventListener('click', u),
        d.addEventListener('click', u),
        l(!1))
    }))
})()
