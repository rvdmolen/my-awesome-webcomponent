// Import the LitElement base class and html helper function
import { LitElement, html, css } from "lit-element";

// Extend the LitElement base class
export default class MyElement extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    };
  }

  constructor() {
    super();
    this.name = "Meetup";
  }

  static get styles() {
    return css`
      .btn {
        font-size: 200%;
        border-radius: 5px;
      }

      div.main_div {
        margin: 0;
        margin-top: 25px;
        padding: 0;
        width: 100%;
        height: 50px;
        background-color: grey;
        position: absolute;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 10px 10px 8px #888888;
      }
      div.transparent_div {
        width: 100%;
        height: 50px;
        bottom: 0;
        background: green;
        position: absolute;
      }
      div.text_wrapper {
        height: 50px;
        bottom: 0;
        z-index: 10;
        background: transparent;
        white-space: nowrap;
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans,
          Helvetica Neue, Arial, sans-serif;
        color: white;
        font-size: 2em;
        vertical-align: middle;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        position: absolute;
        -webkit-animation: anim 5.5s infinite;
        animation: anim 5.5s infinite;
        animation-direction: alternate-reverse;
        -webkit-animation-timing-function: linear; /* Chrome, Safari, Opera */
        animation-timing-function: linear;
      }

      @-webkit-keyframes anim {
        from {
          left: -100%;
        }
        to {
          left: 100%;
        }
      }

      @keyframes anim {
        from {
          left: -100%;
        }
        to {
          left: 100%;
        }
      }

      input {
        font-size: 25px;
      }

      label {
        font-size: 25px;
      }
    `;
  }

  handleCLick(newName) {
    this.name = newName;
  }

  handleInput(e) {
    this.name = e.target.value;
  }

  render() {
    return html`
      <div>
        <label>Type your message:</label>
        <br />
        <input type="text" .value=${this.name} @input=${this.handleInput} />
      </div>

      <div class="main_div">
        <div class="text_wrapper">
          Hello ${this.name}!
        </div>
        <div class="transparent_div"></div>
      </div>
    `;
  }
}
