import { LitElement, html, css } from "lit";

export class NasaCard extends LitElement {
  static get properties() {
    return {
      imageUrl: { type: String },
      altText: { type: String },
      secondaryCreator: { type: String },
    };
  }

  static get styles() {
    return css`
      .card {
        width: 240px;
        height: auto;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
      }
      .card:hover {
        background-color: #007bff; /* Change to blue on hover */
        color: white; /* Change text color to white for better contrast */
      }
      .card img {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
      .card .info {
        margin-top: 10px;
      }
      .card .secondary-creator:hover {
        font-size: 12px;
        color: white; /* Change text color to white for better contrast */
      }
      .card:focus {
        outline: 3px solid #0000ff;
      }
    `;
  }

  constructor() {
    super();
    this.imageUrl = '';
    this.altText = '';
    this.secondaryCreator = '';
  }

  // Handle opening the image in a new window
  _openImage() {
    window.open(this.imageUrl, '_blank');
  }

  render() {
    return html`
      <div class="card" tabindex="0" @click="${this._openImage}" @keydown="${this._handleKeydown}">
        <img src="${this.imageUrl}" alt="${this.altText}" />
        <div class="info">
          <p>${this.altText}</p>
          <p class="secondary-creator">Creator: ${this.secondaryCreator}</p>
        </div>
      </div>
    `;
  }

  _handleKeydown(e) {
    if (e.key === 'Enter') {
      this._openImage();
    }
  }

  static get tag() {
    return "nasa-card";
  }
}

customElements.define(NasaCard.tag, NasaCard);
